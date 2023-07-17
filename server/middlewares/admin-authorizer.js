const adminAuthorizer = (req, res, next) => {
  if (req.user.role.toString().toUpperCase() !== 'ADMIN') {
    return res.sendStatus(401) // Unauthorized;
  }

  next();
};

export { adminAuthorizer };