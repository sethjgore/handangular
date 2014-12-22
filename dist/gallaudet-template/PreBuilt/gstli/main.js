"use strict";var projectpage=angular.module("projectpage",[]);projectpage.config(function(){}),projectpage.controller("ProjectsCtrl",["$scope",function(e){var t=(document.getElementById("custom_content"),document.querySelector("#custom_treelist ul").childNodes);e.projects=[];for(var o=0;o<t.length;++o)e.projects.push({name:t[o].innerText})}]);var handangular=angular.module("handangular",["ui.router","ngAnimate"]);handangular.config(["$stateProvider","$urlRouterProvider",function(e,t){e.state("projects",{url:"/project/{project}",templateUrl:"partials/projects.list.html",controller:"ProjectsCtrl",resolve:{project:["$stateParams",function(e){return e.project}]}}).state("projects.preview",{url:"/preview/{section}/{type}",templateUrl:"partials/projects.list.preview.html",controller:"ProjectsCtrl",resolve:{section:["$stateParams",function(e){return e.section}],type:["$stateParams",function(e){return e.type}],project:["$stateParams",function(e){return e.project}]}}).state("projects.index",{url:"/{section}/{type}",templateUrl:"partials/projects.list.index.html",controller:"ProjectsCtrl",resolve:{section:["$stateParams",function(e){return e.section}],type:["$stateParams",function(e){return e.type}],project:["$stateParams",function(e){return e.project}]}}),t.otherwise("project/0")}]),handangular.run(["$rootScope","$state","$stateParams",function(e,t,o){e.$state=t,e.$stateParams=o}]),handangular.controller("ProjectsCtrl",["$scope","$stateParams","$sce",function(e,t,o){e.oppositeType=function(e){return"video"==e?"text":"video"},e.getLink=function(e){return o.trustAsResourceUrl("//www.youtube.com/embed/"+e)},e.projects=[{name:"Thomas Horejes",subtitle:"Demystifying Linguistic Bottlenecks",content:"My project focuses on intermediate processes that reveal students’ knowledge.  The intermediate processes include the connection between prior knowledge (what they bring to the classroom) to “new” knowledge (how they develop academic knowledge in the classroom).  Students’ interpretation comes from them utilizing their various knowledge(s) to arrive at calculated conclusions about academic information being conveyed.  It is the goal of the proposal to reveal cultural displays of knowledge constructed within diverse ideologies of deaf educational practice and the larger understanding of deafness.  Once I capture the intermediate processes of student learning and interaction through their mediated knowledge(s), this gives me the opportunity to identify, document, and classify the different types of knowledge being processed.",video:"",sections:[{name:"Thomas Horejes",title:"",subtitle:"Demystifying Linguistic Bottlenecks",content:"My project focuses on intermediate processes that reveal students’ knowledge.  The intermediate processes include the connection between prior knowledge (what they bring to the classroom) to “new” knowledge (how they develop academic knowledge in the classroom).  Students’ interpretation comes from them utilizing their various knowledge(s) to arrive at calculated conclusions about academic information being conveyed.  It is the goal of the proposal to reveal cultural displays of knowledge constructed within diverse ideologies of deaf educational practice and the larger understanding of deafness.  Once I capture the intermediate processes of student learning and interaction through their mediated knowledge(s), this gives me the opportunity to identify, document, and classify the different types of knowledge being processed.",video:"U0sGbAHe4EY",show:!1,coords:{x:"-3000",y:"0"}},{title:"Introduction",subtitle:"Questions that we wanted to ask",content:"In any Sociology course, students’ critical thinking is foundational and essential to their learning process.  Critical thinking is required in students, as a disciplinary skill, to examine sociological concepts/theories and to capture what Sociologists call the ‘sociological imagination.’  The sociological imagination comes from C. Wright Mills (1959) where he urged that for teachers to teach sociology and its concepts to our diverse students, we must address: 1) What is the structure of the particular society? 2) Where does that society stand in human history?, and 3) What varieties of humans prevail in that society?  Understanding these central questions require critical thinking.  As a teacher, I am always curious as the semester progresses to uncover the ways students develop critical thinking skills.  Equally as important, I am curious to identify key moments where students make a breakthrough to think critically about sociological concepts and their application to society. ",video:"14SygX3V1gc",show:!1,coords:{x:"3",y:"1"}},{title:"Methodology",subtitle:"What we did",content:"To help frame my research question to identify some bottlenecks that students encounter as they build on their critical thinking skills, I introduce four different sociological concepts throughout the semester: 1) Ideology, 2) Privilege, 3) Race/Class/Gender, 4) Racial Disparity.  These four concepts were designed to elicit different knowledge bases (both consciously and unconsciously), to reveal the various intermediate processes from students and to identify critical thinking “in progress.”  In order to understand these concepts toward the discipline of sociology, it takes a sociological imagination to capture them (Snowden 2006).  To this end, I gave students academic materials (both in ASL/English) about the given concept, and they had the opportunity to both self-reflect about each concept as well as engage in group-discussions.  These discussions and self-reflections were documented in both English and in ASL via video.  Student discussions were videotaped to capture student learning as evidence of the various discourses occurring as they discussed a sociological concept.",video:"1YiQixF8so4",show:!1,coords:{x:"12",y:"9"}},{title:"Literature Review",subtitle:"Establishing our studies",content:"On a macro-level, sociology is the study of the development, management, and taxonomy of human societies, communities, cultures, and academic institutions.  On a micro-level, university classrooms serve as rich sites in the development, management, and taxonomy of students’ and teachers’ knowledge.  It is the study of our classrooms that provide the opportunity to (re)design courses with the aim of strengthening our teaching and learning (Ambrose et al. 2010).  Other than the discipline of education, sociology is seen as one of the earliest influences outside of discipline to incorporate SoTL and Sociology as an interdisciplinary focus (Mauksch and Howery 1986) to teaching and learning.",video:"253I2M_62T8",show:!1,coords:{x:"12.5",y:"12.9"}},{title:"Results/Discussion",subtitle:"Analyzing our data & research",content:"What do I know now?  Throughout this research process to capture the types of bottlenecks students were experiencing, one key finding revealed my naive assumption about student learning.  This discovery was a seismic revelation that led me to reconfigure my research and teaching goals.  As teacher I was unaware of the powerful and critical implications that students at Gallaudet University varied in linguistic structures of learning, continuum of languacultures (Agar 1994).  I produced ethnocentric ideological paradigm(s) of a visual learning moment by constructing heterogeneous linguistic avenues to arriving at knowledge.  In simpler words, I constructed a linguistic bottleneck and created a liminal space for my students.  The ways I managed the classroom and the “assumptions” I brought to the class had a direct impact on the ways knowledge was introduced, processed, and developed. ",video:"WKwkawwzhBc",show:!1,coords:{x:"11",y:"16.7"}},{title:"Further Research",subtitle:"Finding the next stone to turn",content:'What is promising?  By being able to provide materials in both languages, I can begin to start the next step of my SoTL work which is to start focusing on threshold bottlenecks and the other taxonomy of SoTL questions.  Of course, students may still encounter linguistic bottlenecks, but by readily providing materials in both languages, I am able to uncover data that I originally could not have.  I can now move on to “what works”, that is, “what are strategies to minimize linguistic bottlenecks on the development of capturing the "sociological imagination"? I also focus on the ways additional teaching strategies could enhance student learning or what might be the case if (what could be?).  Specifically, “what happens if bilingual materials are provided in a Sociology course to capture the ‘sociological imagination’?  For my next research, I will focus on uncovering the ways how bilingual materials (ASL/English) have benefitted/deterred the organization of student knowledge processes as they arrive at a sociological concept (Figure 15 of my SoTL timeline).',video:"eCr4hxCYE9I",show:!1,coords:{x:"7",y:"20.4"}}]},{name:"Miako Rankin",subtitle:"Decoding Introductory Linguistics",content:"Hello? How are you? I am doing fine."},{name:"Kathleen Woods",subtitle:"Undergraduate Thesis Statements",content:"Hello? How are you? I am doing fine."},{name:"Kristin Mulrooney",subtitle:"Journey across Thresholds",content:"Hello? How are you? I am doing fine."},{name:"Sharon Pajka",subtitle:'Defining "Place"',content:"Hello? How are you? I am doing fine."}],e.hover=function(e){return e.show=!e.show},e.type="video",e.project=e.projects[t.project],e.projectIndex=t.project,e.sectionIndex=t.section,t.section&&(e.section=e.project.sections[t.section]),console.log(t)}]),function(e){try{e=angular.module("handangular")}catch(t){e=angular.module("handangular",[])}e.run(["$templateCache",function(e){e.put("partials/about.html",'<h1>Welcome to GSTLI</h1><p>See what we have to offer!</p><div ui-view=""></div>')}])}(),function(e){try{e=angular.module("handangular")}catch(t){e=angular.module("handangular",[])}e.run(["$templateCache",function(e){e.put("partials/projects.html",'<div class="is__this--relative"><div ui-view=""></div></div>')}])}(),function(e){try{e=angular.module("handangular")}catch(t){e=angular.module("handangular",[])}e.run(["$templateCache",function(e){e.put("partials/projects.index.html",'<div class="ax"><dl class="flex isw100 m0 project-group" style="background-image: url(\'./gallaudet-template/Images/gstli/project-group.jpg\');"><a ng-repeat="p in projects" ng-href="index.html#/projects/{{$index}}" class="projects--box flex__item flex flex--yb flex--spacearound  is__link--plain"><dd><h3 class="flex__item projects--button">{{p.name}}</h3></dd></a></dl></div><div ui-view=""></div>')}])}(),function(e){try{e=angular.module("handangular")}catch(t){e=angular.module("handangular",[])}e.run(["$templateCache",function(e){e.put("partials/projects.list-alt.html",'<div ui-view=""></div><div class="flex flex--stretch"><section class="ish30rem project--box-bg is60vw"><li ng-style="{\'transform\' : \'translate3d({{section.coords.x}}rem, {{section.coords.y}}rem, 0rem)\'}" ng-mouseenter="hover(section)" ng-mouseleave="hover(section)" ng-class="{active : section.show}" class="section-box" ng-repeat="section in project.sections"><a class="section-box__video" ui-sref="projects.section({project: projectIndex, section:$index})"></a> <a class="section-link" ui-sref="projects.section({project: projectIndex, section: $index})"><span class="is__text--size--milli">{{section.title}}</span></a> <label for="locationX"></label><div class="section-box__content" ng-show="section.show">{{section.content}}</div></li></section><section class="flex__item m15 mt40"><span class="is__text--size--micro">Project</span><h1 class="mt0 is__text--c-blue is__text--size--giga">{{project.title}}</h1><p class="">{{project.content}}</p></section></div><section></section>')}])}(),function(e){try{e=angular.module("handangular")}catch(t){e=angular.module("handangular",[])}e.run(["$templateCache",function(e){e.put("partials/projects.list.content.html",'<div class="m20"><h1>{{section.title}}</h1><p>{{section.content}}</p><a ui-sref="projects.list">Back to projects</a></div>')}])}(),function(e){try{e=angular.module("handangular")}catch(t){e=angular.module("handangular",[])}e.run(["$templateCache",function(e){e.put("partials/projects.list.html",'<div class="is__this--relative"><div ng-hide="true" class="px20 flex flex--xsb header--box"><h1 class="is__text--c-blue">GSTLI</h1><div class="flex flex--xy"></div></div><div class="px20 flex flex--xsb"><h1></h1><div class="flex flex--xy"><div ng-show="$state.is(\'projects.preview\')" class="flex flex--xy"><a class="projects--button projects--button--bg-clear" ui-sref="projects.index({project: 0, section: \'0\', type: \'video\'})">Sections</a> <a class="projects--button projects--button--bg-clear" href="projects.html">Projects</a></div><div ng-show="$state.is(\'projects.index\')" class="flex flex--xy"><a class="projects--button projects--button--bg-clear" href="projects.html">Projects</a></div></div></div><div class="flex flex--stretch py0 project--box--gradient "><section class="project--sections--box project--box-bg"><li ng-style="{\'transform\' : \'translate3d({{section.coords.x}}rem, {{section.coords.y}}rem, 0rem)\'}" ng-click="$state.go(\'projects.preview\', {project: projectIndex, section: $index, type : \'video\'})" ng-mouseenter="hover(section)" ng-mouseleave="hover(section)" ng-class="{active : section.show}" class="section-box" ng-repeat="section in project.sections"><a class="section-link" ng-click=""><span class="is__text--size--milli">{{section.title}}</span></a><div class="section-box__content" ng-show="section.show">{{section.subtitle}}</div></li></section><section class="flex__item m10 ml15 mt20"><div class="list--preview--ui-container"><div ui-view="" class="ng-enter-right"></div></div></section></div></div>')}])}(),function(e){try{e=angular.module("handangular")}catch(t){e=angular.module("handangular",[])}e.run(["$templateCache",function(e){e.put("partials/projects.list.index.html",'<div class="filler ng-enter-right list--index" ng-hide="$state.is(\'projects.preview\')"><span class="is__text--size--micro">A Project by {{section.name}}</span><h1 class="mt0 is__text--c-blue project--title">{{section.subtitle}}</h1><a class="section-box__icon--holder" ng-click="$state.go(\'projects.index\', {project: projectIndex, section: $stateParams.section, type: oppositeType($stateParams.type)}, {notify : \'false\'})"><div class="section-box__icon text" ng-show="$stateParams.type == \'video\'"></div><div class="section-box__icon video" ng-show="$stateParams.type == \'text\'"></div></a><div ng-hide="$stateParams.type == \'text\'" class="section--video--box flex"><iframe ng-hide="type == \'text\'" ng-src="{{getLink(section.video)}}" width="100%" height="20rem" class="section--video flex__item" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe></div><p ng-hide="$stateParams.type == \'video\'">{{section.content}}</p></div>')}])}(),function(e){try{e=angular.module("handangular")}catch(t){e=angular.module("handangular",[])}e.run(["$templateCache",function(e){e.put("partials/projects.list.preview.html",'<div class="ax"><div class="list--preview"><div class="list--preview__header is__background--c-vegasgold flex flex--y flex--xsb"><h1 class="mt15 mb15 is__text--c-white">{{section.title}}</h1><a class="section-box__icon--holder" ng-click="$state.go(\'projects.preview\', {project: projectIndex, section: $stateParams.section, type: oppositeType($stateParams.type)}, {notify : \'false\'})"><div class="section-box__icon text" ng-show="$stateParams.type == \'video\'"></div><div class="section-box__icon video" ng-show="$stateParams.type == \'text\'"></div></a><div class="list--preview__close is__text--size--micro is__text--c-maroon" ng-click="$state.go(\'projects.index\', {project: projectIndex, section: \'0\', type: \'video\'})">✕</div></div><div ng-hide="$stateParams.type == \'text\'" class="section--video--box flex"><div class="section--video--box flex"><iframe ng-src="{{getLink(section.video)}}" width="100%" height="20rem" class="section--video flex__item" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe></div></div><div ng-hide="$stateParams.type == \'video\'" class="list--preview__content"><p>{{section.content}}</p></div></div></div>')}])}(),function(e){try{e=angular.module("handangular")}catch(t){e=angular.module("handangular",[])}e.run(["$templateCache",function(e){e.put("partials/projects.list.video.html",'<div class="m20"><div class="is40rem"></div><h1>{{section.title}} Video</h1><a ui-sref="projects.list">Back to projects</a></div>')}])}(),function(e){try{e=angular.module("handangular")}catch(t){e=angular.module("handangular",[])}e.run(["$templateCache",function(e){e.put("partials/projects.section.html",'<div class="flex"><div class="is30vw m20"><h1>{{section.title}}</h1><p>{{section.content}}</p><a ui-sref="projects.list({project: projectIndex})">Back to projects</a></div><div class="section--video--box flex m20"><iframe src="//player.vimeo.com/video/108370788?title=0&amp;byline=0&amp;portrait=0&amp;color=f0c000" width="100%" height="20rem" class="section--video flex__item" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe></div></div>')}])}();