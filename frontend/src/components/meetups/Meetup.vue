<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-card-title class="blue-grey--text">{{
            meetup.title
          }}</v-card-title>
          <v-img height="300px" :src="meetup.imageUrl"></v-img>
          <v-card-subtitle class="blue-grey--text">
            {{ meetup.date }}-{{ meetup.location }}
          </v-card-subtitle>
          <v-card-text>{{ meetup.description }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-grey lighten-2" text>
              Register
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {};
  },
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetups.find((meetup) => {
        return meetup.id === this.id;
      });
    }
  },
  methods: {}
};
</script>
