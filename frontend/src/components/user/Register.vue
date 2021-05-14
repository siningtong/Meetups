<template>
  <v-container>
    <v-row>
      <v-col justify="center">
        <v-card class="d-flex justify-center mb-6">
          <v-form @submit.prevent="submit">
            <v-container>
              <v-row>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="userName"
                    :counter="10"
                    label="User name"
                    required
                  ></v-text-field>
                </v-col>

                <!-- <v-col cols="12" md="12">
                  <v-text-field
                    v-model="lastName"
                    :counter="10"
                    label="Last name"
                    required
                  ></v-text-field>
                </v-col> -->

                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="email"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="password"
                    label="password"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-btn class="mr-4" color="teal accent-4" type="submit">
                submit
              </v-btn>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      userName: "",
      password: ""
    };
  },
  methods: {
    submit() {
      let params = {
        userName: this.userName,
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("signUp", params);
    }
  }
};
</script>
