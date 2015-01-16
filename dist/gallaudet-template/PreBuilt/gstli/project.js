"use strict";

console.log(angular);

var projectpage = angular.module('projectpage', []);

projectpage.controller('ProjectsCtrl', ['$scope', function($scope) {

    console.log("This is the project controller js");

    //retrieve #custom_template...
    var prerenderedText = document.getElementById('custom_content');

    if(document.getElementById('custom_clientcontent img')){
        var groupImage = document.getElementById('custom_clientcontent img');

       $scope.groupImage = groupImage.attributes["src"];
    }

    //retrieve #custom_treelist (staff names)
    var staffList = document.querySelector('#custom_treelist ul').childNodes;

    console.log(staffList);

    $scope.projects = [];

    for (var index = 0; index < staffList.length; ++index) {

        var node = staffList[index];

        console.log(node.nodeType);

        if (node.nodeType == 1) {
            $scope.projects.push({
                'link': node.firstChild.attributes["href"].value,
                'name': node.innerText
            });

        }
    }
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
    '<div class="is__this--relative"><div ng-hide="true" class="px20 flex flex--xsb header--box"><h1 class="is__text--c-blue">GSTLI</h1><div class="flex flex--xy"></div></div><div class="flex flex--stretch py0 project--box--gradient "><section class="project--sections--box project--box-bg"><li ng-style="{\'transform\' : \'translate3d({{section.coords.x}}rem, {{section.coords.y}}rem, 0rem)\'}" ng-click="$state.go(\'projects.preview\', {project: projectIndex, section: $index, type : section.mediaLink})" ng-mouseenter="hover(section)" ng-mouseleave="hover(section)" ng-class="{active : section.show}" class="section-box" ng-repeat="section in project.sections"><a class="section-link" ng-click=""><span class="is__text--size--milli">{{section.title}}</span></a><div class="section-box__content" ng-show="section.show">{{section.subtitle}}</div></li></section><section class="flex__item m10 ml15 mt20"><div class="list--preview--ui-container"><div ui-view="" class="ng-enter-right"></div></div></section></div></div>');
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
    '<div class="filler ng-enter-right list--index" ng-hide="$state.is(\'projects.preview\')"><span class="is__text--size--micro">A Project by {{section.name}}</span><h1 class="mt0 is__text--c-blue project--title">{{section.subtitle}}</h1><a class="section-box__icon--holder" ng-hide="section.mediaLink == \'videoonly\'" ng-click="$state.go(\'projects.index\', {project: projectIndex, section: $stateParams.section, type: oppositeType($stateParams.type)}, {notify : \'false\'})"><div class="section-box__icon text" ng-show="$stateParams.type == \'video\'"></div><div class="section-box__icon video" ng-show="$stateParams.type == \'text\'"></div></a><div ng-hide="$stateParams.type == \'text\'" class="section--video--box flex"><iframe ng-hide="type == \'text\'" ng-src="{{getLink(section.video)}}" width="100%" height="20rem" class="section--video flex__item" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe></div><p ng-hide="$stateParams.type == \'video\'">{{section.content}}</p></div>');
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
