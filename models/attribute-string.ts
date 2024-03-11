/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * AttributeString
 * @export
 * @interface AttributeString
 */
export interface AttributeString {
    /**
     * Attribute Key.
     * @type {string}
     * @memberof AttributeString
     */
    'key': string;
    /**
     * Attribute type.
     * @type {string}
     * @memberof AttributeString
     */
    'type': string;
    /**
     * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
     * @type {string}
     * @memberof AttributeString
     */
    'status': string;
    /**
     * Error message. Displays error generated on failure of creating or deleting an attribute.
     * @type {string}
     * @memberof AttributeString
     */
    'error': string;
    /**
     * Is attribute required?
     * @type {boolean}
     * @memberof AttributeString
     */
    'required': boolean;
    /**
     * Is attribute an array?
     * @type {boolean}
     * @memberof AttributeString
     */
    'array'?: boolean | null;
    /**
     * Attribute size.
     * @type {number}
     * @memberof AttributeString
     */
    'size': number;
    /**
     * Default value for attribute when not provided. Cannot be set when attribute is required.
     * @type {string}
     * @memberof AttributeString
     */
    'default'?: string | null;
    /**
     * Default value for attribute when not provided. Cannot be set when attribute is required.
     * @type {string}
     * @memberof AttributeString
     */
    'example'?: string | null;
    /**
     * Default value for attribute when not provided. Cannot be set when attribute is required.
     * @type {string}
     * @memberof AttributeString
     */
    'x-konfig-original-example'?: string | null;
}

