  'use strict';

  var handangular = angular.module('handangular', [
      'ui.router',
      'ngAnimate'
  ]);

  handangular.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

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

  }]);


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

                  if (sectionList[1].innerHTML == "" && sectionList[0].innerHTML == ""){
                    mediaLink = "";

                  }
                  else if (sectionList[1].innerHTML == "") {
                    mediaLink = "textonly";
                  }
                  else if (isBlank(sectionList[0].textContent)) {
                    mediaLink = "videoonly";
                  }

                  $scope.projectsTemp[0].sections.push({
                      "title": "",
                      "subtitle": node.firstChild.data,
                      "content": sectionList[0].textContent,
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

                  if (sectionList[2].innerHTML == "" && sectionList[1].innerHTML == ""){
                    mediaLink = "";

                  }
                  else if (sectionList[2].innerHTML == "") {
                    mediaLink = "textonly";
                  }
                  else if (sectionList[1].innerHTML == "") {
                    mediaLink = "videoonly";
                  }



              $scope.projectsTemp[0].sections.push({
                  "title": node.firstChild.data,
                  "subtitle": sectionList[0].textContent,
                  "content": sectionList[1].textContent,
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

(function(module) {
try {
  module = angular.module('handangular');
} catch (e) {
  module = angular.module('handangular', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/about.html',
    '<h1>Welcome to GSTLI</h1><p>See what we have to offer!</p><div ui-view=""></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('handangular');
} catch (e) {
  module = angular.module('handangular', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/projects.html',
    '<div class="is__this--relative"><div ui-view=""></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('handangular');
} catch (e) {
  module = angular.module('handangular', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/projects.index.html',
    '<div class="ax"><dl class="flex isw100 m0 project-group" style="background-image: url(\'./gallaudet-template/Images/gstli/project-group.jpg\');"><a ng-repeat="p in projects" ng-href="index.html#/projects/{{$index}}" class="projects--box flex__item flex flex--yb flex--spacearound  is__link--plain"><dd><h3 class="flex__item projects--button">{{p.name}}</h3></dd></a></dl></div><div ui-view=""></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('handangular');
} catch (e) {
  module = angular.module('handangular', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/projects.list-alt.html',
    '<div ui-view=""></div><div class="flex flex--stretch"><section class="ish30rem project--box-bg is60vw"><li ng-style="{\'transform\' : \'translate3d({{section.coords.x}}rem, {{section.coords.y}}rem, 0rem)\'}" ng-mouseenter="hover(section)" ng-mouseleave="hover(section)" ng-class="{active : section.show}" class="section-box" ng-repeat="section in project.sections"><a class="section-box__video" ui-sref="projects.section({project: projectIndex, section:$index})"></a> <a class="section-link" ui-sref="projects.section({project: projectIndex, section: $index})"><span class="is__text--size--milli">{{section.title}}</span></a> <label for="locationX"></label><div class="section-box__content" ng-show="section.show">{{section.content}}</div></li></section><section class="flex__item m15 mt40"><span class="is__text--size--micro">Project</span><h1 class="mt0 is__text--c-blue is__text--size--giga">{{project.title}}</h1><p class="">{{project.content}}</p></section></div><section></section>');
}]);
})();

(function(module) {
try {
  module = angular.module('handangular');
} catch (e) {
  module = angular.module('handangular', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/projects.list.content.html',
    '<div class="m20"><h1>{{section.title}}</h1><p>{{section.content}}</p><a ui-sref="projects.list">Back to projects</a></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('handangular');
} catch (e) {
  module = angular.module('handangular', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/projects.list.html',
    '<div class="is__this--relative"><div ng-hide="true" class="px20 flex flex--xsb header--box"><h1 class="is__text--c-blue">GSTLI</h1><div class="flex flex--xy"></div></div><div class="flex flex--stretch py0 project--box--gradient "><section class="project--sections--box project--box-bg"><li ng-style="{\'transform\' : \'translate3d({{section.coords.x}}rem, {{section.coords.y}}rem, 0rem)\', \'-webkit-transform\' : \'translate3d({{section.coords.x}}rem, {{section.coords.y}}rem, 0rem)\'}" ng-click="$state.go(\'projects.preview\', {project: projectIndex, section: $index, type : section.mediaLink})" ng-mouseenter="hover(section)" ng-mouseleave="hover(section)" ng-class="{active : section.show}" class="section-box" ng-repeat="section in project.sections"><a class="section-link" ng-click=""><span class="is__text--size--milli">{{section.title}}</span></a><div class="section-box__content" ng-show="section.show">{{section.subtitle}}</div></li></section><section class="flex__item m10 ml15 mt20"><div class="list--preview--ui-container"><div ui-view="" class="ng-enter-right"></div></div></section></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('handangular');
} catch (e) {
  module = angular.module('handangular', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/projects.list.index.html',
    '<div class="filler ng-enter-right list--index" ng-hide="$state.is(\'projects.preview\')"><span class="is__text--size--micro">A Project by {{project.name}}</span><h1 class="mt0 is__text--c-blue project--title">{{section.subtitle}}</h1><a class="section-box__icon--holder" ng-hide="section.mediaLink == \'videoonly\'" ng-click="$state.go(\'projects.index\', {project: projectIndex, section: $stateParams.section, type: oppositeType($stateParams.type)}, {notify : \'false\'})"><div class="section-box__icon text" ng-show="$stateParams.type == \'video\'"></div><div class="section-box__icon video" ng-show="$stateParams.type == \'text\'"></div></a><div ng-hide="$stateParams.type == \'text\'" class="section--video--box flex"><iframe ng-hide="type == \'text\'" ng-src="{{getLink(section.video)}}" width="100%" height="20rem" class="section--video flex__item" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe></div><p ng-hide="$stateParams.type == \'video\'">{{section.content}}</p></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('handangular');
} catch (e) {
  module = angular.module('handangular', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/projects.list.preview.html',
    '<div class="ax"><div class="list--preview"><div class="list--preview__header is__background--c-vegasgold flex flex--y flex--xsb"><h1 class="mt15 mb15 is__text--c-white">{{section.title}}</h1><a class="section-box__icon--holder" ng-click="$state.go(\'projects.preview\', {project: projectIndex, section: $stateParams.section, type: oppositeType($stateParams.type)}, {notify : \'false\'})"><div class="section-box__icon text" ng-show="$stateParams.type == \'video\'"></div><div class="section-box__icon video" ng-show="$stateParams.type == \'text\'"></div></a><div class="list--preview__close is__text--size--micro is__text--c-maroon" ng-click="$state.go(\'projects.index\', {project: projectIndex, section: \'0\', type: \'video\'})">✕</div></div><div ng-show="$stateParams.type == \'video\';" class="section--video--box flex"><div class="section--video--box flex"><iframe ng-src="{{getLink(section.video)}}" width="100%" height="20rem" class="section--video flex__item" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe></div></div><div ng-show="$stateParams.type == \'videoonly\';" class="section--video--box flex"><div class="section--video--box flex"><iframe ng-src="{{getLink(section.video)}}" width="100%" height="20rem" class="section--video flex__item" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe></div></div><div ng-show="$stateParams.type == \'text\';" class="list--preview__content"><p>{{section.content}}</p></div><div ng-show="$stateParams.type == \'textonly\';" class="list--preview__content"><p>{{section.content}}</p></div><div ng-show="$stateParams.type == \'\'" class="list--preview__content"><h2>Oops!</h2><p class="list--preview__nomedia">We haven\'t uploaded any content just yet. Coming soon, though!</p></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('handangular');
} catch (e) {
  module = angular.module('handangular', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/projects.list.video.html',
    '<div class="m20"><div class="is40rem"></div><h1>{{section.title}} Video</h1><a ui-sref="projects.list">Back to projects</a></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('handangular');
} catch (e) {
  module = angular.module('handangular', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/projects.section.html',
    '<div class="flex"><div class="is30vw m20"><h1>{{section.title}}</h1><p>{{section.content}}</p><a ui-sref="projects.list({project: projectIndex})">Back to projects</a></div><div class="section--video--box flex m20"><iframe src="//player.vimeo.com/video/108370788?title=0&amp;byline=0&amp;portrait=0&amp;color=f0c000" width="100%" height="20rem" class="section--video flex__item" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe></div></div>');
}]);
})();
