var movieCoreModule = angular.module('movieCore', ['ngResource'])

PopularMovies.$inject = ['$resource'];

function PopularMovies($resource) {
  return $resource('popular/:movieId', { movieId: '@id'}, {
    update: {
      method: 'PUT'
    }
  });
}


movieCoreModule.factory('PopularMovies', PopularMovies);
