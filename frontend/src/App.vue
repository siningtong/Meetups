<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <v-list dense>
        <v-list-item
          link
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="teal" dark>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer"
          >Meetups
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          small
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer color="teal" app>
      <span class="white--text"
        >&copy; {{ new Date().getFullYear() }} Napoleon</span
      >
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    drawer: false
  }),
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
    menuItems() {
      let menuItems = [
        {
          icon: "mdi-account-supervisor",
          title: "View Meetups",
          link: "/meetups"
        }
      ];
      if (this.auth) {
        menuItems.push(
          {
            icon: "mdi-head-plus-outline",
            title: "Organize Meetups",
            link: "/create"
          },
          { icon: "mdi-account-circle", title: "Profile", link: "/profile" },
          { icon: "mdi-lock-open", title: "Logout", link: "/logout" }
        );
      } else {
        menuItems.push(
          { icon: "mdi-face", title: "Sign Up", link: "/register" },
          { icon: "mdi-lock-open", title: "Login", link: "/login" }
        );
      }
      return menuItems;
    }
  },
  created() {
    this.$store.dispatch("tryAutoLogin");
  }
});
</script>
