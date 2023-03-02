<template>
  <v-container grid-list-lg class="pl-5 pr-5" style="padding-top: 80px;">
    <v-layout row wrap fill-height>
      <v-flex v-for="page in pages" :key="page.name" xs4 md3 lg2>
        <router-link tag="div" :to="page.url">
          <v-img width="80%" :src="page.icon" contain></v-img>
<!--          <p class="text-center text-uppercase font-weight-bold" style="font-size: 0.8rem">{{ page.name }}</p>-->
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      pages: [
        { name: 'Itinerary & Events', url: '/schedule', icon: require('../assets/icons/itinerary.png') },
        { name: 'Attending Members', url: '/attending-members', icon: require('../assets/icons/attending-members.png') },
        { name: 'Attending Alliance Partners', url: 'alliance-partners', icon: require('../assets/icons/alliance-partners.png') },
        { name: 'About Thailand', url: '/about', icon: require('../assets/icons/about.png') },
        { name: 'The Resort', url: '/resort', icon: require('../assets/icons/resort.png') },
        { name: 'Translator', url: '/translator', icon: require('../assets/icons/translator.png') },
        { name: 'Currency Converter', url: '/currency-converter', icon: require('../assets/icons/converter.png') },
        { name: 'Shopping & Bars', url: '/shopping-bars', icon: require('../assets/icons/shopping.png') },
        { name: 'Weather', url: '/weather', icon: require('../assets/icons/weather.png') },
        { name: 'Maps', url: '', icon: require('../assets/icons/maps.png') },
        { name: 'Bentleight Travel', url: '', icon: require('../assets/icons/travel.png') },
        { name: 'Tour Desk & Help', url: '', icon: require('../assets/icons/help.png') },
      ]
    }
  }
}
</script>
