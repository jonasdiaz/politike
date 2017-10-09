(function(){

  'use strict';

  function Datos_Politicos(){
    var datos = {
      'bullrich': [
        [{"Count":257,"_row":"Total Positive"}],
        [{"Count":86,"_row":"Total Negative"}],
        [{"Count":0,"_row":"Total Anger"}],
        [{"Count":206,"_row":"Total Anticipation"}],
        [{"Count":0,"_row":"Total Disgust"}],
        [{"Count":70,"_row":"Total Fear"}],
        [{"Count":113,"_row":"Total Joy"}],
        [{"Count":86,"_row":"Total Sadness"}],
        [{"Count":36,"_row":"Total Surprise"}],
        [{"Count":314,"_row":"Total Trust"}]
      ],
      'cfk': [
        [{"Count":360,"_row":"Total Positive"}],
        [{"Count":324,"_row":"Total Negative"}],
        [{"Count":74,"_row":"Total Anger"}],
        [{"Count":175,"_row":"Total Anticipation"}],
        [{"Count":0,"_row":"Total Disgust"}],
        [{"Count":236,"_row":"Total Fear"}],
        [{"Count":149,"_row":"Total Joy"}],
        [{"Count":87,"_row":"Total Sadness"}],
        [{"Count":32,"_row":"Total Surprise"}],
        [{"Count":347,"_row":"Total Trust"}]
      ],
      'randazzo': [
        [{"Sent":"Positive","Count":330,"_row":"Total Positive"}],
        [{"Sent":"Negative","Count":170,"_row":"Total Negative"}],
        [{"Sent":"Anger","Count":59,"_row":"Total Anger"}],
        [{"Sent":"Anticipation","Count":94,"_row":"Total Anticipation"}],
        [{"Sent":"Disgust","Count":47,"_row":"Total Disgust"}],
        [{"Sent":"Fear","Count":39,"_row":"Total Fear"}],
        [{"Sent":"Joy","Count":94,"_row":"Total Joy"}],
        [{"Sent":"Sadness","Count":59,"_row":"Total Sadness"}],
        [{"Sent":"Surprise","Count":26,"_row":"Total Surprise"}],
        [{"Sent":"Trust","Count":223,"_row":"Total Trust"}]
      ],
      'massa':[
        [{"Sent":"Positive","Count":706,"_row":"Total Positive"}],
        [{"Sent":"Negative","Count":665,"_row":"Total Negative"}],
        [{"Sent":"Anger","Count":189,"_row":"Total Anger"}],
        [{"Sent":"Anticipation","Count":295,"_row":"Total Anticipation"}],
        [{"Sent":"Disgust","Count":39,"_row":"Total Disgust"}],
        [{"Sent":"Fear","Count":425,"_row":"Total Fear"}],
        [{"Sent":"Joy","Count":255,"_row":"Total Joy"}],
        [{"Sent":"Sadness","Count":174,"_row":"Total Sadness"}],
        [{"Sent":"Surprise","Count":150,"_row":"Total Surprise"}],
        [{"Sent":"Trust","Count":569,"_row":"Total Trust"}]
      ]

    };

    return datos;
  }

  angular.module('politike.services')
        .factory('Datos_Politicos', Datos_Politicos);
})();
