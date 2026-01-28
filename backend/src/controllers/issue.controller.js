const Issue = require("../models/issue.model");

async function createIssue(req, res) {
  try {
    const { title, description } = req.body;

    if (!title || !description)
      return res.status(400).json({ message: "Bad Request" });

    const newIssue = new Issue({
      title,
      description,
      createdBy: req.user.userId,
    });
    await newIssue.save();
    res.status(201).json({ message: "Issue Created Successfully" });
  } catch (error) {
    console.error("Issue creation error:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
}

module.exports = createIssue;
