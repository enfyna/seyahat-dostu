module.exports = {
  friendlyName: 'Reservations',

  description: 'Reservations',

  inputs: {},

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function () {
    return {
      page: 'reservations',
      props: {
        //name: 'Inertia'
      }
    }
  }
}


