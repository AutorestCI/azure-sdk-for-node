// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .post('/pools/nodesdktestpool1/nodes/tvm-2322263996_2-20170203t214653z/enablescheduling?api-version=2017-01-01.4.0')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '1e9294a4-14d0-4203-9674-3deffdfb627a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-2322263996_2-20170203t214653z/enablescheduling',
  date: 'Fri, 03 Feb 2017 21:54:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .post('/pools/nodesdktestpool1/nodes/tvm-2322263996_2-20170203t214653z/enablescheduling?api-version=2017-01-01.4.0')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '1e9294a4-14d0-4203-9674-3deffdfb627a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-2322263996_2-20170203t214653z/enablescheduling',
  date: 'Fri, 03 Feb 2017 21:54:18 GMT',
  connection: 'close' });
 return result; }]];