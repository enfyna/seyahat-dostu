module.exports = {
  friendlyName: 'Example',

  description: 'Example index.',

  inputs: {},

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function () {
    return {
      page: 'example',
      props: {
      quote: "Example page"
      }
    }
  }
}
