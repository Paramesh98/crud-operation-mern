require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const postRoutes = require("./api/routes/post.routes");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/api/post", postRoutes);

const port = process.env.PORT || 5000;
const db = process.env.MONGODB_URL;

mongoose.connect(
  db,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("the database connection is success");
  }
);
app.listen(port, () => {
  console.log(`server is running in the port ${port}`);
});
