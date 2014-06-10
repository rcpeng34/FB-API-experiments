window.locationArray = [];
window.map;

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

var initialize = function(){
  var mapOptions = {
    center: new google.maps.LatLng(0, 0),
    zoom: 1
  };
  map = new google.maps.Map(document.getElementById('map-container'), mapOptions);
  console.log('complete initialize');
};

$('document').ready(function(){console.log('in callback'); initialize();});

// plot all the markers in locationArray as markers on map
