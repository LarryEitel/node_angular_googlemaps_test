function MapCtrl($scope, $map) {
  $scope.mapInit  = function () {
    $scope.initializing = true;
    return $map
      .then( function( response ){

        var myOptions = {
          zoom: 6,
          center: new google.maps.LatLng(46.87916, -3.32910),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        $map = new google.maps.Map(document.getElementById('#map'), myOptions);

        $scope.initializing = false;
      })
  };

  $scope.mapInit()
      
}
