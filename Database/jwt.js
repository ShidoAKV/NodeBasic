import jwt from 'jsonwebtoken';

const jwtAuthMiddleware = (req, res, next) => {
  // Extract the jwt token from the request header
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Split the token from 'Bearer <token>'
  const token = authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Attach userinfo to req object
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Invalid token" });
  }
};

const generateToken = (userData) => {
  return jwt.sign(userData, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
};

export { jwtAuthMiddleware, generateToken };
