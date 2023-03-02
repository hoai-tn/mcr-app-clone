<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12 text-center>
        <h4>Thai Currency Converter</h4>
        <p>
          The Thai Baht is the currency of Thailand. Our currency rankings show that the most popular Thailand Baht exchange rate is the THB to EUR rate.
        </p>
        <p>
          The currency code for Baht is THB, and the currency symbol is &#3647;.
        </p>
      </v-flex>
      <v-flex xs12>
        <v-divider></v-divider>
      </v-flex>
      <v-flex xs12>
        <p><strong>Enter the amount you would like to convert</strong></p>
        <v-text-field
                type="text"
                id="amount"
                :label="mode === 1 ? 'Dollar Amount' : 'Baht Amount'"
                v-model="amount"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <p><strong>Select the currency you would like to convert</strong></p>
        <v-btn-toggle v-model="mode" mandatory dark>
          <v-btn :color="mode === 2 ? 'grey' : 'gblue'" :value="1">
            $ AUD
          </v-btn>
          <v-btn :color="mode === 1 ? 'grey' : 'gblue'" :value="2">
            &#3647; THB
          </v-btn>
        </v-btn-toggle>
      </v-flex>
      <v-flex xs12>
        <p><strong>Click here to convert</strong></p>
        <v-btn block color="gblue" dark :loading="loading" @click="convert">Convert</v-btn>
      </v-flex>
      <v-flex xs12 py-5 text-center>
        <v-divider></v-divider>
        <p style="font-size: 1.4em" v-show="mode === 2">
          = ${{ this.converted.toLocaleString('en-AU') }} AUD
        </p>
        <p style="font-size: 1.4em" v-show="mode === 1">
          = &#3647;{{ this.converted.toLocaleString('th') }} THB
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from 'axios'

export default {
  name: 'index',
  data () {
    return {
      amount: null,
      loading: false,
      converted: 0,
      mode: 1,
      exchangeRate: 0
    }
  },
  mounted () {
    if (this.$store.state.currencyConversion) {
      this.exchangeRate = this.$store.state.currencyConversion
    } else {
      axios.get('https://free.currconv.com/api/v7/convert?q=AUD_THB&compact=ultra&apiKey=01123e845d1985902133').then((rsp) => {
        this.loading = false
        this.exchangeRate = rsp.data.AUD_THB
        this.$store.commit('SET_CURRENCY', this.exchangeRate)
      })
    }
  },
  methods: {
    convert () {
      this.loading = true
      this.converted = 0
      if (this.mode === 1) {
        this.loading = false
        this.converted = this.amount * this.exchangeRate
      } else {
        this.loading = false
        this.converted = this.amount / this.exchangeRate
      }
    }
  },
  watch: {
    mode () {
      this.converted = 0
    }
  }
}
</script>

<style scoped>

</style>
