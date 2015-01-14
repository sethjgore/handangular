"use strict";

console.log(angular);

var projectpage = angular.module('projectpage', []);

projectpage.controller('ProjectsCtrl', ['$scope', function($scope) {

    console.log("This is the project controller js");

    //retrieve #custom_template...
    var prerenderedText = document.getElementById('gstligallery_content');

    //retrieve #custom_treelist (staff names)
    var staffList = document.querySelector('#gstligallery_treelist ul').childNodes;

    console.log(staffList);

    $scope.projects = [];

    for (var index = 0; index < staffList.length; ++index) {

        var node = staffList[index];

        console.log(node.nodeType);

        if (node.nodeType == 1) {
            $scope.projects.push({
                'link': node.firstChild.attributes[0].value,
                'name': node.innerText
            });

        }
    }
}]);
