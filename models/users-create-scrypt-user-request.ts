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
 * @interface UsersCreateScryptUserRequest
 */
export interface UsersCreateScryptUserRequest {
    /**
     * User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\'t start with a special char. Max length is 36 chars.
     * @type {string}
     * @memberof UsersCreateScryptUserRequest
     */
    'userId': string;
    /**
     * User email.
     * @type {string}
     * @memberof UsersCreateScryptUserRequest
     */
    'email': string;
    /**
     * User password hashed using Scrypt.
     * @type {string}
     * @memberof UsersCreateScryptUserRequest
     */
    'password': string;
    /**
     * Optional salt used to hash password.
     * @type {string}
     * @memberof UsersCreateScryptUserRequest
     */
    'passwordSalt': string;
    /**
     * Optional CPU cost used to hash password.
     * @type {number}
     * @memberof UsersCreateScryptUserRequest
     */
    'passwordCpu': number;
    /**
     * Optional memory cost used to hash password.
     * @type {number}
     * @memberof UsersCreateScryptUserRequest
     */
    'passwordMemory': number;
    /**
     * Optional parallelization cost used to hash password.
     * @type {number}
     * @memberof UsersCreateScryptUserRequest
     */
    'passwordParallel': number;
    /**
     * Optional hash length used to hash password.
     * @type {number}
     * @memberof UsersCreateScryptUserRequest
     */
    'passwordLength': number;
    /**
     * User name. Max length: 128 chars.
     * @type {string}
     * @memberof UsersCreateScryptUserRequest
     */
    'name'?: string;
}

