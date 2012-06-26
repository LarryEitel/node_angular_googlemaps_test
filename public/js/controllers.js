
function MapCtrl($scope, GoogleMaps) {
  if (!GoogleMaps.wasMapInitialized()) {
    var lat = 46.87916;
    var lng = -3.32910;
    var map_id = '#map';
    initialize(map_id, lat, lng);
  }
  function initialize(map_id, lat, lng) {
    var myOptions = {
      zoom : 8,
      center : new google.maps.LatLng(lat, lng),
      mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map($(map_id)[0], myOptions);
  }
}

//MapCtrl.$inject = ['$scope','GoogleMaps'];

// function MapCtrl($scope, GoogleMaps) {
//   $scope.callWasMapInitialized = function() {
//     if (!wasMapInitialized()) {
//       var lat = 46.87916;
//       var lng = -3.32910;
//       var map_id = '#map';
//       initialize(map_id, lat, lng);
//     }
//   };
//   function initialize(map_id, lat, lng) {
//     var myOptions = {
//       zoom : 8,
//       center : new google.maps.LatLng(lat, lng),
//       mapTypeId : google.maps.MapTypeId.ROADMAP
//     };
//     var map = new google.maps.Map($(map_id)[0], myOptions);
//   }

// }


// function MapCtrl($scope, GoogleMaps) {
//   console.log('MapCtrl');
//   //Each time the view is switched to this, retrieve supermanMap
//   $scope.map = GoogleMaps.getMap('supermanMap');

//   $scope.editMap = function() {
//     $scope.map.kryptonite = true;
//   };
// }



//function MapCtrl($scope) {



  // function initialize(map_id, lat, lng) {
  //   var myOptions = {
  //     zoom : 8,
  //     center : new google.maps.LatLng(lat, lng),
  //     mapTypeId : google.maps.MapTypeId.ROADMAP
  //   };
  //   var map = new google.maps.Map(document.getElementById(map_id), myOptions);
  // }

  // var lat = 46.87916;
  // var lng = -3.32910;
  // var mapEl = '#map';
  // console.log($(mapEl));
  // if($(mapEl).length === 0) {
  //   initialize(mapEl, lat, lng);
  // } else {
  //   var answer = confirm("map is already loaded! reload it?");
  //   if(answer) {
  //     initialize(mapEl, lat, lng);
  //   }
  // }
//}
