angular.module('basic.services', [])

.factory('Random', function() {
	return function(array) {
		var computerChoice = Math.floor(Math.random() * array.length);
		return array[computerChoice];
	}
	// var test = function(array) {
	// 	...
	// }
	// return test;
})

.factory('Students', function() {
	var pairsOf = function(array) {

		var computerChoice1 = Math.floor(Math.random() * array.length);
		// console.log(computerChoice1);

		var computerChoice2 = Math.floor(Math.random() * array.length);
		// console.log(computerChoice2);

			while(computerChoice1 === computerChoice2) {
				computerChoice1++;
			}

		var myNewArray1 = array[computerChoice1];
		var myNewArray2 = array[computerChoice2];
		
		return myNewArray1 + ", " + myNewArray2
	}
	return pairsOf;
})

.factory('Dashing', function() {
	var stringDash = function(string) {

	var stringComplete = string.replace(/ /g, "-");
	return stringComplete
	}
	return stringDash;
})
