'use strict';
var CoreShape = require('./shape');
var _ = require('lodash');

var Boiled = {};

Boiled.all = [];

Boiled.create = function(type) {
  var args = Array.prototype.slice.call(arguments);
  var s = new (CoreShape[type].bind.apply(CoreShape[type], args));

  Boiled.all.push(s);
  return s;
};

Boiled.addFn = function(type, key, fn) {
  if (!CoreShape[type]) {
    throw new Error( type + " isn't exist" );
  }
  if (CoreShape[type].prototype[key]) {
    console.warn(type + 'has key' + key + ', you rewrite it;');
  }
  CoreShape[type].prototype[key] = fn;
};



module.exports = Boiled;


