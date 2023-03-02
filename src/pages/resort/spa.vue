<template>
  <v-container grid-list-xl>
    <h1 class="text-center">The Spa</h1>

    <v-layout wrap>
      <v-flex xs12 md6>
        <v-img src="../../assets/resort/spa.jpg"></v-img>
      </v-flex>
      <v-flex xs12 md6>
        <p>
          Schedule a day of healing, relaxation and rejuvenation while visiting
          the luxury day spa at our Phuket resort. This Thailand oasis offers a
          comprehensive menu of services, from massages to facials and body
          wraps in stunning terracotta treatment rooms.
        </p>
        <div class="my-3">
          <h4 class="blue--text text--darken-1">
            Hours:
          </h4>
          <p>
            Mon-Sun: 10:00 AM - 10:00 PM
          </p>
        </div>
        <div class="my-3">
          <h4 class="blue--text text--darken-1">
            Phone:
          </h4>
          <p>
            +66 76 335 300
          </p>
        </div>
        <div class="my-3">
          <h4 class="blue--text text--darken-1">
            Please note:
          </h4>
          <p>
            Appointment is required.
          </p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "spa",
};
</script>
