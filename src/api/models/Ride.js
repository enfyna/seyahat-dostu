/**
 * Ride.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    Departure_Point: {
      type: 'string',
      required: true
    },

    Arrival_Point: {
      type: 'string',
      required: true
    },

    Date: {
      type: 'string',
      required: true
    },


    Price: {
      type: 'number',
      required: true
    },


    Number_of_Ppl: {
      type: 'number',
      required: true
    },


    Departure_Time: {
      type: 'string',
      required: true
    },


    Arrival_Time: {
      type: 'string',
      required: true
    },


    Time: {
      type: 'string',
      required: true
    },


    Driver_Name: {
      type: 'string',
      required: true
    },


    Driver_Photo: {
      type: 'string', //?
      required: true
    },


    Driver_ID: {
      type: 'string',
      required: true
    },

    Driver_Point: {
      type: 'number',
      required: true
    },

    Car_Brand: {
      type: 'string',
      required: true
    },

    Car_Model: {
      type: 'string',
      required: true
    },


    Car_Plate: {
      type: 'string',
      required: true
    },


    Message: {
      type: 'string',
      required: true
    },

    // ŞÖFÖRÜN ID BİLGİSİ ALINIP DİREK CLASS ÇEKİLEBİLİR Mİ? DENENECEK

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

