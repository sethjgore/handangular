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

      $urlRouterProvider.otherwise('project/0');

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

      //retrieve #custom_template...

      //retrieve #custom_treelist (staff names)
      var contentList = document.querySelector('#custom_clientcontent ul').childNodes;


      //set up temporary project object
      //todo convert to scope.projects
      $scope.projectsTemp = [{}];
      $scope.projectsTemp[0].sections = []
      // loops through Content List
      for (var index = 0; index < contentList.length; ++index) {

          //reuse current node
          var node = contentList[index];

          //if node is a HTML Element (nodeType = 1), proceed
          if (node.nodeType == 1) {

              //check node , nodeType, childElementCount
              console.log([node, node.nodeType, node.childElementCount]);

              // if we are on second childNode --> + name of the project creator
              if (index == 1) {
                  $scope.projectsTemp[0]['name'] = node.innerText;

                  //log current node & confirm data is pushed
                  //console.log(["first element on list", $scope.projectsTemp, node.innerText]);


              }

              // if we are on the fourth childNode --> + project info
              else if (index == 3) {

                  var sectionList = node.childNodes[1].children;

                  $scope.projectsTemp[0].sections.push({
                      "title": "",
                      "subtitle": node.firstChild.data,
                      "content": sectionList[0].innerText,
                      "video": sectionList[1].innerText,
                      "coords": {
                          "x": sectionList[2].innerText,
                          "y": sectionList[3].innerText,
                      },
                      "show": false
                  });

                  //log current node & confirm data is being pushed
                  //console.log(['this is the project info', node]);

              }

              // if we are on any other node --> + info
              else {

                  // targets children of current node
                  var sectionList = node.childNodes[1].children;

                  console.log(sectionList[0].innerText);

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

      $scope.projects2 = [{
          name: 'Thomas Horejes',
          sections: [{
              name: 'Thomas Horejes',
              title: '',
              subtitle: 'Demystifying Linguistic Bottlenecks',
              content: 'My project focuses on intermediate processes that reveal students’ knowledge.  The intermediate processes include the connection between prior knowledge (what they bring to the classroom) to “new” knowledge (how they develop academic knowledge in the classroom).  Students’ interpretation comes from them utilizing their various knowledge(s) to arrive at calculated conclusions about academic information being conveyed.  It is the goal of the proposal to reveal cultural displays of knowledge constructed within diverse ideologies of deaf educational practice and the larger understanding of deafness.  Once I capture the intermediate processes of student learning and interaction through their mediated knowledge(s), this gives me the opportunity to identify, document, and classify the different types of knowledge being processed.',
              video: 'U0sGbAHe4EY',
              show: false,
              coords: {
                  x: '-3000',
                  y: '0'
              }
          }, {
              title: 'Introduction',
              subtitle: 'Questions that we wanted to ask',
              content: 'In any Sociology course, students’ critical thinking is foundational and essential to their learning process.  Critical thinking is required in students, as a disciplinary skill, to examine sociological concepts/theories and to capture what Sociologists call the ‘sociological imagination.’  The sociological imagination comes from C. Wright Mills (1959) where he urged that for teachers to teach sociology and its concepts to our diverse students, we must address: 1) What is the structure of the particular society? 2) Where does that society stand in human history?, and 3) What varieties of humans prevail in that society?  Understanding these central questions require critical thinking.  As a teacher, I am always curious as the semester progresses to uncover the ways students develop critical thinking skills.  Equally as important, I am curious to identify key moments where students make a breakthrough to think critically about sociological concepts and their application to society. ',
              video: '14SygX3V1gc',
              show: false,
              coords: {
                  x: '3',
                  y: '1'
              }
          }, {
              title: 'Methodology',
              subtitle: 'What we did',
              content: 'To help frame my research question to identify some bottlenecks that students encounter as they build on their critical thinking skills, I introduce four different sociological concepts throughout the semester: 1) Ideology, 2) Privilege, 3) Race/Class/Gender, 4) Racial Disparity.  These four concepts were designed to elicit different knowledge bases (both consciously and unconsciously), to reveal the various intermediate processes from students and to identify critical thinking “in progress.”  In order to understand these concepts toward the discipline of sociology, it takes a sociological imagination to capture them (Snowden 2006).  To this end, I gave students academic materials (both in ASL/English) about the given concept, and they had the opportunity to both self-reflect about each concept as well as engage in group-discussions.  These discussions and self-reflections were documented in both English and in ASL via video.  Student discussions were videotaped to capture student learning as evidence of the various discourses occurring as they discussed a sociological concept.',
              video: '1YiQixF8so4',
              show: false,
              coords: {
                  x: '12',
                  y: '9'
              }
          }, {
              title: 'Literature Review',
              subtitle: 'Establishing our studies',
              content: 'On a macro-level, sociology is the study of the development, management, and taxonomy of human societies, communities, cultures, and academic institutions.  On a micro-level, university classrooms serve as rich sites in the development, management, and taxonomy of students’ and teachers’ knowledge.  It is the study of our classrooms that provide the opportunity to (re)design courses with the aim of strengthening our teaching and learning (Ambrose et al. 2010).  Other than the discipline of education, sociology is seen as one of the earliest influences outside of discipline to incorporate SoTL and Sociology as an interdisciplinary focus (Mauksch and Howery 1986) to teaching and learning.',
              video: '253I2M_62T8',
              show: false,
              coords: {
                  x: '12.5',
                  y: '12.9'
              }
          }, {
              title: 'Results/Discussion',
              subtitle: 'Analyzing our data & research',
              content: 'What do I know now?  Throughout this research process to capture the types of bottlenecks students were experiencing, one key finding revealed my naive assumption about student learning.  This discovery was a seismic revelation that led me to reconfigure my research and teaching goals.  As teacher I was unaware of the powerful and critical implications that students at Gallaudet University varied in linguistic structures of learning, continuum of languacultures (Agar 1994).  I produced ethnocentric ideological paradigm(s) of a visual learning moment by constructing heterogeneous linguistic avenues to arriving at knowledge.  In simpler words, I constructed a linguistic bottleneck and created a liminal space for my students.  The ways I managed the classroom and the “assumptions” I brought to the class had a direct impact on the ways knowledge was introduced, processed, and developed. ',
              video: 'WKwkawwzhBc',
              show: false,
              coords: {
                  x: '11',
                  y: '16.7'
              }
          }, {
              title: 'Further Research',
              subtitle: 'Finding the next stone to turn',
              content: 'What is promising?  By being able to provide materials in both languages, I can begin to start the next step of my SoTL work which is to start focusing on threshold bottlenecks and the other taxonomy of SoTL questions.  Of course, students may still encounter linguistic bottlenecks, but by readily providing materials in both languages, I am able to uncover data that I originally could not have.  I can now move on to “what works”, that is, “what are strategies to minimize linguistic bottlenecks on the development of capturing the "sociological imagination"? I also focus on the ways additional teaching strategies could enhance student learning or what might be the case if (what could be?).  Specifically, “what happens if bilingual materials are provided in a Sociology course to capture the ‘sociological imagination’?  For my next research, I will focus on uncovering the ways how bilingual materials (ASL/English) have benefitted/deterred the organization of student knowledge processes as they arrive at a sociological concept (Figure 15 of my SoTL timeline).',
              video: 'eCr4hxCYE9I',
              show: false,
              coords: {
                  x: '7',
                  y: '20.4'
              }
          }, ]
      }];

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