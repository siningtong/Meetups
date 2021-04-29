<template>
  <v-app>
    <app-bar></app-bar>
    <!-- <app-register></app-register> -->
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Appbar from "./components/Appbar.vue";
// import Register from "./components/Register.vue";
export default Vue.extend({
  name: "App",

  components: {
    "app-bar": Appbar
    // "app-register": Register
  },

  data: () => ({
    //
  })
});
</script>
