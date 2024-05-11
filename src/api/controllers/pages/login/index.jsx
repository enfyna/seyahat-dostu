module.exports = {
  friendlyName: 'Login',

  description: 'Login page.',

  inputs: {},

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function () {
    return {
      page: 'login',
      props: {
        //name: 'Inertia'
      }
    }
  }
}
