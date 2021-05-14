<template>
  <v-container>
    <v-row>
      <v-col justify="center">
        <v-card class="d-flex justify-center mt-10">
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
              <v-btn class="mr-4" color="teal accent-4" @click="get">
                submit2
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
import * as jwt from "jsonwebtoken";

export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    submit() {
      let params = { userName: this.userName, password: this.password };
      this.$store.dispatch("signIn", params);
      // axios
      //   .post("http://localhost:3000/user/login", {
      //     userName: this.userName,
      //     password: this.password
      //   })
      //   .then((response) => {
      //     console.log("response", jwt.decode(response.data).user);
      //     this.userName = "";
      //     this.password = "";
      //   })
      //   .catch((error) => {
      //     console.log(error.response);
      //   });
    },
    get() {
      let headers = {
        headers: {
          Authorization: [
            //'Bearer '+ ......
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwOTVkZmQ1NjAwMDMxNWI5YTQzY2Y3NiIsImVtYWlsIjoiYXNkIiwidXNlck5hbWUiOiJhc2QiLCJwYXNzd29yZCI6IiQyYiQxMiRtU0hWVGYvVVM0QmkxYm5OajB4UW0ua1MyQW8uVXZMczZQaS9ZZ09FQnNmcWJ0c3puek9oYSIsImNyZWF0ZWRBdCI6IjIwMjEtMDUtMDhUMDA6NDg6MjEuMDEyWiIsIl9fdiI6MH0sImlhdCI6MTYyMDQ0MzI4NX0.SFKDGulwmyeeZaFgVwO0GwhrUYygxLdlVV5EDx_P4nE"
          ]
        }
      };
      axios.get("http://localhost:3000/user/test", headers).then((res) => {
        console.log("res", res);
      });
    }
  }
};
</script>
