'use strict';
var Shape = require('./base.shape.js');
var _ = require('lodash');
var Polygon = require('./polygon.js');
function Map(element, options) {
  this.config(element, options).init();
}

Map.prototype = new Shape();

Map.prototype.config = function(element, options) {
  this.type = "MAP";
  this.polygonList = [];
  this.element = element;
  this.targetOption = {
    visible: false
  };

  this.targetOption = _.merge(this.targetOption, options);
  return this;
};

Map.prototype.init = function() {
  this.target = new qq.maps.Map(this.element, this.targetOption)
};

Map.prototype.drawPolygon = function(polygon) {
  var self = this;
  if (!polygon) {
    polygon = new Polygon({
      path: (function() {
        var _path = [], len = 1200 * Math.sin(2 * Math.PI / 45);
        [45, 135, 225, 315].forEach(function(value) {
          _path.push(qq.maps.geometry.spherical.computeOffset(self.target.getCenter(), len, value));
        });
        return _path;
      })(),
      map: this.target,
    });
  }
  polygon.setVisible(true);
  this.polygonList.push(polygon);
};

module.exports  = Map;