// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'jsjapaneast';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2017-01-01', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'last-modified': 'Sat, 18 Feb 2017 00:06:38 GMT',
  etag: '0x8D4579202B3D742',
  'request-id': 'fdedc21c-12bf-42c5-9873-56c85d599875',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': 'e34bb6b5-688f-4793-861d-024a0f929a7a',
  'x-ms-correlation-request-id': 'e34bb6b5-688f-4793-861d-024a0f929a7a',
  'x-ms-routing-request-id': 'CENTRALUS:20170218T000648Z:e34bb6b5-688f-4793-861d-024a0f929a7a',
  date: 'Sat, 18 Feb 2017 00:06:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2017-01-01', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'last-modified': 'Sat, 18 Feb 2017 00:06:38 GMT',
  etag: '0x8D4579202B3D742',
  'request-id': 'fdedc21c-12bf-42c5-9873-56c85d599875',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': 'e34bb6b5-688f-4793-861d-024a0f929a7a',
  'x-ms-correlation-request-id': 'e34bb6b5-688f-4793-861d-024a0f929a7a',
  'x-ms-routing-request-id': 'CENTRALUS:20170218T000648Z:e34bb6b5-688f-4793-861d-024a0f929a7a',
  date: 'Sat, 18 Feb 2017 00:06:48 GMT',
  connection: 'close' });
 return result; }]];