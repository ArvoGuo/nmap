'use strict';
if (typeof window.qq.maps.Map === 'undefined') {
  console.log('qq map is not found');
  module.exports = {};

} else {
  var CoreShape = require('./shape');
  var _ = require('lodash');

  var NMap = {};

  NMap.all = [];

  NMap.create = function(type) {
    var args = Array.prototype.slice.call(arguments);
    var s = new (CoreShape[type].bind.apply(CoreShape[type], args));

    NMap.all.push(s);
    return s;
  };

  NMap.addFn = function(type, key, fn) {
    if (!CoreShape[type]) {
      throw new Error( type + " isn't exist" );
    }
    if (CoreShape[type].prototype[key]) {
      console.warn(type + 'has key' + key + ', you rewrite it;');
    }
    CoreShape[type].prototype[key] = fn;
  };





  module.exports = NMap;



}
