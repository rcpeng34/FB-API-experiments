console.log('from inside /public/js/app.js');

//require jqcloud for wordcloud
require(['public/scripts/jqcloud-1.0.4.js', function(){
  console.log('async call complete for jqcloud');
}]);

//require fbstatuscloud
require(['public/scripts/fbstatuscloud.js', function(){
  console.log('async call complete for fbstatuscloud');
}]);

//require fbselfieratio
// require(['public/scripts/fbselfieratio.js', function(){
//   console.log('async call complete for fbselfieratio');
// }]);

//require fblocationmap
// require(['public/scripts/fblocationmap.js', function(){
//   console.log('async call complete for fblocationmap');
// }]);

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