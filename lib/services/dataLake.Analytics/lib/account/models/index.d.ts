/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
// TODO: Include PageTemplateModels here too?? Probably
 */


/**
 * @class
 * Initializes a new instance of the StorageAccountProperties class.
 * @constructor
 * Azure Storage account properties information.
 *
 * @member {string} accessKey the access key associated with this Azure
 * Storage account that will be used to connect to it.
 * 
 * @member {string} [suffix] the optional suffix for the Data Lake account.
 * 
 */
export interface StorageAccountProperties {
    accessKey: string;
    suffix?: string;
}

/**
 * @class
 * Initializes a new instance of the StorageAccountInfo class.
 * @constructor
 * Azure Storage account information.
 *
 * @member {string} name the account name associated with the Azure storage
 * account.
 * 
 * @member {object} properties the properties associated with this storage
 * account.
 * 
 * @member {string} [properties.accessKey] the access key associated with this
 * Azure Storage account that will be used to connect to it.
 * 
 * @member {string} [properties.suffix] the optional suffix for the Data Lake
 * account.
 * 
 */
export interface StorageAccountInfo {
    name: string;
    properties: StorageAccountProperties;
}

/**
 * @class
 * Initializes a new instance of the BlobContainerProperties class.
 * @constructor
 * Azure Storage blob container properties information.
 *
 * @member {date} [lastModifiedTime] the last modified time of the blob
 * container.
 * 
 */
export interface BlobContainerProperties {
    lastModifiedTime?: Date;
}

/**
 * @class
 * Initializes a new instance of the BlobContainer class.
 * @constructor
 * Azure Storage blob container information.
 *
 * @member {string} [name] the name of the blob container.
 * 
 * @member {string} [id] the unique identifier of the blob container.
 * 
 * @member {string} [type] the type of the blob container.
 * 
 * @member {object} [properties] the properties of the blob container.
 * 
 * @member {date} [properties.lastModifiedTime] the last modified time of the
 * blob container.
 * 
 */
export interface BlobContainer {
    name?: string;
    id?: string;
    type?: string;
    properties?: BlobContainerProperties;
}

/**
 * @class
 * Initializes a new instance of the SasTokenInfo class.
 * @constructor
 * SAS token information.
 *
 * @member {string} [accessToken] the access token for the associated Azure
 * Storage Container.
 * 
 */
export interface SasTokenInfo {
    accessToken?: string;
}

/**
 * @class
 * Initializes a new instance of the DataLakeStoreAccountInfoProperties class.
 * @constructor
 * Data Lake Store account properties information.
 *
 * @member {string} [suffix] the optional suffix for the Data Lake Store
 * account.
 * 
 */
export interface DataLakeStoreAccountInfoProperties {
    suffix?: string;
}

/**
 * @class
 * Initializes a new instance of the DataLakeStoreAccountInfo class.
 * @constructor
 * Data Lake Store account information.
 *
 * @member {string} name the account name of the Data Lake Store account.
 * 
 * @member {object} [properties] the properties associated with this Data Lake
 * Store account.
 * 
 * @member {string} [properties.suffix] the optional suffix for the Data Lake
 * Store account.
 * 
 */
export interface DataLakeStoreAccountInfo {
    name: string;
    properties?: DataLakeStoreAccountInfoProperties;
}

/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsAccountProperties class.
 * @constructor
 * The account specific properties that are associated with an underlying Data
 * Lake Analytics account.
 *
 * @member {string} [provisioningState] the provisioning status of the Data
 * Lake Analytics account. Possible values include: 'Failed', 'Creating',
 * 'Running', 'Succeeded', 'Patching', 'Suspending', 'Resuming', 'Deleting',
 * 'Deleted'
 * 
 * @member {string} [state] the state of the Data Lake Analytics account.
 * Possible values include: 'active', 'suspended'
 * 
 * @member {string} [defaultDataLakeStoreAccount] the default data lake
 * storage account associated with this Data Lake Analytics account.
 * 
 * @member {number} [maxDegreeOfParallelism] the maximum supported degree of
 * parallelism for this acocunt.
 * 
 * @member {number} [maxJobCount] the maximum supported jobs running under the
 * account at the same time.
 * 
 * @member {array} [dataLakeStoreAccounts] the list of Data Lake storage
 * accounts associated with this account.
 * 
 * @member {array} [storageAccounts] the list of Azure Blob storage accounts
 * associated with this account.
 * 
 * @member {date} [creationTime] the account creation time.
 * 
 * @member {date} [lastModifiedTime] the account last modified time.
 * 
 * @member {string} [endpoint] the full CName endpoint for this account.
 * 
 */
export interface DataLakeAnalyticsAccountProperties {
    provisioningState?: string;
    state?: string;
    defaultDataLakeStoreAccount?: string;
    maxDegreeOfParallelism?: number;
    maxJobCount?: number;
    dataLakeStoreAccounts?: DataLakeStoreAccountInfo[];
    storageAccounts?: StorageAccountInfo[];
    creationTime?: Date;
    lastModifiedTime?: Date;
    endpoint?: string;
}

/**
 * @class
 * Initializes a new instance of the AddDataLakeStoreParameters class.
 * @constructor
 * Additional Data Lake Store parameters.
 *
 * @member {object} properties the properties for the Data Lake Store account
 * being added.
 * 
 * @member {string} [properties.suffix] the optional suffix for the Data Lake
 * Store account.
 * 
 */
