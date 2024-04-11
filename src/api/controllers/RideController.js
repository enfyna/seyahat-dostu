/**
 * RideController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {
        try {
            const data = req.body;
            const ride = await Ride.create(data).fetch();
            return res.ok(ride);
        } catch (error) {
            return res.serverError(error);
        }
    },
    find: async function (req, res) {
        try {
            const rides = await Ride.find();
            return res.ok(rides);
        } catch (error) {
            return res.serverError(error);
        }
    },
    findOne: async function (req, res) {
        try {
            const id = req.params.id;
            const ride = await Ride.findOne
            ({ id });
            return res.ok(ride);
        } catch (error) {
            return res.serverError(error);
        }
    },
    update: async function (req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const ride = await Ride.updateOne({ id }).set(data);
            return res.ok(ride);
        } catch (error) {
            return res.serverError(error);
        }
    },
    delete: async function (req, res) {
        try {
            const id = req.params.id;
            await Ride.destroyOne({ id });
            return res.ok();
        } catch (error) {
            return res.serverError(error);
        }
    },
    users: async function (req, res) {
        try {
            const id = req.params.id;
            const ride = await Ride.findOne({ id }).populate("users");
            return res.ok(ride.users);
        } catch (error) {
            return res.serverError(error);
        }
    },
    join: async function (req, res) {
        try {
            const rideId = req.params.rideId;
            const userId = req.params.userId;
            const ride = await Ride.findOne({ id: rideId }).populate("users");
            ride.users.add(userId);
            await ride.save();
            return res.ok(ride);
        } catch (error) {
            return res.serverError(error);
        }
    },
    leave: async function (req, res) {
        try {
            const rideId = req.params.rideId;
            const userId = req.params.userId;
            const ride = await Ride.findOne({ id: rideId }).populate("users");
            ride.users.remove(userId);
            await ride.save();
            return res.ok(ride);
        } catch (error) {
            return res.serverError(error);
        }
    },

};

