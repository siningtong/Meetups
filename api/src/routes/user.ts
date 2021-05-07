import { Router } from "express";
import { User } from "../models/user";
const router = Router();
const passport = require("passport");

router.get("/", async (req, res) => {
  // req.session.username = "Calvin";
  const user = await User.find();
  res.send(user);
});
router.post("/register", async (req, res) => {
  const { userName, email, password } = req.body.params;
  console.log(req.body.params);
  const user = new User({ email, username: userName });
  const newUser = await User.register(user, password);
  // const newUser = new User(req.body.params);
  // await newUser.save();
  res.send(newUser);
});
router.get("/login", (req, res) => {
  res.send("lonhadosi");
  console.log("ahdkjh");
});
router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: "Invalid username or password.",
    successFlash: "Welcome!"
  }),
  async (req, res) => {
    // req.flash("success", "hahahahah");
    res.send(req.flash());
  }
);
export default router;
