const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');

process.env.ENQUIRY_LOG_DIR = require('node:os').tmpdir();
process.env.SALESFORCE_LEADS_API_KEY = 'test-key';
process.env.SALESFORCE_LEADS_BASE_URL = 'https://sf.example/leads';
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
  specifications: '3 BHK - 1786 sq.ft',
  'select-833': 'NRI Investment',
  form_name: 'Book a Site Visit',
  page_path: '/',
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
  console.warn = () => {};
  assert.equal((await run('invalid JSON', '{', null, 400)).length, 0);
  assert.equal((await run('invalid field type', { ...input, 'your-name': [] }, null, 400)).length, 0);
  assert.equal((await run('missing name', { ...input, 'your-name': ' ' }, null, 422)).length, 0);
  assert.equal((await run('missing consent', { ...input, 'checkbox-accept': '' }, null, 422)).length, 0);

  const ok = { success: true, status: 'CREATED', id: '00Q1', errors: [], warnings: [] };
  const calls = await run('successful submission', input, reply(ok), 200);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, 'https://sf.example/leads/heart-of-harmony/website');
  assert.equal(calls[0].options.headers['Content-Type'], 'application/json');
  assert.equal(calls[0].options.headers['x-api-key'], 'test-key');
  const lead = JSON.parse(calls[0].options.body);
  assert.deepEqual(lead, {
    FirstName: 'Test Multi', LastName: 'Part', MobilePhone: '+910007048326', Email: 'qa@example.com',
    Specification__c: '3 BHK - 1786 sq.ft', Purpose_of_Purchase__c: 'Investment', Is_NRI__c: true,
    utm_source__c: 'qa', ad_name__c: 'creative', Form_Name__c: 'Book a Site Visit', Customer_Remarks__c: 'Test only',
  });

  const lp = (extra) => ({ ...input, page_path: '/landing-page/', ...extra });
  assert.equal((await run('landing page google', lp({ utm_source: 'google' }), reply(ok), 200))[0].url, 'https://sf.example/leads/heart-of-harmony/google');
  assert.equal((await run('landing page meta', lp({ utm_source: 'facebook' }), reply(ok), 200))[0].url, 'https://sf.example/leads/heart-of-harmony/meta');
  assert.equal((await run('landing page fbclid', lp({ utm_source: '', fbclid: 'x' }), reply(ok), 200))[0].url, 'https://sf.example/leads/heart-of-harmony/meta');
  const other = JSON.parse((await run('unmapped purpose', { ...input, 'select-833': 'For someone else or family' }, reply(ok), 200))[0].options.body);
  assert.equal(other.Purpose_of_Purchase__c, undefined);
  assert.equal(other.Customer_Remarks__c, 'Test only\nPurpose: For someone else or family');

  await run('re-enquiry', input, reply({ ...ok, status: 'RE_ENQUIRY' }), 200);
  await run('duplicate submit', input, reply({ ...ok, status: 'DUPLICATE_SUBMIT' }), 200);
  await run('validation error', input, reply({ success: false, status: 'ERROR', errors: [{ field: 'MobilePhone', code: 'INVALID_PHONE' }] }, 400), 422);
  await run('unauthorized', input, reply({ success: false, status: 'ERROR', errors: [{ code: 'UNAUTHORIZED' }] }, 401), 502);
  await run('server error', input, reply({ success: false }, 500), 502);
  await run('network failure', input, new Error('fetch failed'), 502);
  await run('plain-text response', input, new Response('ok'), 502);
})().finally(() => {
  global.fetch = originalFetch;
  console.info = originalInfo;
  console.error = originalError;
}).catch((error) => { console.error(error); process.exitCode = 1; });
