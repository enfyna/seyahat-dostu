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
    const profile = await User.findOne({ id: inputs.id })
    const ratings = await Rating.find({ Receiver: profile.id }).populate('Ratinger')
    return {
      page: 'profile',
      props: {
        user: this.req.me,
        profile,
        ratings,
      }
    }
  }
}

