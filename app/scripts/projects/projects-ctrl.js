'use strict';

handangular.controller('ProjectsCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

    $scope.projects = [
      {
        title: 'Research',
        subtitle: 'Some brief comment about the project',
        content: 'We have several sections to our project. Some content about current section. Our project is focused on collecting some kind of data that will be. Engineered to accomodate some criteria arbitrarily decided by committees and product owners.',
        sections: [
          {
            title: 'Burning Question',
            content: 'Quick summary',
            show: false,
            coords: {
              x : '16',
              y : '1'
            }
          },
          {
            title: 'Methodology',
            content: 'Some summary',
            show: false,
            coords: {
              x : '27',
              y : '11'
            }
          },
          {
            title: 'Data Collection',
            content: 'About this section',
            show: false,
            coords: {
              x : '28',
              y : '16'
            }
          },
          {
            title: 'Results/Discussion',
            content: 'orem ipsum dolor sit amet',
            show: false,
            coords: {
              x : '25',
              y : '21'
            }
          },
          {
            title: 'Further Research',
            content: 'What will happen after',
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
        content: 'Hello? How are you? I am doing fine.'
      },
      {
        title: 'Vision',
        subtitle: 'Some brief comment about the project',
        content: 'Hello? How are you? I am doing fine.'
      },
      {
        title: 'Beliefs',
        subtitle: 'Some brief comment about the project',
        content: 'Hello? How are you? I am doing fine.'
      },
      {
        title: 'Goals',
        subtitle: 'Some brief comment about the project',
        content: 'Hello? How are you? I am doing fine.'
      },
      ];

      $scope.hover = function(node) {
        return node.show = ! node.show;
      }

      $scope.project = $scope.projects[$stateParams.project];

      if($stateParams.section){
        $scope.section = $scope.project.sections[$stateParams.section];
      }
      console.log($stateParams);

}]);