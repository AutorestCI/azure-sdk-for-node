/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as operations from "./operations";

declare class ServiceFabricClient {
    /**
     * @class
     * Initializes a new instance of the ServiceFabricClient class.
     * @constructor
     *
     * @param {string} apiVersion - The version of the api
     *
     * @param {string} [baseUri] - The base URI of the service.
     *
     * @param {object} [options] - The parameter options
     *
     * @param {Array} [options.filters] - Filters to be added to the request pipeline
     *
     * @param {object} [options.requestOptions] - Options for the underlying request object
     * {@link https://github.com/request/request#requestoptions-callback Options doc}
     *
     * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
     *
     * @param {number} [options.timeout] - The timeout in seconds
     *
     */
    constructor(apiVersion: string, baseUri: string, options: ServiceClientOptions);

    apiVersion: string;

    timeout: number;

    // Operation groups
    clusterManifests: operations.ClusterManifests;
    clusterHealths: operations.ClusterHealths;
    clusterUpgrades: operations.ClusterUpgrades;
    clusterPackages: operations.ClusterPackages;
    nodes: operations.Nodes;
    nodeStates: operations.NodeStates;
    nodeHealths: operations.NodeHealths;
    deployedApplications: operations.DeployedApplications;
    deployedApplicationHealths: operations.DeployedApplicationHealths;
    nodeLoadInformations: operations.NodeLoadInformations;
    deployedCodePackages: operations.DeployedCodePackages;
    deployedReplicas: operations.DeployedReplicas;
    deployedReplicaDetails: operations.DeployedReplicaDetails;
    deployedServicePackages: operations.DeployedServicePackages;
    deployedServicePackageHealths: operations.DeployedServicePackageHealths;
    deployedServiceTypes: operations.DeployedServiceTypes;
    applicationTypes: operations.ApplicationTypes;
    serviceManifests: operations.ServiceManifests;
    serviceTypes: operations.ServiceTypes;
    applicationManifests: operations.ApplicationManifests;
    applications: operations.Applications;
    services: operations.Services;
    serviceGroupDescriptions: operations.ServiceGroupDescriptions;
    serviceGroupMembers: operations.ServiceGroupMembers;
    applicationHealths: operations.ApplicationHealths;
    applicationUpgrades: operations.ApplicationUpgrades;
    serviceFromTemplates: operations.ServiceFromTemplates;
    serviceGroups: operations.ServiceGroups;
    serviceGroupFromTemplates: operations.ServiceGroupFromTemplates;
    applicationUpgradeRollbacks: operations.ApplicationUpgradeRollbacks;
    serviceDescriptions: operations.ServiceDescriptions;
    serviceHealths: operations.ServiceHealths;
    partitions: operations.Partitions;
    partitionLists: operations.PartitionLists;
    partitionLoads: operations.PartitionLoads;
    replicas: operations.Replicas;
    partitionHealths: operations.PartitionHealths;
    replicaHealths: operations.ReplicaHealths;
    partitionLoadInformations: operations.PartitionLoadInformations;
    replicaLoadInformations: operations.ReplicaLoadInformations;
    clusterLoadInformations: operations.ClusterLoadInformations;
    upgradeProgresses: operations.UpgradeProgresses;
    }

export = ServiceFabricClient;
