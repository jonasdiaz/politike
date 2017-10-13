(function() {

  'use strict';

  function HomeCtrl($scope, $interval, Datos_Politicos){
    var vm = this;

    var data = Datos_Politicos;
    $scope.politik = 'Todos';
    $scope.colors = [];
    $scope.data = [];
    //console.log(data);
    //$scope.series = ['Serie A', 'Serie B'];
    function createChart(){
      $scope.data_import = [];
      //$scope.data = [];
      var i = 0, value = [], interval = 0, data_feel = [];
      for(var key in data){
        //console.log(key);
        for (var item in data[key]) {
          //console.log(item);
          var b = data[key][item];
          interval = b[0].Count + interval;
          //value.push(hexToRgb(b[0].Count.toString(16)));
          //console.log(b);
          //value.push([{'x': randomScalingFactor(), 'y': randomScalingFactor(), 'r': randomScalingFactor() > b[0].Count ? b[0].Count : randomScalingFactor()}]);
          //i++;
          //interval = interval + 10;
          //console.log(value);
        }
        console.log(interval);
        data_feel.push([{'x': randomScalingFactor(), 'y': randomScalingFactor(), 'r': 100}]);
        value.push(hexToRgbA('#'+interval.toString(16)));
        $scope.data_import.push(value);
        value = [];
        i++;
        interval = 0;
      }
      set_data(data_feel);
      //$scope.data = $scope.data_import;
    }

    function hexToRgb(hex){
      hex = hex.replace(/[^0-9A-F]/, '');
      var bigint = parseInt(hex, 16);
      var r = (bigint >> 16) & 255;
      var g = (bigint >> 8) & 255;
      var b = bigint & 255;

      return [r, g, b].join();
    }

    function hexToRgbA(hex){
      var c;
      if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
      }
      throw new Error('Bad Hex');
    }

    createChart();
    //console.log($scope.data_import);
    for (var i = 0; i < $scope.data_import.length; i++) {
      //console.log($scope.data_import[i]);
      for (var j = 0; j < $scope.data_import[i].length; j++) {
          $scope.colors.push($scope.data_import[i][j]);
      }
    }
    console.log('Imprimimos colores');
    console.log($scope.colors);
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
          $scope.data = data;
          console.log('Imprimimos los datos');
          console.log($scope.data);
        });
      }, 1000);
    }
    //console.log($scope.labels);
    //console.log($scope.data);
    $scope.series = ['Positive', 'Negative', 'Anger',
      'Anticipation', 'Disgust', 'Fear',
      'Joy', 'Sadness', 'Surprise', 'Trust'
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
          display: true,
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

    //createChart();
    //$scope.data = $scope.data_import[1];
    /*$interval(function(){
      createChart();
      if($scope.value)
        $scope.data = $scope.data_import[$scope.value];
      else
        $scope.data = $scope.data_import[1];
    }, 2000);*/
    //setTimeout(data_animation, 1000);

    $scope.ver_data = function(value){
      $scope.value = value;
      createChart();
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
          set_data($scope.data[value]);
          //$scope.data = $scope.data[value];
        });
      }, 1000);
    };

    function randomScalingFactor () {
      //console.log((Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 400));
      return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 400);
    }

    function randomRadius () {
      //console.log(Math.abs(randomScalingFactor()) / 4);
      return Math.abs(randomScalingFactor()) / 4;
    }
    /*$scope.data = [[{x: 40, y: 10, r: 20}],[{x: 10, y: 40, r: 50}]];*/
  }

  angular.module('politike.controllers')
        .controller('HomeCtrl', HomeCtrl);
})();
