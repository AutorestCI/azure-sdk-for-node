/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * FirewallRules
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the DataLakeStoreAccountManagementClient.
 */
export interface FirewallRules {

    /**
     * Creates or updates the specified firewall rule. During update, the firewall
     * rule with the specified name will be replaced with this new firewall rule.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     *
     * @param {string} accountName The name of the Data Lake Store account to add
     * or replace the firewall rule.
     *
     * @param {string} firewallRuleName The name of the firewall rule to create or
     * update.
     *
     * @param {object} parameters Parameters supplied to create or update the
     * firewall rule.
     *
     * @param {string} parameters.startIpAddress the start IP address for the
     * firewall rule. This can be either ipv4 or ipv6. Start and End should be in
     * the same protocol.
     *
     * @param {string} parameters.endIpAddress the end IP address for the firewall
     * rule. This can be either ipv4 or ipv6. Start and End should be in the same
     * protocol.
     *
     * @param {string} [parameters.name] Resource name
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createOrUpdate(resourceGroupName: string, accountName: string, firewallRuleName: string, parameters: models.FirewallRule, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FirewallRule>): void;
    createOrUpdate(resourceGroupName: string, accountName: string, firewallRuleName: string, parameters: models.FirewallRule, callback: ServiceCallback<models.FirewallRule>): void;

    /**
     * Updates the specified firewall rule.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     *
     * @param {string} accountName The name of the Data Lake Store account to which
     * to update the firewall rule.
     *
     * @param {string} firewallRuleName The name of the firewall rule to update.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.parameters] Parameters supplied to update the
     * firewall rule.
     *
     * @param {string} [options.parameters.startIpAddress] the start IP address for
     * the firewall rule. This can be either ipv4 or ipv6. Start and End should be
     * in the same protocol.
     *
     * @param {string} [options.parameters.endIpAddress] the end IP address for the
     * firewall rule. This can be either ipv4 or ipv6. Start and End should be in
     * the same protocol.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    update(resourceGroupName: string, accountName: string, firewallRuleName: string, options: { parameters? : models.UpdateFirewallRuleParameters, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FirewallRule>): void;
    update(resourceGroupName: string, accountName: string, firewallRuleName: string, callback: ServiceCallback<models.FirewallRule>): void;

    /**
     * Deletes the specified firewall rule from the specified Data Lake Store
     * account
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     *
     * @param {string} accountName The name of the Data Lake Store account from
     * which to delete the firewall rule.
     *
     * @param {string} firewallRuleName The name of the firewall rule to delete.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(resourceGroupName: string, accountName: string, firewallRuleName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, firewallRuleName: string, callback: ServiceCallback<void>): void;

    /**
     * Gets the specified Data Lake Store firewall rule.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     *
     * @param {string} accountName The name of the Data Lake Store account from
     * which to get the firewall rule.
     *
     * @param {string} firewallRuleName The name of the firewall rule to retrieve.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceGroupName: string, accountName: string, firewallRuleName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FirewallRule>): void;
    get(resourceGroupName: string, accountName: string, firewallRuleName: string, callback: ServiceCallback<models.FirewallRule>): void;

    /**
     * Lists the Data Lake Store firewall rules within the specified Data Lake
     * Store account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     *
     * @param {string} accountName The name of the Data Lake Store account from
     * which to get the firewall rules.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByAccount(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreFirewallRuleListResult>): void;
    listByAccount(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.DataLakeStoreFirewallRuleListResult>): void;

    /**
     * Lists the Data Lake Store firewall rules within the specified Data Lake
     * Store account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByAccountNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreFirewallRuleListResult>): void;
    listByAccountNext(nextPageLink: string, callback: ServiceCallback<models.DataLakeStoreFirewallRuleListResult>): void;
}

/**
 * @class
 * TrustedIdProviders
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the DataLakeStoreAccountManagementClient.
 */
export interface TrustedIdProviders {

