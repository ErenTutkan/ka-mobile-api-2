/**
 * Kolay Asistan Mobile API
 * Kolay Asistan mobile application api layer. Revision Date: 25.03.2023
 *
 * The version of the OpenAPI document: v4.0.0.0
 * Contact: ahmetyagibasan@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DeviceDTO model module.
 * @module model/DeviceDTO
 * @version v4.0.0.0
 */
class DeviceDTO {
    /**
     * Constructs a new <code>DeviceDTO</code>.
     * @alias module:model/DeviceDTO
     * @param uuid {String} uuid
     * @param uniqueId {String} uniqueId
     * @param buildId {String} buildId
     * @param brand {String} brand
     * @param buildNumber {String} buildNumber
     * @param bundleId {String} bundleId
     * @param deviceId {String} deviceId
     * @param deviceName {String} deviceName
     * @param manufacturer {String} manufacturer
     * @param model {String} model
     * @param systemName {String} systemName
     * @param systemVersion {String} systemVersion
     * @param version {String} version
     * @param androidId {String} androidId
     * @param apiLevel {String} apiLevel
     * @param status {String} status
     */
    constructor(uuid, uniqueId, buildId, brand, buildNumber, bundleId, deviceId, deviceName, manufacturer, model, systemName, systemVersion, version, androidId, apiLevel, status) { 
        
        DeviceDTO.initialize(this, uuid, uniqueId, buildId, brand, buildNumber, bundleId, deviceId, deviceName, manufacturer, model, systemName, systemVersion, version, androidId, apiLevel, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, uniqueId, buildId, brand, buildNumber, bundleId, deviceId, deviceName, manufacturer, model, systemName, systemVersion, version, androidId, apiLevel, status) { 
        obj['uuid'] = uuid;
        obj['uniqueId'] = uniqueId;
        obj['buildId'] = buildId;
        obj['brand'] = brand;
        obj['buildNumber'] = buildNumber;
        obj['bundleId'] = bundleId;
        obj['deviceId'] = deviceId;
        obj['deviceName'] = deviceName;
        obj['manufacturer'] = manufacturer;
        obj['model'] = model;
        obj['systemName'] = systemName;
        obj['systemVersion'] = systemVersion;
        obj['version'] = version;
        obj['androidId'] = androidId;
        obj['apiLevel'] = apiLevel;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>DeviceDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceDTO} obj Optional instance to populate.
     * @return {module:model/DeviceDTO} The populated <code>DeviceDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceDTO();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('uniqueId')) {
                obj['uniqueId'] = ApiClient.convertToType(data['uniqueId'], 'String');
            }
            if (data.hasOwnProperty('buildId')) {
                obj['buildId'] = ApiClient.convertToType(data['buildId'], 'String');
            }
            if (data.hasOwnProperty('brand')) {
                obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
            }
            if (data.hasOwnProperty('buildNumber')) {
                obj['buildNumber'] = ApiClient.convertToType(data['buildNumber'], 'String');
            }
            if (data.hasOwnProperty('bundleId')) {
                obj['bundleId'] = ApiClient.convertToType(data['bundleId'], 'String');
            }
            if (data.hasOwnProperty('deviceId')) {
                obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
            }
            if (data.hasOwnProperty('deviceName')) {
                obj['deviceName'] = ApiClient.convertToType(data['deviceName'], 'String');
            }
            if (data.hasOwnProperty('manufacturer')) {
                obj['manufacturer'] = ApiClient.convertToType(data['manufacturer'], 'String');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('systemName')) {
                obj['systemName'] = ApiClient.convertToType(data['systemName'], 'String');
            }
            if (data.hasOwnProperty('systemVersion')) {
                obj['systemVersion'] = ApiClient.convertToType(data['systemVersion'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('androidId')) {
                obj['androidId'] = ApiClient.convertToType(data['androidId'], 'String');
            }
            if (data.hasOwnProperty('apiLevel')) {
                obj['apiLevel'] = ApiClient.convertToType(data['apiLevel'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeviceDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceDTO</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeviceDTO.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // ensure the json data is a string
        if (data['uniqueId'] && !(typeof data['uniqueId'] === 'string' || data['uniqueId'] instanceof String)) {
            throw new Error("Expected the field `uniqueId` to be a primitive type in the JSON string but got " + data['uniqueId']);
        }
        // ensure the json data is a string
        if (data['buildId'] && !(typeof data['buildId'] === 'string' || data['buildId'] instanceof String)) {
            throw new Error("Expected the field `buildId` to be a primitive type in the JSON string but got " + data['buildId']);
        }
        // ensure the json data is a string
        if (data['brand'] && !(typeof data['brand'] === 'string' || data['brand'] instanceof String)) {
            throw new Error("Expected the field `brand` to be a primitive type in the JSON string but got " + data['brand']);
        }
        // ensure the json data is a string
        if (data['buildNumber'] && !(typeof data['buildNumber'] === 'string' || data['buildNumber'] instanceof String)) {
            throw new Error("Expected the field `buildNumber` to be a primitive type in the JSON string but got " + data['buildNumber']);
        }
        // ensure the json data is a string
        if (data['bundleId'] && !(typeof data['bundleId'] === 'string' || data['bundleId'] instanceof String)) {
            throw new Error("Expected the field `bundleId` to be a primitive type in the JSON string but got " + data['bundleId']);
        }
        // ensure the json data is a string
        if (data['deviceId'] && !(typeof data['deviceId'] === 'string' || data['deviceId'] instanceof String)) {
            throw new Error("Expected the field `deviceId` to be a primitive type in the JSON string but got " + data['deviceId']);
        }
        // ensure the json data is a string
        if (data['deviceName'] && !(typeof data['deviceName'] === 'string' || data['deviceName'] instanceof String)) {
            throw new Error("Expected the field `deviceName` to be a primitive type in the JSON string but got " + data['deviceName']);
        }
        // ensure the json data is a string
        if (data['manufacturer'] && !(typeof data['manufacturer'] === 'string' || data['manufacturer'] instanceof String)) {
            throw new Error("Expected the field `manufacturer` to be a primitive type in the JSON string but got " + data['manufacturer']);
        }
        // ensure the json data is a string
        if (data['model'] && !(typeof data['model'] === 'string' || data['model'] instanceof String)) {
            throw new Error("Expected the field `model` to be a primitive type in the JSON string but got " + data['model']);
        }
        // ensure the json data is a string
        if (data['systemName'] && !(typeof data['systemName'] === 'string' || data['systemName'] instanceof String)) {
            throw new Error("Expected the field `systemName` to be a primitive type in the JSON string but got " + data['systemName']);
        }
        // ensure the json data is a string
        if (data['systemVersion'] && !(typeof data['systemVersion'] === 'string' || data['systemVersion'] instanceof String)) {
            throw new Error("Expected the field `systemVersion` to be a primitive type in the JSON string but got " + data['systemVersion']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['androidId'] && !(typeof data['androidId'] === 'string' || data['androidId'] instanceof String)) {
            throw new Error("Expected the field `androidId` to be a primitive type in the JSON string but got " + data['androidId']);
        }
        // ensure the json data is a string
        if (data['apiLevel'] && !(typeof data['apiLevel'] === 'string' || data['apiLevel'] instanceof String)) {
            throw new Error("Expected the field `apiLevel` to be a primitive type in the JSON string but got " + data['apiLevel']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}

DeviceDTO.RequiredProperties = ["uuid", "uniqueId", "buildId", "brand", "buildNumber", "bundleId", "deviceId", "deviceName", "manufacturer", "model", "systemName", "systemVersion", "version", "androidId", "apiLevel", "status"];

/**
 * uuid
 * @member {String} uuid
 */
DeviceDTO.prototype['uuid'] = undefined;

/**
 * uniqueId
 * @member {String} uniqueId
 */
DeviceDTO.prototype['uniqueId'] = undefined;

/**
 * buildId
 * @member {String} buildId
 */
DeviceDTO.prototype['buildId'] = undefined;

/**
 * brand
 * @member {String} brand
 */
DeviceDTO.prototype['brand'] = undefined;

/**
 * buildNumber
 * @member {String} buildNumber
 */
DeviceDTO.prototype['buildNumber'] = undefined;

/**
 * bundleId
 * @member {String} bundleId
 */
DeviceDTO.prototype['bundleId'] = undefined;

/**
 * deviceId
 * @member {String} deviceId
 */
DeviceDTO.prototype['deviceId'] = undefined;

/**
 * deviceName
 * @member {String} deviceName
 */
DeviceDTO.prototype['deviceName'] = undefined;

/**
 * manufacturer
 * @member {String} manufacturer
 */
DeviceDTO.prototype['manufacturer'] = undefined;

/**
 * model
 * @member {String} model
 */
DeviceDTO.prototype['model'] = undefined;

/**
 * systemName
 * @member {String} systemName
 */
DeviceDTO.prototype['systemName'] = undefined;

/**
 * systemVersion
 * @member {String} systemVersion
 */
DeviceDTO.prototype['systemVersion'] = undefined;

/**
 * version
 * @member {String} version
 */
DeviceDTO.prototype['version'] = undefined;

/**
 * androidId
 * @member {String} androidId
 */
DeviceDTO.prototype['androidId'] = undefined;

/**
 * apiLevel
 * @member {String} apiLevel
 */
DeviceDTO.prototype['apiLevel'] = undefined;

/**
 * status
 * @member {String} status
 */
DeviceDTO.prototype['status'] = undefined;






export default DeviceDTO;

