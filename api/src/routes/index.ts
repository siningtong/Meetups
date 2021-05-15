import { Router } from "express";
import dashboard from "./dashboard";
import user from "./user";
import newMeetup from "./newMeetup";
import meetups from "./meetups";

const routes = Router();
routes.use("/dashboard", dashboard);
routes.use("/user", user);
routes.use("/create", newMeetup);
routes.use("/meetups", meetups);

export default routes;
