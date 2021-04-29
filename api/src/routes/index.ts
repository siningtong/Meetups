import { Router } from "express";
import dashboard from "./dashboard";
import user from "./user";

const routes = Router();
routes.use("/dashboard", dashboard);
routes.use("/user", user);

export default routes;
