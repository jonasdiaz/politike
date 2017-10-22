(function(){

  'use strict';

  function Datos_Politicos(){
    var datos = {
      'bullrich': [
        //[{"Count":257,"_row":"Total Positive"}],
        //[{"Count":86,"_row":"Total Negative"}],
        [{"Count":0,"_row":"Total Anger"}],
        //[{"Count":206,"_row":"Total Anticipation"}]
        //[{"Count":0,"_row":"Total Disgust"}],
        [{"Count":70,"_row":"Total Fear"}],
        [{"Count":113,"_row":"Total Joy"}],
        [{"Count":86,"_row":"Total Sadness"}],
        //[{"Count":36,"_row":"Total Surprise"}],
        [{"Count":314,"_row":"Total Trust"}]
      ],
      'cfk': [
        //[{"Count":360,"_row":"Total Positive"}],
        //[{"Count":324,"_row":"Total Negative"}],
        [{"Count":74,"_row":"Total Anger"}],
        //[{"Count":175,"_row":"Total Anticipation"}],
        //[{"Count":0,"_row":"Total Disgust"}],
        [{"Count":236,"_row":"Total Fear"}],
        [{"Count":149,"_row":"Total Joy"}],
        [{"Count":87,"_row":"Total Sadness"}],
        //[{"Count":32,"_row":"Total Surprise"}],
        [{"Count":347,"_row":"Total Trust"}]
      ],
      'randazzo': [
        //[[{"Sent":"Positive","Count":331,"_row":"Total Positive"}],
        //[{"Sent":"Negative","Count":147,"_row":"Total Negative"}],
        [{"Sent":"Anger","Count":60,"_row":"Total Anger"}],
        //[{"Sent":"Anticipation","Count":94,"_row":"Total Anticipation"}],
        //[{"Sent":"Disgust","Count":47,"_row":"Total Disgust"}],
        [{"Sent":"Fear","Count":40,"_row":"Total Fear"}],
        [{"Sent":"Joy","Count":94,"_row":"Total Joy"}],
        [{"Sent":"Sadness","Count":60,"_row":"Total Sadness"}],
        //[{"Sent":"Surprise","Count":26,"_row":"Total Surprise"}],
        [{"Sent":"Trust","Count":225,"_row":"Total Trust"}]]
      ],
      'massa':[
        //[{"Sent":"Positive","Count":706,"_row":"Total Positive"}],
        //[{"Sent":"Negative","Count":665,"_row":"Total Negative"}],
        [{"Sent":"Anger","Count":189,"_row":"Total Anger"}],
        //[{"Sent":"Anticipation","Count":295,"_row":"Total Anticipation"}],
        //[{"Sent":"Disgust","Count":39,"_row":"Total Disgust"}],
        [{"Sent":"Fear","Count":425,"_row":"Total Fear"}],
        [{"Sent":"Joy","Count":255,"_row":"Total Joy"}],
        [{"Sent":"Sadness","Count":174,"_row":"Total Sadness"}],
        //[{"Sent":"Surprise","Count":150,"_row":"Total Surprise"}],
        [{"Sent":"Trust","Count":569,"_row":"Total Trust"}]
      ],
      'carrio': [
        //[{"Sent":"Positive","Count":556,"_row":"Total Positive"}],
        //[{"Sent":"Negative","Count":262,"_row":"Total Negative"}],
        [{"Sent":"Anger","Count":175,"_row":"Total Anger"}],
        //[{"Sent":"Anticipation","Count":254,"_row":"Total Anticipation"}],
        //[{"Sent":"Disgust","Count":132,"_row":"Total Disgust"}],
        [{"Sent":"Fear","Count":169,"_row":"Total Fear"}],
        [{"Sent":"Joy","Count":205,"_row":"Total Joy"}],
        [{"Sent":"Sadness","Count":96,"_row":"Total Sadness"}],
        //[{"Sent":"Surprise","Count":171,"_row":"Total Surprise"}],
        [{"Sent":"Trust","Count":783,"_row":"Total Trust"}]
      ],
      'filmus': [
        //[{"Sent":"Positive","Count":350,"_row":"Total Positive"}],
        //[{"Sent":"Negative","Count":429,"_row":"Total Negative"}],
        [{"Sent":"Anger","Count":59,"_row":"Total Anger"}],
        //[{"Sent":"Anticipation","Count":252,"_row":"Total Anticipation"}],
        //[{"Sent":"Disgust","Count":51,"_row":"Total Disgust"}],
        [{"Sent":"Fear","Count":257,"_row":"Total Fear"}],
        [{"Sent":"Joy","Count":152,"_row":"Total Joy"}],
        [{"Sent":"Sadness","Count":125,"_row":"Total Sadness"}],
        //[{"Sent":"Surprise","Count":84,"_row":"Total Surprise"}],
        [{"Sent":"Trust","Count":292,"_row":"Total Trust"}]
      ]

    };

    return datos;
  }

  angular.module('politike.services')
        .factory('Datos_Politicos', Datos_Politicos);
})();
