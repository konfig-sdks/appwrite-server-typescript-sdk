/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface MessagingUpdateProviderRequest
 */
export interface MessagingUpdateProviderRequest {
    /**
     * Provider name.
     * @type {string}
     * @memberof MessagingUpdateProviderRequest
     */
    'name'?: string;
    /**
     * Set as enabled.
     * @type {boolean}
     * @memberof MessagingUpdateProviderRequest
     */
    'enabled'?: boolean;
    /**
     * Sendgrid API key.
     * @type {string}
     * @memberof MessagingUpdateProviderRequest
     */
    'apiKey'?: string;
    /**
     * Sender Name.
     * @type {string}
     * @memberof MessagingUpdateProviderRequest
     */
    'fromName'?: string;
    /**
     * Sender email address.
     * @type {string}
     * @memberof MessagingUpdateProviderRequest
     */
    'fromEmail'?: string;
    /**
     * Name set in the Reply To field for the mail. Default value is Sender Name.
     * @type {string}
     * @memberof MessagingUpdateProviderRequest
     */
    'replyToName'?: string;
    /**
     * Email set in the Reply To field for the mail. Default value is Sender Email.
     * @type {string}
     * @memberof MessagingUpdateProviderRequest
     */
    'replyToEmail'?: string;
}

