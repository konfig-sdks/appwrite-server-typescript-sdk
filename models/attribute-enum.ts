/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * AttributeEnum
 * @export
 * @interface AttributeEnum
 */
export interface AttributeEnum {
    /**
     * Attribute Key.
     * @type {string}
     * @memberof AttributeEnum
     */
    'key': string;
    /**
     * Attribute type.
     * @type {string}
     * @memberof AttributeEnum
     */
    'type': string;
    /**
     * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
     * @type {string}
     * @memberof AttributeEnum
     */
    'status': string;
    /**
     * Error message. Displays error generated on failure of creating or deleting an attribute.
     * @type {string}
     * @memberof AttributeEnum
     */
    'error': string;
    /**
     * Is attribute required?
     * @type {boolean}
     * @memberof AttributeEnum
     */
    'required': boolean;
    /**
     * Is attribute an array?
     * @type {boolean}
     * @memberof AttributeEnum
     */
    'array'?: boolean | null;
    /**
     * Array of elements in enumerated type.
     * @type {Array<string>}
     * @memberof AttributeEnum
     */
    'elements': Array<string>;
    /**
     * String format.
     * @type {string}
     * @memberof AttributeEnum
     */
    'format': string;
    /**
     * Default value for attribute when not provided. Cannot be set when attribute is required.
     * @type {string}
     * @memberof AttributeEnum
     */
    'default'?: string | null;
    /**
     * Default value for attribute when not provided. Cannot be set when attribute is required.
     * @type {string}
     * @memberof AttributeEnum
     */
    'example'?: string | null;
    /**
     * Default value for attribute when not provided. Cannot be set when attribute is required.
     * @type {string}
     * @memberof AttributeEnum
     */
    'x-konfig-original-example'?: string | null;
}

