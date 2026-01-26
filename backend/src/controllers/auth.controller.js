const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function test(req, res) {
  res.json({
    message: "auth route reached",
  });
}

async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!(name && email && password))
      return res.status(400).json({ message: "all fields are required" });

    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(409).json({ message: "user already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "user registered successfully" });
  } catch (error) {
    console.error("internal server error:", error.message);
    res.status(500).json({ message: "server error" });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ message: "email and password are required" });

    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(401).json({ message: "invalid credentials" });

    const validUser = await bcrypt.compare(password, existingUser.password);

    if (!validUser)
      return res.status(401).json({ message: "invalid credentials" });

    const token = jwt.sign(
      {
        userId: existingUser._id,
        role: existingUser.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.status(200).json({ message: "login successful", token: token });
  } catch (error) {
    crossOriginIsolated.error("server error:", error.message);
    res.status(500).json({ message: "server error" });
  }
}

module.exports = {
  test,
  registerUser,
  loginUser,
};
