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

/**
 * The UserStatusDTO model module.
 * @module model/UserStatusDTO
 * @version v4.0.2
 */
class UserStatusDTO {
    /**
     * Constructs a new <code>UserStatusDTO</code>.
     * @alias module:model/UserStatusDTO
     * @param userId {Number} User ID
     * @param status {module:model/UserStatusDTO.StatusEnum} User status
     */
    constructor(userId, status) { 
        
        UserStatusDTO.initialize(this, userId, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId, status) { 
        obj['userId'] = userId;
        obj['status'] = status || 'WaitingVerifying';
    }

    /**
     * Constructs a <code>UserStatusDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserStatusDTO} obj Optional instance to populate.
     * @return {module:model/UserStatusDTO} The populated <code>UserStatusDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserStatusDTO();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserStatusDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserStatusDTO</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserStatusDTO.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}

UserStatusDTO.RequiredProperties = ["userId", "status"];

/**
 * User ID
 * @member {Number} userId
 */
UserStatusDTO.prototype['userId'] = undefined;

/**
 * User status
 * @member {module:model/UserStatusDTO.StatusEnum} status
 * @default 'WaitingVerifying'
 */
UserStatusDTO.prototype['status'] = 'WaitingVerifying';





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
UserStatusDTO['StatusEnum'] = {

    /**
     * value: "WaitingVerifying"
     * @const
     */
    "WaitingVerifying": "WaitingVerifying",

    /**
     * value: "Active"
     * @const
     */
    "Active": "Active",

    /**
     * value: "Rejected"
     * @const
     */
    "Rejected": "Rejected",

    /**
     * value: "Closed"
     * @const
     */
    "Closed": "Closed",

    /**
     * value: "Disabled"
     * @const
     */
    "Disabled": "Disabled"
};



export default UserStatusDTO;

