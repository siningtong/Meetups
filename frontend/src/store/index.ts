import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
import jwt from "jsonwebtoken";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    userId: null,
    loadedMeetups: [
      // {
      //   imageUrl:
      //     "https://lp-cms-production.imgix.net/2019-06/27860479.jpg?auto=compress&fit=crop&fm=auto&sharp=10&vib=20&w=1200&h=800",
      //   id: "123",
      //   title: "Meetup in New York",
      //   date: "2017-07-31",
      //   location: "New York",
      //   description: "The best meetup in America"
      // },
      // {
      //   imageUrl:
      //     "https://www.china-briefing.com/news/wp-content/uploads/2019/04/China-Briefing-Shanghai-Industry-Economics-and-Policy.jpg",
      //   id: "456",
      //   title: "Meetup in China",
      //   date: "2018-04-31"
      // },
      // {
      //   imageUrl:
      //     "https://static01.nyt.com/images/2020/05/10/nyregion/00nyvirus-reopen-timessquare/00nyvirus-reopen101-mobileMasterAt3x.jpg",
      //   id: "789",
      //   title: "Meetup in Canada",
      //   date: "2020-07-12"
      // }
    ]
  },
  mutations: {
    authUser(state, userData) {
      state.token = userData.token;
      state.userId = userData.userId;
    },
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload);
    },
    loadMeetups(state, payload) {
      state.loadedMeetups = payload;
    },
    logout(state) {
      state.token = null;
      state.userId = null;
      router.push("/login");
    }
  },
  actions: {
    setLogoutTimer({ commit }, expiration) {
      setTimeout(() => {
        commit("logout");
      }, expiration);
    },
    signUp(playload) {
      axios
        .post("http://localhost:3000/user/register", {
          playload
        })
        .then((response) => {
          console.log("response", response);
          router.push("/login");
        })
        .catch((error) => {
          console.log("error", error.response);
        });
    },
    signIn({ commit, dispatch }, playload) {
      axios
        .post("http://localhost:3000/user/login", {
          userName: playload.userName,
          password: playload.password
        })
        .then((response) => {
          const user = response.data;

          if (user) {
            commit("authUser", {
              token: user,
              //@ts-ignore
              userId: jwt.decode(user).user._id
            });
            const now = new Date().getTime();
            const exp =
              //@ts-ignore
              jwt.decode(response.data).exp - jwt.decode(response.data).iat;
            const expirationDate = new Date(now + exp * 1000);
            localStorage.setItem("token", user);
            //@ts-ignore
            localStorage.setItem("userId", jwt.decode(user).user._id);
            //@ts-ignore
            localStorage.setItem("expirationDate", expirationDate);
            dispatch("setLogoutTimer", exp * 1000);
          }
        })
        .then(() => {
          router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    tryAutoLogin({ commit }) {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const expirationDate = localStorage.getItem("expirationDate");
      const now = new Date();
      //@ts-ignore
      if (now >= expirationDate) {
        return;
      }
      const userId = localStorage.getItem("userId");
      commit("authUser", { token, userId });
    },
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: Math.random() * 10
      };
      //reach to database and store it and get id
      commit("createMeetup", meetup);
    },
    loadMeetups({ commit }) {
      axios.get("http://localhost:3000/meetups").then((response) => {
        commit("loadMeetups", response.data);
        console.log("meetups", response);
      });
    },
    logout({ commit }) {
      localStorage.clear();
      commit("logout");
    }
  },
  modules: {},
  getters: {
    loadedMeetups(state) {
      //@ts-ignore
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date;
      });
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    isAuthenticated(state) {
      return state.token !== null;
    }
    // loadedMeetup(state) {
    //   return (meetupId) => {
    //     return state.loadedMeetups.find((meetup) => {
    //       return Number(meetup.id) === meetupId;
    //     });
    //   };
    // }
  }
});
