import { Router } from "express";
import { User } from "../models/user";
const router = Router();

router.get("/", async (req, res) => {
  console.log("req", req);

  const user = await User.find();
  res.send(user);
});
router.post("/", async (req, res) => {
  const newUser = new User(req.body.params);
  await newUser.save();
  res.send("created user");
});
export default router;
