/**
 * Kolay Asistan Mobile API
 * Kolay Asistan mobile application api layer. Revision Date: 08.10.2023
 *
 * The version of the OpenAPI document: v4.0.7
 * Contact: ahmetyagibasan@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BloodGlucoseDTO from '../model/BloodGlucoseDTO';

/**
* BloodGlucose service.
* @module api/BloodGlucoseApi
* @version v4.0.7
*/
export default class BloodGlucoseApi {

    /**
    * Constructs a new BloodGlucoseApi. 
    * @alias module:api/BloodGlucoseApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add item
     * @param {module:model/BloodGlucoseDTO} bloodGlucoseDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    bloodGlucoseControllerCreateWithHttpInfo(bloodGlucoseDTO) {
      let postBody = bloodGlucoseDTO;
      // verify the required parameter 'bloodGlucoseDTO' is set
      if (bloodGlucoseDTO === undefined || bloodGlucoseDTO === null) {
        throw new Error("Missing the required parameter 'bloodGlucoseDTO' when calling bloodGlucoseControllerCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = 'Number';
      return this.apiClient.callApi(
        '/blood-glucose', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add item
     * @param {module:model/BloodGlucoseDTO} bloodGlucoseDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    bloodGlucoseControllerCreate(bloodGlucoseDTO) {
      return this.bloodGlucoseControllerCreateWithHttpInfo(bloodGlucoseDTO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Item
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */
    bloodGlucoseControllerDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling bloodGlucoseControllerDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'Boolean';
      return this.apiClient.callApi(
        '/blood-glucose/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Item
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    bloodGlucoseControllerDelete(id) {
      return this.bloodGlucoseControllerDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find User All Items
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BloodGlucoseDTO>} and HTTP response
     */
    bloodGlucoseControllerFindUserAllItemsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [BloodGlucoseDTO];
      return this.apiClient.callApi(
        '/blood-glucose/findUserAllItems', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find User All Items
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BloodGlucoseDTO>}
     */
    bloodGlucoseControllerFindUserAllItems() {
      return this.bloodGlucoseControllerFindUserAllItemsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find User Item
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BloodGlucoseDTO} and HTTP response
     */
    bloodGlucoseControllerFindUserItemWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling bloodGlucoseControllerFindUserItem");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BloodGlucoseDTO;
      return this.apiClient.callApi(
        '/blood-glucose/findUserItem/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find User Item
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BloodGlucoseDTO}
     */
    bloodGlucoseControllerFindUserItem(id) {
      return this.bloodGlucoseControllerFindUserItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update item
     * @param {Number} id 
     * @param {module:model/BloodGlucoseDTO} bloodGlucoseDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */
    bloodGlucoseControllerUpdateWithHttpInfo(id, bloodGlucoseDTO) {
      let postBody = bloodGlucoseDTO;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling bloodGlucoseControllerUpdate");
      }
      // verify the required parameter 'bloodGlucoseDTO' is set
      if (bloodGlucoseDTO === undefined || bloodGlucoseDTO === null) {
        throw new Error("Missing the required parameter 'bloodGlucoseDTO' when calling bloodGlucoseControllerUpdate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = 'Boolean';
      return this.apiClient.callApi(
        '/blood-glucose/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update item
     * @param {Number} id 
     * @param {module:model/BloodGlucoseDTO} bloodGlucoseDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    bloodGlucoseControllerUpdate(id, bloodGlucoseDTO) {
      return this.bloodGlucoseControllerUpdateWithHttpInfo(id, bloodGlucoseDTO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
