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
      page: 'driver',
      props: {
        user: this.req.me,
      }
    }
  }
}