    /**
     * Creates or updates the specified trusted identity provider. During update,
     * the trusted identity provider with the specified name will be replaced with
     * this new provider
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     *
     * @param {string} accountName The name of the Data Lake Store account to add
     * or replace the trusted identity provider.
     *
     * @param {string} trustedIdProviderName The name of the trusted identity
     * provider. This is used for differentiation of providers in the account.
     *
     * @param {object} parameters Parameters supplied to create or replace the
     * trusted identity provider.
     *
     * @param {string} parameters.idProvider The URL of this trusted identity
     * provider
     *
     * @param {string} [parameters.name] Resource name
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createOrUpdate(resourceGroupName: string, accountName: string, trustedIdProviderName: string, parameters: models.TrustedIdProvider, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TrustedIdProvider>): void;
    createOrUpdate(resourceGroupName: string, accountName: string, trustedIdProviderName: string, parameters: models.TrustedIdProvider, callback: ServiceCallback<models.TrustedIdProvider>): void;

    /**
     * Updates the specified trusted identity provider.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     *
     * @param {string} accountName The name of the Data Lake Store account to which
     * to update the trusted identity provider.
     *
     * @param {string} trustedIdProviderName The name of the trusted identity
     * provider. This is used for differentiation of providers in the account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.parameters] Parameters supplied to update the
     * trusted identity provider.
     *
     * @param {string} [options.parameters.idProvider] The URL of this trusted
     * identity provider
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    update(resourceGroupName: string, accountName: string, trustedIdProviderName: string, options: { parameters? : models.UpdateTrustedIdProviderParameters, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TrustedIdProvider>): void;
    update(resourceGroupName: string, accountName: string, trustedIdProviderName: string, callback: ServiceCallback<models.TrustedIdProvider>): void;

    /**
     * Deletes the specified trusted identity provider from the specified Data Lake
     * Store account
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     *
     * @param {string} accountName The name of the Data Lake Store account from
     * which to delete the trusted identity provider.
     *
     * @param {string} trustedIdProviderName The name of the trusted identity
     * provider to delete.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(resourceGroupName: string, accountName: string, trustedIdProviderName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, trustedIdProviderName: string, callback: ServiceCallback<void>): void;

    /**
     * Gets the specified Data Lake Store trusted identity provider.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     *
     * @param {string} accountName The name of the Data Lake Store account from
     * which to get the trusted identity provider.
     *
     * @param {string} trustedIdProviderName The name of the trusted identity
     * provider to retrieve.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceGroupName: string, accountName: string, trustedIdProviderName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TrustedIdProvider>): void;
    get(resourceGroupName: string, accountName: string, trustedIdProviderName: string, callback: ServiceCallback<models.TrustedIdProvider>): void;

    /**
     * Lists the Data Lake Store trusted identity providers within the specified
     * Data Lake Store account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     *
     * @param {string} accountName The name of the Data Lake Store account from
     * which to get the trusted identity providers.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByAccount(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreTrustedIdProviderListResult>): void;
    listByAccount(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.DataLakeStoreTrustedIdProviderListResult>): void;

    /**
     * Lists the Data Lake Store trusted identity providers within the specified
     * Data Lake Store account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByAccountNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreTrustedIdProviderListResult>): void;
    listByAccountNext(nextPageLink: string, callback: ServiceCallback<models.DataLakeStoreTrustedIdProviderListResult>): void;
}

/**
 * @class
 * AccountOperations
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the DataLakeStoreAccountManagementClient.
 */
export interface AccountOperations {

