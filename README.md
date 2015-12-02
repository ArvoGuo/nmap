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
    var polygon = NMpa.create('Polygon', {
      //options
    })
  })

 //npm
  var NMap = require('nmap');
  NMap.onLoad(function() {
    var polygon = NMpa.create('Polygon', {
      //options
    })
  })

```

##API
  自己看

##关于修改腾讯地图源，暂不支持，自己玩吧

##Development
```
  npm install
  npm install -g webpack-dev-server
  webpack-dev-server --content-base ./public
```

##Build
```
  webpack --config webpack.config.prod.js
```