export interface AddDataLakeStoreParameters {
    properties: DataLakeStoreAccountInfoProperties;
}

/**
 * @class
 * Initializes a new instance of the AddStorageAccountParameters class.
 * @constructor
 * Additional Azure Storage account parameters.
 *
 * @member {object} properties the properties for the Azure Storage account
 * being added.
 * 
 * @member {string} [properties.accessKey] the access key associated with this
 * Azure Storage account that will be used to connect to it.
 * 
 * @member {string} [properties.suffix] the optional suffix for the Data Lake
 * account.
 * 
 */
export interface AddStorageAccountParameters {
    properties: StorageAccountProperties;
}

/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsAccount class.
 * @constructor
 * A Data Lake Analytics account object, containing all information associated
 * with the named Data Lake Analytics account.
 *
 * @member {string} [location] the account regional location.
 * 
 * @member {string} [name] the account name.
 * 
 * @member {string} [type] the namespace and type of the account.
 * 
 * @member {string} [id] the account subscription ID.
 * 
 * @member {object} [tags] the value of custom properties.
 * 
 * @member {object} [properties] the properties defined by Data Lake Analytics
 * all properties are specific to each resource provider.
 * 
 * @member {string} [properties.provisioningState] the provisioning status of
 * the Data Lake Analytics account. Possible values include: 'Failed',
 * 'Creating', 'Running', 'Succeeded', 'Patching', 'Suspending', 'Resuming',
 * 'Deleting', 'Deleted'
 * 
 * @member {string} [properties.state] the state of the Data Lake Analytics
 * account. Possible values include: 'active', 'suspended'
 * 
 * @member {string} [properties.defaultDataLakeStoreAccount] the default data
 * lake storage account associated with this Data Lake Analytics account.
 * 
 * @member {number} [properties.maxDegreeOfParallelism] the maximum supported
 * degree of parallelism for this acocunt.
 * 
 * @member {number} [properties.maxJobCount] the maximum supported jobs
 * running under the account at the same time.
 * 
 * @member {array} [properties.dataLakeStoreAccounts] the list of Data Lake
 * storage accounts associated with this account.
 * 
 * @member {array} [properties.storageAccounts] the list of Azure Blob storage
 * accounts associated with this account.
 * 
 * @member {date} [properties.creationTime] the account creation time.
 * 
 * @member {date} [properties.lastModifiedTime] the account last modified time.
 * 
 * @member {string} [properties.endpoint] the full CName endpoint for this
 * account.
 * 
 */
export interface DataLakeAnalyticsAccount {
    location?: string;
    name?: string;
    type?: string;
    id?: string;
    tags?: { [propertyName: string]: string };
    properties?: DataLakeAnalyticsAccountProperties;
}

/**
 * @class
 * Initializes a new instance of the ErrorDetails class.
 * @constructor
 * Generic resource error details information.
 *
 * @member {string} [code] the HTTP status code or error code associated with
 * this error
 * 
 * @member {string} [message] the error message localized based on
 * Accept-Language
 * 
 * @member {string} [target] the target of the particular error (for example,
 * the name of the property in error).
 * 
 */
export interface ErrorDetails {
    code?: string;
    message?: string;
    target?: string;
}

/**
 * @class
 * Initializes a new instance of the InnerError class.
 * @constructor
 * Generic resource inner error information.
 *
 * @member {string} [trace] the stack trace for the error
 * 
 * @member {string} [context] the context for the error message
 * 
 */
export interface InnerError {
    trace?: string;
    context?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * Generic resource error information.
 *
 * @member {string} [code] the HTTP status code or error code associated with
 * this error
 * 
 * @member {string} [message] the error message to display.
 * 
 * @member {string} [target] the target of the error.
 * 
 * @member {array} [details] the list of error details
 * 
 * @member {object} [innerError] the inner exceptions or errors, if any
 * 
 * @member {string} [innerError.trace] the stack trace for the error
 * 
 * @member {string} [innerError.context] the context for the error message
 * 
 */
export interface ErrorModel {
    code?: string;
    message?: string;
    target?: string;
    details?: ErrorDetails[];
    innerError?: InnerError;
}

/**
 * @class
 * Initializes a new instance of the AzureAsyncOperationResult class.
 * @constructor
 * The response body contains the status of the specified asynchronous
 * operation, indicating whether it has succeeded, is inprogress, or has
 * failed. Note that this status is distinct from the HTTP status code
 * returned for the Get Operation Status operation itself. If the
 * asynchronous operation succeeded, the response body includes the HTTP
 * status code for the successful request. If the asynchronous operation
 * failed, the response body includes the HTTP status code for the failed
 * request and error information regarding the failure.
 *
 * @member {string} [status] the status of the AzureAsuncOperation. Possible
 * values include: 'InProgress', 'Succeeded', 'Failed'
 * 
 * @member {object} [error]
 * 
 * @member {string} [error.code] the HTTP status code or error code associated
 * with this error
 * 
 * @member {string} [error.message] the error message to display.
 * 
 * @member {string} [error.target] the target of the error.
 * 
 * @member {array} [error.details] the list of error details
 * 
 * @member {object} [error.innerError] the inner exceptions or errors, if any
 * 
 * @member {string} [error.innerError.trace] the stack trace for the error
 * 
 * @member {string} [error.innerError.context] the context for the error
 * message
 * 
 */
export interface AzureAsyncOperationResult {
    status?: string;
    error?: ErrorModel;
}
