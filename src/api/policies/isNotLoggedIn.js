// policies/isNotLoggedIn.js
module.exports = async function (req, res, proceed) {

  // reverse of isLoggedIn.js

  if (req.me) {
    return res.redirect('/');
  }

  return proceed();
};
