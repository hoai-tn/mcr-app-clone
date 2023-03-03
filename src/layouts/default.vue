<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app right color="gblue" dark>
      <v-list dense>
        <template v-for="page in nav">
          <template v-if="page.children">
            <v-list-group :key="page.name">
              <template v-slot:activator>
                <v-list-item-icon>
                  <v-icon>{{ page.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ page.name }}</v-list-item-title>
              </template>

              <v-list-item
                :to="subpage.url"
                :key="subpage.name"
                v-for="subpage in page.children"
              >
                &nbsp;

                <v-list-item-content>
                  <v-list-item-title>{{ subpage.name }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>{{ subpage.icon }}</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          </template>
          <template v-else>
            <v-list-item :to="page.url" :key="page.name">
              <v-list-item-action>
                <v-icon>{{ page.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ page.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="gblue" dark>
      <v-fade-transition>
        <img
          style="position: absolute; top: 0; left: 0; width: 130px"
          v-if="$route.fullPath === '/'"
          :src="require('../assets/home-logo.svg')"
        />
      </v-fade-transition>

      <v-btn
        x-small
        fab
        light
        small
        @click="$router.go(-1)"
        v-if="$route.fullPath !== '/'"
      >
        <v-icon>fa-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-marker" v-if="$route.fullPath !== '/'">{{
        $route.meta.name || "MCR 2023"
      }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <!--    <v-fade-transition>-->
    <v-content :key="'page' + $route.fullPath.replace('/', '-')">
      <router-view></router-view>
    </v-content>
    <!--    </v-fade-transition>-->

    <div style="margin-top: 33%">
      <v-img
        src="../assets/footer.png"
        contain
        style="position: absolute; bottom: 0px"
      ></v-img>
    </div>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
    nav: [
      {
        name: "Home",
        icon: "fa-home",
        url: "/",
      },
      {
        name: "About Thailand",
        icon: "fa-info",
        url: "/about-thailand",
        children: [
          {
            name: "A land of Smiles",
            url: "/about-thailand/about",
            icon: "",
          },
          {
            name: "Smart Traveler Advice",
            url: "/about-thailand/smart-traveler",
            icon: "",
          },
          {
            name: "Traveler Tips for Thailand",
            url: "/about-thailand/traveler-tips",
            icon: "",
          },
          {
            name: "Useful Phone Numbers - Thailand",
            url: "/about-thailand/useful-phone-thailand",
            icon: "",
          },
        ],
      },
      {
        name: "Attending Members",
        icon: "fa-user",
        url: "/attending-members",
      },
      {
        name: "Dining & Bars Guide",
        icon: "fa-utensils",
        url: "/dining-bars-guide",
      },
      {
        name: "Schedule & Events",
        icon: "fa-calendar-alt",
        url: "/schedule",
        children: [
          {
            name: "Thai Cooking Class",
            url: "/events/thai-cooking-class",
            icon: "fa-hat-chef",
          },
          {
            name: "Zipline & Skywalk",
            url: "/events/zipline-and-skywalk",
            icon: "fa-hiking",
          },
          {
            name: "Splash Jungle",
            url: "/events/splash-jungle",
            icon: "fa-swimmer",
          },
          {
            name: "Splash Jungle Rides",
            url: "/events/splash-jungle-rides",
            icon: "fa-swimming-pool",
          },
          {
            name: "Airstep Golf Day",
            url: "/events/airstep-golf-day",
            icon: "fa-golf-ball",
          },
        ],
      },
      {
        name: "The Resort",
        url: "/resort",
        icon: "fa-hotel",
        children: [
          {
            name: "Resort",
            url: "/resort",
            icon: "fa-umbrella-beach",
          },
          {
            name: "Accommodation",
            url: "/resort/accommodation",
            icon: "fa-suitcase-rolling",
          },
          {
            name: "Sports & Recreation",
            url: "/resort/recreation",
            icon: "fa-racquet",
          },
          {
            name: "Restaurants & Bars",
            url: "/resort/dining",
            icon: "fa-utensils",
          },
          {
            name: "Kids Club",
            url: "/resort/kids-club",
            icon: "fa-child",
          },
          {
            name: "Spa",
            url: "/resort/spa",
            icon: "fa-hot-tub",
          },
          {
            name: "Regulations",
            url: "/resort/regulations",
            icon: "fa-gavel",
          },
          {
            name: "Map",
            url: "/resort/map",
            icon: "fa-map",
          },
          { name: "Leisure Centre", url: "/resort/leisure-centre" },
          {
            name: "Dining & Beverage Package",
            url: "/resort/beverage_package",
          },
          { name: "Bars", url: "/resort/bars" },
          { name: "Daily Activities - Kids", url: "/resort/activities-kids" },
        ],
      },
      {
        name: "Extra Activities",
        url: "/extra-activities",
        icon: "fa-person-running",
        children: [
          {
            name: "A morning with the Elephants",
            url: "/extra-activities/morning-elephants",
            icon: "",
          },
          {
            name: "Phuket’s gentle Giants",
            url: "/extra-activities/phukets-gentle-giants",
            icon: "",
          },
          {
            name: "It’s about Art - Phuket",
            url: "/extra-activities/art-phuket",
            icon: "",
          },
          {
            name: "Phi Phi Island",
            url: "/extra-activities/phi-phi-island",
            icon: "",
          },
          {
            name: "Simillan Island Snorkelling",
            url: "/extra-activities/simillan-island",
            icon: "",
          },
          {
            name: " Muay Thai Boxing Camp",
            url: "/extra-activities/muay-thai-boxing",
            icon: "",
          },
          {
            name: "Chalong Bay Rum Experience",
            url: "/extra-activities/chalong-bay",
            icon: "",
          },
          {
            name: "Phuket Heritage",
            url: "/extra-activities/phuket-heritage",
            icon: "",
          },
          {
            name: "Phuket All Terrain (ATV)",
            url: "/extra-activities/phuket-all-terrain",
            icon: "",
          },
          {
            name: "Sukko Spa – Thai Massage",
            url: "/extra-activities/thai-massage",
            icon: "",
          },
          {
            name: "Shopping Shuttle",
            url: "/extra-activities/shopping-shuttle",
            icon: "",
          },
          {
            name: "HD Phuket E-Bike Coast",
            url: "/extra-activities/hd-phuket",
            icon: "",
          },
        ],
      },

      {
        name: "Translator",
        icon: "fa-language",
        url: "/translator",
      },
      {
        name: "Currency Converter",
        icon: "fa-coins",
        url: "/currency-converter",
      },
      {
        name: "Weather",
        icon: "fa-cloud",
        url: "/weather",
      },
    ],
  }),
};
</script>

<style lang="scss">
@import "../assets/scss/main";

/*.text-marker {*/
/*  font-family: 'Permanent Marker', cursive;*/
/*}*/

/*h1, h2, h3, h4, h5, h6 {*/
/*  font-family: 'Permanent Marker', cursive;*/
/*  text-transform: uppercase;*/
/*  color: #1e1e1e;*/
/*  margin-bottom: 10px;*/
/*}*/

/*h4 {*/
/*  color: #1fa3a6*/
/*}*/

.v-content {
  background-size: initial;
  background-repeat: repeat;
  background-image: linear-gradient(
      180deg,
      #f1f2f4 0%,
      rgba(241, 242, 244, 0.06) 16%
    ),
    url(../assets/ThaiPattern-1.png) !important;
}

.theme--dark.v-list-item.v-list-item--active {
  color: white;
}
</style>
