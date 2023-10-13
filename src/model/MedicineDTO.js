/**
 * Kolay Asistan Mobile API
 * Kolay Asistan mobile application api layer. Revision Date: 08.10.2023
 *
 * The version of the OpenAPI document: v4.0.2
 * Contact: ahmetyagibasan@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import MedicineDTOPharmacy from './MedicineDTOPharmacy';

/**
 * The MedicineDTO model module.
 * @module model/MedicineDTO
 * @version v4.0.2
 */
class MedicineDTO {
    /**
     * Constructs a new <code>MedicineDTO</code>.
     * @alias module:model/MedicineDTO
     * @param id {Number} Medicine ID
     * @param barcode {String} Medicine barcode
     * @param name {String} Medicine name
     * @param amount {String} var ise name içerisinde de gelecektir.
     * @param imagePath {String} Medicine image url
     * @param usage {String} Medicine usage or doze
     * @param type {String} Medicine type
     * @param sktDate {Date} Medicine expiration date
     * @param typeDescription {String} Medicine type or group
     * @param usageInfo {String} Medicine using info
     * @param description {String} Medicine description about using
     * @param usagePeople {String} Patient name surname
     * @param endTime {Date} Medicine renewal date
     * @param pharmacy {module:model/MedicineDTOPharmacy} 
     */
    constructor(id, barcode, name, amount, imagePath, usage, type, sktDate, typeDescription, usageInfo, description, usagePeople, endTime, pharmacy) { 
        
        MedicineDTO.initialize(this, id, barcode, name, amount, imagePath, usage, type, sktDate, typeDescription, usageInfo, description, usagePeople, endTime, pharmacy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, barcode, name, amount, imagePath, usage, type, sktDate, typeDescription, usageInfo, description, usagePeople, endTime, pharmacy) { 
        obj['id'] = id;
        obj['barcode'] = barcode;
        obj['name'] = name;
        obj['amount'] = amount;
        obj['imagePath'] = imagePath;
        obj['usage'] = usage;
        obj['type'] = type;
        obj['sktDate'] = sktDate;
        obj['typeDescription'] = typeDescription;
        obj['usageInfo'] = usageInfo;
        obj['description'] = description;
        obj['usagePeople'] = usagePeople;
        obj['endTime'] = endTime;
        obj['pharmacy'] = pharmacy;
    }

    /**
     * Constructs a <code>MedicineDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MedicineDTO} obj Optional instance to populate.
     * @return {module:model/MedicineDTO} The populated <code>MedicineDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MedicineDTO();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('barcode')) {
                obj['barcode'] = ApiClient.convertToType(data['barcode'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('imagePath')) {
                obj['imagePath'] = ApiClient.convertToType(data['imagePath'], 'String');
            }
            if (data.hasOwnProperty('usage')) {
                obj['usage'] = ApiClient.convertToType(data['usage'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('sktDate')) {
                obj['sktDate'] = ApiClient.convertToType(data['sktDate'], 'Date');
            }
            if (data.hasOwnProperty('typeDescription')) {
                obj['typeDescription'] = ApiClient.convertToType(data['typeDescription'], 'String');
            }
            if (data.hasOwnProperty('usageInfo')) {
                obj['usageInfo'] = ApiClient.convertToType(data['usageInfo'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('usagePeople')) {
                obj['usagePeople'] = ApiClient.convertToType(data['usagePeople'], 'String');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Date');
            }
            if (data.hasOwnProperty('pharmacy')) {
                obj['pharmacy'] = MedicineDTOPharmacy.constructFromObject(data['pharmacy']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MedicineDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MedicineDTO</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MedicineDTO.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['barcode'] && !(typeof data['barcode'] === 'string' || data['barcode'] instanceof String)) {
            throw new Error("Expected the field `barcode` to be a primitive type in the JSON string but got " + data['barcode']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // ensure the json data is a string
        if (data['imagePath'] && !(typeof data['imagePath'] === 'string' || data['imagePath'] instanceof String)) {
            throw new Error("Expected the field `imagePath` to be a primitive type in the JSON string but got " + data['imagePath']);
        }
        // ensure the json data is a string
        if (data['usage'] && !(typeof data['usage'] === 'string' || data['usage'] instanceof String)) {
            throw new Error("Expected the field `usage` to be a primitive type in the JSON string but got " + data['usage']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['typeDescription'] && !(typeof data['typeDescription'] === 'string' || data['typeDescription'] instanceof String)) {
            throw new Error("Expected the field `typeDescription` to be a primitive type in the JSON string but got " + data['typeDescription']);
        }
        // ensure the json data is a string
        if (data['usageInfo'] && !(typeof data['usageInfo'] === 'string' || data['usageInfo'] instanceof String)) {
            throw new Error("Expected the field `usageInfo` to be a primitive type in the JSON string but got " + data['usageInfo']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['usagePeople'] && !(typeof data['usagePeople'] === 'string' || data['usagePeople'] instanceof String)) {
            throw new Error("Expected the field `usagePeople` to be a primitive type in the JSON string but got " + data['usagePeople']);
        }
        // validate the optional field `pharmacy`
        if (data['pharmacy']) { // data not null
          MedicineDTOPharmacy.validateJSON(data['pharmacy']);
        }

        return true;
    }


}

MedicineDTO.RequiredProperties = ["id", "barcode", "name", "amount", "imagePath", "usage", "type", "sktDate", "typeDescription", "usageInfo", "description", "usagePeople", "endTime", "pharmacy"];

/**
 * Medicine ID
 * @member {Number} id
 */
MedicineDTO.prototype['id'] = undefined;

/**
 * Medicine barcode
 * @member {String} barcode
 */
MedicineDTO.prototype['barcode'] = undefined;

/**
 * Medicine name
 * @member {String} name
 */
MedicineDTO.prototype['name'] = undefined;

/**
 * var ise name içerisinde de gelecektir.
 * @member {String} amount
 */
MedicineDTO.prototype['amount'] = undefined;

/**
 * Medicine image url
 * @member {String} imagePath
 */
MedicineDTO.prototype['imagePath'] = undefined;

/**
 * Medicine usage or doze
 * @member {String} usage
 */
MedicineDTO.prototype['usage'] = undefined;

/**
 * Medicine type
 * @member {String} type
 */
MedicineDTO.prototype['type'] = undefined;

/**
 * Medicine expiration date
 * @member {Date} sktDate
 */
MedicineDTO.prototype['sktDate'] = undefined;

/**
 * Medicine type or group
 * @member {String} typeDescription
 */
MedicineDTO.prototype['typeDescription'] = undefined;

/**
 * Medicine using info
 * @member {String} usageInfo
 */
MedicineDTO.prototype['usageInfo'] = undefined;

/**
 * Medicine description about using
 * @member {String} description
 */
MedicineDTO.prototype['description'] = undefined;

/**
 * Patient name surname
 * @member {String} usagePeople
 */
MedicineDTO.prototype['usagePeople'] = undefined;

/**
 * Medicine renewal date
 * @member {Date} endTime
 */
MedicineDTO.prototype['endTime'] = undefined;

/**
 * @member {module:model/MedicineDTOPharmacy} pharmacy
 */
MedicineDTO.prototype['pharmacy'] = undefined;






export default MedicineDTO;

