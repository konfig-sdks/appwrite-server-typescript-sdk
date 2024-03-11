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
 * @interface MessagingCreateSmtpProviderRequest
 */
export interface MessagingCreateSmtpProviderRequest {
    /**
     * Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\'t start with a special char. Max length is 36 chars.
     * @type {string}
     * @memberof MessagingCreateSmtpProviderRequest
     */
    'providerId': string;
    /**
     * Provider name.
     * @type {string}
     * @memberof MessagingCreateSmtpProviderRequest
     */
    'name': string;
    /**
     * SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465\"`. Hosts will be tried in order.
     * @type {string}
     * @memberof MessagingCreateSmtpProviderRequest
     */
    'host': string;
    /**
     * The default SMTP server port.
     * @type {number}
     * @memberof MessagingCreateSmtpProviderRequest
     */
    'port'?: number;
    /**
     * Authentication username.
     * @type {string}
     * @memberof MessagingCreateSmtpProviderRequest
     */
    'username'?: string;
    /**
     * Authentication password.
     * @type {string}
     * @memberof MessagingCreateSmtpProviderRequest
     */
    'password'?: string;
    /**
     * Encryption type. Can be omitted, \'ssl\', or \'tls\'
     * @type {string}
     * @memberof MessagingCreateSmtpProviderRequest
     */
    'encryption'?: MessagingCreateSmtpProviderRequestEncryptionEnum;
    /**
     * Enable SMTP AutoTLS feature.
     * @type {boolean}
     * @memberof MessagingCreateSmtpProviderRequest
     */
    'autoTLS'?: boolean;
    /**
     * The value to use for the X-Mailer header.
     * @type {string}
     * @memberof MessagingCreateSmtpProviderRequest
     */
    'mailer'?: string;
    /**
     * Sender Name.
     * @type {string}
     * @memberof MessagingCreateSmtpProviderRequest
     */
    'fromName'?: string;
    /**
     * Sender email address.
     * @type {string}
     * @memberof MessagingCreateSmtpProviderRequest
     */
    'fromEmail'?: string;
    /**
     * Name set in the reply to field for the mail. Default value is sender name.
     * @type {string}
     * @memberof MessagingCreateSmtpProviderRequest
     */
    'replyToName'?: string;
    /**
     * Email set in the reply to field for the mail. Default value is sender email.
     * @type {string}
     * @memberof MessagingCreateSmtpProviderRequest
     */
    'replyToEmail'?: string;
    /**
     * Set as enabled.
     * @type {boolean}
     * @memberof MessagingCreateSmtpProviderRequest
     */
    'enabled'?: boolean;
}

type MessagingCreateSmtpProviderRequestEncryptionEnum = 'none' | 'ssl' | 'tls'