    /**
     * Creates the specified Data Lake Store account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     *
     * @param {string} name The name of the Data Lake Store account to create.
     *
     * @param {object} parameters Parameters supplied to create the Data Lake Store
     * account.
     *
     * @param {object} [parameters.identity] The Key vault encryption identity, if
     * any.
     *
     * @param {string} [parameters.encryptionState] The current state of encryption
     * for this Data Lake store account. Possible values include: 'Enabled',
     * 'Disabled'
     *
     * @param {object} [parameters.encryptionConfig] The Key vault encryption
     * configuration.
     *
     * @param {string} parameters.encryptionConfig.type The type of encryption
     * configuration being used. Currently the only supported types are
     * 'UserManaged' and 'ServiceManaged'. Possible values include: 'UserManaged',
     * 'ServiceManaged'
     *
     * @param {object} [parameters.encryptionConfig.keyVaultMetaInfo] The Key vault
     * information for connecting to user managed encryption keys.
     *
     * @param {string}
     * parameters.encryptionConfig.keyVaultMetaInfo.keyVaultResourceId The resource
     * identifier for the user managed Key Vault being used to encrypt.
     *
     * @param {string}
     * parameters.encryptionConfig.keyVaultMetaInfo.encryptionKeyName The name of
     * the user managed encryption key.
     *
     * @param {string}
     * parameters.encryptionConfig.keyVaultMetaInfo.encryptionKeyVersion The
     * version of the user managed encryption key.
     *
     * @param {string} [parameters.firewallState] The current state of the IP
     * address firewall for this Data Lake store account. Possible values include:
     * 'Enabled', 'Disabled'
     *
     * @param {string} [parameters.firewallAllowAzureIps] The current state of
     * allowing or disallowing IPs originating within Azure through the firewall.
     * If the firewall is disabled, this is not enforced. Possible values include:
     * 'Enabled', 'Disabled'
     *
     * @param {array} [parameters.firewallRules] The list of firewall rules
     * associated with this Data Lake store account.
     *
     * @param {string} [parameters.trustedIdProviderState] The current state of the
     * trusted identity provider feature for this Data Lake store account. Possible
     * values include: 'Enabled', 'Disabled'
     *
     * @param {array} [parameters.trustedIdProviders] The list of trusted identity
     * providers associated with this Data Lake store account.
     *
     * @param {string} [parameters.defaultGroup] the default owner group for all
     * new folders and files created in the Data Lake Store account.
     *
     * @param {string} [parameters.newTier] the commitment tier to use for next
     * month. Possible values include: 'Consumption', 'Commitment_1TB',
     * 'Commitment_10TB', 'Commitment_100TB', 'Commitment_500TB', 'Commitment_1PB',
     * 'Commitment_5PB'
     *
     * @param {string} parameters.location Resource location
     *
     * @param {object} [parameters.tags] Resource tags
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    create(resourceGroupName: string, name: string, parameters: models.DataLakeStoreAccount, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccount>): void;
    create(resourceGroupName: string, name: string, parameters: models.DataLakeStoreAccount, callback: ServiceCallback<models.DataLakeStoreAccount>): void;

    /**
     * Updates the specified Data Lake Store account information.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     *
     * @param {string} name The name of the Data Lake Store account to update.
     *
     * @param {object} parameters Parameters supplied to update the Data Lake Store
     * account.
     *
     * @param {object} [parameters.tags] Resource tags
     *
     * @param {string} [parameters.firewallState] The current state of the IP
     * address firewall for this Data Lake store account. Disabling the firewall
     * does not remove existing rules, they will just be ignored until the firewall
     * is re-enabled. Possible values include: 'Enabled', 'Disabled'
     *
     * @param {string} [parameters.firewallAllowAzureIps] The current state of
     * allowing or disallowing IPs originating within Azure through the firewall.
     * If the firewall is disabled, this is not enforced. Possible values include:
     * 'Enabled', 'Disabled'
     *
     * @param {string} [parameters.trustedIdProviderState] The current state of the
     * trusted identity provider feature for this Data Lake store account.
     * Disabling trusted identity provider functionality does not remove the
     * providers, they will just be ignored until this feature is re-enabled.
     * Possible values include: 'Enabled', 'Disabled'
     *
     * @param {string} [parameters.defaultGroup] the default owner group for all
     * new folders and files created in the Data Lake Store account.
     *
     * @param {string} [parameters.newTier] the commitment tier to use for next
     * month. Possible values include: 'Consumption', 'Commitment_1TB',
     * 'Commitment_10TB', 'Commitment_100TB', 'Commitment_500TB', 'Commitment_1PB',
     * 'Commitment_5PB'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    update(resourceGroupName: string, name: string, parameters: models.DataLakeStoreAccountUpdateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccount>): void;
    update(resourceGroupName: string, name: string, parameters: models.DataLakeStoreAccountUpdateParameters, callback: ServiceCallback<models.DataLakeStoreAccount>): void;

    /**
     * Deletes the specified Data Lake Store account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     *
     * @param {string} name The name of the Data Lake Store account to delete.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(resourceGroupName: string, name: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, name: string, callback: ServiceCallback<void>): void;

    /**
     * Gets the specified Data Lake Store account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     *
     * @param {string} name The name of the Data Lake Store account to retrieve.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceGroupName: string, name: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccount>): void;
    get(resourceGroupName: string, name: string, callback: ServiceCallback<models.DataLakeStoreAccount>): void;

    /**
     * Attempts to enable a user managed key vault for encryption of the specified
     * Data Lake Store account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     *
     * @param {string} accountName The name of the Data Lake Store account to
     * attempt to enable the Key Vault for.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    enableKeyVault(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    enableKeyVault(resourceGroupName: string, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Lists the Data Lake Store accounts within a specific resource group. The
     * response includes a link to the next page of results, if any.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account(s).
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] OData filter. Optional.
     *
     * @param {number} [options.top] The number of items to return. Optional.
     *
     * @param {number} [options.skip] The number of items to skip over before
     * returning elements. Optional.
     *
     * @param {string} [options.select] OData Select statement. Limits the
     * properties on each entry to just those requested, e.g.
     * Categories?$select=CategoryName,Description. Optional.
     *
     * @param {string} [options.orderby] OrderBy clause. One or more
     * comma-separated expressions with an optional "asc" (the default) or "desc"
     * depending on the order you'd like the values sorted, e.g.
     * Categories?$orderby=CategoryName desc. Optional.
     *
     * @param {boolean} [options.count] A Boolean value of true or false to request
     * a count of the matching resources included with the resources in the
     * response, e.g. Categories?$count=true. Optional.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByResourceGroup(resourceGroupName: string, options: { filter? : string, top? : number, skip? : number, select? : string, orderby? : string, count? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccountListResult>): void;
    listByResourceGroup(resourceGroupName: string, callback: ServiceCallback<models.DataLakeStoreAccountListResult>): void;

    /**
     * Lists the Data Lake Store accounts within the subscription. The response
     * includes a link to the next page of results, if any.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] OData filter. Optional.
     *
     * @param {number} [options.top] The number of items to return. Optional.
     *
     * @param {number} [options.skip] The number of items to skip over before
     * returning elements. Optional.
     *
     * @param {string} [options.select] OData Select statement. Limits the
     * properties on each entry to just those requested, e.g.
     * Categories?$select=CategoryName,Description. Optional.
     *
     * @param {string} [options.orderby] OrderBy clause. One or more
     * comma-separated expressions with an optional "asc" (the default) or "desc"
     * depending on the order you'd like the values sorted, e.g.
     * Categories?$orderby=CategoryName desc. Optional.
     *
     * @param {boolean} [options.count] The Boolean value of true or false to
     * request a count of the matching resources included with the resources in the
     * response, e.g. Categories?$count=true. Optional.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(options: { filter? : string, top? : number, skip? : number, select? : string, orderby? : string, count? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccountListResult>): void;
    list(callback: ServiceCallback<models.DataLakeStoreAccountListResult>): void;

    /**
     * Creates the specified Data Lake Store account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     *
     * @param {string} name The name of the Data Lake Store account to create.
     *
     * @param {object} parameters Parameters supplied to create the Data Lake Store
     * account.
     *
     * @param {object} [parameters.identity] The Key vault encryption identity, if
     * any.
     *
     * @param {string} [parameters.encryptionState] The current state of encryption
     * for this Data Lake store account. Possible values include: 'Enabled',
     * 'Disabled'
     *
     * @param {object} [parameters.encryptionConfig] The Key vault encryption
     * configuration.
     *
     * @param {string} parameters.encryptionConfig.type The type of encryption
     * configuration being used. Currently the only supported types are
     * 'UserManaged' and 'ServiceManaged'. Possible values include: 'UserManaged',
     * 'ServiceManaged'
     *
     * @param {object} [parameters.encryptionConfig.keyVaultMetaInfo] The Key vault
     * information for connecting to user managed encryption keys.
     *
     * @param {string}
     * parameters.encryptionConfig.keyVaultMetaInfo.keyVaultResourceId The resource
     * identifier for the user managed Key Vault being used to encrypt.
     *
     * @param {string}
     * parameters.encryptionConfig.keyVaultMetaInfo.encryptionKeyName The name of
     * the user managed encryption key.
     *
     * @param {string}
     * parameters.encryptionConfig.keyVaultMetaInfo.encryptionKeyVersion The
     * version of the user managed encryption key.
     *
     * @param {string} [parameters.firewallState] The current state of the IP
     * address firewall for this Data Lake store account. Possible values include:
     * 'Enabled', 'Disabled'
     *
     * @param {string} [parameters.firewallAllowAzureIps] The current state of
     * allowing or disallowing IPs originating within Azure through the firewall.
     * If the firewall is disabled, this is not enforced. Possible values include:
     * 'Enabled', 'Disabled'
     *
     * @param {array} [parameters.firewallRules] The list of firewall rules
     * associated with this Data Lake store account.
     *
     * @param {string} [parameters.trustedIdProviderState] The current state of the
     * trusted identity provider feature for this Data Lake store account. Possible
     * values include: 'Enabled', 'Disabled'
     *
     * @param {array} [parameters.trustedIdProviders] The list of trusted identity
     * providers associated with this Data Lake store account.
     *
     * @param {string} [parameters.defaultGroup] the default owner group for all
     * new folders and files created in the Data Lake Store account.
     *
     * @param {string} [parameters.newTier] the commitment tier to use for next
     * month. Possible values include: 'Consumption', 'Commitment_1TB',
     * 'Commitment_10TB', 'Commitment_100TB', 'Commitment_500TB', 'Commitment_1PB',
     * 'Commitment_5PB'
     *
     * @param {string} parameters.location Resource location
     *
     * @param {object} [parameters.tags] Resource tags
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginCreate(resourceGroupName: string, name: string, parameters: models.DataLakeStoreAccount, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccount>): void;
    beginCreate(resourceGroupName: string, name: string, parameters: models.DataLakeStoreAccount, callback: ServiceCallback<models.DataLakeStoreAccount>): void;

    /**
     * Updates the specified Data Lake Store account information.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     *
     * @param {string} name The name of the Data Lake Store account to update.
     *
     * @param {object} parameters Parameters supplied to update the Data Lake Store
     * account.
     *
     * @param {object} [parameters.tags] Resource tags
     *
     * @param {string} [parameters.firewallState] The current state of the IP
     * address firewall for this Data Lake store account. Disabling the firewall
     * does not remove existing rules, they will just be ignored until the firewall
     * is re-enabled. Possible values include: 'Enabled', 'Disabled'
     *
     * @param {string} [parameters.firewallAllowAzureIps] The current state of
     * allowing or disallowing IPs originating within Azure through the firewall.
     * If the firewall is disabled, this is not enforced. Possible values include:
     * 'Enabled', 'Disabled'
     *
     * @param {string} [parameters.trustedIdProviderState] The current state of the
     * trusted identity provider feature for this Data Lake store account.
     * Disabling trusted identity provider functionality does not remove the
     * providers, they will just be ignored until this feature is re-enabled.
     * Possible values include: 'Enabled', 'Disabled'
     *
     * @param {string} [parameters.defaultGroup] the default owner group for all
     * new folders and files created in the Data Lake Store account.
     *
     * @param {string} [parameters.newTier] the commitment tier to use for next
     * month. Possible values include: 'Consumption', 'Commitment_1TB',
     * 'Commitment_10TB', 'Commitment_100TB', 'Commitment_500TB', 'Commitment_1PB',
     * 'Commitment_5PB'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginUpdate(resourceGroupName: string, name: string, parameters: models.DataLakeStoreAccountUpdateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccount>): void;
    beginUpdate(resourceGroupName: string, name: string, parameters: models.DataLakeStoreAccountUpdateParameters, callback: ServiceCallback<models.DataLakeStoreAccount>): void;

    /**
     * Deletes the specified Data Lake Store account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     *
     * @param {string} name The name of the Data Lake Store account to delete.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginDeleteMethod(resourceGroupName: string, name: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, name: string, callback: ServiceCallback<void>): void;

    /**
     * Lists the Data Lake Store accounts within a specific resource group. The
     * response includes a link to the next page of results, if any.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByResourceGroupNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccountListResult>): void;
    listByResourceGroupNext(nextPageLink: string, callback: ServiceCallback<models.DataLakeStoreAccountListResult>): void;

    /**
     * Lists the Data Lake Store accounts within the subscription. The response
     * includes a link to the next page of results, if any.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccountListResult>): void;
    listNext(nextPageLink: string, callback: ServiceCallback<models.DataLakeStoreAccountListResult>): void;
}
