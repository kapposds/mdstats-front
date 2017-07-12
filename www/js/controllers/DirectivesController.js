app.controller('DirectivesController' , function($scope, $attrs){

console.log($attrs.title);

//Line Diagram
$scope.chartConfig = {
  title: {
        text: $attrs.title
    },

    subtitle: {
        text: 123
    },

    chart: {
      marginBottom: 100,
      renderTo: 'line-diagram',
    }, 

    yAxis: {
    title: {
          text: 'Date'
        }
    },

    yAxis: {
        title: {
            text: 'CPU Usage %'
        }
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
        name: 'CPU1',
        data: [5, 23, 32, 51, 21, 19, 87, 88]
    }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 300
      },
      chartOptions: {
        legend: {
          enabled: false
        }
      }
    }]
  }


  };
  
});