/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Error
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * Server version number.
     * @type {string}
     * @memberof ModelError
     */
    'version': string;
    /**
     * Error message.
     * @type {string}
     * @memberof ModelError
     */
    'message': string;
    /**
     * Error code.
     * @type {string}
     * @memberof ModelError
     */
    'code': string;
    /**
     * Error type. You can learn more about all the error types at https://appwrite.io/docs/error-codes#errorTypes
     * @type {string}
     * @memberof ModelError
     */
    'type': string;
}

