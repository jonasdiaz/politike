(function() {

  'use strict';

  function HomeCtrl($scope, $interval, Datos_Politicos){
    var vm = this;

    var data = Datos_Politicos;
    $scope.series = ['Anger', 'Fear', 'Joy', 'Sadness', 'Trust'];
    $scope.politik = 'Todos';
    $scope.colors_palet = ['#D50606', '#8013DA', '#F0E919', '#009FFA', '#17DC03'];
    $scope.data = [];
    $scope.colors = [];
    agregar_colores(data);
    //console.log(data);
    //$scope.series = ['Serie A', 'Serie B'];
    function createChartByCandidate(){
      $scope.data_import = [];
      //$scope.data = [];
      var i = 0, value = [], interval = 0;
      for(var key in data){
        //console.log(key);
        for (var item in data[key]) {
          //console.log(item);
          var b = data[key][item];
          //interval = b[0].Count + interval;
          //value.push(hexToRgb(b[0].Count.toString(16)));
          //console.log(b);
          //value.push([{'x': randomScalingFactor(), 'y': randomScalingFactor(), 'r': randomScalingFactor() > b[0].Count ? b[0].Count : randomScalingFactor()}]);
          interval = interval + 10;
          value.push([{'x': randomScalingFactor(), 'y': randomScalingFactor(), 'r': parseInt(Math.sqrt(b[0].Count))}]);
          //i++;
          //console.log(value);
        }
        //console.log(interval);
        //data_feel.push([{'x': randomScalingFactor(), 'y': randomScalingFactor(), 'r': 100}]);
        //value.push(hexToRgbA('#'+interval.toString(16)));
        $scope.data_import.push(value);
        value = [];
        i++;
        interval = 0;
      }
      reorder_data();
      //set_data(data_feel);
      //$scope.data = $scope.data_import;
    }

    function createChart(){
      $scope.data_import = [];
      var i = 0, value = [], interval = -800, mayor = 0, uranga = [];
      for(var key in data){
        for (var item in data[key]) {
          var b = data[key][item];
          if(b[0].Count > mayor)
            mayor = b[0].Count;
          i++;
        }
        $scope.data_import.push({x: interval, y: interval, r: parseInt(Math.sqrt(mayor))});
        $scope.colors.push($scope.colors_palet[i-1]);
        //console.log(uranga);
        //console.log($scope.colors);
        interval = interval + 150;
        mayor = 0; i = 0;
      }
      //$scope.data_import.push(uranga);
      //console.log($scope.data_import);
      reorder_data();
    }

    /*function hexToRgb(hex){
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
    }*/

    function reorder_data(){
      $scope.data_import.sort(function(a, b){
        if(a.r < b.r)
          return -1;
        if(a.r > b.r)
          return 1;
        else
          return 0;
        //console.log(a);
      });
    }

    /*function reorder(item){
      var i = 0;
      item.sort(function(a, b){
        if(a[i].hasOwnProperty('r') && b[i].hasOwnProperty('r')){
          var nombreA = a[i].r, nombreB = b[i].r;
          if(nombreA < nombreB)
            return -1;
          if(nombreA > nombreB)
            return 1;
          return 0;
        }else
          console.log('JIJIJIJIJIJI');
        i++;
      });
      return item;
    }*/
    function reorder(item){
      var i = 0, mayor = 0;
      item.sort(function(value){
        if(item[i].r > mayor){
          mayor = item[i].r;
          return 1;
        }
        if(item[i].r < item[i].r)
          return -1;
        else
          return 0;
      });
    }

    //createChart();
    //console.log($scope.data_import);
    /*for (var i = 0; i < $scope.data_import.length; i++) {
      //console.log($scope.data_import[i]);
      for (var j = 0; j < $scope.data_import[i].length; j++) {
          $scope.colors.push($scope.data_import[i][j]);
      }
    }*/
    //console.log('Imprimimos colores');
    //console.log($scope.colors);
    function data_animation(){
      setInterval(function(){
        var a = $scope.data;
        $scope.data = [];
        for (var i = 0; i < a.length; i++) {
          set_data(a[i]);
        }
      }, 2000);
    }

    function agregar_colores(data){
      var i = 0;
      for(var key in data){
        for (var item in data[key]) {
          var b = data[key][item];
          b[0].color = $scope.colors_palet[i];
          i++;
        }
        i = 0;
      }
    }

    function set_data(data){
      setTimeout(function(){
        $scope.$apply(function(){
          //$scope.data = $scope.data_import[value];
          $scope.data = data;
          //console.log('Imprimimos los datos');
          //console.log($scope.data);
        });
      }, 1000);
    }

    function coloreamos(array){
      var i = 0;
      for(var key in data){
        for (var item in data[key]) {
          var b = data[key][item];
          $scope.colors.push(
            {
                backgroundColor: b[0].color,
                fillColor:   b[0].color,
                strokeColor:   b[0].color,
                highlightFill:   b[0].color,
                highlightStroke:   b[0].color
            }
          );
          //console.log(b[0].color);
          i++;
        }
        i = 0;
      }
    }
    //console.log($scope.labels);
    //console.log($scope.data);
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
            max: 1200,
            min:-1200,
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
    $scope.data = $scope.data_import;
    //console.log($scope.data);
    //coloreamos($scope.data);
    /*$interval(function(){
      createChart();
      if($scope.value)
        $scope.data = $scope.data_import[$scope.value];
      else
        $scope.data = $scope.data_import[1];
    }, 2000);*/
    //setTimeout(data_animation, 1000);

    $scope.ver_data = function(value){
      //$scope.value = value;
      //createChart();
      if(value == 1)
        $scope.politik = 'CFK';
      if(value === 0)
        $scope.politik = 'Bullrich';
      if(value == 2)
        $scope.politik = 'Randazzo';
      if(value === 3)
        $scope.politik = 'Massa';
      if(value === 4)
          $scope.politik = 'Carrio';
      if(value === 5)
          $scope.politik = 'Filmus';
      setTimeout(function(){
        $scope.$apply(function(){
          //set_data($scope.data[value]);
          //reorder_data();
          createChartByCandidate();
          $scope.colors = ['#D50606', '#8013DA', '#F0E919', '#009FFA', '#17DC03'];
          $scope.data = $scope.data_import[value];
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
