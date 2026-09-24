import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd(), true);
const require = createRequire(import.meta.url);
const children = [];
let stopping = false;
function stop(code = 0) {
  if (stopping) return;
  stopping = true;
  for (const child of children) child.kill("SIGTERM");
  process.exitCode = code;
}
function start(command, args) {
  const child = spawn(command, args, { stdio: "inherit" });
  children.push(child);
  child.on("error", (error) => {
    console.error(`Unable to start ${command}: ${error.message}`);
    stop(1);
  });
  child.on("exit", (code) => { if (!stopping) stop(code ?? 1); });
  return child;
}
process.on("SIGINT", () => stop());
process.on("SIGTERM", () => stop());
async function phpReady() {
  try {
    const response = await fetch("http://127.0.0.1:8081/enquiry.php", { signal: AbortSignal.timeout(500) });
    const body = await response.json();
    return response.status === 405 && body.message === "Method not allowed";
  } catch { return false; }
}

if (!process.env.ENQUIRY_PHP_URL && !(await phpReady())) {
  start("php", ["-S", "127.0.0.1:8081", "-t", "server/php/public"]);
  let ready = false;
  for (let attempt = 0; attempt < 40 && !stopping; attempt++) {
    if (await phpReady()) { ready = true; break; }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  if (!ready) {
    console.error("PHP enquiry service could not start. Check PHP with cURL is installed and port 8081 is available.");
    stop(1);
  }
}
if (!stopping) start(process.execPath, [require.resolve("next/dist/bin/next"), "dev", ...process.argv.slice(2)]);
