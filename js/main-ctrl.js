angular.module('StarWars').controller('MainCtrl', function($scope, $state, CharacterService, characters) {
	$scope.characters = characters;
});


