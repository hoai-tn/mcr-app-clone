<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex xs12>
        <h1 class="text-center">Sports & Recreation</h1>
        <v-img src="../../assets/resort/recreation.jpg"></v-img>
        <h4 class="text--blue text--darken-3 text-center">
          Whether you’re seeking relaxation, rejuvenation or something to get
          your heart pumping, there is something for everyone at Phuket Marriott
          Resort & Spa, Merlin Beach
        </h4>
      </v-flex>

      <v-flex xs12 v-for="item in items" :key="item.title">
        <v-card>
          <v-img :src="item.image" contain></v-img>
          <v-card-title>
            <h3 :class="item.colour" class="text-center">{{ item.title }}</h3>
          </v-card-title>
          <v-card-text class="pb-0">
            <p>{{ item.text }}</p>
          </v-card-text>
          <v-card-subtitle class="py-1">
            <strong>
              {{ item.subTitle }}
            </strong>
            <p>{{ item.subText }}</p>
          </v-card-subtitle>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "recreation",
  data() {
    return {
      items: [
        {
          title: "Fitness Centre",
          image: require("../../assets/resort/recreation/hktmb-fitness-0081-hor-wide.jpg"),
          text:
            "The 24-hour fitness center features state-of-the-art equipment including cardiovascular, weight-resistance and free weights.",
          colour: "orange--text text--darken-3",
          subText: "Accessible 24 hours with room key access.",
          subTitle: "Open daily",
        },
        {
          title: "Resort Pools",
          image: require("../../assets/resort/recreation/hktmb-pool-0079-hor-wide.jpg"),
          text:
            "Surrounded by tropical gardens, and with a fun swim-up bar, the multiple pools around the resort are the perfect place to relax and unwind.",
          colour: "blue-grey--text",
          subTitle: "Hours:",
          subText: "Mon-Sun 8:00AM – 9:00PM",
        },
        {
          title: "Tri-Trang Beach",
          image: require("../../assets/resort/recreation/hktmb-beach-0023-hor-wide-1.jpg"),
          text:
            "Set on the secluded Tri-Trang Beach, this beachfront resort is located within easy reach of the lively Patong.",
          colour: "blue--text text--darken-3",
        },
        {
          title: "Yoga/Pilates",
          image: require("../../assets/resort/recreation/hktmb-yoga-0052-hor-wide.jpg"),
          text: "Refresh your senses with morning yoga session on the beach.",
          colour: "red--text",
          subText: "Daily 8:00AM - 9:00AM",

        },
        {
          title: "Paddle boarding",
          image: require("../../assets/resort/recreation/hktmb-activities-0033-hor-wide.jpg"),
          text:
            "Spend a relaxing day by paddling down the crystal waters of the Andaman Sea. ",
          colour: "green--text text--dark-5",
          subText: "(Subject to the tide level due to safety)",

        },
      ],
    };
  },
};
</script>

<style scoped></style>
