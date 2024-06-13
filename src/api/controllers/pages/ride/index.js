module.exports = {
  friendlyName: 'Ride',

  description: '',

  inputs: {
    id:{
      type: 'number'
    }
  },

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function ({ id }) {
    const ride = await Ride.findOne({ id }).populate('Driver');
    return {
      page: 'ride',
      props: {
        user: this.req.me,
        ride,
      }
    }
  }
}



