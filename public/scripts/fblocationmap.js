window.locationArray = [];
window.markerArray = [];
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

$('document').ready(function(){initialize();});

var plotMarkers = function() {
// plot all the markers in locationArray as markers on map
  for (var i = 0; i < window.locationArray.length; i++){
    var place = window.locationArray[i];
    var latlng = new google.maps.LatLng(place.latitude, place.longitude);
    var newMarker = new google.maps.Marker({
      position: latlng,
      map: map
    });
    newMarker.info = new google.maps.InfoWindow({
      content: place.street + ', ' + place.city + ' ' + place.state
    });
    google.maps.event.addListener(newMarker, 'click', function(){
      this.info.open(map, this);
    });
    markerArray.push(newMarker);
  }
};
