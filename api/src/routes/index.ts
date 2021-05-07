import { Router } from "express";
import dashboard from "./dashboard";
import user from "./user";
import newMeetup from "./newMeetup";

const routes = Router();
routes.use("/dashboard", dashboard);
routes.use("/user", user);
routes.use("/create", newMeetup);

export default routes;
