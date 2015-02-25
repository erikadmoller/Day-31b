angular.module('basic.controllers', ['basic.services'])
.controller('BasicCtrl', function($scope, Random, Students, Dashing) {

	$scope.testTest = function() {
		$scope.placeholder = ['a', 'b', 'c', 'd', 'e', 'f'];
		console.log(Random($scope.placeholder));
	};
	$scope.testTest();

	$scope.studentPairs = function() {
		$scope.students = ['Billy', 'Celine', 'Michael', 'Barbara', 'Jimmy', 'Ludacris']; 
		console.log(Students($scope.students));
	}
	$scope.studentPairs();

	$scope.nospacesString = function() {
		$scope.stringy = "Have a nice day!";
		console.log(Dashing($scope.stringy));
	}
	$scope.nospacesString();
});