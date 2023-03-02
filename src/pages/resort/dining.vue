<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex xs12>
        <h1 class="text-center">Restaurants & Bars</h1>
        <v-img src="../../assets/resort/bars.jpg"></v-img>
        <h4 class="text--blue text--darken-3 text-center mt-5">
          Thai Pantry Restaurant serves a spread of traditional Thai dishes,
          while D.O.C.G. offers authentic Italian cuisines. Beach Grill
          Restaurant features fresh sea food and sweeping views of the Andaman
          Sea.
        </h4>
        <p>
          Other dining choices include light snacks and refreshing beverages at
          Phuket Coffee Co and a range of delicious healthy choices from the
          Wellness Bar. A swim-up bar is also available at the pool.
        </p>
      </v-flex>

      <v-flex xs12 v-for="item in items" :key="item.title">
        <v-card>
          <v-img :src="item.image" contain></v-img>
          <v-card-title class="justify-center">
            <h3 :class="item.colour" class="text-center">{{ item.title }}</h3>
          </v-card-title>
          <v-card-text class="text-center">
            <p>{{ item.text }}</p>
            <template v-for="subtitle in item.subtitle">
              <div :key="subtitle">
                <i>{{ subtitle }}</i>
              </div>
            </template>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "dining",
  data() {
    return {
      items: [
        {
          title: "Merchant Kitchen",
          image: require("../../assets/resort/dining/hktmb-merchant-0070-hor-wide.jpg"),
          text:
            "Merchant Kitchen offers fresh fare that will delight. Sit by the lagoon pool or enjoy the excitement of the open kitchen as you sample delicious restaurant fare at breakfast, lunch or dinner, during your stay at our Thailand resort.",
          subtitle: [
            "A La Carte lunch and dinner. Dinner buffet",
            "Dress code: Casual",
            "Hours: 7:00 am - 11:00 am",
            "12:00 pm - 11:00 pm",
          ],
          colour: "green--text text--darken-3",
        },
        {
          title: "D.O.C.G",
          image: require("../../assets/resort/dining/hktmb-docg-0139-hor-wide.jpg"),
          text:
            "Savour authentic Italian dishes at D.O.C.G. Our stylish Phuket restaurant entices patrons with an inviting atmosphere, Italian specialty ingredients and fine Italian wines.",
          subtitle: [
            "A La Carte lunch and dinner.",
            "Dress code: Casual",
            "Hours: 6:00 pm - 11:00 pm",
          ],
          colour: "lime--text text--darken-3",
        },
        {
          title: "The Lounge",
          image: require("../../assets/resort/dining/hktmb-lounge-0064-hor-wide.jpg"),
          text:
            "Take in picturesque views of the water as you indulge on light restaurant fare and refreshing libations at The Lounge. It’s the ideal place to meet friends or family after a day on the beach.",
          subtitle: [
            "Open for lunch and dinner",
            "Dress code: Smart Casual",
            "Hours: 11.00 am - 12.00 am",
            "Happy Hours: 9.00 pm - 11.00 pm",
            "Live Band: 7.00 pm - 11.00 pm",
          ],
          colour: "indigo--text text--darken-3",
        },
        {
          title: "Phuket Coffee Co",
          image: require("../../assets/resort/dining/hktmb-coffee-0075-hor-wide.jpg"),
          text:
            "Go-to coffee shop, premium hill tribe teas and coffee, milkshakes signature iced beverage and housemade pastries.",
          subtitle: ["Hours: 11.00 am – 6.00 pm"],
          colour: "brown--text text--darken-3",
        },
        {
          title: "Thai Pantry",
          image: require("../../assets/resort/dining/hktmb-pantry-0067-hor-wide.jpg"),
          text:
            "If you are craving Thailand specialties, our authentic Thai Pantry should not be missed. Dive into classic dishes from around the country in this inviting restaurant that highlights the dynamic flavours of Phuket.",
          subtitle: [
            "A La Carte dinner. Dinner buffet",
            "Dress code: Smart Casual",
            "Hours : 6:00 pm - 11:00 pm",
          ],
          colour: "orange--text text--darken-3",
        },
        {
          title: "Beach Grill",
          image: require("../../assets/resort/dining/hktmb-grill-3492-hor-wide.jpg"),
          text:
            "Beach Grill is the perfect restaurant and bar for casual beach-side dining. Bask in the Phuket sunshine as you savour the freshest seafood and sip refreshing tropical drinks, including specialty rum cocktails.",
          subtitle: [
            "A La Carte lunch and dinner. Dinner buffet",
            "Dress code: Casual",
            "Hours: 7.00 am – 11.00 pm",
          ],
          colour: "yellow--text text--darken-3",
        },
        {
          title: "The Sweet Spot",
          text:
            "Nothing is better than an ice cream on a beautiful sunny day in Phuket. Try our signature ice creams, bubble waffles or ice cream floats before setting out to explore the island.",
          subtitle: ["Hours: 11.00 am – 6.00 pm"],
          colour: "yellow--text text--darken-3",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
