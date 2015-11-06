'use strict';
var Shape = require('./base.shape.js');
var _ = require('lodash');
function Polygon(options) {
  this.config(options).init();
}

Polygon.prototype = new Shape();

Polygon.prototype.config = function(options) {
  this.type = "POLYGON";
  this.targetOptions = {
    visible: false
  };
  this.targetOptions = _.merge(this.targetOptions, options);
  return this;
};

Polygon.prototype.init = function() {
  this.target = new qq.maps.Polygon(this.targetOptions);
};

Polygon.prototype.setVisible = function(b) {
  this.target.setVisible(b);
};

module.exports = Polygon;