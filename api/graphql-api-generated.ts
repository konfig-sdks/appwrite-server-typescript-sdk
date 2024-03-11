/* tslint:disable */
/* eslint-disable */
/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * GraphqlApi - axios parameter creator
 * @export
 */
export const GraphqlApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Execute a GraphQL mutation.
         * @summary GraphQL endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        executeMutation: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/graphql`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWT required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Appwrite-JWT", keyParamName: "jWT", configuration })
            // authentication Key required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Appwrite-Key", keyParamName: "key", configuration })
            // authentication Project required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Appwrite-Project", keyParamName: "project", configuration })
            // authentication Session required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Appwrite-Session", keyParamName: "session", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/graphql',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Execute a GraphQL mutation.
         * @summary GraphQL endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        executeMutation_1: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/graphql/mutation`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWT required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Appwrite-JWT", keyParamName: "jWT", configuration })
            // authentication Key required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Appwrite-Key", keyParamName: "key", configuration })
            // authentication Project required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Appwrite-Project", keyParamName: "project", configuration })
            // authentication Session required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Appwrite-Session", keyParamName: "session", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/graphql/mutation',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GraphqlApi - functional programming interface
 * @export
 */
export const GraphqlApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GraphqlApiAxiosParamCreator(configuration)
    return {
        /**
         * Execute a GraphQL mutation.
         * @summary GraphQL endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async executeMutation(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: any; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.executeMutation(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Execute a GraphQL mutation.
         * @summary GraphQL endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async executeMutation_1(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: any; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.executeMutation_1(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GraphqlApi - factory interface
 * @export
 */
export const GraphqlApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GraphqlApiFp(configuration)
    return {
        /**
         * Execute a GraphQL mutation.
         * @summary GraphQL endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        executeMutation(options?: AxiosRequestConfig): AxiosPromise<{ [key: string]: any; }> {
            return localVarFp.executeMutation(options).then((request) => request(axios, basePath));
        },
        /**
         * Execute a GraphQL mutation.
         * @summary GraphQL endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        executeMutation_1(options?: AxiosRequestConfig): AxiosPromise<{ [key: string]: any; }> {
            return localVarFp.executeMutation_1(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GraphqlApiGenerated - object-oriented interface
 * @export
 * @class GraphqlApiGenerated
 * @extends {BaseAPI}
 */
export class GraphqlApiGenerated extends BaseAPI {
    /**
     * Execute a GraphQL mutation.
     * @summary GraphQL endpoint
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GraphqlApiGenerated
     */
    public executeMutation(options?: AxiosRequestConfig) {
        return GraphqlApiFp(this.configuration).executeMutation(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Execute a GraphQL mutation.
     * @summary GraphQL endpoint
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GraphqlApiGenerated
     */
    public executeMutation_1(options?: AxiosRequestConfig) {
        return GraphqlApiFp(this.configuration).executeMutation_1(options).then((request) => request(this.axios, this.basePath));
    }
}