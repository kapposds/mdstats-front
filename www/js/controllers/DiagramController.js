app.controller('DiagramController', function ($scope, $http, $interval, ApiEndpoint , CPUResource) {

  // $http.get(ApiEndpoint.url + '/api/cpu')
  //   .success(function (response) {
  //     $scope.cpuDataset = response
  //     console.log('ela kalispera')
  //   })

    $interval(function(){//run every 10(should be dynamically configured by user) seconds to refresh dataset

      refreshDatasets();

    },1000);

    refreshDatasets = function(){

      CPUResource.get({}).$promise.then(
        function(response){
          $scope.cpuDataset = response
          console.log($scope.cpuDataset)
        },
        function(reason) {
          alert('Error: ' + reason);
        });

      CPUResource.get({}).$promise.then(
        function(response){
          $scope.ramDataset = response
          console.log($scope.ramDataset)
        },
        function(reason) {
          alert('Error: ' + reason);
        });    

    }

    $scope.test = 0;
    $interval(function(){//run every 10(should be dynamically configured by user) seconds to refresh dataset

    $scope.test++;

    },1000);

    // if($scope.cpuDataset){
    //   console.log("iparxi dataset");
    // }else{
    //   console.log("den iparxi dataset");
    // }

  // Info for chart configuration
  $scope.diagramStaticInfo = {
    cpu: {title: 'CPU', subtitle: 'ipotitlos cpu', min:0, max: 100, xaxis_text:'CPU Usage%'},
    memory: {title: 'RAM', subtitle: 'ipotitlos ram', xaxis_text:'MB'}
  }


})
