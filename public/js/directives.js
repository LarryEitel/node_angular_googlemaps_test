
angular.module('ofm.directives', [])
.directive('map', function() {
  return {
    restrict: 'E',
    scope:{
      name: 'bind'
    },
    template: '<span>{{name}}</span>'
  }
});
