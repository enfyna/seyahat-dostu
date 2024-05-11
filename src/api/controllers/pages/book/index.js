module.exports = {
  friendlyName: 'Book a Reservation',

  description: 'Book a Reservation',

  inputs: {},

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function () {
    return {
      page: 'book',
      props: {
        //name: 'Inertia'
      }
    }
  }
}


