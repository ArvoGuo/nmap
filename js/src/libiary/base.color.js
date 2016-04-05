
'use strict';

function Color() {
  this.colorIndex = 0;
  this.colors = [
      '#427FED', '#FF4617', '#47C370', '#58C9CD', '#E9C11D',
      '#4FDC33', '#FF7F00', '#7B47DF', '#DF47B6', '#FFB3A7',
      '#C32136', '#FF0097', '#FFF143', '#AFDD22', '#A4E2C6',
      '#3EEDE7', '#FF3300', '#70F3FF', '#CCA4E3', '#EF7A82',
      '#3f6700', '#C5C56A', '#00A3AF', '#0095D9', '#028760',
      '#88ADA6', '#CD5E3C', '#9B4400', '#AE7000', '#A98175',
      '#758A99', '#789262', '#4C8DAE', '#4B5CC4', '#3f6700'
  ];
}

Color.prototype.produceColor = function() {
  if (this.colorIndex >= this.colors.length - 1) {
    this.colorIndex = 0;
  }
  var color = this.colors[++ this.colorIndex];
  return color;
};

Color.prototype.toHex = function(color, hex) {
  return qq.maps.Color.fromHex(color, hex);
};

Color.prototype.rgbToHex = function(r, g, b) {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

Color.prototype.hexToRgb = function(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
};

module.exports = Color;