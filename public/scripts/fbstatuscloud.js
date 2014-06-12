window.statusArray = [];
window.weightedStatusArray = [];

FB.api('/me/statuses?limit=100', function(res){
  // the call below will get the next page, however as mentioned above, the call is limited to 100
  // $.ajax({url: res.paging.next, complete: function(res) {console.log(res.responseText);}});
  window.statusArray = res.data;
  // statusArray is the correct form for pushLocationArray so call it here
  pushLocationArray(window.statusArray);
  window.weightedStatusArray = calcWordWeighting(window.statusArray);
  
  // determine highest weighted word
  var topWord = ['', 0];
  for (var i = 0; i < window.weightedStatusArray.length; i++){
    if (window.weightedStatusArray[i].weight > topWord[1]){
      // word has greater weight
      topWord[0] = window.weightedStatusArray[i].text;
      topWord[1] = window.weightedStatusArray[i].weight;
    }
  }
  console.log(topWord);
  $('#cloudText').append(' "'+topWord[0]+'"');
  var colwidth = $('.firstcol').width();
  $('#wordcloud').jQCloud(window.weightedStatusArray, {
    width: colwidth,
    height: Math.max($('.firstcol').height(), 300)
  });
});

// takes an array of status messages and returns an array of form required by jqcloud
// this is the form required: [{text: 'lorem', weight: 14}...]
var calcWordWeighting = function(statusArr) {
  var resultObj = {};
  var results = [];
  var commonWords = { // 50 most common english words from wikipedia
    the: true,
    be: true,
    to: true,
    of: true,
    and: true,
    a: true,
    'in': true,
    that: true,
    have: true,
    I: true,
    it: true,
    'for': true,
    'not': true,
    on: true,
    'with': true,
    he: true,
    as: true,
    you: true,
    'do': true,
    'at': true,
    'this': true,
    'but': true,
    his: true,
    by: true,
    'from': true,
    they: true,
    we: true,
    say: true,
    her: true,
    she: true,
    'or': true,
    an: true,
    will: true,
    my: true,
    one: true,
    'all': true,
    would: true,
    there: true,
    their: true,
    what: true,
    so: true,
    up: true,
    out: true,
    'if': true,
    about: true,
    who: true,
    'get': true,
    which: true,
    go: true,
    me: true
  };
  // totalWords is the wordcount of all messages
  //totalWords/# keys in resultObj will give mean weight
  var totalWords = 0;
  for (var i = 0; i < statusArr.length; i++) {
    var messageAsArray = statusArr[i].message.split(' ');
    //for each word, check if it is in resultObj, if it is, increment
    // if it is not, add it
    for (var j = 0; j < messageAsArray.length; j++) {
      // check if if the word is a common word if not, add
      var word = messageAsArray[j];
      if(!commonWords[word] && word !=='') { // not in common words
        totalWords++; //increment count of total words used
        if(resultObj[word]) { // it exists
          resultObj[word] += 1;
        } else { // it does not exist yet
          resultObj[word] = 1;
        }
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
