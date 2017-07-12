app.controller('DiagramController', function ($scope, $http, ApiEndpoint) {
  $http.get(ApiEndpoint.url + '/api/cpu')
    .success(function (response) {
      $scope.cpuDataset = response
      // console.log($scope.cpuDataset.data[1].value)
    })

  // Info for chart configuration
  $scope.diagramStaticInfo = {
    cpu: {title: 'CPU', subtitle: 'ipotitlos cpu', min:0, max: 100},
    memory: {title: 'RAM', subtitle: 'ipotitlos ram'}
  }

})
