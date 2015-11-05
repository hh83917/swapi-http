angular.module('StarWars').service('CharacterService', function($http, $q) {
	this.getCharacters = function() {
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'http://swapi.co/api/people/'
		}).then(function(result) {
			deferred.resolve(result.data.results);
		});
		return deferred.promise;

		// return $http({
		// 	method: 'GET',
		// 	url: 'http://swapi.co/api/people/'
		// });
	};

	this.getCharacterData = function(char) {
		var deferred = $q.defer();
		//get character data
		var characterComplete;
		$http({
			method: 'GET',
			url: char.url
		}).then(function(result) {
			//result.data is char data
			characterComplete = result.data;
			return $http({
				method: 'GET',
				url: char.homeworld
			});
		}).then(function(result) {
			//result.data is homeworld
			characterComplete.homeworld = result.data;
			deferred.resolve(characterComplete);
		});
		//return char + homeworld
		return deferred.promise;
	};
});