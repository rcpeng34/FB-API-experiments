var photoArray = [];

define(['facebook'], function(){
  // initializes fb call
  FB.init({
    appId : '711138455590961', // this app id might need to be hidden at some point
  });
  FB.login(function(response){
    if(response.authResponse){
      FB.api('/me/photos?limit=100', function(res){
        photoArray.push(res.data);
        $.ajax({
          url: res.paging.next, complete: function(res) {
            photoArray.push(JSON.parse(res.responseText).data);
            console.log(res);
          }
        });
      });
    } else {
       console.log('User cancelled login or did not fully authorize.');      
    }
  }, {scope: ['user_photos']});
});