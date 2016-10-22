var omdbModule = angular.module('omdb', [])

function omdbApi($http, $q) {
  var service = {};
  var baseUrl = 'http://www.omdbapi.com/?v=1&';

  function httpPromise(url) {
    var deferred = $q.defer();
    $http.get(url)
      .success(function(data) { deferred.resolve(data); })
      .error(function() {
        deferred.reject();
      });

    return deferred.promise;
  }

  service.search = function search(query) {
    var requestUrl = baseUrl + 's=' + encodeURIComponent(query);
    return httpPromise(requestUrl);
  }

  service.find = function find(id) {
    var requestUrl = baseUrl + 'i=' + id;
    return httpPromise(requestUrl);
  }

  return service;
}

omdbModule.factory('omdbApi', omdbApi);
