module.exports = {
  friendlyName: 'Reservations',

  description: 'Reservations',

  inputs: {},

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function() {
    const user = this.req.me;
    const userID = user.id;
    const rides = await Ride.find({ Customer: userID }).populate('Driver')
    const active_reservations = rides.filter((ride) => {
      return ride.Customer && !ride.isCompleted;
    })

    const waiting_reservations = rides.filter((ride) => {
      return ride.Customer && ride.isCompleted && !ride.isRated;
    })

    const old_reservations = rides.filter((ride) => {
      return ride.Customer && ride.isCompleted && ride.isRated;
    })
    return {
      page: 'reservations',
      props: {
        user,
        old_reservations,
        waiting_reservations,
        active_reservations
      }
    }
  }
}


