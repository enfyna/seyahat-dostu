module.exports = {
  friendlyName: 'Profile Page',

  description: 'Profile Page of a given user',

  inputs: {
    id: {
      type: 'number',
      required: true,
    }
  },

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function(inputs) {
    const user = await User.findOne({ id: inputs.id })
    const ratings = await Rating.find({ Receiver: user.id }).populate('Ratinger')
    return {
      page: 'profile',
      props: {
        user,
        ratings,
      }
    }
  }
}

