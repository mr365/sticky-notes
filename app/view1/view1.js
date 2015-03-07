'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/new',{
  	templateUrl: 'view1/createnotes.html',
  	controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http', '$rootScope',function($scope,$http, $rootScope) {

 var field = document.getElementById("typedData");
 if (sessionStorage.getItem("autosave")) {
    
   field.value = sessionStorage.getItem("autosave");
   $scope.inputMessage = field.value;
 }
 
 $scope.$watch('inputMessage', function(oldval, newval){
 	sessionStorage.setItem("autosave", field.value);

 }); 
String.prototype.insert = function (index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return string + this;
};
 $scope.save = function(){
 	var y = localStorage["savedArray"] || '["' + $scope.inputMessage + '"]';
 	localStorage["savedArray"] = y.insert(y.length-2, '", "' + $scope.inputMessage);
  console.log($scope.inputMessage);
 	$scope.inputMessage = "";
 	field.value="";
 	$rootScope.note = JSON.parse(localStorage["savedArray"]);
 	$rootScope.note = $rootScope.note.slice().reverse();
 	$rootScope.note = _.uniq($rootScope.note);

 }
}]);