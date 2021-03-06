/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/roleAssignmentsMappers";
import * as Parameters from "../models/parameters";
import { CustomerInsightsManagementClientContext } from "../customerInsightsManagementClientContext";

/** Class representing a RoleAssignments. */
export class RoleAssignments {
  private readonly client: CustomerInsightsManagementClientContext;

  /**
   * Create a RoleAssignments.
   * @param {CustomerInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: CustomerInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the role assignments for the specified hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param [options] The optional parameters
   * @returns Promise<Models.RoleAssignmentsListByHubResponse>
   */
  listByHub(resourceGroupName: string, hubName: string, options?: msRest.RequestOptionsBase): Promise<Models.RoleAssignmentsListByHubResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param callback The callback
   */
  listByHub(resourceGroupName: string, hubName: string, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByHub(resourceGroupName: string, hubName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  listByHub(resourceGroupName: string, hubName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RoleAssignmentListResult>, callback?: msRest.ServiceCallback<Models.RoleAssignmentListResult>): Promise<Models.RoleAssignmentsListByHubResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        options
      },
      listByHubOperationSpec,
      callback) as Promise<Models.RoleAssignmentsListByHubResponse>;
  }

  /**
   * Creates or updates a role assignment in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param assignmentName The assignment name
   * @param parameters Parameters supplied to the CreateOrUpdate RoleAssignment operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RoleAssignmentsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, hubName: string, assignmentName: string, parameters: Models.RoleAssignmentResourceFormat, options?: msRest.RequestOptionsBase): Promise<Models.RoleAssignmentsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,hubName,assignmentName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.RoleAssignmentsCreateOrUpdateResponse>;
  }

  /**
   * Gets the role assignment in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param assignmentName The name of the role assignment.
   * @param [options] The optional parameters
   * @returns Promise<Models.RoleAssignmentsGetResponse>
   */
  get(resourceGroupName: string, hubName: string, assignmentName: string, options?: msRest.RequestOptionsBase): Promise<Models.RoleAssignmentsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param assignmentName The name of the role assignment.
   * @param callback The callback
   */
  get(resourceGroupName: string, hubName: string, assignmentName: string, callback: msRest.ServiceCallback<Models.RoleAssignmentResourceFormat>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param assignmentName The name of the role assignment.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, hubName: string, assignmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RoleAssignmentResourceFormat>): void;
  get(resourceGroupName: string, hubName: string, assignmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RoleAssignmentResourceFormat>, callback?: msRest.ServiceCallback<Models.RoleAssignmentResourceFormat>): Promise<Models.RoleAssignmentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        assignmentName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RoleAssignmentsGetResponse>;
  }

  /**
   * Deletes the role assignment in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param assignmentName The name of the role assignment.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, hubName: string, assignmentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param assignmentName The name of the role assignment.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, hubName: string, assignmentName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param assignmentName The name of the role assignment.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, hubName: string, assignmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, hubName: string, assignmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        assignmentName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Creates or updates a role assignment in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param assignmentName The assignment name
   * @param parameters Parameters supplied to the CreateOrUpdate RoleAssignment operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, hubName: string, assignmentName: string, parameters: Models.RoleAssignmentResourceFormat, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        hubName,
        assignmentName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets all the role assignments for the specified hub.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RoleAssignmentsListByHubNextResponse>
   */
  listByHubNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RoleAssignmentsListByHubNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByHubNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByHubNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  listByHubNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RoleAssignmentListResult>, callback?: msRest.ServiceCallback<Models.RoleAssignmentListResult>): Promise<Models.RoleAssignmentsListByHubNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByHubNextOperationSpec,
      callback) as Promise<Models.RoleAssignmentsListByHubNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByHubOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/roleAssignments",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/roleAssignments/{assignmentName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.assignmentName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentResourceFormat
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/roleAssignments/{assignmentName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.assignmentName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/roleAssignments/{assignmentName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.assignmentName0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.RoleAssignmentResourceFormat,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentResourceFormat
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByHubNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
