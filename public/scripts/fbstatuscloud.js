window.statusArray = [];
window.weightedStatusArray = [];

// define(['facebook'], function(){
  
  // // initializes fb call
  // FB.init({
  //   appId : '711138455590961', // this app id might need to be hidden at some point
  // });


  // FB.login(function(response){
  //   console.log(response);
  //   if (response.authResponse){
  //     FB.api('/me/permissions', function(res){
  //       console.log('permissions', res);
  //     });
      FB.api('/me/statuses?limit=100', function(res){
        // the call below will get the next page, however as mentioned above, the call is limited to 100
        // $.ajax({url: res.paging.next, complete: function(res) {console.log(res.responseText);}});
        window.statusArray = res.data;
        // statusArray is the correct form for pushLocationArray so call it here
        pushLocationArray(window.statusArray);
        window.weightedStatusArray = calcWordWeighting(window.statusArray);
        
        var colwidth = $('.firstcol').width();
        $('#wordcloud').jQCloud(window.weightedStatusArray, {
          width: colwidth,
          height: Math.max($('.firstcol').height(), 300)
        });
        
//       });
    });
    // else {
//       console.log('User cancelled login or did not fully authorize.');
//     }
//   }, {scope:['user_status', 'user_photos']});
// });

// takes an array of status messages and returns an array of form required by jqcloud
// this is the form required: [{text: 'lorem', weight: 14}...]
var calcWordWeighting = function(statusArr) {
  var resultObj = {};
  var results = [];
  // totalWords is the wordcount of all messages
  //totalWords/# keys in resultObj will give mean weight
  var totalWords = 0;
  for (var i = 0; i < statusArr.length; i++) {
    var messageAsArray = statusArr[i].message.split(' ');
    // add # words in the message to totalWords
    totalWords += messageAsArray.length;
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
  // since there is lots of singletons, to make sure the cloud isn't too crowded
  // and to protect against edge users who only use words once, find the mean weight
  // use the mean weight to set min weight to display/return
  var meanWeight = totalWords/Object.keys(resultObj).length;

  // now that resultObj is created, we must turn it into the right form for jqcloud
  for (var key in resultObj) {
    if (resultObj[key] > meanWeight){
      results.push({text: key, weight: resultObj[key]});
    }
  }
  return results;
};