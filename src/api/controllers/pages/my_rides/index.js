module.exports = {
  friendlyName: 'Home',

  description: 'Home index.',

  inputs: {},

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function() {
    const user = this.req.me;
    const userID = user.id;
    const rides = await Ride.find({ Driver: userID }).populate('Customer');
    const active_rides = rides.filter((ride) => {
      return ride.Customer && !ride.isCompleted;
    })

    const waiting_rides = rides.filter((ride) => {
      return !ride.Customer;
    })

    const history_rides = rides.filter((ride) => {
      return ride.Customer && ride.isCompleted;
    })
    return {
      page: 'my_rides',
      props: {
        user,
        active_rides,
        waiting_rides,
        history_rides
      }
    }
  }
}


