// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains/cdnTestCustomDomain2086?api-version=2016-10-02')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '29d25f54-3128-4824-a47e-986112ca8228',
  'x-ms-client-request-id': '0d4fe9b8-a446-4259-b19c-43604a569e6d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '86691118-05d6-4d23-a62e-07961947d07b',
  'x-ms-routing-request-id': 'CENTRALUS:20170222T015058Z:86691118-05d6-4d23-a62e-07961947d07b',
  date: 'Wed, 22 Feb 2017 01:50:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains/cdnTestCustomDomain2086?api-version=2016-10-02')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '29d25f54-3128-4824-a47e-986112ca8228',
  'x-ms-client-request-id': '0d4fe9b8-a446-4259-b19c-43604a569e6d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '86691118-05d6-4d23-a62e-07961947d07b',
  'x-ms-routing-request-id': 'CENTRALUS:20170222T015058Z:86691118-05d6-4d23-a62e-07961947d07b',
  date: 'Wed, 22 Feb 2017 01:50:57 GMT',
  connection: 'close' });
 return result; }]];