module.exports = {
  friendlyName: 'Search',

  description: 'Search index.',

  inputs: {
    departure: {
      type: 'string',
    },
    destination: {
      type: 'string',
    },
    passengers: {
      type: 'number',
    },
    date: {
      type: 'string',
    },
  },

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function(inputs) {
    const all_rides = await Ride.find().populate('Driver');

    const rides = all_rides.filter((ride) => {
      if (ride.Customer) return false;
      else if (inputs.departure && ride.Departure_Point != inputs.departure) return false;
      else if (inputs.destination != '' && ride.Arrival_Point != inputs.destination) return false;
      else if (inputs.passengers > 0 && ride.Number_of_Ppl <= inputs.passengers) return false;
      else if (inputs.date != '' && new Date(inputs.date) >= new Date(ride.Date)) return false;
      return true;
    });

    return {
      page: 'search',
      props: {
        user: this.req.me,
        rides,
      }
    }
  }
}
