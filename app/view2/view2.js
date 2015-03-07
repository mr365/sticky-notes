'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'view2/noteslist.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$rootScope', '$scope',function($rootScope, $scope) {
	$scope.savedNotes = $rootScope.note;
	console.log($scope.savedNotes);
	console.log($rootScope.note);

	$scope.deleteNote = function(index){
		$scope.savedNotes.splice(index,1);
		$rootScope.note=$scope.savedNotes;
		if ($scope.savedNotes.length != 0){
			localStorage["savedArray"]=JSON.stringify($scope.savedNotes);
		}
		else{
			localStorage["savedArray"] = '';
		}
	}

}]);