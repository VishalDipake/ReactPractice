const express = require("express");
const protect = require("../middleware/auth");

const validate = require("../middleware/validate");

const { registerSchema, loginSchema } = require("../validators/auth.validator");

const {
  register,
  login,
  refreshAccessToken,
  logout,
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.post("/refresh", refreshAccessToken);
router.post("/logout", logout);
router.get("/me", protect, async (req, res) => {
  res.status(200).json({
    user: req.user,
  });
});

module.exports = router;
