(function() {

  'use strict';

  function HomeCtrl($scope, $interval, Datos_Politicos){
    var vm = this;

    var data = Datos_Politicos;
    $scope.politik = 'CFK';
    //console.log(data);
    //$scope.series = ['Serie A', 'Serie B'];
    function createChart(){
      $scope.data_import = [];
      //$scope.data = [];
      var i = 0, value = [], interval = 10;
      for(var key in data){
        //console.log(key);
        for (var item in data[key]) {
          //console.log(item);
          var b = data[key][item];
          //console.log(b);
          value.push([{'x': randomScalingFactor(), 'y': randomScalingFactor(), 'r': randomScalingFactor() > b[0].Count ? b[0].Count : randomScalingFactor()}]);
          i++;
          interval = interval + 10;
          //console.log(value);
        }
        //console.log(value);
        $scope.data_import.push(value);
        value = [];
        i = 0;
        interval = 10;
      }
      //$scope.data = $scope.data_import;
    }

    function data_animation(){
      setInterval(function(){
        var a = $scope.data;
        $scope.data = [];
        for (var i = 0; i < a.length; i++) {
          set_data(a[i]);
        }
      }, 2000);
    }

    function set_data(data){
      setTimeout(function(){
        $scope.$apply(function(){
          //$scope.data = $scope.data_import[value];
          $scope.data.push(data);
        });
      }, 100);
    }
    //console.log($scope.labels);
    //console.log($scope.data);
    $scope.series = ['Total Positive', 'Total Negative', 'Total Anger',
      'Total Anticipation', 'Total Disgust', 'Total Fear',
      'Total Joy', 'Total Sadness', 'Total Surprise', 'Total Trust'
    ];
    /*$scope.datasetOverride = [
      {
        label: "Bar chart",
        borderWidth: 1,
        type: 'bar'
      },
      {
        label: "Line chart",
        borderWidth: 3,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        type: 'line'
      }
    ];*/
    $scope.options = {
      scales: {
        xAxes: [{
          display: false,
          ticks: {
            max: 800,
            min:-800,
            stepSize: 1
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            max: 1200,
            min: -1200,
            stepSize: 1
          }
        }]
      }
    };

    //$scope.series = ['Series A', 'Series B'];
    $scope.dataOverride = [];

    createChart();
    $scope.data = $scope.data_import[1];
    $interval(function(){
      createChart();
      if($scope.value)
        $scope.data = $scope.data_import[$scope.value];
      else
        $scope.data = $scope.data_import[1];
    }, 2000);
    //setTimeout(data_animation, 1000);

    $scope.ver_data = function(value){
      $scope.value = value;
      if(value == 1)
        $scope.politik = 'CFK';
      if(value === 0)
        $scope.politik = 'Bullrich';
      if(value == 2)
        $scope.politik = 'Randazzo';
      if(value === 3)
        $scope.politik = 'Massa';
      setTimeout(function(){
        $scope.$apply(function(){
          $scope.data = $scope.data_import[value];
        });
      }, 1000);
    };

    function randomScalingFactor () {
      console.log((Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 400));
      return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 400);
    }

    function randomRadius () {
      console.log(Math.abs(randomScalingFactor()) / 4);
      return Math.abs(randomScalingFactor()) / 4;
    }
    /*$scope.data = [[{x: 40, y: 10, r: 20}],[{x: 10, y: 40, r: 50}]];*/
  }

  angular.module('politike.controllers')
        .controller('HomeCtrl', HomeCtrl);
})();
