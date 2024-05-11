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
   //  ____                      ____             _
   // |  _ \ __ _  __ _  ___    |  _ \ ___  _   _| |_ ___  ___
   // | |_) / _` |/ _` |/ _ \   | |_) / _ \| | | | __/ _ \/ __|
   // |  __/ (_| | (_| |  __/   |  _ < (_) | |_| | ||  __/\__ \
   // |_|   \__,_|\__, |\___|___|_| \_\___/ \__,_|\__\___||___/
   //             |___/    |_____|
   //
   // Örnek:
   // 'GET istenilen rota': 'controller klasöründeki istenilen js dosyası'
   //
   'GET /': 'pages/home/index',
   'GET /search': 'pages/search/index',
   'GET /example': 'pages/example/index',

   'GET /login': 'pages/login/index',
   'GET /sign_up': 'pages/sign_up/index',
   'GET /profile': 'pages/profile/index',

   'GET /rides': 'pages/rides/index',
   'GET /my_rides': 'pages/my_rides/index',
   'GET /book': 'pages/book/index',
   'GET /reservations': 'pages/reservations/index',


   //  _   _                   _    ____ ___
   // | | | |___  ___ _ __    / \  |  _ \_ _|
   // | | | / __|/ _ \ '__|  / _ \ | |_) | |
   // | |_| \__ \  __/ |    / ___ \|  __/| |
   //  \___/|___/\___|_|___/_/   \_\_|  |___|
   //                 |_____|
   'GET /api/users/find': 'user.find',
   'GET /api/users/:id': 'user.findOne',

   'POST /api/users': 'user.create',
   'PUT /api/users/:id': 'user.update',

   'DELETE /api/users/:id': 'user.delete',

   'GET /api/users/:id/rides': 'user.rides',
   'POST /api/users/:id/join-ride': 'user.joinRide',


   //  ____  _     _             _    ____ ___
   // |  _ \(_) __| | ___       / \  |  _ \_ _|
   // | |_) | |/ _` |/ _ \     / _ \ | |_) | |
   // |  _ <| | (_| |  __/    / ___ \|  __/| |
   // |_| \_\_|\__,_|\___|___/_/   \_\_|  |___|
   //                   |_____|
   'GET /api/rides/find': 'ride.find',
   'GET /api/rides/:id': 'ride.findOne',

   'POST /api/rides': 'ride.create',
   'PUT /api/rides/:id': 'ride.update',
   'DELETE /api/rides/:id': 'ride.delete',

   'GET /api/rides/:id/users': 'ride.users',
   'POST /api/rides/:id/join': 'ride.join',
   'POST /api/rides/:id/leave': 'ride.leave',


   //   ____                                     _          _    ____ ___
   //  / ___|___  _ __ ___  _ __ ___   ___ _ __ | |_       / \  |  _ \_ _|
   // | |   / _ \| '_ ` _ \| '_ ` _ \ / _ \ '_ \| __|     / _ \ | |_) | |
   // | |__| (_) | | | | | | | | | | |  __/ | | | |_     / ___ \|  __/| |
   //  \____\___/|_| |_| |_|_| |_| |_|\___|_| |_|\__|___/_/   \_\_|  |___|
   //                                              |_____|
   'GET /api/comments/find': 'comment.find',
   'GET /api/comments/:to_id': 'comment.findByTo_Id',

   'POST /api/comments': 'comment.create',
   'PUT /api/comments/:id': 'comment.update',
   'DELETE /api/comments/:id': 'comment.delete',

   'GET /api/comments/:from_id': 'comment.findByFrom_Id',

}
