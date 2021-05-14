<template>
  <v-container>
    <v-layout row wrap class="mb-2 mt-2">
      <v-flex xs12 sm6 class="text-xs-center text-sm-center">
        <v-btn large to="/meetups" class="primary">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-center">
        <v-btn large to="/meetups/new" class="primary">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex>
        <v-carousel style="cursor: pointer" cycle>
          <v-carousel-item
            v-for="meetup in meetups"
            :key="meetup.id"
            :src="meetup.imageUrl"
            hide-delimiter-background
            show-arrows-on-hover
            @click="onLoadMeetup(meetup.id)"
          >
            <div class="title">{{ meetup.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      model: 0
    };
  },
  computed: {
    meetups() {
      return this.$store.getters.featuredMeetups;
    }
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push("/meetups/" + id);
    }
  }
};
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 10px;
}
</style>
