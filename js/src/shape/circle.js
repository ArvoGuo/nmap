'use strict';
var Shape = require('../libiary/base.shape.js');
var _ = require('lodash');
function Circle(options) {
  Shape.call(this);
  this.type = 'CIRCLE';
  this.config(options).init();
}

Circle.prototype = _.create(Shape.prototype, {
  'constructor': Circle
});

Circle.prototype.config = function(options) {
  this.targetOptions = this.targetOptions || {
  };
  this.targetOptions = _.merge(this.targetOptions, options);
  return this;
};

Circle.prototype.init = function() {
  this.target = new qq.maps.Circle(this.targetOptions);
};

module.exports = Circle;