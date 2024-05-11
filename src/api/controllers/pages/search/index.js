module.exports = {
  friendlyName: 'Search',

  description: 'Search index.',

  inputs: {},

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function () {
    return {
      page: 'search',
      props: {
        name: 'Search'
      }
    }
  }
}
