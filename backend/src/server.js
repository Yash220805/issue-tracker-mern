require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const port = 3000;
connectDB();
app.listen(port, () => {
  console.log(`the server is live at http://localhost:${port}`);
});
