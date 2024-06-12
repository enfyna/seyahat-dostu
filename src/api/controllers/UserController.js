/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  create: async function(req, res) {
    try {
      res.set('X-Inertia', 'true');
      const data = req.body;
      const user = await User.create(data).fetch();
      req.session.userID = user.id;
      return res.json({
        props: { user }
      });
    } catch (error) {
      return res.serverError(error);
    }
  },

  login: async function(req, res) {
    try {
      const { email, password } = req.body
      const user = await User.find({
        Email: email,
        Password: password
      });
      req.session.userID = user[0].id;
      res.set('X-Inertia', 'true');
      return res.ok(200)
    } catch (err) {
      return res.serverError(err);
    }
  },

  logout: async function(req, res) {
    try {
      delete req.session.userID;
      res.set('X-Inertia', 'true');
      return res.ok(200)
    } catch (err) {
      return res.serverError(err);
    }
  },

  find: async function(req, res) {
    try {
      const users = await User.find();
      return res.ok(users);
    } catch (error) {
      return res.serverError(error);
    }
  },

  findOne: async function(req, res) {
    try {
      const id = req.params.id;
      const user = await User.findOne({ id });
      return res.ok(user);
    } catch (error) {

      return res.serverError(error);
    }
  },

  update: async function(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;
      const user = await User.updateOne({ id }).set(data);
      return res.ok(user);
    } catch (error) {
      return res.serverError(error);
    }
  },

  delete: async function(req, res) {
    try {
      const id = req.params.id;
      await User.destroyOne({ id });
      return res.ok();
    } catch (error) {
      return res.serverError(error);
    }
  },

  enableDriver: async function(req, res) {
    try {
      res.set('X-Inertia', 'true');
      let user = req.me;
      user.Driver = true;
      user = await User.updateOne({ id: user.id }).set(user)
      return res.ok()
    }
    catch (err) {
      return res.serverError(err);
    }
  },

  point: async function(req, res) {
    try {
      res.set('X-Inertia', 'true');

      const { driverID, Point } = req.body;
      let user = await User.findOne({ id:driverID });
      user.Point += Point;
      user = await User.updateOne({ id:driverID }).set(user)
      return res.ok()
    }
    catch (err) {
      return res.serverError(err);
    }
  },

  rides: async function(req, res) {
    try {
      const id = req.params.id;
      const user = await User.findOne({ id }).populate("rides");
      return res.ok(user.rides);
    } catch (error) {
      return res.serverError(error);
    }
  },

  leaveRide: async function(req, res) {
    try {
      const userId = req.params.userId;
      const rideId = req.params.rideId;
      const user = await User.findOne({ id: userId }).populate("rides");
      await User.removeFromCollection(userId, "rides", rideId);
      return res.ok(user);
    } catch (error) {
      return res.serverError(error);
    }
  },

};

