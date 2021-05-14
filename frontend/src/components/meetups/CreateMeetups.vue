<template>
  <v-container>
    <v-layout row>
      <v-flex class="d-flex justify-center mb-6 mt-4">
        <h3 class="primary--text">Create a new Meetup</h3>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex>
        <v-form @submit.prevent="createMeetup">
          <v-container>
            <v-text-field
              v-model="title"
              :counter="50"
              label="Title"
              required
            ></v-text-field>

            <v-text-field
              v-model="location"
              label="Location"
              required
            ></v-text-field>

            <v-text-field
              v-model="imageUrl"
              label="ImageUrl"
              required
            ></v-text-field>

            <v-img max-height="300px" max-width="300px" :src="imageUrl"></v-img>
            <v-row> <v-flex> Choos a Date & Time </v-flex> </v-row>

            <v-row>
              <v-date-picker
                class="mr-4"
                width="290"
                v-model="date"
                color="green lighten-1"
              ></v-date-picker>
              <v-time-picker
                width="290"
                v-model="time"
                color="green lighten-1"
                header-color="primary"
                format="24hr"
              ></v-time-picker>
            </v-row>

            <v-text-field
              v-model="desctiption"
              label="Desctiption"
              required
            ></v-text-field>
          </v-container>
          <v-btn :disabled="!valid" type="submit">Create Meetup</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    title: "",
    location: "",
    imageUrl: "",
    desctiption: "",
    date: new Date().toISOString().substr(0, 10),
    time: new Date()
  }),
  computed: {
    valid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageUrl !== "" &&
        this.desctiption !== ""
      );
    }
  },
  methods: {
    createMeetup() {
      const params = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.desctiption,
        date: this.date + this.time
      };
      this.$store.dispatch("createMeetup", params);
      axios
        .post("http://localhost:3000/api/create", { params })
        .then((data) => {
          console.log(data);
        });
      this.title = "";
      this.location = "";
      this.imageUrl = "";
      this.desctiption = "";
      this.$router.push("/");
    }
  },
  watch: {
    date() {
      console.log(this.date, this.time);
    }
  }
};
</script>
