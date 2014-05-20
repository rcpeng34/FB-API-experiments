var statusArray = [];
var weightedStatusArray = [];

define(['facebook'], function(){
  // initializes fb call
  FB.init({
    appId : '711138455590961',
  });
  // logs in and begins making api calls to paths indicated in apiCalls
  // this is for exploratory purposes

  // FB.login(function(response){
  //   if (response.authResponse) { // response successful, do stuff

  //     var apiCalls = ['/me/albums', '/me/photos', '/me/locations', '/photos/uploaded', '/me/statuses', '/me/tagged_places'];
  //     for (var i = 0; i < apiCalls.length; i++) {
  //       FB.api(apiCalls[i], function(response) {
  //         console.log('response |', response);
  //       });
  //     }
  //   } else {
  //     console.log('User cancelled login or did not fully authorize.');
  //   }
  // }, {scope: ['user_location', 'user_photos', 'user_status', 'user_tagged_places', 'read_stream']}); // define permissions requested of the login

  // Goal: store all status updates
  // Note: statuses are limited to last 100, I don't know why
  FB.login(function(response){
    console.log('in response function');
    console.log(response);
    if (response.authResponse){
      console.log('authResponse', response.authResponse);
      FB.api('/me/permissions', function(response){
        console.log('permissions', response);
      });
      FB.api('/me/statuses?limit=100', function(response){
        // the call below will get the next page, however as mentioned above, the call is limited to 100
        // $.ajax({url: response.paging.next, complete: function(res) {console.log(res.responseText);}});
        statusArray = response.data;
        weightedStatusArray = calcWordWeighting(statusArray);
        $('#wordcloud').jQCloud(weightedStatusArray);
      });
    } else {
      console.log('User cancelled login or did not fully authorize.');
    }
  }, {scope:['user_status']});
});

// takes an array of status messages and returns an array of form required by jqcloud
// this is the form required: [{text: 'lorem', weight: 14}...]
var calcWordWeighting = function(statusArr) {
  var resultObj = {};
  var results = [];
  for (var i = 0; i < statusArr.length; i++) {
    console.log(statusArr[i]);
    // for each message extrapolate list of words
    var messageAsArray = statusArr[i]['message'].split(' ');
    //for each word, check if it is in resultObj, if it is, increment
    // if it is not, add it
    for (var j = 0; j < messageAsArray.length; j++) {
      var word = messageAsArray[j];
      if(resultObj[word]) { // it exists
        resultObj[word] += 1;
      } else { // it does not exist yet
        resultObj[word] = 1;
      }
    }
  }
  // now that resultObj is created, we must turn it into the right form for jqcloud
  for (var key in resultObj) {
    results.push({text: key, weight: resultObj[key]});
  }
  return results;
};