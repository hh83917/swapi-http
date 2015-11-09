angular.module('StarWars').controller('CharacterCtrl', function($scope, $stateParams, CharacterService, character) {
	$scope.character = character;
});