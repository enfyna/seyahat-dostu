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

    Departure_Time: {
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

    Time: {
      type: 'string',
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

    isCompleted: {
      type: 'boolean',
      defaultsTo: false,
    },

    isRated: {
      type: 'boolean',
      defaultsTo: false,
    },

    Message: {
      type: 'string',
      required: true
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    Driver: {
      model: 'user',
      required: true,
    },

    Customer: {
      model: 'user',
    },
  },

};

