'use strict';

var app = angular.module('jotegui', [
	'joteguiControllers'
]);

app.config(['$locationProvider', function($locationProvider){
	$locationProvider.html5Mode(false).hashPrefix('!');
}]);