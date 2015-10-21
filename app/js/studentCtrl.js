var app=angular.module("myapp",[]);

app.controller("studentCtrl",function($scope){
	
	$scope.students= [
	                  {'name':'ravi', 'rollno':'1'},
	                  {'name':'john', 'rollno':'2'},
	                  {'name':'paul', 'rollno':'3'},
	                  {'name':'raju', 'rollno':'4'}	];
});