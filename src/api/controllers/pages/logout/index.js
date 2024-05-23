module.exports = {
  friendlyName: 'Logout',

  description: 'Logout page.',

  inputs: {},

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function () {
    return {
      page: 'logout',
      props: {
        //name: 'Inertia'
      }
    }
  }
}

