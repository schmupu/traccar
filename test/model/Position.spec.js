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
    instance = new Traccar.Position();
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

  describe('Position', function() {
    it('should create an instance of Position', function() {
      // uncomment below and update the code to test Position
      //var instane = new Traccar.Position();
      //expect(instance).to.be.a(Traccar.Position);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Traccar.Position();
      //expect(instance).to.be();
    });

    it('should have the property deviceId (base name: "deviceId")', function() {
      // uncomment below and update the code to test the property deviceId
      //var instane = new Traccar.Position();
      //expect(instance).to.be();
    });

    it('should have the property protocol (base name: "protocol")', function() {
      // uncomment below and update the code to test the property protocol
      //var instane = new Traccar.Position();
      //expect(instance).to.be();
    });

    it('should have the property deviceTime (base name: "deviceTime")', function() {
      // uncomment below and update the code to test the property deviceTime
      //var instane = new Traccar.Position();
      //expect(instance).to.be();
    });

    it('should have the property fixTime (base name: "fixTime")', function() {
      // uncomment below and update the code to test the property fixTime
      //var instane = new Traccar.Position();
      //expect(instance).to.be();
    });

    it('should have the property serverTime (base name: "serverTime")', function() {
      // uncomment below and update the code to test the property serverTime
      //var instane = new Traccar.Position();
      //expect(instance).to.be();
    });

    it('should have the property outdated (base name: "outdated")', function() {
      // uncomment below and update the code to test the property outdated
      //var instane = new Traccar.Position();
      //expect(instance).to.be();
    });

    it('should have the property valid (base name: "valid")', function() {
      // uncomment below and update the code to test the property valid
      //var instane = new Traccar.Position();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instane = new Traccar.Position();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instane = new Traccar.Position();
      //expect(instance).to.be();
    });

    it('should have the property altitude (base name: "altitude")', function() {
      // uncomment below and update the code to test the property altitude
      //var instane = new Traccar.Position();
      //expect(instance).to.be();
    });

    it('should have the property speed (base name: "speed")', function() {
      // uncomment below and update the code to test the property speed
      //var instane = new Traccar.Position();
      //expect(instance).to.be();
    });

    it('should have the property course (base name: "course")', function() {
      // uncomment below and update the code to test the property course
      //var instane = new Traccar.Position();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new Traccar.Position();
      //expect(instance).to.be();
    });

    it('should have the property accuracy (base name: "accuracy")', function() {
      // uncomment below and update the code to test the property accuracy
      //var instane = new Traccar.Position();
      //expect(instance).to.be();
    });

    it('should have the property network (base name: "network")', function() {
      // uncomment below and update the code to test the property network
      //var instane = new Traccar.Position();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instane = new Traccar.Position();
      //expect(instance).to.be();
    });

  });

}));
