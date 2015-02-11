"use strict";

//todo put this script inline
(function(window, document, undefined) {

    var forEach = function(array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, array[i], i); // passes back stuff we need
        }
    };

    if (document.querySelector('#custom_clientcontent img')) {

        //gets IMG NODE <--- #clientcontent
        var groupImageClient = document.querySelector('#custom_clientcontent img');
        //gets TEXTCONTENT <--- IMG NODE
        var groupImageClientSrc = groupImageClient.attributes["src"].value;

        //builds URL <--- groupImageClientSrc
        var groupImageDocUrl = "url(" + groupImageClientSrc + ")";

        //gets NODE <----> .project-group
        var groupImageDoc = document.querySelector('.project-group');

        //applies BACKGROUNDIMAGE ---> groupImageDoc NODE
        groupImageDoc.style.backgroundImage = groupImageDocUrl;

        console.log("client's image is applied to the project-group node");
    }

    if (document.querySelector('#custom_treelist li').childNodes) {
        var linkTemplate = document.querySelector('.project-template');

        var parentTemplate = linkTemplate.parentNode;

        var linkClientData = document.querySelectorAll('#custom_treelist li');

        var appendData = function(el, i) {

            //sets <a> <--- <li>
            var el = el.children[0];

            //builds link object
            var link = {};
            var clone = {};

            link.text = el.textContent;
            link.href = el.attributes["href"].value;

            clone.template = linkTemplate.cloneNode(true);
            clone.text = clone.template.children[0].textContent;
            clone.href = clone.template.attributes["href"];

            clone.href = link.href;
            clone.text = link.text;

            clone.template.children[0].textContent = link.text;
            clone.template.attributes["href"].value = link.href;

            parentTemplate.appendChild(clone.template);

        }

        forEach(linkClientData, appendData);

        parentTemplate.removeChild(linkTemplate);

    }

    //sets galleryMenuTree <--- #gstligallerymenu
    if(document.querySelector('#gstligallerymenu')){
        var menuTree = document.querySelector('#gstligallerymenu');

        var searchForm = document.querySelector('#gstli-search');

        menuTree.appendChild(searchForm);

        var projectContainer = document.querySelector('#custom_content ');

        projectContainer.insertBefore(menuTree, projectContainer.firstChild);

    }

})(this, document);
