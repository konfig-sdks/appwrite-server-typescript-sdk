/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Target } from './target';
import { UserHashOptionsInner } from './user-hash-options-inner';

/**
 * User
 * @export
 * @interface User
 */
export interface User {
    /**
     * User ID.
     * @type {string}
     * @memberof User
     */
    '$id': string;
    /**
     * User creation date in ISO 8601 format.
     * @type {string}
     * @memberof User
     */
    '$createdAt': string;
    /**
     * User update date in ISO 8601 format.
     * @type {string}
     * @memberof User
     */
    '$updatedAt': string;
    /**
     * User name.
     * @type {string}
     * @memberof User
     */
    'name': string;
    /**
     * Hashed user password.
     * @type {string}
     * @memberof User
     */
    'password'?: string | null;
    /**
     * Password hashing algorithm.
     * @type {string}
     * @memberof User
     */
    'hash'?: string | null;
    /**
     * Password hashing algorithm configuration.
     * @type {Array<UserHashOptionsInner>}
     * @memberof User
     */
    'hashOptions'?: Array<UserHashOptionsInner> | null;
    /**
     * User registration date in ISO 8601 format.
     * @type {string}
     * @memberof User
     */
    'registration': string;
    /**
     * User status. Pass `true` for enabled and `false` for disabled.
     * @type {boolean}
     * @memberof User
     */
    'status': boolean;
    /**
     * Labels for the user.
     * @type {Array<string>}
     * @memberof User
     */
    'labels': Array<string>;
    /**
     * Password update time in ISO 8601 format.
     * @type {string}
     * @memberof User
     */
    'passwordUpdate': string;
    /**
     * User email address.
     * @type {string}
     * @memberof User
     */
    'email': string;
    /**
     * User phone number in E.164 format.
     * @type {string}
     * @memberof User
     */
    'phone': string;
    /**
     * Email verification status.
     * @type {boolean}
     * @memberof User
     */
    'emailVerification': boolean;
    /**
     * Phone verification status.
     * @type {boolean}
     * @memberof User
     */
    'phoneVerification': boolean;
    /**
     * Multi factor authentication status.
     * @type {boolean}
     * @memberof User
     */
    'mfa': boolean;
    /**
     * User preferences as a key-value object
     * @type {Array<{ [key: string]: any; }>}
     * @memberof User
     */
    'prefs': Array<{ [key: string]: any; }>;
    /**
     * A user-owned message receiver. A single user may have multiple e.g. emails, phones, and a browser. Each target is registered with a single provider.
     * @type {Array<Target>}
     * @memberof User
     */
    'targets': Array<Target>;
    /**
     * Most recent access date in ISO 8601 format. This attribute is only updated again after 24 hours.
     * @type {string}
     * @memberof User
     */
    'accessedAt': string;
}
