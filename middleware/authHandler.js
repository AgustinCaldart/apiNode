const boom = require('@hapi/boom');

const { config } = require('./../config/config');

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

function checkAdminRole(req, res, next) {
  const user = req.user;
  if (user.role === 'admin') {
    next();
  } else {
    next(
      boom.unauthorized(
        'Unauthorized!You cannot do this, Admins have been notified'
      )
    );
  }
}

function checkRoles(...roles) {
  return (req, res, next) => {
    const user = req.user;
    if (roles.include(user.role)) {
      next();
    } else {
      next(
        boom.unauthorized(
          'Unauthorized!You cannot do this, Admins have been notified'
        )
      );
    }
  };
}

module.exports = { checkApiKey, checkAdminRole, checkRoles };
