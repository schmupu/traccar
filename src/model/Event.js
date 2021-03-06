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
    define(['ApiClient', 'model/ERRORUNKNOWN'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ERRORUNKNOWN'));
  } else {
    // Browser globals (root is window)
    if (!root.Traccar) {
      root.Traccar = {};
    }
    root.Traccar.Event = factory(root.Traccar.ApiClient, root.Traccar.ERRORUNKNOWN);
  }
}(this, function(ApiClient, ERRORUNKNOWN) {
  'use strict';




  /**
   * The Event model module.
   * @module model/Event
   * @version 4.0
   */

  /**
   * Constructs a new <code>Event</code>.
   * @alias module:model/Event
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Event} obj Optional instance to populate.
   * @return {module:model/Event} The populated <code>Event</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('serverTime')) {
        obj['serverTime'] = ApiClient.convertToType(data['serverTime'], 'Date');
      }
      if (data.hasOwnProperty('deviceId')) {
        obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'Number');
      }
      if (data.hasOwnProperty('positionId')) {
        obj['positionId'] = ApiClient.convertToType(data['positionId'], 'Number');
      }
      if (data.hasOwnProperty('geofenceId')) {
        obj['geofenceId'] = ApiClient.convertToType(data['geofenceId'], 'Number');
      }
      if (data.hasOwnProperty('maintenanceId')) {
        obj['maintenanceId'] = ApiClient.convertToType(data['maintenanceId'], 'Number');
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], ERRORUNKNOWN);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
   * @member {Date} serverTime
   */
  exports.prototype['serverTime'] = undefined;
  /**
   * @member {Number} deviceId
   */
  exports.prototype['deviceId'] = undefined;
  /**
   * @member {Number} positionId
   */
  exports.prototype['positionId'] = undefined;
  /**
   * @member {Number} geofenceId
   */
  exports.prototype['geofenceId'] = undefined;
  /**
   * @member {Number} maintenanceId
   */
  exports.prototype['maintenanceId'] = undefined;
  /**
   * @member {module:model/ERRORUNKNOWN} attributes
   */
  exports.prototype['attributes'] = undefined;



  return exports;
}));


