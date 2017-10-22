(function(){

  'use strict';

  function Datos_Politicos(){
    var datos = {
      'bullrich': [
        //[[{"Sent":"Positive","Count":260,"_row":"Total Positive"}],
        //[{"Sent":"Negative","Count":86,"_row":"Total Negative"}],
        [{"Sent":"Anger","Count":93,"_row":"Total Anger"}],
        //[{"Sent":"Anticipation","Count":208,"_row":"Total Anticipation"}],
        //[{"Sent":"Disgust","Count":0,"_row":"Total Disgust"}],
        [{"Sent":"Fear","Count":133,"_row":"Total Fear"}],
        [{"Sent":"Joy","Count":220,"_row":"Total Joy"}],
        [{"Sent":"Sadness","Count":131,"_row":"Total Sadness"}],
        //[{"Sent":"Surprise","Count":36,"_row":"Total Surprise"}],
        [{"Sent":"Trust","Count":380,"_row":"Total Trust"}]
      ],
      'cfk': [
        //[{"Count":360,"_row":"Total Positive"}],
        //[{"Count":324,"_row":"Total Negative"}],
        [{"Count":160,"_row":"Total Anger"}],
        //[{"Count":175,"_row":"Total Anticipation"}],
        //[{"Count":0,"_row":"Total Disgust"}],
        [{"Count":228,"_row":"Total Fear"}],
        [{"Count":178,"_row":"Total Joy"}],
        [{"Count":166,"_row":"Total Sadness"}],
        //[{"Count":32,"_row":"Total Surprise"}],
        [{"Count":351,"_row":"Total Trust"}]
      ],
      'randazzo': [
        //[[{"Sent":"Positive","Count":331,"_row":"Total Positive"}],
        //[{"Sent":"Negative","Count":147,"_row":"Total Negative"}],
        [{"Sent":"Anger","Count":76,"_row":"Total Anger"}],
        //[{"Sent":"Anticipation","Count":94,"_row":"Total Anticipation"}],
        //[{"Sent":"Disgust","Count":47,"_row":"Total Disgust"}],
        [{"Sent":"Fear","Count":110,"_row":"Total Fear"}],
        [{"Sent":"Joy","Count":191,"_row":"Total Joy"}],
        [{"Sent":"Sadness","Count":91,"_row":"Total Sadness"}],
        //[{"Sent":"Surprise","Count":26,"_row":"Total Surprise"}],
        [{"Sent":"Trust","Count":383,"_row":"Total Trust"}]
      ],
      'massa':[
        //[[{"Sent":"Positive","Count":755,"_row":"Total Positive"}],
        //[{"Sent":"Negative","Count":544,"_row":"Total Negative"}],
        [{"Sent":"Anger","Count":138,"_row":"Total Anger"}],
        //[{"Sent":"Anticipation","Count":322,"_row":"Total Anticipation"}],
        //[{"Sent":"Disgust","Count":73,"_row":"Total Disgust"}],
        [{"Sent":"Fear","Count":215,"_row":"Total Fear"}],
        [{"Sent":"Joy","Count":195,"_row":"Total Joy"}],
        [{"Sent":"Sadness","Count":145,"_row":"Total Sadness"}],
        //[{"Sent":"Surprise","Count":138,"_row":"Total Surprise"}],
        [{"Sent":"Trust","Count":336,"_row":"Total Trust"}]
      ],
      'carrio': [
        //[[{"Sent":"Positive","Count":567,"_row":"Total Positive"}],
        //[{"Sent":"Negative","Count":388,"_row":"Total Negative"}],
        [{"Sent":"Anger","Count":177,"_row":"Total Anger"}],
        //[{"Sent":"Anticipation","Count":261,"_row":"Total Anticipation"}],
        //[{"Sent":"Disgust","Count":134,"_row":"Total Disgust"}],
        [{"Sent":"Fear","Count":217,"_row":"Total Fear"}],
        [{"Sent":"Joy","Count":182,"_row":"Total Joy"}],
        [{"Sent":"Sadness","Count":150,"_row":"Total Sadness"}],
        //[{"Sent":"Surprise","Count":171,"_row":"Total Surprise"}],
        [{"Sent":"Trust","Count":404,"_row":"Total Trust"}]
      ],
      'filmus': [
        //[[{"Sent":"Positive","Count":357,"_row":"Total Positive"}],
        //[{"Sent":"Negative","Count":435,"_row":"Total Negative"}],
        [{"Sent":"Anger","Count":149,"_row":"Total Anger"}],
        //[{"Sent":"Anticipation","Count":262,"_row":"Total Anticipation"}],
        //[{"Sent":"Disgust","Count":54,"_row":"Total Disgust"}],
        [{"Sent":"Fear","Count":227,"_row":"Total Fear"}],
        [{"Sent":"Joy","Count":175,"_row":"Total Joy"}],
        [{"Sent":"Sadness","Count":176,"_row":"Total Sadness"}],
        //[{"Sent":"Surprise","Count":86,"_row":"Total Surprise"}],
        [{"Sent":"Trust","Count":318,"_row":"Total Trust"}]
      ]

    };

    return datos;
  }

  angular.module('politike.services')
        .factory('Datos_Politicos', Datos_Politicos);
})();
