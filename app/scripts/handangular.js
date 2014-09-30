  'use strict';

var handangular = angular.module('handangular', [
  'ui.router',
  'ngAnimate'
  ]);

handangular.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/projects');

    $stateProvider
      .state('/about', {
        url: '/about',
        templateUrl: '/views/about.html',
        controller: 'ProjectsCtrl'
      })
      .state('projects', {
        abstract: true,
        url: '/projects',
        templateUrl: '/views/projects.html',
      })
      .state('projects.index', {
        url:'',
        templateUrl: '/views/projects.index.html',
        controller: 'ProjectsCtrl',
      })
      .state('projects.list', {
        url: '/{project}',
        templateUrl: '/views/projects.list.html',
        controller: 'ProjectsCtrl',
        resolve: {
          project: ['$stateParams', function($stateParams){
            return $stateParams.project;
          }]
        }
      })
      .state('projects.list.content', {
        url: '/content/{section}',
        templateUrl: '/views/projects.list.content.html',
        controller: 'ProjectsCtrl',
        resolve: {
          section: ['$stateParams', function($stateParams){
            return $stateParams.section;
          }]
        }
      })
      .state('projects.list.video', {
        url: '/video/{section}',
        templateUrl: '/views/projects.list.video.html',
        controller: 'ProjectsCtrl'

      });


});

handangular.run(['$rootScope', '$state', function ($rootScope, $state) {
  $rootScope.$state = $state;
}])
