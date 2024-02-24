const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const formRoutes = require("./routes/formRoutes");
const { responseHelper } = require("./middleware/responseHelper");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(responseHelper);
app.use("/api", formRoutes);
app.use("/", (req, res) => {
  res.send("Welcome to the backend");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
