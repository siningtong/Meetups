import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Register from "../components/Register.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/register",
      name: "Register",
      component: Register
    }
  ]
});

export default router;
