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
 * @interface MessagingCreateTopicRequest
 */
export interface MessagingCreateTopicRequest {
    /**
     * Topic ID. Choose a custom Topic ID or a new Topic ID.
     * @type {string}
     * @memberof MessagingCreateTopicRequest
     */
    'topicId': string;
    /**
     * Topic Name.
     * @type {string}
     * @memberof MessagingCreateTopicRequest
     */
    'name': string;
    /**
     * An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @type {Array<string>}
     * @memberof MessagingCreateTopicRequest
     */
    'subscribe'?: Array<string>;
}
