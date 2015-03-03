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
          return $sce.trustAsResourceUrl('//www.youtube.com/embed/' + token + '?rel=0&autoplay=1&showinfo=0&modestbranding&theme=light&autohide=1');
      }


      //retrieve #custom_treelist (staff names)
      var contentList = document.querySelector('#gstligallery_clientcontent ul').children;


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

      function isBlank(str) {
          return (!str || /^\s*$/.test(str));
      }

      // loops through Content List
      for (var index = 0; index < contentList.length; ++index) {

          //reuse current node
          var node = contentList[index];
          //if node is a HTML Element (nodeType = 1), proceed
          if (node.nodeType === 1) {

              //check node , nodeType, childElementCount
              console.log(["checking node with index of...", index, node, node.nodeType, node.childElementCount]);

              // if we are on second childNode --> name of the project creator
              if (index == 0) {

                  console.log("we are on the second node");

                  console.log(node.innerHTML);

                  $scope.projectsTemp[0].name = node.innerHTML;

                  //log current node & confirm data is pushed
                  console.log(["new array", $scope.projectsTemp]);


              }

              // if we are on the second child --> project info
              else if (index == 1) {

                  console.log("we are on the project node");

                  var sectionList = node.childNodes[1].children;
                  var mediaLink = "video";

                  console.log(["section.video is empty ", sectionList[1].innerHTML == ""])
                  console.log(["section.content is empty  ", sectionList[0].textContent == ""])

                  if (sectionList[1].innerHTML == "" && sectionList[0].innerHTML == "") {
                      mediaLink = "";

                  } else if (sectionList[1].innerHTML == "") {
                      mediaLink = "textonly";
                  } else if (isBlank(sectionList[0].textContent)) {
                      mediaLink = "videoonly";
                  }

                  $scope.projectsTemp[0].sections.push({
                      "title": "",
                      "subtitle": node.firstChild.data,
                      "content": $sce.trustAsHtml(sectionList[0].innerHTML),
                      "video": sectionList[1].innerHTML,
                      "mediaLink": mediaLink,
                      "coords": {
                          "x": handCoords[index][0],
                          "y": handCoords[index][1],
                      },
                      "show": false
                  });

                  //log current node & confirm data is being pushed
                  console.log(['this is the project info', node]);

              }

              // if we are on any other node --> section info
              else {

                  console.log("we are on any node");
                  // targets children of current node
                  var sectionList = node.children[0].children;
                  var mediaLink = "video";

                  console.log(["section.video is empty  ", sectionList[2].innerHTML == ""])
                  console.log(["section.content is empty  ", sectionList[1].innerHTML == ""])

                  if (sectionList[2].innerHTML == "" && sectionList[1].innerHTML == "") {
                      mediaLink = "";

                  } else if (sectionList[2].innerHTML == "") {
                      mediaLink = "textonly";
                  } else if (sectionList[1].innerHTML == "") {
                      mediaLink = "videoonly";
                  }



                  $scope.projectsTemp[0].sections.push({
                      "title": node.firstChild.data,
                      "subtitle": sectionList[0].textContent,
                      "content": $sce.trustAsHtml(sectionList[1].innerHTML),
                      "video": sectionList[2].innerHTML,
                      "mediaLink": mediaLink,
                      "coords": {
                          "x": sectionList[3].innerHTML,
                          "y": sectionList[4].innerHTML,
                      },
                      "show": false
                  });

                  console.log(["this is being pushed", $scope.projectsTemp]);

              }

          }

      }



      //move the breadcrumb

      var moveBreadcrumbNode = function() {

          var e = document.querySelector('#gstligallery_content');

          if (document.querySelector('#gstligallery_breadcrumb')) {
              var node = document.querySelector('#gstligallery_breadcrumb');
              var fc = e.firstChild;

              console.log(["---=", e, ">>>=---", node, "--=>>>?", fc]);

              e.insertBefore(node, fc);
              var f = e;

              console.log(f.firstChild.classList.add('moved'));
          }
      }

      moveBreadcrumbNode();


      var moveGalleryMenu = function() {
          //sets galleryMenuTree <--- #gstligallerymenu
          if (document.querySelector('#gstligalleryproject_menu')) {
              var menuTree = document.querySelector('#gstligalleryproject_menu');

              var searchForm = document.querySelector('#gstligalleryproject_search');

              if(searchForm){
                menuTree.appendChild(searchForm);
              }else{
                console.log("search form does not exist");
              }

              var projectContainer = document.querySelector('#gstligallery_content');

              projectContainer.insertBefore(menuTree, projectContainer.firstChild);

              console.log("function moveGalleryMenu --> client CMS's search & menu are moved to the gallery container");

          } else {
              console.log("function moveGalleryMenu --> did not run because conditions were not met");
          }
      }

      moveGalleryMenu();

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
