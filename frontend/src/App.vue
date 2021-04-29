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
          >Meetups</router-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          small
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center"> </v-row>
      </v-container>
    </v-main>
    <v-footer color="teal" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    drawer: false,
    menuItems: [
      {
        icon: "mdi-account-supervisor",
        title: "View Meetups",
        link: "/meetups"
      },
      {
        icon: "mdi-head-plus-outline",
        title: "Organize Meetups",
        link: "/meetups/new"
      },
      { icon: "mdi-account-circle", title: "Profile", link: "/profile" },
      { icon: "mdi-face", title: "Sign Up", link: "/register" },
      { icon: "mdi-lock-open", title: "Sign In", link: "/signin" }
    ]
  })
});
</script>
