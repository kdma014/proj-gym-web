/*----------------------------------------
* GYM FINDER SCRIPT
* for TALWALKARS GYM
*
*------------------------------------------*/



var _mapContainer = document.getElementById("gymFinderMap");

var glob_markers = [];
var glob_infowindows = [];
var glob_map;

function initMap() {

   var map;
   var markers = [];	

   var mumbai = {lat: 18.911,lng: 72.877};

   var GymMarkerIcon = "assets/img/icons/maps-and-flags.png";


  // Create the map
  map = new google.maps.Map(_mapContainer, {
    zoom: 12,
    center: mumbai,
    disableDefaultUI: true,
    mapTypeId: 'roadmap',

    // Controls to show
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
    },

    // Color
    fillColor: "#85cad1",
    fillOpacity: 0.2
  });

  // To program it in the global scope
  glob_map = map;



  // Autocomplete input
  var card = document.getElementById('pac-card');
  var input = document.getElementById('location_name');
  var searchBox =  new google.maps.places.SearchBox(input);

  var autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo('bounds', map);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
      searchBox.setBounds( map.getBounds() );
  });   


  var markers = [];

  searchBox.addListener('places_changed', function() {

    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });

    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();

    places.forEach(function(place) {

      if (!place.geometry) {
      	window.alert("Please enter a place name that's valid..");
        console.log("Returned place contains no geometry");
        return;
      }

      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });

    map.fitBounds(bounds);
  });


  /*
  * Update Salon Location boxes on changes
  */

  map.addListener("bounds_changed", function(e){

    console.log("bounds changed");

    var markersIdShow = [];

    for (var i = _markers_arr.length - 1; i >= 0; i--) {
      var currentMarker = _markers_arr[i];
      if ( map.getBounds().contains( currentMarker.getPosition() ) ) {
        markersIdShow.push( currentMarker.get("id") ) ;
        console.log( currentMarker.get("id") + " is in bounds" );
      }
    }

    // Show salon list items
    show_salonList_item( markersIdShow );

  });


  // Button click to search for entered keyword
  document.getElementById('location_search_submit').onclick = function () {
      var _input = input;

      google.maps.event.trigger(_input, 'focus')
      google.maps.event.trigger(_input, 'keydown', { keyCode: 13 });
  };


}









/* Finds the nearest marker */
function rad(x) {return x*Math.PI/180;}

function find_closest_marker( event ) {

    var lat = event.latLng.lat();
    var lng = event.latLng.lng();
    var R = 6371; // radius of earth in km
    var distances = [];
    var closest = -1;
    for( i=0; i<map.markers.length; i++ ) {
        var mlat = map.markers[i].position.lat();
        var mlng = map.markers[i].position.lng();
        var dLat  = rad(mlat - lat);
        var dLong = rad(mlng - lng);
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        distances[i] = d;
        if ( closest == -1 || d < distances[closest] ) {
            closest = i;
        }
    }

    alert(map.markers[closest].title);
}


/**************************************************
Since the number of Salons is not very big and is 
not subject to change every now and then we can
put the details of the locations in the JS file
as an array filled with JSON Objects
**************************************************/
