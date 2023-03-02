<template>
  <v-container grid-list-xs resort-page>
    <v-layout wrap row>
      <v-flex xs12>
        <h1 class="text-center">About The Resort</h1>
        <v-img src="../../assets/resort/island.png" contain></v-img>
      </v-flex>
      <v-flex xs12>
        <p class="font-weight-bold">
          A paradise for the senses, surrounded by natural beauty.
        </p>
        <p>
          Surrounded by the familiar lush rain forests that blanket Borneo,
          Shangri-La’s Tanjung Aru Resort & Spa is a place that engages all your
          senses. From the gentle sea breeze that caresses your skin to the
          sound of lapping waves that send you drifting into a peaceful sleep
        </p>
        <p>
          Keeping with traditional Borneo colours and textures, the Resort is a
          delicate balance of local culture and contemporary luxury. The
          spacious common areas of the Resort give a sense of space that opens
          beyond it’s walls
        </p>
        <p>
          Located within easy access of five idyllic islands, Shangri-La Tanjung
          Aru Resort & Spa is set amidst 25 acres of landscaped gardens
          overlooking the South China Sea allowing for a tranquil environment
          that is just a 10 minute drive from the city centre and Kota Kinabalu
          International Airport.
        </p>
      </v-flex>
      <v-flex xs12>
        <v-list>
          <v-list-item v-for="page in pages" :key="page.url" :to="page.url">
            <v-list-item-content>{{ page.name }}</v-list-item-content>
            <v-list-item-icon>
              <v-icon color="#993333">fa-arrow-right</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      pages: [
        { name: "Resort A-Z", url: "/resort/services" },
        { name: "Accommodation", url: "/resort/accommodation" },
        { name: "Sports & Recreation", url: "/resort/recreation" },
        { name: "Restaurants & Bars", url: "/resort/dining" },
        { name: "Kids Club", url: "/resort/kids-club" },
        { name: "Spa", url: "/resort/spa" },

        { name: "Regulations", url: "/resort/regulations" },
        { name: "Map", url: "/resort/map" },
        { name: "Leisure Centre", url: "/resort/leisure-centre" },
        { name: "Dining & Beverage Package", url: "/resort/beverage_package" },
        { name: "Bars", url: "/resort/bars" },
        {
          name: "Daily Activities - Kids",
          url: "/resort/activities-kids",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.resort-page {
  .theme--light {
    &.v-list {
      background-color: transparent;
    }

    .v-list-item {
      border-bottom: black solid 1px;

      &:last-of-type {
        border-bottom: none;
      }
    }

    .v-list-item__content {
      font-family: "Permanent Marker", cursive;
      text-transform: uppercase;
      color: #993333;
      font-size: 1.35rem;
    }
  }
}
</style>
