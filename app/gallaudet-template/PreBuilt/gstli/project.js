"use strict";

(function(window, document, undefined){

    if (document.querySelector('#custom_clientcontent img')) {

        //gets IMG NODE <--- #clientcontent
        var groupImageClient = document.querySelector('#custom_clientcontent img');
        //gets TEXTCONTENT <--- IMG NODE
        var groupImageClientSrc = groupImageClient.attributes["src"].value;

        //builds URL <--- groupImageClientSrc
        var groupImageDocUrl = "url("+groupImageClientSrc+")";

        //gets NODE <----> .project-group
        var groupImageDoc = document.querySelector('.project-group');

        //applies BACKGROUNDIMAGE ---> groupImageDoc NODE
        groupImageDoc.style.backgroundImage = groupImageDocUrl;

    }

    if(document.querySelector('#custom_treelist ul').childNodes){
        var linkTemplate = document.querySelector('.project-template');

        var parentTemplate = linkTemplate.parentNode;

        var clone = linkTemplate.cloneNode();

        console.log(parentTemplate.insertAdjacentHTML('beforeend', clone));

        console.log(clone);
    }

})(this, document);


console.log(angular);

var projectpage = angular.module('projectpage', []);

projectpage.controller('ProjectsCtrl', ['$scope', function($scope) {

    console.log("This is the project controller js");

    //retrieve #custom_template...
    var prerenderedText = document.getElementById('custom_content');

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
