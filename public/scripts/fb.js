define(['facebook'], function(){
  // initializes fb call
  FB.init({
    appId : '711138455590961',
  });
  // logs in and begins making api calls
  FB.login(function(response){
    if (response.authResponse) { // response successful, do stuff

      var apiCalls = ['/me/albums', '/me/photos', '/me/locations', '/photos/uploaded', '/me/statuses', '/me/tagged_places'];
      for (var i = 0; i < apiCalls.length; i++) {
        FB.api(apiCalls[i], function(response) {
          console.log('response |', response);
        });
      }
    } else {
      console.log('User cancelled login or did not fully authorize.');
    }
  }, {scope: ['user_location', 'user_photos', 'user_status', 'user_tagged_places', 'read_stream']}); // define permissions requested of the login
});

// Goal: store all status updates
FB.login(function(response){
  if (response.authResponse){

  } else {
    console.log('User cancelled login or did not fully authorize.');
  }
}, {})