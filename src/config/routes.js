/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Custom routes here...                                                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the custom routes above, it   *
   * is matched against Sails route blueprints. See `config/blueprints.js`    *
   * for configuration options and examples.                                  *
   *                                                                          *
   ***************************************************************************/
  'GET /': 'home/index',
  'GET /example': 'example/index',
  'GET /api/users/find': 'user.find',
  'GET /api/users/:id': 'user.findOne',
  'POST /api/users': 'user.create',
  'PUT /api/users/:id': 'user.update',
  'DELETE /api/users/:id': 'user.delete',
  'GET /api/users/:id/rides': 'user.rides',
  'POST /api/users/:id/join-ride': 'user.joinRide',
  'GET /api/rides/find': 'ride.find',
  'GET /api/rides/:id': 'ride.findOne',
  'POST /api/rides': 'ride.create',
  'PUT /api/rides/:id': 'ride.update',
  'DELETE /api/rides/:id': 'ride.delete',
  'GET /api/rides/:id/users': 'ride.users',
  'POST /api/rides/:id/join': 'ride.join',
  'POST /api/rides/:id/leave': 'ride.leave',
  'POST /api/comments': 'comment.create',
  'GET /api/comments/find': 'comment.find',
  'GET /api/comments/:to_id': 'comment.findByTo_Id',
  'PUT /api/comments/:id': 'comment.update',
  'DELETE /api/comments/:id': 'comment.delete',
  'GET /api/comments/:from_id': 'comment.findByFrom_Id',
}
