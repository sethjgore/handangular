    "use strict";

    (function(window, document, undefined) {

        //waits for DOM to be ready
        document.addEventListener("DOMContentLoaded", function() {

            //then runs these functions
            cloneImageFromClient();
            cloneTreeListFromClient();
            moveGalleryMenu();


        });

        //helper function
        var forEach = function(array, callback, scope) {
            for (var i = 0; i < array.length; i++) {
                callback.call(scope, array[i], i); // passes back stuff we need
            }
        };

        var cloneImageFromClient = function() {
            if (document.querySelector('#gstligalleryfront_splash img')) {

                //gets IMG NODE <--- #gstligalleryfrontfront_splash
                var groupImageClient = document.querySelector('#gstligalleryfront_splash img');
                //gets TEXTCONTENT <--- IMG NODE
                var groupImageClientSrc = groupImageClient.attributes["src"].value;

                //builds URL <--- groupImageClientSrc
                var groupImageDocUrl = "url(" + groupImageClientSrc + ")";

                //gets NODE <----> .project-group
                var groupImageDoc = document.querySelector('#gstligalleryfront');

                //applies BACKGROUNDIMAGE ---> groupImageDoc NODE
                groupImageDoc.style.backgroundImage = groupImageDocUrl;

                console.log("function cloneImageFromClient --> client CMS's image is applied to the project-group node");
            } else {
                console.log("function cloneImageFromClient --> did not run because conditions were not met");
            }
        }

        var cloneTreeListFromClient = function() {

            if (document.querySelector('#gstligalleryfront_treelist li').childNodes) {
                var linkTemplate = document.querySelector('.project-template');

                var parentTemplate = linkTemplate.parentNode;

                var linkClientData = document.querySelectorAll('#gstligalleryfront_treelist li');

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

                console.log("function cloneTreeListFromClient --> client CMS's treelist is cloned & populated as the gallery projects");

            } else {
                console.log("function cloneTreeListFromClient --> did not run because conditions were not met");
            }
        }


        var moveGalleryMenu = function() {
            //sets galleryMenuTree <--- #gstligallerymenu
            if (document.querySelector('#gstligalleryfront_menu')) {
                var menuTree = document.querySelector('#gstligalleryfront_menu');

                var searchForm = document.querySelector('#gstligalleryfront_search');

                menuTree.appendChild(searchForm);

                var projectContainer = document.querySelector('#gstligalleryfront');

                projectContainer.insertBefore(menuTree, projectContainer.firstChild);

                console.log("function moveGalleryMenu --> client CMS's search & menu are moved to the gallery container");

            } else {
                console.log("function moveGalleryMenu --> did not run because conditions were not met");
            }
        }

    })(this, document);