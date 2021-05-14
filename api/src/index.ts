import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import routes from "./routes";
import { User } from "./models/user";
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://localhost:27017/meetups", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();
// Call midlewares
app.use(cors());
app.use(
  bodyParser.json({
    limit: "10mb"
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "10mb"
  })
);
// app.use(express.json());

const port = process.env.PORT || 3000;
app.use("/", routes);

app.listen(port, () => {
  console.log("Server started on port " + port + "!");
});
