require("dotenv").config();

const cookieParser = require("cookie-parser");
const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/task.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

app.use(errorHandler);
const Task = require("./models/Task");

// app.get("/", (req, res) => {
//   res.json({
//     message: "Api Running",
//   });
// });

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
