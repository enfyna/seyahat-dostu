module.exports = {
  friendlyName: 'Home',

  description: 'Home index.',

  inputs: {},

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function () {
    const user = this.req.me;
    return {
      page: 'index',
      props: {
        user
      }
    }
  }
}
