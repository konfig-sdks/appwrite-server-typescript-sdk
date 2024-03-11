/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Target
 * @export
 * @interface Target
 */
export interface Target {
    /**
     * Target ID.
     * @type {string}
     * @memberof Target
     */
    '$id': string;
    /**
     * Target creation time in ISO 8601 format.
     * @type {string}
     * @memberof Target
     */
    '$createdAt': string;
    /**
     * Target update date in ISO 8601 format.
     * @type {string}
     * @memberof Target
     */
    '$updatedAt': string;
    /**
     * Target Name.
     * @type {string}
     * @memberof Target
     */
    'name': string;
    /**
     * User ID.
     * @type {string}
     * @memberof Target
     */
    'userId': string;
    /**
     * Provider ID.
     * @type {string}
     * @memberof Target
     */
    'providerId'?: string | null;
    /**
     * The target provider type. Can be one of the following: `email`, `sms` or `push`.
     * @type {string}
     * @memberof Target
     */
    'providerType': string;
    /**
     * The target identifier.
     * @type {string}
     * @memberof Target
     */
    'identifier': string;
}

