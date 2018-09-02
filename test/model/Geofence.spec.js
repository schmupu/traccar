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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Traccar);
  }
}(this, function(expect, Traccar) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Traccar.Geofence();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Geofence', function() {
    it('should create an instance of Geofence', function() {
      // uncomment below and update the code to test Geofence
      //var instane = new Traccar.Geofence();
      //expect(instance).to.be.a(Traccar.Geofence);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Traccar.Geofence();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Traccar.Geofence();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Traccar.Geofence();
      //expect(instance).to.be();
    });

    it('should have the property area (base name: "area")', function() {
      // uncomment below and update the code to test the property area
      //var instane = new Traccar.Geofence();
      //expect(instance).to.be();
    });

    it('should have the property calendarId (base name: "calendarId")', function() {
      // uncomment below and update the code to test the property calendarId
      //var instane = new Traccar.Geofence();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instane = new Traccar.Geofence();
      //expect(instance).to.be();
    });

  });

}));
