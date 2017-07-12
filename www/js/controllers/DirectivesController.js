app.controller('DirectivesController' , function($scope){
	


	//Line Diagram
  $scope.chartConfig = {
	title: {
        text: 'CPU'
    },

    subtitle: {
        text: 'from then to then'
    },



    chart: {
      marginBottom: 100,
      renderTo: 'line-diagram',
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
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
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