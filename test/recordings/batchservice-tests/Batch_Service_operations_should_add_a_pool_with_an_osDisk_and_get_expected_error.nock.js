// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2017-01-01.4.0', '*')
  .reply(400, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"InvalidPropertyValue\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The value provided for one of the properties in the request body is invalid.\\nRequestId:8ce47e60-9f73-4f87-afb8-78436e44459a\\nTime:2017-02-18T00:27:53.3206662Z\"\r\n  },\"values\":[\r\n    {\r\n      \"key\":\"PropertyName\",\"value\":\"osDisk\"\r\n    },{\r\n      \"key\":\"Reason\",\"value\":\"Property osDisk is allowed only for Batch accounts created with poolAllocationMode of BatchService\"\r\n    }\r\n  ]\r\n}", { 'content-length': '600',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8ce47e60-9f73-4f87-afb8-78436e44459a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Sat, 18 Feb 2017 00:27:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2017-01-01.4.0', '*')
  .reply(400, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"InvalidPropertyValue\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The value provided for one of the properties in the request body is invalid.\\nRequestId:8ce47e60-9f73-4f87-afb8-78436e44459a\\nTime:2017-02-18T00:27:53.3206662Z\"\r\n  },\"values\":[\r\n    {\r\n      \"key\":\"PropertyName\",\"value\":\"osDisk\"\r\n    },{\r\n      \"key\":\"Reason\",\"value\":\"Property osDisk is allowed only for Batch accounts created with poolAllocationMode of BatchService\"\r\n    }\r\n  ]\r\n}", { 'content-length': '600',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8ce47e60-9f73-4f87-afb8-78436e44459a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Sat, 18 Feb 2017 00:27:52 GMT',
  connection: 'close' });
 return result; }]];