require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const port = 3000;

async function startServer() {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`the server is live at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("the server failed to start:", error.message);
  }
}

startServer();
