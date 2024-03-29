/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Target } from './target';

/**
 * Subscriber
 * @export
 * @interface Subscriber
 */
export interface Subscriber {
    /**
     * Subscriber ID.
     * @type {string}
     * @memberof Subscriber
     */
    '$id': string;
    /**
     * Subscriber creation time in ISO 8601 format.
     * @type {string}
     * @memberof Subscriber
     */
    '$createdAt': string;
    /**
     * Subscriber update date in ISO 8601 format.
     * @type {string}
     * @memberof Subscriber
     */
    '$updatedAt': string;
    /**
     * Target ID.
     * @type {string}
     * @memberof Subscriber
     */
    'targetId': string;
    /**
     * Target.
     * @type {Array<Target>}
     * @memberof Subscriber
     */
    'target': Array<Target>;
    /**
     * Topic ID.
     * @type {string}
     * @memberof Subscriber
     */
    'userId': string;
    /**
     * User Name.
     * @type {string}
     * @memberof Subscriber
     */
    'userName': string;
    /**
     * Topic ID.
     * @type {string}
     * @memberof Subscriber
     */
    'topicId': string;
    /**
     * The target provider type. Can be one of the following: `email`, `sms` or `push`.
     * @type {string}
     * @memberof Subscriber
     */
    'providerType': string;
}

