var movieApp = angular.module('movieApp', []);
function SearchController($scope, $location) {
  $scope.search = function() {
    if ($scope.query) {
      $location.path('/results').search('q', $scope.query);
    }
  };
}

SearchController.$inject = ['$scope', '$location'];

movieApp.controller('SearchController', SearchController);
