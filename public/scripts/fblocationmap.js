window.locationArray = [];
window.markerArray = [];

// assume that input array allows access to location in form arr[x].place.location
var pushLocationArray = function(inputArray) { 
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i].place && (inputArray[i].message || inputArray[i].images)) {
      // some might not have a place value, so check it first
      // also check if there is a message or image to display
      window.locationArray.push(inputArray[i].place.location);
      makeMarker(inputArray[i]);
    }
  }
};

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

var makeMarker = function(fbObj) { // this should only come from pushLocationArray
  // fbObj will either be a status or a picture
  /*
  case photo:
    source - url that can be accessed anywhere
    images - array with objects that have height, width, and source
    place - obj, long, lat, name
  case status:
    place - same as above
    message - string
  */
  var place = fbObj.place;
  var latlng = new google.maps.LatLng(place.location.latitude, place.location.longitude);
  var newMarker = new google.maps.Marker({
    position: latlng,
    map:map
  });
  if (fbObj.picture) { // if there's something there, it's a pic not a status
    var pic = fbObj.images[3];
    newMarker.info = new google.maps.InfoWindow({
      content: fbObj.place.name + '<br><img src="' + pic.source + '" width="' + pic.width*0.5 + '" height="' + pic.height*0.5 + '"></img>'
    });
  } else { // assume it's a status
    newMarker.info = new google.maps.InfoWindow({
      content: fbObj.place.name + '<br> Status: "' + fbObj.message + '"'
    });
  }
  google.maps.event.addListener(newMarker, 'click', function(){
    // use this because of scope, this refers to marker being clicked
    this.info.open(map, this);
  });
  markerArray.push(newMarker);
};