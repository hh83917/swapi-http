var app = angular.module('StarWars', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('main', {
			url: '/',
			controller: 'MainCtrl',
			templateUrl: '/templates/main.html',
			resolve: {
				characters: function($stateParams, CharacterService) {
					return CharacterService.getCharacters();
				}
			}
		})
		.state('character', {
			url: '/character/:characterId',
			controller: 'CharacterCtrl',
			templateUrl: '/templates/character.html',
			resolve: {
				character: function($stateParams, CharacterService) {
					return CharacterService.getCharacterData($stateParams.characterId);
				}
			}
		});
});