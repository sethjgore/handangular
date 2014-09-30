'use strict';

handangular.controller('ProjectsCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

    $scope.projects = [
      {
        title: 'Research',
        subtitle: 'Some brief comment about the project',
        sections: [
          {
            title: 'Burning Question',
            content: 'orem ipsum dolor sit amet',
          },
          {
            title: 'Methodology',
            content: 'orem ipsum dolor sit amet',
          },
          {
            title: 'Data Collection',
            content: 'orem ipsum dolor sit amet',
          },
          {
            title: 'Results/Discussion',
            content: 'orem ipsum dolor sit amet',
          },
          {
            title: 'Further Research',
            content: 'orem ipsum dolor sit amet',
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

      $scope.project = $scope.projects[$stateParams.project];
      if($stateParams.section){
        $scope.section = $scope.project.sections[$stateParams.section];
      }
      console.log($stateParams);

}]);