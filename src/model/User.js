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
    root.Traccar.User = factory(root.Traccar.ApiClient, root.Traccar.ERRORUNKNOWN);
  }
}(this, function(ApiClient, ERRORUNKNOWN) {
  'use strict';




  /**
   * The User model module.
   * @module model/User
   * @version 4.0
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {
    var _this = this;






















  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('readonly')) {
        obj['readonly'] = ApiClient.convertToType(data['readonly'], 'Boolean');
      }
      if (data.hasOwnProperty('administrator')) {
        obj['administrator'] = ApiClient.convertToType(data['administrator'], 'Boolean');
      }
      if (data.hasOwnProperty('map')) {
        obj['map'] = ApiClient.convertToType(data['map'], 'String');
      }
      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }
      if (data.hasOwnProperty('zoom')) {
        obj['zoom'] = ApiClient.convertToType(data['zoom'], 'Number');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('twelveHourFormat')) {
        obj['twelveHourFormat'] = ApiClient.convertToType(data['twelveHourFormat'], 'Boolean');
      }
      if (data.hasOwnProperty('coordinateFormat')) {
        obj['coordinateFormat'] = ApiClient.convertToType(data['coordinateFormat'], 'String');
      }
      if (data.hasOwnProperty('disabled')) {
        obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
      }
      if (data.hasOwnProperty('expirationTime')) {
        obj['expirationTime'] = ApiClient.convertToType(data['expirationTime'], 'Date');
      }
      if (data.hasOwnProperty('deviceLimit')) {
        obj['deviceLimit'] = ApiClient.convertToType(data['deviceLimit'], 'Number');
      }
      if (data.hasOwnProperty('userLimit')) {
        obj['userLimit'] = ApiClient.convertToType(data['userLimit'], 'Number');
      }
      if (data.hasOwnProperty('deviceReadonly')) {
        obj['deviceReadonly'] = ApiClient.convertToType(data['deviceReadonly'], 'Boolean');
      }
      if (data.hasOwnProperty('limitCommands')) {
        obj['limitCommands'] = ApiClient.convertToType(data['limitCommands'], 'Boolean');
      }
      if (data.hasOwnProperty('poiLayer')) {
        obj['poiLayer'] = ApiClient.convertToType(data['poiLayer'], 'String');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
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
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Boolean} readonly
   */
  exports.prototype['readonly'] = undefined;
  /**
   * @member {Boolean} administrator
   */
  exports.prototype['administrator'] = undefined;
  /**
   * @member {String} map
   */
  exports.prototype['map'] = undefined;
  /**
   * @member {Number} latitude
   */
  exports.prototype['latitude'] = undefined;
  /**
   * @member {Number} longitude
   */
  exports.prototype['longitude'] = undefined;
  /**
   * @member {Number} zoom
   */
  exports.prototype['zoom'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {Boolean} twelveHourFormat
   */
  exports.prototype['twelveHourFormat'] = undefined;
  /**
   * @member {String} coordinateFormat
   */
  exports.prototype['coordinateFormat'] = undefined;
  /**
   * @member {Boolean} disabled
   */
  exports.prototype['disabled'] = undefined;
  /**
   * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
   * @member {Date} expirationTime
   */
  exports.prototype['expirationTime'] = undefined;
  /**
   * @member {Number} deviceLimit
   */
  exports.prototype['deviceLimit'] = undefined;
  /**
   * @member {Number} userLimit
   */
  exports.prototype['userLimit'] = undefined;
  /**
   * @member {Boolean} deviceReadonly
   */
  exports.prototype['deviceReadonly'] = undefined;
  /**
   * @member {Boolean} limitCommands
   */
  exports.prototype['limitCommands'] = undefined;
  /**
   * @member {String} poiLayer
   */
  exports.prototype['poiLayer'] = undefined;
  /**
   * @member {String} token
   */
  exports.prototype['token'] = undefined;
  /**
   * @member {module:model/ERRORUNKNOWN} attributes
   */
  exports.prototype['attributes'] = undefined;



  return exports;
}));


