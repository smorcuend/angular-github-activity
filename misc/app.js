angular.module('app', [
  'ngRoute',
  'ngResource',
  'app.tpls',
  'ngResource',
  'github.activity'
])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  
  $locationProvider.html5Mode(true);

  $routeProvider.when('/angular-github-activity', {
    templateUrl:'views/angular-github-activity.tpl.html',
    controller:'AppCtrl'
  });
  
  $routeProvider.otherwise({redirectTo:'/angular-github-activity'});
}])


.controller('AppCtrl', ['$scope','GithubActivityService', function($scope,GithubActivityService) {

  GithubActivityService.events({
    user:'gigablox',
    params:{
      access_token:'768b1d7b319d58bb2c7b1365d38b74b25ab001c6',
      callback:'JSON_CALLBACK'
    }
  }).get().$promise.then(function(events){
    $scope.events = events.data;
  });

  $scope.options = {
    limit:5
  };
}]);