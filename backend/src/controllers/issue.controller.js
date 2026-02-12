const Issue = require("../models/issue.model");
const User = require("../models/user.model");

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

async function getAllIssues(req, res) {
  try {
    const issues = await Issue.find().sort({ createdAt: -1 });
    res.status(200).json({ issues });
  } catch (error) {
    console.error("get all issues error:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
}

async function updateIssueStatus(req, res) {
  try {
    const issueId = req.params.id;
    const { status } = req.body;
    const allowedStatuses = ["open", "in_progress", "resolved"];
    if (!status || !allowedStatuses.includes(status))
      return res.status(400).json({ message: "bad request" });

    const issue = await Issue.findById(issueId);
    if (!issue) return res.status(404).json({ message: "Issue not found" });

    const allowedTransition = {
      open: ["in_progress"],
      in_progress: ["resolved"],
      resolved: [],
    };

    if (!allowedTransition[issue.status].includes(status))
      return res.status(400).json({ message: "Invalid status transition" });
    issue.status = status;
    await issue.save();
    res.status(200).json({ message: "Issue status updated" });
  } catch (error) {
    console.error("Update issue status error:", error.message);
    return res.status(500).json({ message: "Server Error" });
  }
}

async function assignIssue(req, res) {
  try {
    const issueId = req.params.id;
    const { adminId } = req.body;
    if (!adminId) return res.status(400).json({ message: "Bad Request" });
    const issue = await Issue.findById(issueId);
    if (!issue) return res.status(404).json({ message: "Issue not found" });
    const user = await User.findById(adminId);
    if (!user) return res.status(404).json({ message: "User not found" });
    if (user.role !== "admin")
      return res.status(400).json({ message: "Bad Request" });
    issue.assignedTo = adminId;
    await issue.save();
    return res.status(200).json({ message: "issue assigned successfully" });
  } catch (error) {
    console.error("Assign issue error:", error.message);
    return res.status(500).json({ message: "Server Error" });
  }
}

module.exports = { createIssue, getAllIssues, updateIssueStatus, assignIssue };
