<template>
  <v-container grid-list-sm>

    <v-layout wrap v-if="forecast" class="weather">
      <v-flex xs12>
        <v-layout>
          <v-flex xs8 blah>
            <div>
              {{ parseTime(forecast.currently.time) }} - Phuket, Thailand <br>{{ parseDate(forecast.currently.time) }}
            </div>
            <div class="font-weight-bold text-center">
              {{ forecast.currently.apparentTemperature.toFixed(0) }}&#176;
            </div>
            <div>
              {{ forecast.currently.summary }}
            </div>
          </v-flex>
          <v-flex xs4>
            <v-icon large>{{ getIcon(forecast.currently.icon) }}</v-icon>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-list two-line subheader>
          <v-list-item v-for="day in forecast.daily.data" :key="'day-' + day.time">

            <v-list-item-content>
              <v-list-item-title>
                {{ parseDate(day.time) }} - <strong>{{ day.temperatureHigh.toFixed(0) }}&#176;</strong>
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ day.summary }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon large>{{ getIcon(day.icon) }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>

    <v-dialog v-model="loading" persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          <p class="text-center">Loading weather information</p>
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="$router.back()">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from 'axios'
import { format } from 'date-fns'

export default {
  name: 'Weather',
  data () {
    return {
      loading: true,
      forecast: null
    }
  },
  mounted () {
    this.loading = true
    axios.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/67508eaf9524c018d3e82123f0091474/7.8961,98.2966?exclude=hourly&units=si').then(rsp => {
      this.loading = false
      this.forecast = rsp.data
    })
  },
  methods: {
    parseTime (val) {
      return format(val, 'HH:MM A')
    },
    parseDate (val) {
      return format(new Date(val * 1000), 'dddd Do MMMM')
    },
    getIcon (icon) {
      switch (icon) {
        case 'partly-cloudy-day':
          return 'fa-cloud-sun'
        case 'rain':
          return 'fa-cloud-rain'
        default:
          return icon
      }
    }
  }
}
</script>

<style lang="scss">
  .weather {
    .theme--light, .theme--dark {
      &.v-list {
        background-color: transparent;
      }

      .v-list-item {
        border-bottom: rgb(123, 123, 123) solid 1px;

        &:first-of-type {
          border-top: rgb(123, 123, 123) solid 1px;
        }

        &:last-of-type {
          border-bottom: none;
        }
      }
    }
  }


</style>
