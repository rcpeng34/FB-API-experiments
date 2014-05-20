console.log('from inside /public/js/app.js');

//require fb
require(['public/scripts/fb.js', function(){
  console.log('async call done');
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

//require jqcloud for wordcloudkng
require(['public/scripts/jqcloud-1.0.4.js', function(){
  console.log('async call done');
}]);