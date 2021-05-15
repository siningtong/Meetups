import { Router } from "express";
import { Meetup } from "../models/meetup";
const router = Router();

router.get("/", async (req, res) => {
  const meetups = await Meetup.find();
  res.send(meetups);
});
export default router;
