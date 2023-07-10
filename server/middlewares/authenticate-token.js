import jwt from 'jsonwebtoken';

const secretKey = 'ASKARI_ORDER_APP';

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  console.log(token);

  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token.split(' ')[1], secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }
    req.user = user;

    next();
  });
};

export default secretKey;
export { authenticateToken };