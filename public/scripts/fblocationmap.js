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
