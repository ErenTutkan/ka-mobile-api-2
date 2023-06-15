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


import ApiClient from "../ApiClient";
import UserDetailDTO from '../model/UserDetailDTO';
import UserStatusDTO from '../model/UserStatusDTO';
import UserUpdateDTO from '../model/UserUpdateDTO';
import ValidateIdentityNoDTO from '../model/ValidateIdentityNoDTO';

/**
* User service.
* @module api/UserApi
* @version 0.0.9
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Logged User Detail
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserDetailDTO} and HTTP response
     */
    userControllerUserDetailWithHttpInfo() {
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
      let returnType = UserDetailDTO;
      return this.apiClient.callApi(
        '/user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Logged User Detail
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserDetailDTO}
     */
    userControllerUserDetail() {
      return this.userControllerUserDetailWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Logged user update
     * @param {module:model/UserUpdateDTO} userUpdateDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserUpdateDTO} and HTTP response
     */
    userControllerUserUpdateWithHttpInfo(userUpdateDTO) {
      let postBody = userUpdateDTO;
      // verify the required parameter 'userUpdateDTO' is set
      if (userUpdateDTO === undefined || userUpdateDTO === null) {
        throw new Error("Missing the required parameter 'userUpdateDTO' when calling userControllerUserUpdate");
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
      let returnType = UserUpdateDTO;
      return this.apiClient.callApi(
        '/user', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Logged user update
     * @param {module:model/UserUpdateDTO} userUpdateDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserUpdateDTO}
     */
    userControllerUserUpdate(userUpdateDTO) {
      return this.userControllerUserUpdateWithHttpInfo(userUpdateDTO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Logged User Update Status
     * @param {module:model/UserStatusDTO} userStatusDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */
    userControllerUserUpdateStatusWithHttpInfo(userStatusDTO) {
      let postBody = userStatusDTO;
      // verify the required parameter 'userStatusDTO' is set
      if (userStatusDTO === undefined || userStatusDTO === null) {
        throw new Error("Missing the required parameter 'userStatusDTO' when calling userControllerUserUpdateStatus");
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
      let returnType = 'Boolean';
      return this.apiClient.callApi(
        '/user/user-status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Logged User Update Status
     * @param {module:model/UserStatusDTO} userStatusDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    userControllerUserUpdateStatus(userStatusDTO) {
      return this.userControllerUserUpdateStatusWithHttpInfo(userStatusDTO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Validate identitiy no
     * @param {module:model/ValidateIdentityNoDTO} validateIdentityNoDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */
    userControllerValidateIdentityNoWithHttpInfo(validateIdentityNoDTO) {
      let postBody = validateIdentityNoDTO;
      // verify the required parameter 'validateIdentityNoDTO' is set
      if (validateIdentityNoDTO === undefined || validateIdentityNoDTO === null) {
        throw new Error("Missing the required parameter 'validateIdentityNoDTO' when calling userControllerValidateIdentityNo");
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
      let returnType = 'Boolean';
      return this.apiClient.callApi(
        '/user/validate-identity-no', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Validate identitiy no
     * @param {module:model/ValidateIdentityNoDTO} validateIdentityNoDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    userControllerValidateIdentityNo(validateIdentityNoDTO) {
      return this.userControllerValidateIdentityNoWithHttpInfo(validateIdentityNoDTO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
