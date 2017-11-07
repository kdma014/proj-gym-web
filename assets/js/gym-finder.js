/*----------------------------------------
* GYM FINDER SCRIPT
* for TALWALKARS GYM
*
*------------------------------------------*/



var _mapContainer = document.getElementById("gymFinderMap");

var glob_markers = [];
var glob_infowindows = [];
var glob_map;


// LatLong of popular cities for quick search
var cities = {
  "mumbai": {"lat": 19.0821978, "lng": 72.7410984},
  "delhi": {"lat": 28.6466772, "lng": 76.8130671},
  "bangalore": {"lat": 12.9538477, "lng": 77.3507377},
  "kolkata": {"lat": 22.6757521, "lng": 88.0495299}
};


// Initializing the map
function initMap() {

   var map; var markers = [];	
   var GymMarkerIcon = "assets/img/icons/maps-and-flags.png";
   var mumbai =  cities.mumbai;



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

  var autocomplete = new google.maps.places.Autocomplete(
    input,
    {
     types: ['(cities)'],
     componentRestrictions: {country: "in"}
    }
  );
      autocomplete.bindTo('bounds', map);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
      searchBox.setBounds( map.getBounds() );
  });   

  // Cancel submit event
  google.maps.event.addDomListener(input, "keydown", function(){
    if (event.keyCode === 13 && $('.pac-container:visible').length) { 
      event.preventDefault(); 
    }
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

/* Query parameters in the URL */
function get_url_params(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}




/**************************************************
THIS IS THE STRUCTURE OF THE DATA FOR GYMS' EACH
LOCATION.
**************************************************/
var gym_locations = [

  {
    "id"  : 0,
    "name": "Talwalkars Gym - Nerul",
    "programs": ["Zumba", "Zorba"],
    "address": "Sanpada\nNavi Mumbai, Maharashtra 400705",
    "city": "Mumbai",

    "latLng": {
      "lat": 0,
      "lng": 0
    },

    "mapsUrl": "#google_maps_url_if_any"
  }


];


/*
The content window should look like this:

<div class="contentWindowGym"><div class="talwalkars-logo"><img src="images/talwalkars_logo.png" width="72"/></div><div class="location-details">
        
        <h3 class="gym-name">Talwalkars Gym, Narul</h3>
        <p class="detail-row address">
        Kalina, Santacruz East<br>
        Mumbai, Maharashtra 400098<br>
        India
        </p>
        <p class="detail-row timings">
            <b>9pm to 10pm</b>
        </p>

        <p> class"detail-row view-on-maps"
            <a href="#viewonmaps">View on maps</a>
        </p>

</div></div>
*/