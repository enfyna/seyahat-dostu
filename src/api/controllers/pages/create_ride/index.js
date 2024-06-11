module.exports = {
  friendlyName: 'Become Driver',

  description: '',

  inputs: {},

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function () {
    return {
      page: 'create_ride',
      props: {
        //name: 'Inertia'
      }
    }
  }
}

