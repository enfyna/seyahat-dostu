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
    const user = this.req.me;
    return {
      page: 'create_ride',
      props: {
        user
      }
    }
  }
}

