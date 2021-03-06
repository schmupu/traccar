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
    root.Traccar.ReportSummary = factory(root.Traccar.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReportSummary model module.
   * @module model/ReportSummary
   * @version 4.0
   */

  /**
   * Constructs a new <code>ReportSummary</code>.
   * @alias module:model/ReportSummary
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>ReportSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportSummary} obj Optional instance to populate.
   * @return {module:model/ReportSummary} The populated <code>ReportSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('deviceId')) {
        obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'Number');
      }
      if (data.hasOwnProperty('deviceName')) {
        obj['deviceName'] = ApiClient.convertToType(data['deviceName'], 'String');
      }
      if (data.hasOwnProperty('maxSpeed')) {
        obj['maxSpeed'] = ApiClient.convertToType(data['maxSpeed'], 'Number');
      }
      if (data.hasOwnProperty('averageSpeed')) {
        obj['averageSpeed'] = ApiClient.convertToType(data['averageSpeed'], 'Number');
      }
      if (data.hasOwnProperty('distance')) {
        obj['distance'] = ApiClient.convertToType(data['distance'], 'Number');
      }
      if (data.hasOwnProperty('spentFuel')) {
        obj['spentFuel'] = ApiClient.convertToType(data['spentFuel'], 'Number');
      }
      if (data.hasOwnProperty('engineHours')) {
        obj['engineHours'] = ApiClient.convertToType(data['engineHours'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} deviceId
   */
  exports.prototype['deviceId'] = undefined;
  /**
   * @member {String} deviceName
   */
  exports.prototype['deviceName'] = undefined;
  /**
   * in knots
   * @member {Number} maxSpeed
   */
  exports.prototype['maxSpeed'] = undefined;
  /**
   * in knots
   * @member {Number} averageSpeed
   */
  exports.prototype['averageSpeed'] = undefined;
  /**
   * in meters
   * @member {Number} distance
   */
  exports.prototype['distance'] = undefined;
  /**
   * in liters
   * @member {Number} spentFuel
   */
  exports.prototype['spentFuel'] = undefined;
  /**
   * @member {Number} engineHours
   */
  exports.prototype['engineHours'] = undefined;



  return exports;
}));


