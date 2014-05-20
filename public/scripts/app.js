console.log('from inside /public/js/app.js');

//require jqcloud for wordcloud
require(['public/scripts/jqcloud-1.0.4.js', function(){
  console.log('async call complete for jqcloud');
}]);

//require fbsoundcloud
// require(['public/scripts/fbsoundcloud.js', function(){
//   console.log('async call complete for fbsoundcloud');
// }]);

//require fbselfieratio
require(['public/scripts/fbselfieratio.js', function(){
  console.log('async call complete for fbselfieratio');
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