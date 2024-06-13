/**
 * RatingController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async function(req, res) {
    try {
      res.set('X-Inertia', 'true');
      const data = req.body;
      const rating = await Rating.create(data).fetch();
      return res.ok(rating);
    } catch (error) {
      return res.serverError(error);
    }
  },
  find: async function(req, res) {
    try {
      const ratings = await Rating.find();
      return res.ok(ratings);
    } catch (error) {
      return res.serverError(error);
    }
  },
  findByTo_Id: async function(req, res) {
    try {
      const to_id = req.params.to_id;
      const Ratings = await Rating.find({ to_id });
      return res.ok(Ratings);
    } catch (error) {
      return res.serverError(error);
    }
  },
  update: async function(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;
      const rating = await Rating.updateOne({ id }).set(data);
      return res.ok();
    } catch (error) {
      return res.serverError(error);
    }
  },
  delete: async function(req, res) {
    try {
      const id = req.params.id;
      await Rating.destroyOne({ id });
      return res.ok();
    } catch (error) {
      return res.serverError(error);
    }
  },
  findByFrom_Id: async function(req, res) {
    try {
      const from_id = req.params.from_id;
      const Ratings = await Rating.find({ from_id });
      return res.ok();
    } catch (error) {
      return res.serverError(error);
    }
  },
};

