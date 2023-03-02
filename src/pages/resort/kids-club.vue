<template>
  <v-container grid-list-xl text-center>
    <v-layout wrap>
      <v-flex xs12>
        <h1 class="text-center">Kids Club</h1>
        <v-img src="../../assets/resort/kidsclub.jpg"></v-img>
        <h4 class="text--blue text--darken-3 mt-5">
          Located on the ground floor in front of the family and kids pool, the
          Kids Club is packed with loads of fun and exciting activities for
          children of all ages.
        </h4>
      </v-flex>
      <v-flex xs12>
        <v-divider></v-divider>
      </v-flex>
      <v-flex xs12 v-for="item in items" :key="item.title">
        <v-card>
          <v-img :src="item.image" contain></v-img>
          <v-card-title class="justify-center">
            <h3 :class="item.colour" class="text-center">{{ item.title }}</h3>
          </v-card-title>
          <v-card-text>
            <p>{{ item.text }}</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "kids-club",
  data() {
    return {
      items: [
        {
          title: "Kids Pool & Splash Pad",
          image: require("../../assets/resort/kids-club/hktmb-pool-0094-hor-wide.jpg"),
          text:
            "The kids pool, adjacent to the family pool and featuring a water slide and splash pad nearby, caters to everyone’s fun in the sun.",
          colour: "green--text text--darken-3",
        },
        {
          title: "Reef Education",
          text:
            "The on-property Reef Education Centre provides information about the House Reef’s unique marine ecosystem and engages guests in conservation efforts.",
          colour: "orange--text text--darken-3",
        },
        {
          title: "Butterfly Sanctuary",
          text:
            "The Merlin Butterfly Sanctuary was created to help save the decreasing population of native butterflies and to educate visitors about how they can help.",
          colour: "blue--text text--darken-3",
        },
      ],
    };
  },
};
</script>
