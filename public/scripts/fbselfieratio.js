window.photoArray = [];
window.photosByYou = 0;
window.photosByOthers = 0;
window.username;

FB.api('/me/photos?limit=400', function(res){
  window.photoArray.push(res.data);
  // with more time, this is where to begin logic to grab data from pagination
  // note that total photos is only 400 so it's hardcoded for the purpose of the hackathon
  // you can call getNextPage and break when the last item in the array has lengh < the limit in '/me/photos?limit=x'

  // the section below is unnecessary as we're calling the max number of facebook photos, 400
  // in case of pagination, assume window.photoArray is an array of arrays (the pages)
  for (var i = 0; i < window.photoArray.length; i++ ) {
    // each inner array (the pages) is the correct form for pushLocationArray so call it here
    pushLocationArray(window.photoArray[i]);
    // run through the loop and increment photographer counters
    for (var j = 0; j < window.photoArray[i].length; j++) {
      // only increment photosByYou if you took it and you're the only one tagged
      if (window.photoArray[i][j].from.name === window.username && 
        window.photoArray[i][j].tags.data.length === 1) {
        window.photosByYou++;
      } else {
        window.photosByOthers++;
      }
    }
  }
  
  // set text for the graph
  $('#selfieText').append(window.photosByOthers + window.photosByYou + ' photos');
  $('#leftBar .barText').append(window.photosByYou + ' selfies');
  $('#rightBar .barText').append(window.photosByOthers + ' normal pics');

  // set the graph to the proper lengths, the larger bar will be left untouched
  // set the other bar in relation to larger bar (width: 50%)
  if (window.photosByYou >= window.photosByOthers) { // left bar should be greater
    // leave left bar alone, set right bar length
    $('#rightBar').css('width', function(){
      return window.photosByOthers/window.photosByYou * 50 + '%';
    });
  } else { // right bar should be greater
    $('#leftBar').css('width', function(){
      return window.photosByYou/window.photosByOthers * 50 + '%';
    });
  }
  // now that everything has been set, unhide them
  $('#leftBar').css('visibility', 'visible');
  $('#rightBar').css('visibility', 'visible');
  $('.outerBar').css('visibility', 'visible');
});


// this is an incomplete method to grab data from the next page
// return a bool on whether it is the last page and the next page's url if not null
// it should accept as argument the array to push to
// note this is not necessary for this purpose
var getNextPage = function(nextURL) {
  $.ajax({
    url: res.paging.next, complete: function(res) {
      window.photoArray.push(JSON.parse(res.responseText).data);
      return res.paging.next;
    }
  });
};
