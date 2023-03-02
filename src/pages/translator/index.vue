<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 text-center>
        <h4>Common Thai Phrases</h4>
        <p>
          <strong>How Are You?</strong>
          <br>
          Sabaaidii mai?
        </p>
        <p>
          <strong>How Are You?</strong>
          <br>
          Sabaaidii mai?
        </p>
        <p>
          <strong>How Are You?</strong>
          <br>
          Sabaaidii mai?
        </p>
      </v-flex>
      <v-flex xs12>
        <v-divider></v-divider>
      </v-flex>
      <v-flex xs12 mb-5>
        <i style="font-size: 0.5rem">Please Note: This feature requires internet access</i>
      </v-flex>
      <v-flex xs12>
        <v-flex xs12 sm6 md4>
          <v-text-field
                  type="text"
                  id="inputText"
                  label="Message To Translate"
                  v-model="inputText"
                  placeholder=" "
          ></v-text-field>
        </v-flex>
      </v-flex>
      <v-flex xs12>
        <v-btn block color="gblue" :loading="loading" :disabled="!inputText" @click="translate">Translate</v-btn>
      </v-flex>
      <v-flex xs12>
        <v-divider></v-divider>
      </v-flex>
      <v-flex xs12 v-if="translatedText">
        <strong>
          Translation:
        </strong>
        {{translatedText.translation}}
        <br />
        <strong>
          Transliteration:
        </strong>
        {{translatedText.transliteration}}
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
      inputText: null,
      translatedText: null,
      loading: false
    }
  },
  methods: {
    translate () {
      this.translatedText = null
      this.loading = true
      axios.post('https://a3428q17j9.execute-api.ap-southeast-2.amazonaws.com/default/mcrTranslator?text=' + this.inputText, {}, { header: { 'x-amnz-RequestId': '123344556' } }).then((rsp) => {
        this.translatedText = rsp.data
        this.loading = false
      }).catch(() => {
        alert('Unexpected Error Occured')
      })
    }
  }
}
</script>

<style scoped>

</style>
