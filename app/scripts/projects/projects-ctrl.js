'use strict';

handangular.controller('ProjectsCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

    $scope.projects = [
      {
        title: 'Research',
        subtitle: 'Some brief comment about the project',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        color: 'blue',
        sections: [
          {
            title: 'Burning Question',
            subtitle: 'Questions that we wanted to ask',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            video: '/images/videos/test.mp4',
            show: false,
            coords: {
              x : '16',
              y : '1'
            }
          },
          {
            title: 'Methodology',
            subtitle: 'What we did',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            video: '/images/videos/test.mp4',
            show: false,
            coords: {
              x : '27',
              y : '11'
            }
          },
          {
            title: 'Data Collection',
            subtitle: 'Establishing our studies',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            video: '/images/videos/test.mp4',
            show: false,
            coords: {
              x : '28',
              y : '16'
            }
          },
          {
            title: 'Results/Discussion',
            subtitle: 'orem ipsum dolor sit amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            video: '/images/videos/test.mp4',
            show: false,
            coords: {
              x : '25',
              y : '21'
            }
          },
          {
            title: 'Further Research',
            subtitle: 'Lorem Ispum Dolor Sit Amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            video: '/images/videos/test.mp4',
            show: false,
            coords: {
              x : '20',
              y : '26'
            }
          },
        ]
      },
      {
        title: 'Growth',
        subtitle: 'Some brief comment about the project',
        content: 'Hello? How are you? I am doing fine.',
        color: 'blue',
      },
      {
        title: 'Vision',
        subtitle: 'Some brief comment about the project',
        content: 'Hello? How are you? I am doing fine.',
        color: 'bluedk',
      },
      {
        title: 'Beliefs',
        subtitle: 'Some brief comment about the project',
        content: 'Hello? How are you? I am doing fine.',
        color: 'green',
      },
      {
        title: 'Goals',
        subtitle: 'Some brief comment about the project',
        content: 'Hello? How are you? I am doing fine.',
        color: 'greendk',
      },
      ];

      $scope.hover = function(node) {
        return node.show = ! node.show;
      }

      $scope.project = $scope.projects[$stateParams.project];
      $scope.projectIndex = $stateParams.project;
      $scope.sectionIndex = $stateParams.section;

      if($stateParams.section){
        $scope.section = $scope.project.sections[$stateParams.section];
      }
      console.log($stateParams);

}]);