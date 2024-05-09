/**
 * CommentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {
        try {
            const data = req.body;
            const comment = await Comment.create(data).fetch();
            return res.ok(comment);
        } catch (error) {
            return res.serverError(error);
        }
    },
    find: async function (req, res) {
        try {
            const comments = await Comment.find();
            return res.ok(comments);
        } catch (error) {
            return res.serverError(error);
        }
    },
    findByTo_Id: async function (req, res) {
        try {
            const to_id = req.params.to_id;
            const comments = await Comment.find({ to_id });
            return res.ok(comments);
        }catch (error) {
            return res.serverError(error);
        }
    },
    update: async function (req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const comment = await Comment.updateOne({ id }).set(data);
            return res.ok(comment);
        } catch (error) {
            return res.serverError(error);
        }
    },
    delete: async function (req, res) {
        try {
            const id = req.params.id;
            await Comment.destroyOne({ id });
            return res.ok();
        } catch (error) {
            return res.serverError(error);
        }
    },
    findByFrom_Id: async function (req, res) {
        try{
            const from_id = req.params.from_id;
            const comments = await Comment.find({ from_id });
            return res.ok(comments);
        }catch (error) {
            return res.serverError(error);
        }
    },
};

