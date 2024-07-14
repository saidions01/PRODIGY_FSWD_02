const express = require("express");
const employeeRoutes = require("./routes/employeeRoutes");
const bodyParser = require("body-parser");
const mongoose = require("./configuration/dbConfig");
const MongoStore = require("connect-mongo");
const EmployeeModel = require("../src/models/Employee");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();


app.use(cors());
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
//routes
app.use("/api/employee", employeeRoutes);
