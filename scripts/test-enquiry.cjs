const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');

const filename = path.resolve('src/app/api/enquiry/route.ts');
const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const loaded = new Module(filename, module);
loaded.filename = filename;
loaded.paths = Module._nodeModulePaths(path.dirname(filename));
loaded._compile(compiled, filename);
const { POST } = loaded.exports;

const input = {
  'your-name': 'Test Multi Part',
  'your-phone': '+910007048326',
  'your-email': 'qa@example.com',
  'checkbox-accept': '1',
  'your-message': 'Test only',
  specifications: '3 BHK',
  'select-833': 'Investment',
  utm_content: 'creative',
  utm_source: 'qa',
  utm_medium: '',
  utm_id: 'campaign',
};

const originalFetch = global.fetch;
const originalInfo = console.info;
const originalError = console.error;
const reply = (body, status = 200) => new Response(JSON.stringify(body), { status });

async function run(name, body, mock, expectedStatus) {
  const requests = [];
  global.fetch = async (url, options) => {
    requests.push({ url: String(url), options });
    if (mock instanceof Error) throw mock;
    if (!mock) throw new Error('Unexpected network request');
    return mock;
  };
  const response = await POST(new Request('http://localhost/api/enquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  }));
  assert.equal(response.status, expectedStatus, name);
  assert.equal((await response.json()).ok, expectedStatus === 200, name);
  console.log(`PASS ${name}`);
  return requests;
}

(async () => {
  console.info = () => {};
  console.error = () => {};
  assert.equal((await run('invalid JSON', '{', null, 400)).length, 0);
  assert.equal((await run('invalid field type', { ...input, 'your-name': [] }, null, 400)).length, 0);
  assert.equal((await run('missing name', { ...input, 'your-name': ' ' }, null, 422)).length, 0);
  assert.equal((await run('missing consent', { ...input, 'checkbox-accept': '' }, null, 422)).length, 0);

  const calls = await run('successful submission', input, reply({ status: true, data: { salesforce_apex: true } }), 200);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, 'https://jjcruzad.a2hosted.com/lead-catpure/test.php');
  assert.equal(calls[0].options.headers['Content-Type'], 'application/x-www-form-urlencoded');
  assert.equal(calls[0].options.body.get('name'), 'Test Multi Part');
  assert.equal(calls[0].options.body.get('message'), 'Test only');
  assert.equal(calls[0].options.body.get('purpose'), 'Investment');
  assert.equal(calls[0].options.body.get('utm_id'), 'campaign');
  assert.equal(calls[0].options.body.get('utm_medium'), 'Website');

  await run('PHP HTTP rejection', input, reply({ error: 'validation' }, 400), 502);
  await run('PHP application rejection', input, reply({ status: false }), 502);
  await run('Salesforce rejection in PHP response', input, reply({ status: true, data: { salesforce_apex: false } }), 502);
  await run('network failure', input, new Error('fetch failed'), 502);
  await run('plain-text response without Salesforce confirmation', input, new Response('Lead captured'), 502);
})().finally(() => {
  global.fetch = originalFetch;
  console.info = originalInfo;
  console.error = originalError;
}).catch((error) => { console.error(error); process.exitCode = 1; });
