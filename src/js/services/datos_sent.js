(function(){

  'use strict';

  function Datos_Politicos(){
    var datos = {
      'bullrich': [
        //[[{"Sent":"Positive","Count":259,"_row":"Total Positive"}],
        //[{"Sent":"Negative","Count":86,"_row":"Total Negative"}],
        [{"Sent":"Anger","Count":20,"_row":"Total Anger"}],
        //[{"Sent":"Anticipation","Count":207,"_row":"Total Anticipation"}],
        //[{"Sent":"Disgust","Count":0,"_row":"Total Disgust"}],
        [{"Sent":"Fear","Count":70,"_row":"Total Fear"}],
        [{"Sent":"Joy","Count":114,"_row":"Total Joy"}],
        [{"Sent":"Sadness","Count":86,"_row":"Total Sadness"}],
        //[{"Sent":"Surprise","Count":36,"_row":"Total Surprise"}],
        [{"Sent":"Trust","Count":315,"_row":"Total Trust"}]
      ],
      'cfk': [
        //[{"Count":360,"_row":"Total Positive"}],
        //[{"Count":324,"_row":"Total Negative"}],
        [{"Count":40,"_row":"Total Anger"}],
        //[{"Count":175,"_row":"Total Anticipation"}],
        //[{"Count":0,"_row":"Total Disgust"}],
        [{"Count":150,"_row":"Total Fear"}],
        [{"Count":149,"_row":"Total Joy"}],
        [{"Count":87,"_row":"Total Sadness"}],
        //[{"Count":32,"_row":"Total Surprise"}],
        [{"Count":400,"_row":"Total Trust"}]
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
        [{"Sent":"Trust","Count":225,"_row":"Total Trust"}]
      ],
      'massa':[
        //[[{"Sent":"Positive","Count":755,"_row":"Total Positive"}],
        //[{"Sent":"Negative","Count":544,"_row":"Total Negative"}],
        [{"Sent":"Anger","Count":111,"_row":"Total Anger"}],
        //[{"Sent":"Anticipation","Count":322,"_row":"Total Anticipation"}],
        //[{"Sent":"Disgust","Count":73,"_row":"Total Disgust"}],
        [{"Sent":"Fear","Count":409,"_row":"Total Fear"}],
        [{"Sent":"Joy","Count":288,"_row":"Total Joy"}],
        [{"Sent":"Sadness","Count":172,"_row":"Total Sadness"}],
        //[{"Sent":"Surprise","Count":138,"_row":"Total Surprise"}],
        [{"Sent":"Trust","Count":566,"_row":"Total Trust"}]
      ],
      'carrio': [
        //[[{"Sent":"Positive","Count":567,"_row":"Total Positive"}],
        //[{"Sent":"Negative","Count":388,"_row":"Total Negative"}],
        [{"Sent":"Anger","Count":268,"_row":"Total Anger"}],
        //[{"Sent":"Anticipation","Count":261,"_row":"Total Anticipation"}],
        //[{"Sent":"Disgust","Count":134,"_row":"Total Disgust"}],
        [{"Sent":"Fear","Count":232,"_row":"Total Fear"}],
        [{"Sent":"Joy","Count":209,"_row":"Total Joy"}],
        [{"Sent":"Sadness","Count":129,"_row":"Total Sadness"}],
        //[{"Sent":"Surprise","Count":171,"_row":"Total Surprise"}],
        [{"Sent":"Trust","Count":764,"_row":"Total Trust"}]
      ],
      'filmus': [
        //[[{"Sent":"Positive","Count":357,"_row":"Total Positive"}],
        //[{"Sent":"Negative","Count":435,"_row":"Total Negative"}],
        [{"Sent":"Anger","Count":86,"_row":"Total Anger"}],
        //[{"Sent":"Anticipation","Count":262,"_row":"Total Anticipation"}],
        //[{"Sent":"Disgust","Count":54,"_row":"Total Disgust"}],
        [{"Sent":"Fear","Count":237,"_row":"Total Fear"}],
        [{"Sent":"Joy","Count":156,"_row":"Total Joy"}],
        [{"Sent":"Sadness","Count":131,"_row":"Total Sadness"}],
        //[{"Sent":"Surprise","Count":86,"_row":"Total Surprise"}],
        [{"Sent":"Trust","Count":273,"_row":"Total Trust"}]
      ]

    };

    return datos;
  }

  angular.module('politike.services')
        .factory('Datos_Politicos', Datos_Politicos);
})();
