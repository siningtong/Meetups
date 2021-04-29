<template>
  <v-form @submit.prevent="submit">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="firstName"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field
            v-model="lastName"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field v-model="email" label="E-mail" required></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="password"
            label="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn class="mr-4" type="submit">
        submit
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      firstName: "",
      lastName: "",
      password: ""
    };
  },
  methods: {
    submit() {
      console.log("here");
      let params = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      };
      axios
        .post("http://localhost:3000/api/user", { params })
        .then((response) => {
          console.log("response", response);
          this.firstName = "";
          this.lastName = "";
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
