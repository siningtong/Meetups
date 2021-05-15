<template>
  <v-container>
    <v-layout row wrap class="mt-4" v-for="meetup in meetups" :key="meetup.id">
      <v-flex xs12>
        <v-card class="teal accent-4">
          <v-container fluid>
            <v-layout row wrap>
              <v-flex xs5 sm4 md3>
                <v-img height="130px" :src="meetup.imageUrl"></v-img>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title>{{ meetup.title }}</v-card-title>
                <v-card-subtitle>
                  {{ meetup.date }}
                </v-card-subtitle>
                <v-card-actions>
                  <v-btn text :to="'/meetups/' + meetup.id">
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    }
  },
  methods: {},
  created() {
    this.$store.dispatch("loadMeetups");
  }
};
</script>
