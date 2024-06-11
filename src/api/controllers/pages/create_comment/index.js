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
    const userID = this.req.me.id
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
        userID,
        rideID,
        driverID,
      }
    }
  }
}


