/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    Name: {
      type: 'string',
      required: true
    },

    Email: {
      type: 'string',
      required: true
    },

    Phone: {
      type: 'string',
      required: true
    },

    Password: {
      type: 'string',
      required: true
    },

    Interests: {
      type: 'string',
      defaultsTo: ''
    },

    Driver: {
      type: 'boolean',
      defaultsTo: false
    },

    Photograph: {
      type: 'string', // ??
      allowNull: true,
    },

    Age: {
      type: 'string',
      required: true
    },

    Location: {
      type: 'string',
      required: true
    },

    Smoking: {
      type: 'boolean',
      defaultsTo: false
    },

    Point: {
      type: 'number',
      defaultsTo: 0,
    },

    About: {
      type: 'string',
      defaultsTo: ''
    },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    GivenComments: {
      collection: 'comment',
      via: 'Commenter'
    },

    ReceivedComments: {
      collection: 'comment',
      via: 'Receiver'
    },

    Reservations: {
      collection: 'ride',
      via: 'Customers'
    },

    Rides: {
      collection: 'ride',
      via: 'Driver'
    }
  },

  customToJSON: function () {
    return _.omit(this, ['Password']);
  },
};
