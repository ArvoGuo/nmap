
var Boiled = require('./src/shape');

var m = new Boiled.Map(document.getElementById('map'), {
  center: new qq.maps.LatLng(31.259928358250843, 121.44005798879533),
  zoom: 15,
  visible: true
});

m.drawPolygon();
