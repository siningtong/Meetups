import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../components/Home.vue";
import Register from "../components/user/Register.vue";
import Profile from "../components/user/Profile.vue";
import Login from "../components/user/Login.vue";
import CreateMeetups from "../components/meetups/CreateMeetups.vue";
import Meetups from "../components/meetups/Meetups.vue";
import Meetup from "../components/meetups/Meetup.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
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
    path: "/create",
    name: "CreateMeetups",
    component: CreateMeetups,
    beforeEnter(to, from, next) {
      if (store.state.token) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: "/meetups/:id",
    //pass parms as props
    props: true,
    name: "Meetup",
    component: Meetup
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/logout",
    name: "Logout",
    component: {
      beforeRouteEnter(to, from, next) {
        console.log({ from });
        const destination = {
          path: from.path || "/",
          query: from.query,
          params: from.params
        };
        if (!from) {
          console.log("no from");
        }
        store.dispatch("logout");
        next(destination);
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
