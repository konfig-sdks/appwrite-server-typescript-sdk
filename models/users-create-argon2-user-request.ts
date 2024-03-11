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
 * @interface UsersCreateArgon2UserRequest
 */
export interface UsersCreateArgon2UserRequest {
    /**
     * User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\'t start with a special char. Max length is 36 chars.
     * @type {string}
     * @memberof UsersCreateArgon2UserRequest
     */
    'userId': string;
    /**
     * User email.
     * @type {string}
     * @memberof UsersCreateArgon2UserRequest
     */
    'email': string;
    /**
     * User password hashed using Argon2.
     * @type {string}
     * @memberof UsersCreateArgon2UserRequest
     */
    'password': string;
    /**
     * User name. Max length: 128 chars.
     * @type {string}
     * @memberof UsersCreateArgon2UserRequest
     */
    'name'?: string;
}

