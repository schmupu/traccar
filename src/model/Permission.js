/**
 * traccar
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 4.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 1.0.16
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Traccar) {
      root.Traccar = {};
    }
    root.Traccar.Permission = factory(root.Traccar.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Permission model module.
   * @module model/Permission
   * @version 4.0
   */

  /**
   * Constructs a new <code>Permission</code>.
   * This is a permission map that contain two object indexes. It is used to link/unlink objects. Order is important. Example: { deviceId:8, geofenceId: 16 }
   * @alias module:model/Permission
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Permission</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Permission} obj Optional instance to populate.
   * @return {module:model/Permission} The populated <code>Permission</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
      }
      if (data.hasOwnProperty('deviceId')) {
        obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'Number');
      }
      if (data.hasOwnProperty('groupId')) {
        obj['groupId'] = ApiClient.convertToType(data['groupId'], 'Number');
      }
      if (data.hasOwnProperty('geofenceId')) {
        obj['geofenceId'] = ApiClient.convertToType(data['geofenceId'], 'Number');
      }
      if (data.hasOwnProperty('calendarId')) {
        obj['calendarId'] = ApiClient.convertToType(data['calendarId'], 'Number');
      }
      if (data.hasOwnProperty('attributeId')) {
        obj['attributeId'] = ApiClient.convertToType(data['attributeId'], 'Number');
      }
      if (data.hasOwnProperty('driverId')) {
        obj['driverId'] = ApiClient.convertToType(data['driverId'], 'Number');
      }
      if (data.hasOwnProperty('managedUserId')) {
        obj['managedUserId'] = ApiClient.convertToType(data['managedUserId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * User Id, can be only first parameter
   * @member {Number} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * Device Id, can be first parameter or second only in combination with userId
   * @member {Number} deviceId
   */
  exports.prototype['deviceId'] = undefined;
  /**
   * Group Id, can be first parameter or second only in combination with userId
   * @member {Number} groupId
   */
  exports.prototype['groupId'] = undefined;
  /**
   * Geofence Id, can be second parameter only
   * @member {Number} geofenceId
   */
  exports.prototype['geofenceId'] = undefined;
  /**
   * Geofence Id, can be second parameter only and only in combination with userId
   * @member {Number} calendarId
   */
  exports.prototype['calendarId'] = undefined;
  /**
   * Computed Attribute Id, can be second parameter only
   * @member {Number} attributeId
   */
  exports.prototype['attributeId'] = undefined;
  /**
   * Driver Id, can be second parameter only
   * @member {Number} driverId
   */
  exports.prototype['driverId'] = undefined;
  /**
   * User Id, can be second parameter only and only in combination with userId
   * @member {Number} managedUserId
   */
  exports.prototype['managedUserId'] = undefined;



  return exports;
}));


