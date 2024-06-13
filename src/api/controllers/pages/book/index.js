module.exports = {
  friendlyName: 'Book a Reservation',

  description: 'Book a Reservation',

  inputs: {
    id: {
      type: 'number',
      required: true
    },
  },

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function ({ id }) {
    const user = this.req.me;
    const ride = await Ride.findOne({ id });
    if(ride.Driver.id == user.id){
      return {
        page: 'index',
      }
    }
    return {
      page: 'book',
      props: {
        rideID: ride.id,
      }
    }
  }
}


