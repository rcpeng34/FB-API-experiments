window.locationArray = [];

// assume that input array allows access to location in form arr[x].place.location
var pushLocationArray = function(inputArray) { 
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i].place) {
      // some might not have a place value, so check it first
      window.locationArray.push(inputArray[i].place.location);
    }
  }
  console.log('finished pushing to locationArray');
};

/* //The code below is no longer useful because facebook deprecated user/locations and left the docs up
define(['facebook'], function(){
  // initializes fb call
  FB.init({
    appId : '711138455590961', // this app id might need to be hidden at some point
  });
  FB.login(function(response){
    if(response.authResponse){
      // if username is undefined, set it
      if(!username){
        FB.api('/me', function(res){
          username = res.name;
          console.log('username', username);
        });
      }
      // do not nest the api calls because even if you should nest the callbacks or use promisify...
      // the api call below is much slower: 400 photo objects vs in username.
      FB.api('/me/locations?limit=400', function(res){
        console.log(res);
        locationArray.push(res.data);
        // with more time, this is where to begin logic to grab data from pagination
        // note that total photos is only 400 so it's hardcoded for the purpose of the hackathon
        // you can call getNextPage and break when the last item in the array has lengh < the limit in '/me/photos?limit=x'
        console.log('Completed location fetch');
      });
    } else {
       console.log('User cancelled login or did not fully authorize.');      
    }
  }, {scope: ['user_photos', 'user_status', 'friend_photos', 'friend_status']});
});*/
