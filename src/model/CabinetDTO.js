/**
 * Kolay Asistan Mobile API
 * Kolay Asistan mobile application api layer. Revision Date: 25.04.2023
 *
 * The version of the OpenAPI document: 0.0.8
 * Contact: ahmetyagibasan@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CabinetDTO model module.
 * @module model/CabinetDTO
 * @version 0.0.8
 */
class CabinetDTO {
    /**
     * Constructs a new <code>CabinetDTO</code>.
     * @alias module:model/CabinetDTO
     * @param id {Number} id
     * @param userId {Number} userId
     * @param medicineBarcode {String} medicineBarcode
     * @param medicineName {String} medicineName
     * @param packType {String} packType
     * @param packCount {Number} packCount
     * @param expireDate {Date} expireDate
     * @param comment {String} comment
     * @param isActive {Number} isActive
     * @param remainingDays {Number} remainingDays
     * @param isExpired {Number} isExpired
     * @param isRecipeMedicine {Number} isRecipeMedicine
     */
    constructor(id, userId, medicineBarcode, medicineName, packType, packCount, expireDate, comment, isActive, remainingDays, isExpired, isRecipeMedicine) { 
        
        CabinetDTO.initialize(this, id, userId, medicineBarcode, medicineName, packType, packCount, expireDate, comment, isActive, remainingDays, isExpired, isRecipeMedicine);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, userId, medicineBarcode, medicineName, packType, packCount, expireDate, comment, isActive, remainingDays, isExpired, isRecipeMedicine) { 
        obj['id'] = id;
        obj['userId'] = userId;
        obj['medicineBarcode'] = medicineBarcode;
        obj['medicineName'] = medicineName;
        obj['packType'] = packType;
        obj['packCount'] = packCount;
        obj['expireDate'] = expireDate;
        obj['comment'] = comment;
        obj['isActive'] = isActive;
        obj['remainingDays'] = remainingDays;
        obj['isExpired'] = isExpired;
        obj['isRecipeMedicine'] = isRecipeMedicine;
    }

    /**
     * Constructs a <code>CabinetDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CabinetDTO} obj Optional instance to populate.
     * @return {module:model/CabinetDTO} The populated <code>CabinetDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CabinetDTO();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('medicineBarcode')) {
                obj['medicineBarcode'] = ApiClient.convertToType(data['medicineBarcode'], 'String');
            }
            if (data.hasOwnProperty('medicineName')) {
                obj['medicineName'] = ApiClient.convertToType(data['medicineName'], 'String');
            }
            if (data.hasOwnProperty('packType')) {
                obj['packType'] = ApiClient.convertToType(data['packType'], 'String');
            }
            if (data.hasOwnProperty('packCount')) {
                obj['packCount'] = ApiClient.convertToType(data['packCount'], 'Number');
            }
            if (data.hasOwnProperty('expireDate')) {
                obj['expireDate'] = ApiClient.convertToType(data['expireDate'], 'Date');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Number');
            }
            if (data.hasOwnProperty('remainingDays')) {
                obj['remainingDays'] = ApiClient.convertToType(data['remainingDays'], 'Number');
            }
            if (data.hasOwnProperty('isExpired')) {
                obj['isExpired'] = ApiClient.convertToType(data['isExpired'], 'Number');
            }
            if (data.hasOwnProperty('isRecipeMedicine')) {
                obj['isRecipeMedicine'] = ApiClient.convertToType(data['isRecipeMedicine'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CabinetDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CabinetDTO</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CabinetDTO.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['medicineBarcode'] && !(typeof data['medicineBarcode'] === 'string' || data['medicineBarcode'] instanceof String)) {
            throw new Error("Expected the field `medicineBarcode` to be a primitive type in the JSON string but got " + data['medicineBarcode']);
        }
        // ensure the json data is a string
        if (data['medicineName'] && !(typeof data['medicineName'] === 'string' || data['medicineName'] instanceof String)) {
            throw new Error("Expected the field `medicineName` to be a primitive type in the JSON string but got " + data['medicineName']);
        }
        // ensure the json data is a string
        if (data['packType'] && !(typeof data['packType'] === 'string' || data['packType'] instanceof String)) {
            throw new Error("Expected the field `packType` to be a primitive type in the JSON string but got " + data['packType']);
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }

        return true;
    }


}

CabinetDTO.RequiredProperties = ["id", "userId", "medicineBarcode", "medicineName", "packType", "packCount", "expireDate", "comment", "isActive", "remainingDays", "isExpired", "isRecipeMedicine"];

/**
 * id
 * @member {Number} id
 */
CabinetDTO.prototype['id'] = undefined;

/**
 * userId
 * @member {Number} userId
 */
CabinetDTO.prototype['userId'] = undefined;

/**
 * medicineBarcode
 * @member {String} medicineBarcode
 */
CabinetDTO.prototype['medicineBarcode'] = undefined;

/**
 * medicineName
 * @member {String} medicineName
 */
CabinetDTO.prototype['medicineName'] = undefined;

/**
 * packType
 * @member {String} packType
 */
CabinetDTO.prototype['packType'] = undefined;

/**
 * packCount
 * @member {Number} packCount
 */
CabinetDTO.prototype['packCount'] = undefined;

/**
 * expireDate
 * @member {Date} expireDate
 */
CabinetDTO.prototype['expireDate'] = undefined;

/**
 * comment
 * @member {String} comment
 */
CabinetDTO.prototype['comment'] = undefined;

/**
 * isActive
 * @member {Number} isActive
 */
CabinetDTO.prototype['isActive'] = undefined;

/**
 * remainingDays
 * @member {Number} remainingDays
 */
CabinetDTO.prototype['remainingDays'] = undefined;

/**
 * isExpired
 * @member {Number} isExpired
 */
CabinetDTO.prototype['isExpired'] = undefined;

/**
 * isRecipeMedicine
 * @member {Number} isRecipeMedicine
 */
CabinetDTO.prototype['isRecipeMedicine'] = undefined;






export default CabinetDTO;

