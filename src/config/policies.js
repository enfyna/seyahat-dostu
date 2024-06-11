/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  '*': true,

  'pages/my_rides/index' : 'isLoggedIn',
  'pages/reservations/index' : 'isLoggedIn',

  'pages/book/index' : 'isLoggedIn',

  'pages/driver/index' : 'isLoggedIn',

  'pages/create_ride/index' : 'isLoggedIn',
  'pages/create_comment/index' : 'isLoggedIn',

  'pages/logout/index' : 'isLoggedIn',

  'pages/login/index' : 'isNotLoggedIn',
  'pages/signup/index' : 'isNotLoggedIn',
};
