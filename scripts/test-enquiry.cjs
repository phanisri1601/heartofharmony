const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const filename = path.resolve('src/app/api/enquiry/route.ts');
const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const loaded = new Module(filename, module);
loaded.filename = filename;
loaded.paths = Module._nodeModulePaths(path.dirname(filename));
loaded._compile(compiled, filename);
const { POST } = loaded.exports;
const input = { 'your-name': 'Test Multi Part', 'your-phone': '+910007048326', 'your-email': 'qa@example.com', 'checkbox-accept': '1', 'your-message': 'Test only', specifications: '3 BHK', purpose: 'Investment', utm_content: 'creative', utm_source: 'qa', utm_medium: '', ad_set_name: 'adset', utm_id: 'campaign' };
const originalFetch = global.fetch;
const originalError = console.error;
const env = { ...process.env };
const reply = (body, status = 200) => new Response(JSON.stringify(body), { status });
async function run(name, body, mocks, status) {
  const requests = [];
  global.fetch = async (url, options) => {
    requests.push({ url: String(url), options });
    const next = mocks.shift();
    if (!next) throw new Error('Unexpected network request');
    if (next instanceof Error) throw next;
    return next;
  };
  const response = await POST(new Request('http://localhost/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: typeof body === 'string' ? body : JSON.stringify(body) }));
  assert.equal(response.status, status, name);
  assert.equal((await response.json()).ok, status === 200, name);
  console.log(`PASS ${name}`);
  return requests;
}
const token = () => reply({ access_token: 'mock-token', instance_url: 'https://ckpc.my.salesforce.com' });
(async () => {
  console.error = () => {};
  delete process.env.SALESFORCE_CLIENT_ID;
  delete process.env.SALESFORCE_CLIENT_SECRET;
  assert.equal((await run('missing environment', input, [], 503)).length, 0);
  process.env.SALESFORCE_CLIENT_ID = 'mock-id';
  process.env.SALESFORCE_CLIENT_SECRET = 'mock-secret';
  await run('invalid JSON', '{', [], 400);
  await run('invalid field type', { ...input, 'your-name': [] }, [], 400);
  await run('missing name', { ...input, 'your-name': ' ' }, [], 422);
  await run('missing consent', { ...input, 'checkbox-accept': '' }, [], 422);
  const calls = await run('successful submission', input, [token(), reply({ success: true, id: 'mock-lead' })], 200);
  assert.equal(calls.length, 2);
  assert.equal(calls[0].options.body.get('client_secret'), 'mock-secret');
  assert.equal(calls[1].options.headers.Authorization, 'Bearer mock-token');
  const lead = JSON.parse(calls[1].options.body);
  assert.equal(lead.LastName, 'Multi Part');
  assert.equal(lead.Customer_Remarks__c, 'Test only\nSpecifications: 3 BHK\nPurpose of Purchase: Investment\nUTM Content: creative');
  assert.equal(lead.Campaign_Id__c, 'campaign');
  assert.equal(lead.adset_name__c, 'adset');
  assert.equal(lead.Project__r.Name, 'Heart Of Harmony');
  await run('OAuth rejection', input, [reply({ error: 'invalid_client' }, 401)], 502);
  await run('network failure', input, [new Error('fetch failed')], 502);
  await run('unsafe instance URL', input, [reply({ access_token: 'mock', instance_url: 'https://example.com' })], 502);
  await run('Salesforce HTTP rejection', input, [token(), reply({ error: 'validation' }, 400)], 502);
  await run('Salesforce application rejection', input, [token(), reply({ success: false })], 502);
  await run('malformed response', input, [token(), new Response('not json')], 502);
  await run('Apex encoded JSON', input, [token(), reply(JSON.stringify({ success: true }))], 200);
})().finally(() => {
  global.fetch = originalFetch;
  console.error = originalError;
  for (const key of ['SALESFORCE_CLIENT_ID', 'SALESFORCE_CLIENT_SECRET']) {
    if (env[key] === undefined) delete process.env[key]; else process.env[key] = env[key];
  }
}).catch((error) => { console.error(error); process.exitCode = 1; });
