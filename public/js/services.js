'use strict';

//angular.module('ofm.services', []);

// angular.module('ofm.services', []).
//   factory('GoogleMaps', function() {
//     console.log("inside service");
//     var maps = 0;

//     function wasMapInitialized() {
//       if (!maps) {
//         maps += 1;
//         return 0;
//       } else {
//         return 1;
//       }
//     };
//   });

angular.module('GoogleMaps').
  factory('wasMapInitialized', function(){
    return function () {
      var maps = 0;

      if (!maps) {
        maps += 1;
        return 0;
      } else {
        return 1;
      }
    };
});

// angular.module('GoogleMaps', []).
//   factory('wasMapInitialized', function() {
//     console.log("inside service");
//     var maps = 0;

//     if (!maps) {
//       maps += 1;
//       return 0;
//     } else {
//       return 1;
//     }
//   });

// var services = angular.module('ofm.services', []);
// // register a new service
// services.value('ofm', 'GoogleMaps');

// // configure existing services inside initialization blocks.
// services.config(function($locationProvider) {
//   // Configure existing providers
//   $locationProvider.hashPrefix('!');
// });

// angular.service('persistencejs', function() {
//   persistence.store.websql.config(persistence,
//  'todo', 'todo database', 5*1024*1024);

//   var Todo = persistence.define('todo', {
//     content: 'TEXT',
//     done: 'BOOL'
//   });
//   persistence.schemaSync();
//   return {
//                 //singleton containing all methods to be called
//         };

// App.Controllers.TodoController = function (persistencejs) {/*...*/};
// App.Controllers.TodoController.$inject = ['persistencejs'];


// angular.factory('GoogleMaps', function() {
//   var maps = {};

//   function addMap(mapId) {
//     maps[mapId] = {};
//   }

//   function getMap(mapId) {
//     if (!maps[mapId]) addMap(mapId);
//       return maps[mapId];
//     }
//     return {
//       addMap: addMap,
//       getMap: getMap
//     }
//   });


// angular.module('ofm.services', [])
//   .value('GoogleMaps', function() {
//     var maps = {};

//     function addMap(mapId) {
//       maps[mapId] = {};
//     }

//     function getMap(mapId) {
//       if (!maps[mapId]) addMap(mapId);
//         return maps[mapId];
//       }
//       return {
//         addMap: addMap,
//         getMap: getMap
//       }
//     });



angular.module('TwitterServices', [ ], function($provide) {

  /**
   * Not using ngResource/$resource since we need direct access to `promise`
   * so intead we use the $http service directly.
   */
  $provide.factory('$twitter', function($http, $log) {

    // Prepare cross-domain JSONP call to Twitter
    var url = 'http://search.twitter.com/search.json'             +
              '?&rpp=100&include_entities=true&result_type=mixed' +
              '&callback=JSON_CALLBACK';

    /**
     * Publish search API for our custom Twitter service
     */
    return {
      /**
       * search() responds with promise instance
       * Intercept the initial response to parse the data items
       */
      search: function(searchTerm, lastID) {
        var params = '&q=' + searchTerm + (lastID ? '&since_id='+lastID : '');
        //$log.log( params );

        // return a promise
        return $http.jsonp( url + params ).then( function(response) {

          // parse data items and format post dates
          var data = response.data.results;
          for (var i = 0; i < data.length; i++)
          {
            data[i].date = Date.parse(data[i].created_at);
          }

          // Build special response
          return {
              items       : data,
              refreshURL  : response.data.refresh_url,
              query       : response.data.query
          };

        });
      }
    };

  });
});

