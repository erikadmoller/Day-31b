angular.module('basic.controllers', ['basic.services'])
.controller('BasicCtrl', function($scope, Random, Students, Dashing) {

	$scope.testTest = function() {
		var placeholder = ['a', 'b', 'c', 'd', 'e', 'f'];
		return Random(placeholder);
	};
	$scope.testTest();
	$scope.bindModel = $scope.testTest();

	$scope.studentPairs = function() {
		var students = ['Billy', 'Celine', 'Michael', 'Barbara', 'Jimmy', 'Ludacris']; 
		return Students(students);
	}
	$scope.studentPairs();
	$scope.studentModel = $scope.studentPairs();

	$scope.nospacesString = function() {
		var stringy = "Have a nice day!";
		return Dashing(stringy);
	}
	$scope.nospacesString();
	$scope.stringModel = $scope.nospacesString();
});