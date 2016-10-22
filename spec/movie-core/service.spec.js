describe("MovieCore", function () {
  var PopularMovies;
  var $httpBackend;

  beforeEach(function () {
    angular.mock.module('movieCore');

    angular.mock.inject(function(_PopularMovies_, _$httpBackend_) {
      PopularMovies = _PopularMovies_;
      $httpBackend = _$httpBackend_;
    });
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it("creates a popular movie", function () {
    var popularMovie = new PopularMovies({
      movieId: 'tt0076759',
      description: 'Greate movie!'
    });

    expectedData = function(data) {
      return angular.fromJson(data).movieId === popularMovie.movieId;
    }

    $httpBackend.expectPOST(/./, expectedData).respond();

    popularMovie.$save();

    expect($httpBackend.flush).not.toThrow();
  });

  it("gets movie by id", function () {
    $httpBackend.expectGET('popular/tt0076759').respond(200);

    PopularMovies.get({ movieId: 'tt0076759' });

    expect($httpBackend.flush).not.toThrow();
  });

  it("creates a new movie", function () {
    var popularMovie = new PopularMovies({
      movieId: 'tt0076759',
      description: 'Greate movie!'
    });

    $httpBackend.expectPUT('popular').respond(200);

    popularMovie.$update();

    expect($httpBackend.flush).not.toThrow();
  });
});
