/**
 * Seyahat.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    ID: {
      type: 'string',
      required: true
    },

    Kalkis_Nok: {
      type: 'string',
      required: true
    },

    Varis_Nok: {
      type: 'string',
      required: true
    },

    
    Tarih: {
      type: 'string',
      required: true
    },

    
    Fiyat: {
      type: 'float',
      required: true
    },

    
    Kisi_Say: {
      type: 'int',
      required: true
    },

    
    Kalkis_Saat: {
      type: 'string',
      required: true
    },

    
    Varis_Saat: {
      type: 'string',
      required: true
    },

    
    Sure: {
      type: 'string',
      required: true
    },

    
    Sofor_Ad: {
      type: 'string',
      required: true
    },

    
    Sofor_Foto: {
      type: 'string', //?
      required: true
    },

    
    Sofor_ID: {
      type: 'string',
      required: true
    },

    Sofor_Puan: {
      type: 'float',
      required: true
    },

    Arac_Marka: {
      type: 'string',
      required: true
    },
    
    Arac_Model: {
      type: 'string',
      required: true
    },

    
    Arac_Plaka: {
      type: 'string',
      required: true
    },

    
    Mesaj: {
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

  primaryKey: 'ID',

};

