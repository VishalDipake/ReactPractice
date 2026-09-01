const jwt = require("jsonwebtoken");

const generateAccessToken = (userId) => {
  return jwt.sign(
    {
      userId,
      type: "access",
    },
    process.env.JWT_ACCESS_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRES || "15m",
    },
  );
};

const generateRefreshToken = (userId) => {
  return jwt.sign(
    {
      userId,
      type: "refresh",
    },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRES || "7d",
    },
  );
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
