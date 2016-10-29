describe('Search Controller', function () {
  var $scope;
  var $location;

  beforeEach(function() {
    module('movieApp');

    $scope = {};

    inject(function(_$controller_, _$location_) {
      $location = _$location_;
      _$controller_('SearchController', { $scope: $scope, $location: $location });
    });
  });

  it('redirects to query results page for non-empty query', function () {
    $scope.query = 'star wars';
    $scope.search();
    expect($location.url()).toBe('/results?q=star%20wars');
  });

  it('should not reirect to query results for empty query', function () {
    $scope.query = '';
    $scope.search();
    expect($location.url()).toBe('');
  });
});
