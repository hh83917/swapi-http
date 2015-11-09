angular.module('StarWars').service('CharacterService', function($http, $q) {

	this.getCharacters = function() {
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'http://swapi.co/api/people/'
		}).then(function(result) {
			for(var i = 0; i<result.data.results.length; i++) {
				var char = result.data.results[i];
				var split = char.url.split('/');
				var characterId = split[split.length-2];
				char.id = characterId;
			}
			deferred.resolve(result.data.results);
		});
		return deferred.promise;

		// return $http({
		// 	method: 'GET',
		// 	url: 'http://swapi.co/api/people/'
		// });
	};

	this.getCharacterData = function(characterId) {
		var deferred = $q.defer();
		//get character data
		var characterComplete;
		$http({
			method: 'GET',
			url: 'http://swapi.co/api/people/'+characterId
		}).then(function(result) {
			//result.data is char data
			characterComplete = result.data;
			return $http({
				method: 'GET',
				url: characterComplete.homeworld
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