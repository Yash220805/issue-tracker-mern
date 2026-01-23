const User = require("../models/user.model");

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

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "user registered successfully" });
  } catch (error) {
    console.error("internal server error:", error.message);
    res.status(500).json({ message: "server error" });
  }
}

module.exports = {
  test,
  registerUser,
};
