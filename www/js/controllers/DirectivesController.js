app.controller('DirectivesController', function ($scope) {

  //Dataset Values
  var dataset_values = [];
  for (i=0; i<$scope.dataset.data.length; i++){
    dataset_values[i] = $scope.dataset.data[i].value
  }

  //Dataset Dates

  //Dataset Status

  // Line Diagram Configuration
  $scope.chartConfig = {
    title: {
      text: $scope.info.title //from attribute info
    },

    subtitle: {
      text: $scope.info.subtitle
    },

    chart: {
      marginBottom: 100,
      renderTo: 'line-diagram', //id of highchart directive
      type: 'line',
      alignTicks: false
    },

    xAxis: {
      title: {
        text: 'Time'
      }
    },

    yAxis: {
      title: {
        text: 'CPU Usage %'
      },
      max: $scope.info.max,
      min:$scope.info.min,
    },

    legend: {
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 0
    },

    plotOptions: {  
      series: {
        pointStart: 2010
      }
    },

    series: [{
      name: 'Database: my_db',
      data: dataset_values //[2, 2, 5, 5, 5, 5, 8, 1]
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 1000
        },
        chartOptions: {
          legend: {
            enabled: false
          }
        }
      }]
    }

  }
})
