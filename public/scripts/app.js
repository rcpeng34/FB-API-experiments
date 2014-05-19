console.log('from inside /public/js/app.js');

require(['public/scripts/fb.js', function(){
  console.log('async call done');
}])

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
require(['fb']);