  'use strict';

  var handangular = angular.module('handangular', [
      'ui.router',
      'ngAnimate'
  ]);

  handangular.config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
          .state('projects', {
              url: '/project/{project}',
              templateUrl: 'partials/projects.list.html',
              controller: 'ProjectsCtrl',
              resolve: {
                  project: ['$stateParams', function($stateParams) {
                      return $stateParams.project;
                  }]
              }
          })
          .state('projects.preview', {
              url: '/preview/{section}/{type}', // when we are here
              templateUrl: 'partials/projects.list.preview.html', // use template
              controller: 'ProjectsCtrl', // use this controller
              resolve: { // please resolve params into usable variables
                  section: /* the name of params */ ['$stateParams', function($stateParams) { // shares the $stateParams object to here
                      return $stateParams.section; // assign whatever was in section
                  }],
                  type: ['$stateParams', function($stateParams) {
                      return $stateParams.type;
                  }],
                  project: ['$stateParams', function($stateParams) {
                      return $stateParams.project;
                  }]
              }
          })
          .state('projects.index', {
              url: '/{section}/{type}',
              templateUrl: 'partials/projects.list.index.html',
              controller: 'ProjectsCtrl',
              resolve: {
                  section: ['$stateParams', function($stateParams) {
                      return $stateParams.section;
                  }],
                  type: ['$stateParams', function($stateParams) {
                      return $stateParams.type;
                  }],
                  project: ['$stateParams', function($stateParams) {
                      return $stateParams.project;
                  }]
              }
          });

      $urlRouterProvider.otherwise('project/0/0/video');

  });


  handangular.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
  }]);

  handangular.controller('ProjectsCtrl', ['$scope', '$stateParams', '$sce', function($scope, $stateParams, $sce) {


      $scope.oppositeType = function(params) {
          return params == 'video' ? 'text' : 'video';
      }

      $scope.getLink = function(token) {
          return $sce.trustAsResourceUrl('//www.youtube.com/embed/' + token);
      }

      //retrieve #custom_treelist (staff names)
      var contentList = document.querySelector('#gstligallery_clientcontent ul').childNodes;

      var frameElement = document.querySelectorAll('iframe[src*="blank"]');

      console.log(['hello', frameElement.length, frameElement]);

      //if in iframe...
      if (frameElement.length == '1') {
          [].forEach.call(frameElement,
              function fn(elem) {
                  console.log(elem.contentWindow.document.body.querySelector('#gstligallery_content ul').childNodes);
              });
      }

      //set up temporary project object
      //todo convert to scope.projects
      $scope.projectsTemp = [{}];
      $scope.projectsTemp[0].sections = []

      //the coordinates for the hand
      var handCoords = [
          ['1.8', '1.5'],
          ['12', '9'],
          ['12', '12.6'],
          ['11', '16'],
          ['7', '18.6']
      ];

      // loops through Content List
      for (var index = 0; index < contentList.length; ++index) {

          //reuse current node
          var node = contentList[index];
          //if node is a HTML Element (nodeType = 1), proceed
          if (node.nodeType == 1) {

              //check node , nodeType, childElementCount
              console.log(["checking node...", node, node.nodeType, node.childElementCount]);

              // if we are on second childNode --> + name of the project creator
              if (index == 1) {

                  console.log("we are on the second node");

                  $scope.projectsTemp[0]['name'] = node.innerText;

                  //log current node & confirm data is pushed
                  console.log(["first element on list", $scope.projectsTemp, node.innerText]);


              }

              // if we are on the fourth childNode --> + project info
              else if (index == 3) {


                  console.log("we are on the fourth node");

                  var sectionList = node.childNodes[1].children;

                  console.log(handCoords[index][0]);

                  $scope.projectsTemp[0].sections.push({
                      "title": "",
                      "subtitle": node.firstChild.data,
                      "content": sectionList[0].innerText,
                      "video": sectionList[1].innerText,
                      "coords": {
                          "x": handCoords[index][0],
                          "y": handCoords[index][1],
                      },
                      "show": false
                  });

                  //log current node & confirm data is being pushed
                  console.log(['this is the project info', node]);

              }

              // if we are on any other node --> + info
              else {

                console.log(["we are on the rest of nodes", "and we will run the following elements", node.childNodes[1].children, "in the following nodes of", node.childNodes]);

                  // targets children of current node
                  var sectionList = node.childNodes[1].children;

                  console.log(sectionList[0].innerText);

                  console.log($scope.handCoords);

                  $scope.projectsTemp[0].sections.push({
                      "title": node.firstChild.data,
                      "subtitle": sectionList[0].innerText,
                      "content": sectionList[1].innerText,
                      "video": sectionList[2].innerText,
                      "coords": {
                          "x": sectionList[3].innerText,
                          "y": sectionList[4].innerText,
                      },
                      "show": false
                  });

                  //log current node & confirm data is being pushed
                  //console.log(["element has children so drilling down", $scope.projectsTemp, node.childNodes]);

              }

          }

      }



      console.log($scope.projects2);
      console.log($scope.projects)

      $scope.projects = $scope.projectsTemp;

      $scope.hover = function(node) {
          return node.show = !node.show;
      };

      $scope.type = 'video';

      $scope.project = $scope.projects[$stateParams.project];
      $scope.projectIndex = $stateParams.project;
      $scope.sectionIndex = $stateParams.section;

      if ($stateParams.section) {
          $scope.section = $scope.project.sections[$stateParams.section];
      };

  }]);
