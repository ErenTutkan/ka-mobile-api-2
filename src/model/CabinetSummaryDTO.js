/**
 * Kolay Asistan Mobile API
 * Kolay Asistan mobile application api layer. Revision Date: 25.04.2023
 *
 * The version of the OpenAPI document: 0.0.9
 * Contact: ahmetyagibasan@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CabinetSummaryDTO model module.
 * @module model/CabinetSummaryDTO
 * @version 0.0.9
 */
class CabinetSummaryDTO {
    /**
     * Constructs a new <code>CabinetSummaryDTO</code>.
     * @alias module:model/CabinetSummaryDTO
     * @param activeMedicineCount {Number} activeMedicineCount
     * @param passiveMedicineCount {Number} passiveMedicineCount
     * @param expiredMedicineCount {Number} expiredMedicineCount
     */
    constructor(activeMedicineCount, passiveMedicineCount, expiredMedicineCount) { 
        
        CabinetSummaryDTO.initialize(this, activeMedicineCount, passiveMedicineCount, expiredMedicineCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, activeMedicineCount, passiveMedicineCount, expiredMedicineCount) { 
        obj['activeMedicineCount'] = activeMedicineCount;
        obj['passiveMedicineCount'] = passiveMedicineCount;
        obj['expiredMedicineCount'] = expiredMedicineCount;
    }

    /**
     * Constructs a <code>CabinetSummaryDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CabinetSummaryDTO} obj Optional instance to populate.
     * @return {module:model/CabinetSummaryDTO} The populated <code>CabinetSummaryDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CabinetSummaryDTO();

            if (data.hasOwnProperty('activeMedicineCount')) {
                obj['activeMedicineCount'] = ApiClient.convertToType(data['activeMedicineCount'], 'Number');
            }
            if (data.hasOwnProperty('passiveMedicineCount')) {
                obj['passiveMedicineCount'] = ApiClient.convertToType(data['passiveMedicineCount'], 'Number');
            }
            if (data.hasOwnProperty('expiredMedicineCount')) {
                obj['expiredMedicineCount'] = ApiClient.convertToType(data['expiredMedicineCount'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CabinetSummaryDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CabinetSummaryDTO</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CabinetSummaryDTO.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

CabinetSummaryDTO.RequiredProperties = ["activeMedicineCount", "passiveMedicineCount", "expiredMedicineCount"];

/**
 * activeMedicineCount
 * @member {Number} activeMedicineCount
 */
CabinetSummaryDTO.prototype['activeMedicineCount'] = undefined;

/**
 * passiveMedicineCount
 * @member {Number} passiveMedicineCount
 */
CabinetSummaryDTO.prototype['passiveMedicineCount'] = undefined;

/**
 * expiredMedicineCount
 * @member {Number} expiredMedicineCount
 */
CabinetSummaryDTO.prototype['expiredMedicineCount'] = undefined;






export default CabinetSummaryDTO;

