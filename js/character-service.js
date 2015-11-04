angular.module('StarWars').service('CharacterService', function($http) {
	this.getCharacters = function() {
		return $http({
			method: 'GET',
			url: 'http://swapi.co/api/people/'
		});
	};
});