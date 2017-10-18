(function(){
  'use strict';

  function config ($locationProvider, $routeProvider, ChartJsProvider) {
    $locationProvider.html5Mode(true);
    ChartJsProvider.setOptions({
      tooltips: { enabled: false }
    });
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      });
      /*.when('/:postId', {
        templateUrl: 'views/post-detail.tpl.html',
        controller: 'PostDetailCtrl',
        controllerAs: 'postdetail'
      });*/
  }

  angular.module('politike', ['ngRoute', 'politike.controllers', 'politike.services', 'chart.js'])
        .config(config);
})();
