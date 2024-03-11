/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Health Certificate
 * @export
 * @interface HealthCertificate
 */
export interface HealthCertificate {
    /**
     * Certificate name
     * @type {string}
     * @memberof HealthCertificate
     */
    'name': string;
    /**
     * Subject SN
     * @type {string}
     * @memberof HealthCertificate
     */
    'subjectSN': string;
    /**
     * Issuer organisation
     * @type {string}
     * @memberof HealthCertificate
     */
    'issuerOrganisation': string;
    /**
     * Valid from
     * @type {string}
     * @memberof HealthCertificate
     */
    'validFrom': string;
    /**
     * Valid to
     * @type {string}
     * @memberof HealthCertificate
     */
    'validTo': string;
    /**
     * Signature type SN
     * @type {string}
     * @memberof HealthCertificate
     */
    'signatureTypeSN': string;
}

