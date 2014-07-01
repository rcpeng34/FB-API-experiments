
window.map;

var initialize = function(){
  var mapOptions = {
    center: new google.maps.LatLng(0, 0),
    zoom: 1
  };
  map = new google.maps.Map(document.getElementById('map-container'), mapOptions);
};

//require jqcloud for wordcloud
require(['public/scripts/jqcloud-1.0.4.js', function(){
  console.log('async call complete for jqcloud');
}]);

require.config({
  shim: {
    'facebook' : {
      exports: 'FB'
    }
  },
  paths: {
    'facebook': '//connect.facebook.net/en_US/all'
  }
});

define(['facebook'], function(){
  // initializes fb call
  FB.init({
    appId : '711138455590961', // this app id might need to be hidden at some point
  });
});

$('document').ready(function(){
  initialize();
  document.getElementById('searchBar').style.cursor = 'pointer';
  document.getElementById('searchBar').onclick = function() {
        FB.login(function(response){
          
          //require fbstatuscloud
          require(['public/scripts/fbstatuscloud.js', function(){
            console.log('async call complete for fbstatuscloud');
          }]);

          //require fbselfieratio
          require(['public/scripts/fbselfieratio.js', function(){
            console.log('async call complete for fbselfieratio');
          }]);

          //require fblocationmap
          require(['public/scripts/fblocationmap.js', function(){
            console.log('async call complete for fblocationmap');
          }]);
          
        }, {scope:['user_status', 'user_photos']});
  };
});
