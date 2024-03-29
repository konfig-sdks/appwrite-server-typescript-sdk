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
 * @interface DatabasesCreateRelationshipAttributeRequest
 */
export interface DatabasesCreateRelationshipAttributeRequest {
    /**
     * Related Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @type {string}
     * @memberof DatabasesCreateRelationshipAttributeRequest
     */
    'relatedCollectionId': string;
    /**
     * Relation type
     * @type {string}
     * @memberof DatabasesCreateRelationshipAttributeRequest
     */
    'type': DatabasesCreateRelationshipAttributeRequestTypeEnum;
    /**
     * Is Two Way?
     * @type {boolean}
     * @memberof DatabasesCreateRelationshipAttributeRequest
     */
    'twoWay'?: boolean;
    /**
     * Attribute Key.
     * @type {string}
     * @memberof DatabasesCreateRelationshipAttributeRequest
     */
    'key'?: string;
    /**
     * Two Way Attribute Key.
     * @type {string}
     * @memberof DatabasesCreateRelationshipAttributeRequest
     */
    'twoWayKey'?: string;
    /**
     * Constraints option
     * @type {string}
     * @memberof DatabasesCreateRelationshipAttributeRequest
     */
    'onDelete'?: DatabasesCreateRelationshipAttributeRequestOnDeleteEnum;
}

type DatabasesCreateRelationshipAttributeRequestTypeEnum = 'oneToOne' | 'manyToOne' | 'manyToMany' | 'oneToMany'
type DatabasesCreateRelationshipAttributeRequestOnDeleteEnum = 'cascade' | 'restrict' | 'setNull'


