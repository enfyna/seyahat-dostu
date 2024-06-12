module.exports = {
  friendlyName: 'Create Rating',

  description: '',

  inputs: {
    rideID: {
      type: 'number',
      required: true
    },
  },

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function({ rideID }) {
    const user = this.req.me;
    const userID = user.id;
    const ride = await Ride.findOne({ id:rideID })
    if( ride.Customer != userID ){
      return {
        page: 'index',
      }
    }
    const driverID = ride.Driver;


    return {
      page: 'create_comment',
      props: {
        user,
        userID,
        rideID,
        driverID,
      }
    }
  }
}


