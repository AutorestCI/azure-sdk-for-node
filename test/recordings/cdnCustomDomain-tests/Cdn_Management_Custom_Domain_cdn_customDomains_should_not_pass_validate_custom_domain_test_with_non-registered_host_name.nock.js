// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/validateCustomDomain?api-version=2016-10-02', '*')
  .reply(200, "{\r\n  \"customDomainValidated\":false,\"message\":\"We couldn't find a DNS record for custom domain that points to endpoint. To map a domain to this endpoint, create a CNAME record with your DNS provider for custom domain that points to endpoint.\",\"reason\":\"IncorrectMapping\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '272',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '0c0dafc8-3adf-4a5d-8b73-804ded873a0f',
  'x-ms-client-request-id': '47526a93-140e-4e50-b5fc-112a380dba32',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '6d7d88d1-2c26-4081-bb37-d0246cb71466',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014947Z:6d7d88d1-2c26-4081-bb37-d0246cb71466',
  date: 'Wed, 22 Feb 2017 01:49:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/validateCustomDomain?api-version=2016-10-02', '*')
  .reply(200, "{\r\n  \"customDomainValidated\":false,\"message\":\"We couldn't find a DNS record for custom domain that points to endpoint. To map a domain to this endpoint, create a CNAME record with your DNS provider for custom domain that points to endpoint.\",\"reason\":\"IncorrectMapping\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '272',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '0c0dafc8-3adf-4a5d-8b73-804ded873a0f',
  'x-ms-client-request-id': '47526a93-140e-4e50-b5fc-112a380dba32',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '6d7d88d1-2c26-4081-bb37-d0246cb71466',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014947Z:6d7d88d1-2c26-4081-bb37-d0246cb71466',
  date: 'Wed, 22 Feb 2017 01:49:46 GMT',
  connection: 'close' });
 return result; }]];