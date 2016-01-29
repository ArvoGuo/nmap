#NMap

对腾讯地图API的进一步封装

##Install
```
  //bower
  bash: bower install nmap

  //npm
  bash: npm install nmap
```

##Usage
```
 //bower
  <script src="bower_components/nmap/build/nmap.dist.js"></script>
  NMap.onLoad(function() {
    var map = NMap.create('Map', document.getElementById('map'), {
      center: new qq.maps.LatLng(31.259928358250843, 121.44005798879533),
      zoom: 16
    });
    var polygon = NMap.create('Polygon', {
      //options
    })
    map.addChild(polygon);
    map.fitBounds([polygon]);
  })

 //npm
  var NMap = require('nmap');
  NMap.onLoad(function() {
    var map = NMap.create('Map', document.getElementById('map'), {
      center: new qq.maps.LatLng(31.259928358250843, 121.44005798879533),
      zoom: 16
    });
    var polygon = NMap.create('Polygon', {
      //options
    })
    map.addChild(polygon);
    map.fitBounds([polygon]);
  })

```

##API
  自己看

##关于修改腾讯地图源，暂不支持，自己玩吧

##Development && Test && Demo
```
  npm install
  npm install -g webpack-dev-server
  npm run start
```

##Build
```
  npm run build
```