<template>
  <div>
    <h1 class="text-center my-10" style="color:#1fa3a6;">Bars</h1>
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12 xs6>
          <v-img
            src="../../assets/resort/dining/hktmb-shack-0150-hor-wide.jpg"
            height="100vh"
          ></v-img>
        </v-flex>
        <v-flex xs12 xs6>
          <div>
            <b>
              Enjoy 2 for 1 on all drinks every day at 3 locations!
            </b>
            <div><b>The Rum Shack:</b> 5:00-7:00 pm</div>
            <div><b>Pool Bar: </b> 3:00-5:00 pm</div>
            <div><b> The Lounge:</b> 9:00-11:00 pm</div>
          </div>
          <div class="mt-5">
            <h3>The Rum Shack</h3>
            <p>
              The Rum Shack, our enticing beach restaurant, offers incredible
              views of the Andaman Sea, live Reggae music, tasty fare and
              signature rum cocktailsThe Rum Shack, our enticing beach
              restaurant, offers incredible views of the Andaman Sea, live
              Reggae music, tasty fare and signature rum cocktails.
            </p>
            <div>
              <div><strong>Open for lunch and dinner</strong></div>
              <div><strong>Dress code:</strong> Casual</div>
              <div><strong>Hours:</strong> 11:00 am - 12:00 am</div>
              <div><strong>Happy Hours:</strong> 5:00 pm - 7:00 pm</div>
            </div>
          </div>
          <div class="mt-5">
            <h3>Pool bar</h3>
            <p>
              Experience our tempting swim-up Pool Bar during your resort stay.
              Enjoy tasty cocktails, casual restaurant cuisine and a daily happy
              hour as you revel in a Phuket sunset.
            </p>
            <div>
              <div><strong>Open for lunch and dinner</strong></div>
              <div><strong>Dress code:</strong> Casual</div>
              <div><strong>Hours:</strong> 11:00 am - 7:00 pm</div>
              <div><strong>Happy Hours:</strong> 3:00 pm - 5:00 pm</div>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "bars",
};
</script>

<style scoped></style>
