(function() {

  'use strict';

  function HomeCtrl($rootScope, $scope, $interval, Datos_Politicos){
    var vm = this;

    var data = Datos_Politicos;
    var ura, all_candidates;
    $scope.massa = '';
    $scope.randazzo = '';
    $scope.kirchner = '';
    $scope.filmus = '';
    $scope.carrio = '';
    $scope.bullrich = '';
    //$scope.candidate_colors = ['#F6F30C', '#10DBF2', '#0B3EEB', '#FF4015', '#F6F30C', '#10DBF2'];
    $scope.candidate_colors = ['#f4f514', '#f9c73a', '#8ff1f9', '#3bc3f2', '#ff6b06', '#014a85'];
    $scope.series = ['Esteban Bullrich', 'Elisa Carrio', 'Daniel Filmus', 'Cristina Kirchner', 'Sergio Massa', 'Florencio Randazzo'];
    //$scope.series_to = ['Enojo', 'Miedo', 'Alegría', 'Tristeza', 'Confianza'];
    $scope.series_to = ['Confianza', 'Alegría', 'Tristeza', 'Miedo', 'Enojo'];
    //$scope.series = ['Esteban Bullrich', 'Cristina Kirchner', 'Florencio Randazzo', 'Sergio Massa', 'Elisa Carrio', 'Daniel Filmus'];
    $scope.labels = [];
    $scope.politik = 'Todos';
    //$scope.colors_palet = ['#D50606', '#8013DA', '#F0E919', '#009FFA', '#17DC03'];
    $scope.colors_palet = ['#17DC03', '#F0E919', '#009FFA', '#8013DA', '#D50606'];
    $scope.data = [];
    $scope.colors = [];
    $rootScope.img = '/img/grisclaro.jpg';
    //agregar_colores(data);
    //console.log(data);
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
          value.push(
            [
              {
                'x': randomScalingFactor(),
                'y': randomScalingFactor(),
                'r': b[0].Count > 0 ? parseInt(b[0].Count/2) > 250 ? 250 : parseInt(b[0].Count/2) : 0
              }
            ]
          );
          interval = interval + 10;
          //value.push([{'x': randomScalingFactor(), 'y': randomScalingFactor(), 'r': parseInt(Math.sqrt(b[0].Count))}]);
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
      var i = 0, value = [], interval = -800, mayor = 0, uranga = [], color_p;
      for(var key in data){
        for (var item in data[key]) {
          var b = data[key][item];
          /*if(b[0].Count > mayor){
            mayor = b[0].Count;
            color_p = i;
          }*/
          mayor = mayor + b[0].Count;
          //i++;
          //console.log(mayor);
          //console.log(color_p);
        }
        $scope.data_import.push([
          {
            x: interval,
            y: randomScalingFactor(),
            r: parseInt(Math.sqrt(mayor) + 10)
          }
        ]);
        //$scope.colors.push($scope.colors_palet[color_p]);
        $scope.colors.push({
          backgroundColor: $scope.candidate_colors[i],
          fillColor:   $scope.candidate_colors[i],
          strokeColor:   $scope.candidate_colors[i],
          highlightFill:   $scope.candidate_colors[i],
          highlightStroke:   $scope.candidate_colors[i]
        });
        //$scope.series = ['Trust'];
        /*if($scope.series.length === 0){
          setTimeout(function(){
            $scope.series.push($scope.series_to[i-1]);
            $scope.labels.push($scope.series_to[i-1]);
          }, 100);
        }
        for (var h = 0; h < $scope.series.length; h++) {
          if($scope.series[h] !== $scope.series_to[i-1]){
            setTimeout(function(){
              $scope.series.push($scope.series_to[i-1]);
              $scope.labels.push($scope.series_to[i-1]);
            }, 100);
          }
        }*/
        //console.log(uranga);
        //console.log($scope.colors);
        interval = interval + 250;
        mayor = 0; i++;
      }
      //$scope.data_import.push(uranga);
      //reorder_data();
      //console.log($scope.data_import);
      //console.log($scope.colors);
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
    //$scope.series = ['Anger', 'Fear', 'Joy', 'Sadness', 'Trust'];
    createChart();
    $scope.data = $scope.data_import;
    coloreamos($scope.data);
    $scope.options = {
      responsive: true,
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

    all_candidates = $interval(function(){
      createChart();
      $scope.data = $scope.data_import;
      coloreamos($scope.data);
    }, 2000);

    //$scope.series = ['Bullrich', 'CFK', 'Randazzo', 'Massa', 'Carrio', 'Filmus'];
    //$scope.dataOverride = [];
    $scope.datasetOverride = [];
    /*$interval(function(){
      createChart();
      if($scope.value)
        $scope.data = $scope.data_import[$scope.value];
      else
        $scope.data = $scope.data_import[1];
    }, 2000);*/
    //setTimeout(data_animation, 1000);

    $scope.ver_data = function(value){
      clearInterval(ura);
      $interval.cancel(all_candidates);
      //$scope.value = value;
      //createChart();
      if(value == 1){
        $scope.politik = 'CFK';
        $scope.kirchner = 'active';
        $scope.massa = '';
        $scope.randazzo = '';
        $scope.filmus = '';
        $scope.carrio = '';
        $scope.bullrich = '';
      }
      if(value === 0){
        $scope.politik = 'Bullrich';
        $scope.bullrich = 'active';
        $scope.massa = '';
        $scope.randazzo = '';
        $scope.kirchner = '';
        $scope.filmus = '';
        $scope.carrio = '';
      }
      if(value == 2){
        $scope.politik = 'Randazzo';
        $scope.randazzo = 'active';
        $scope.massa = '';
        $scope.kirchner = '';
        $scope.filmus = '';
        $scope.carrio = '';
        $scope.bullrich = '';
      }
      if(value === 3){
        $scope.politik = 'Massa';
        $scope.massa = 'active';
        $scope.randazzo = '';
        $scope.kirchner = '';
        $scope.filmus = '';
        $scope.carrio = '';
        $scope.bullrich = '';
      }
      if(value === 4){
          $scope.politik = 'Carrio';
          $scope.carrio = 'active';
          $scope.massa = '';
          $scope.randazzo = '';
          $scope.kirchner = '';
          $scope.filmus = '';
          $scope.bullrich = '';
      }
      if(value === 5){
          $scope.politik = 'Filmus';
          $scope.filmus = 'active';
          $scope.massa = '';
          $scope.randazzo = '';
          $scope.kirchner = '';
          $scope.carrio = '';
          $scope.bullrich = '';
      }
      ura = setInterval(function(){
        $scope.$apply(function(){
          $rootScope.img = '/img/grisclarosegunda.jpg';
          //set_data($scope.data[value]);
          //reorder_data();
          $scope.series = ['Enojo', 'Miedo', 'Alegría', 'Tristeza', 'Confianza'];
          createChartByCandidate();
          //$scope.colors = ['#D50606', '#8013DA', '#F0E919', '#009FFA', '#17DC03'];
          $scope.colors = ['#de0000', '#432397', ' #f7e53c', '#3b76eb', '#8cc63f'];
          $scope.data = $scope.data_import[value];
          $scope.options = {
            responsive: true,
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
            },
            legend: {display: true}
          };
          //console.log($scope.data);
        });
      }, 4000);
    };

    function randomScalingFactor () {
      //console.log((Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 400));
      return (Math.random() > 0.1 ? 1.0 : -1.0) * Math.round(Math.random() * 400);
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
