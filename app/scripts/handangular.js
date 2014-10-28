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
        templateUrl: 'partials/about.html',
        controller: 'ProjectsCtrl'
      })
      .state('projects', {
        abstract: true,
        url: '/projects',
        templateUrl: 'partials/projects.html',
      })
      .state('projects.index', {
        url:'',
        templateUrl: 'partials/projects.index.html',
        controller: 'ProjectsCtrl',
      })
      .state('projects.list', {
        url: '/{project}',
        templateUrl: 'partials/projects.list.html',
        controller: 'ProjectsCtrl',
        resolve: {
          project: ['$stateParams', function($stateParams){
            return $stateParams.project;
          }]
        }
      })
      .state('projects.list.index', {
        url: '',
        templateUrl: 'partials/projects.list.index.html',
        controller: 'ProjectsCtrl',
      })
      .state('projects.list.preview', {
        url: '/preview/{section}/{type}',
        templateUrl: 'partials/projects.list.preview.html',
        controller: 'ProjectsCtrl',
        resolve: {
          section: ['$stateParams', function($stateParams){
            return $stateParams.section;
          }],
          type: ['$stateParams', function($stateParams){
            return $stateParams.type;
          }],
          project: ['$stateParams', function($stateParams){
            return $stateParams.project;
          }]
        }
      })
      .state('projects.section', {
        url: '/{project}/section/{section}',
        templateUrl: 'partials/projects.section.html',
        controller: 'ProjectsCtrl',
        resolve: {
          section: ['$stateParams', function($stateParams){
            return $stateParams.section;
          }],
          project: ['$stateParams', function($stateParams){
            return $stateParams.project;
          }]
        }
      });


});

handangular.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
   $rootScope.$stateParams = $stateParams;
}]);
