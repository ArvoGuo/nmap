
'use strict';

function Color() {
  this.colorIndex = 0;
  this.colors = [
      '#427FED', '#FF4617', '#47C370', '#58C9CD', '#E9C11D',
      '#4FDC33', '#FF7F00', '#7B47DF', '#DF47B6', '#0e4200',
      '#650000', '#000047', '#005612', '#13130e', '#000000',
      '#002027', '#003f65', '#03150e', '#032701', '#050000',
      '#000034', '#404561', '#040051', '#000054', '#001300',
      '#162203', '#341012', '#3f6700', '#435f00', '#130000'
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

module.exports = Color;