const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "unauthorized" });

  if (!authHeader.startsWith("Bearer "))
    return res.status(401).json({ message: "unauthorized" });

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    console.error("authentication error:", error.message);
    return res.status(401).json({ message: "unauthorized" });
  }
}

module.exports = authMiddleware;
