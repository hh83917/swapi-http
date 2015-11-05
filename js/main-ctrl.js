angular.module('StarWars').controller('MainCtrl', function($scope, CharacterService) {
	
	$scope.selectCharacter = function(char) {
		CharacterService.getCharacterData(char)
			.then(function(charComplete) {
				$scope.selectedCharacter = charComplete;
			});
	};

	CharacterService.getCharacters()
		.then(function(characters) {
			$scope.characters = characters;
		});

});


