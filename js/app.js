'use strict';
var NMap = require('./src');

NMap.onLoad(function() {
  // var path = [{"lat":31.26098919348343,"lng":121.44129901109413},{"lat":31.258867511094756,"lng":121.44129898319707},{"lat":31.258867511094756,"lng":121.4388169943936},{"lat":31.26098919348343,"lng":121.43881696649655}];
  // var path = [{"lat":31.234323659843458,"lng":121.40286959796144},{"lat":31.237749460763567,"lng":121.40284525402834},{"lat":31.238387256671043,"lng":121.40423794714356},{"lat":31.239331743635635,"lng":121.40547638098144},{"lat":31.238721743635637,"lng":121.40762838098145},{"lat":31.237753743635636,"lng":121.40700038098144},{"lat":31.236753743635635,"lng":121.40670538098145},{"lat":31.235726743635638,"lng":121.40641038098144},{"lat":31.233625743635635,"lng":121.40583038098144},{"lat":31.229217743635637,"lng":121.40590338098144},{"lat":31.227792743635636,"lng":121.40598938098144},{"lat":31.226409743635635,"lng":121.40608638098145},{"lat":31.225141743635636,"lng":121.40617638098145},{"lat":31.224909743635635,"lng":121.40627238098145},{"lat":31.224667743635635,"lng":121.40636738098145},{"lat":31.224329743635636,"lng":121.40652338098144},{"lat":31.224029743635636,"lng":121.40666238098144},{"lat":31.221102743635637,"lng":121.40621638098145},{"lat":31.220819743635637,"lng":121.40533238098145},{"lat":31.220492743635635,"lng":121.40422138098144},{"lat":31.220139743635638,"lng":121.40299338098144},{"lat":31.219955743635637,"lng":121.40237138098145},{"lat":31.219870743635635,"lng":121.40212638098144},{"lat":31.219822743635635,"lng":121.40179638098145},{"lat":31.219439743635636,"lng":121.39925938098145},{"lat":31.219097743635636,"lng":121.39660338098145},{"lat":31.219496743635638,"lng":121.39280538098144},{"lat":31.219863743635635,"lng":121.38928638098145},{"lat":31.220799743635638,"lng":121.38044538098144},{"lat":31.224781743635635,"lng":121.38096138098145},{"lat":31.22301985338037,"lng":121.38302085717774},{"lat":31.221992330224605,"lng":121.38808466143797},{"lat":31.221662095506076,"lng":121.39276222760009},{"lat":31.223130438310843,"lng":121.40301946044922},{"lat":31.229846000867038,"lng":121.4035774234009}];
  var path = [{"lat":31.26146609164296,"lng":121.4317718046732},{"lat":31.258809459764663,"lng":121.43348840449421},{"lat":31.26026920528535,"lng":121.44451764098919},{"lat":31.258867511094756,"lng":121.44129898319707},{"lat":31.25769357127775,"lng":121.43207928534821},{"lat":31.26803236741782,"lng":121.42946142145263},{"lat":31.264015621693265,"lng":121.43224739614396}];
  // var path = [{"lat":31.239717604631878,"lng":121.392527},{"lat":31.23940060463188,"lng":121.394863},{"lat":31.23893760463188,"lng":121.397114},{"lat":31.238744604631876,"lng":121.401614},{"lat":31.23227492480673,"lng":121.39058787292478},{"lat":31.226024991115157,"lng":121.39011892053222},{"lat":31.237166604631877,"lng":121.403138},{"lat":31.236166604631876,"lng":121.402843},{"lat":31.23513960463188,"lng":121.402548},{"lat":31.22371750665074,"lng":121.39415740734863},{"lat":31.228630604631878,"lng":121.402041},{"lat":31.227205604631877,"lng":121.402127},{"lat":31.225822604631876,"lng":121.402224},{"lat":31.224554604631876,"lng":121.402314},{"lat":31.224322604631876,"lng":121.40241},{"lat":31.224080604631876,"lng":121.402505},{"lat":31.223742604631877,"lng":121.402661},{"lat":31.223442604631877,"lng":121.4028},{"lat":31.220515604631878,"lng":121.402354},{"lat":31.220232604631878,"lng":121.40147},{"lat":31.219905604631876,"lng":121.400359},{"lat":31.21955260463188,"lng":121.399131},{"lat":31.219368604631878,"lng":121.398509},{"lat":31.219283604631876,"lng":121.398264},{"lat":31.219235604631876,"lng":121.397934},{"lat":31.218852604631877,"lng":121.395397},{"lat":31.218510604631877,"lng":121.392741},{"lat":31.21890960463188,"lng":121.388943},{"lat":31.219276604631876,"lng":121.385424},{"lat":31.22021260463188,"lng":121.376583},{"lat":31.224194604631876,"lng":121.377099},{"lat":31.22852460463188,"lng":121.378386},{"lat":31.233368604631877,"lng":121.381218},{"lat":31.242028604631876,"lng":121.38551},{"lat":31.24081760463188,"lng":121.38757}];

  var div = '<div style="background-color: #999; padding: 3px; border-radius: 3px; font-size: 13px;white-space: nowrap">' +
               '<span style="text-align: center;line-height: 15px;color: #fff;background-color: green;border-radius:10px; width: 15px;display: inline-block">1</span>' +
               '<span style="display: inline-block;color: #fff;">价格123123元</span>' +
             '</div>';


  var Boiled = require('./src');

  Boiled.addFn('Polygon', 'setActive', function() {
    console.log(this);
  });

  Boiled.addFn('Polygon', 'setNormal', function() {
    console.log(this);
  });

  Boiled.addFn('Polygon', 'setDisable', function() {
    console.log(this);
  });


  var map = Boiled.create('Map', document.getElementById('map'), {
    center: new qq.maps.LatLng(31.259928358250843, 121.44005798879533),
    zoom: 16
  });

  var color = Boiled.create('Color');
  console.log(color.toHex(color.produceColor(), 0.3));

  var polygon = Boiled.create('Polygon', {
    path: (function(path) {
      var _path = [];
      for( var i = 0; i < path.length; i ++) {
        _path.push(Boiled.create('Point', path[i].lat, path[i].lng).target);
      }
      return _path;
    })(path)
  });

  var slabel = Boiled.create('SLabel', {
    content: div,
    position: map.target.getCenter()
  });

  var anchor = new qq.maps.Point(17, 36);
  var size = new qq.maps.Size(17, 36);
  var origin = new qq.maps.Point(0, 0);
  var icon = new qq.maps.MarkerImage(
            'data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAkCAYAAABv2tHkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDM0U4RUNGRDk0QUUxMUU0OUI0MEUwOENENzFCQjU5RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDM0U4RUNGRTk0QUUxMUU0OUI0MEUwOENENzFCQjU5RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMzRThFQ0ZCOTRBRTExRTQ5QjQwRTA4Q0Q3MUJCNTlFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMzRThFQ0ZDOTRBRTExRTQ5QjQwRTA4Q0Q3MUJCNTlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+z1ZM7gAAArhJREFUeNrklj9ME1Ecx7/v7qj0sAUs2iIxhgFMcO/A4J9IjAOQ6EaMIguJTg5ObM4OdnFxMBjj4GSEyU0xMa4uGIghDlX+lfZ6/XP9c3fP93tHubZCUdRI4i956ftz73O//1fGOcfvioI/IIcHwvY64JO4KE4HaG67+MY4FrRnMH8KUr2JUU3FExxpO05rs8DhmjbKloAxJJb0YzOXXqatXSH2DYTVs8EXUCKX5YZZVJDKwbZs5A0uIbwIFFws9g/gqvoUyw0+eXNnWJOArlNXENY9P4V1Fz0haEENIbGjV70LWgVDW1ksLE2Eog2Q86X30xJQEwJ5w4XaAbXTV71cATIriA4Ecg8boxMffLTzVHfIHwTq9h7Ru3xQUZi1YQcmnEkMSoicJFPkA3fXMJE27W0/7m9WwBkblxCXe7Q9hRxcqu56tLbK+6Sf5EpEYds0tyEBSbuMK9dFQ/ij5JnSLJrCsExh1Gogs+iZQBoQoGDAyfpOlf7Rvd9YL/sqAg/lXcfwSibL1wmEZNrTamVdkfNtAGmRzvlahMPbScb53E6y2bfYvVyGPwg1VRJdJiEAaUEQ0qIzJuxmeHvyNS74PnH4461NTJWPYkjWTZ3dpumHtQYgicYw3ZAnVFifT/Rcy+exWEp7F2uDLtcDFB3rkRjG6tO+oQCpftY2cL+wirs1++vfTiaQBvWAPVsBwTjDuQ/B4Ve0XuIRZao8f6b58r79hCSRSFipVKo9mUxas7Oz+l/tbFqrw3g83i40QVDIf9Tt/y1kfOw6pUeAMRbUDvSxEhfn5p/Lzkvfcu1XLyvgfQ7nMvFUVc27rrvaEkI5YhhG1bIsarKnxVt7Hf/4i+M4ay19okf7R5u2bou9HuoKQqOP1GL3rZ3OABvJVvhI3dYnMaggjYNEICLe3DKK7ND8U/ouwAC+ziJno0BraQAAAABJRU5ErkJggg==',
            size,
            origin,
            anchor
        );

  var marker = NMap.create('Marker', {
    position: new qq.maps.LatLng(31.259928358250843, 121.44005798879533),
    clickable: false,
    icon: icon,
    visible: true
  });

  var westSouth = document.querySelector('#westSouth');
  var eastNorth = document.querySelector('#eastNorth');
  var center = document.querySelector('#center');
  var realCenter = document.querySelector('#realCenter');
  westSouth.addEventListener('click', function() {
    marker.target.setPosition(polygon.target.getBounds().getSouthWest())
    console.log(polygon.target.getBounds().getSouthWest());
  });
  eastNorth.addEventListener('click', function() {
    marker.target.setPosition(polygon.target.getBounds().getNorthEast())
    console.log(polygon.target.getBounds().getNorthEast());
  });

  center.addEventListener('click', function() {
    marker.target.setPosition(polygon.target.getBounds().getCenter())
  });
  realCenter.addEventListener('click', function() {
    var a = polygon.getInnerPoint()
    marker.target.setPosition(a)
    // var x = [];
    // path.forEach(function(item) {
    //   x.push(coord(item.lat, item.lng));
    // });

    // setTimeout(function() {
    //   console.log(x)
    //   // var a = polygon([coord(31.22359239584904, 121.41085568195781), coord(31.22147071346038, 121.41085565411282), coord(31.22147071346038, 121.40837464776708), coord(31.22165649879026, 121.41064913316667), coord(31.22359239584904, 121.41085568195781)]);
    //   var a = polygon([coord(31.26098919348343, 121.44129901109413), coord(31.258867511094756, 121.44129898319707), coord(31.258867511094756, 121.4388169943936), coord(31.26098919348343, 121.43881696649655)]);

    //   window.parent.a = a;
    // }, 1)
    // function coord(x,y)  {  return new jsts.geom.Coordinate(x,y); }
    // function linstr(coords) {  return factory.createLineString(coords); }
    // function linring(coords) {  return factory.createLinearRing(coords); }
    // function polygon(coords,holes)  { return factory.createPolygon(linring(coords),holes); }

  });
  window.parent.polygon = polygon;
  qq.maps.event.addListener(map.target, 'click', function(e) {
    console.log(e)
  })

  function latlng(point) {
    return {
      latitude: point.lat,
      longitude: point.lng
    }
  }


  map.addChild(polygon);
  map.addChild(slabel);
  map.addChild(marker);
  // map.fitBounds([polygon, slabel, marker]);
  map.fitBounds([polygon]);
});

