import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/components/Home";
import Register from "@/components/user/Register";
import Profile from "@/components/user/Profile";
import Signin from "@/components/user/Signin";
import CreateMeetups from "@/components/meetups/CreateMeetups";
import Meetups from "@/components/meetups/Meetups";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/meetups",
      name: "Meetups",
      component: Meetups
    },
    {
      path: "/meetups/new",
      name: "CreateMeetups",
      component: CreateMeetups
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    }
  ]
});

export default router;
