import { Router } from "express";
import { User } from "../models/user";
const router = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.get("/", async (req, res) => {
  const user = await User.find();
  res.send(user);
});
router.post("/register", async (req, res) => {
  const { userName, email, password } = req.body.playload;
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = new User({ email, userName, password: hashedPassword });
  await newUser.save();
  res.send(newUser);
});

router.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  const user = await User.findOne({ userName });
  if (!user) {
    return res.send("user not found");
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    res.send("try again");
  } else {
    let accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h"
    });
    res.send(accessToken);
  }
});
router.get("/test", authenticateToken, (req, res) => {
  res.send("ashdo");
});
export default router;

function authenticateToken(req, res, next) {
  // console.log("req.headers", req.headers);
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  // console.log("token", token);
  if (token === null) {
    return res.sendStatus(401);
  }
  console.log(
    "authMiddleWare",
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
  );
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    // console.log("user", user);
    req.user = user;
    next();
  });
}
