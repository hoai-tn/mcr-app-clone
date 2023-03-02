<template>
  <div>
    <v-img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FomojFXTxis0%2Fmaxresdefault.jpg&f=1&nofb=1" fluid></v-img>
    <v-container grid-list-xl>
      <v-layout wrap class="">
        <v-flex xs12>
          <h1>About Thailand</h1>
          <p>Called the “Land of Smiles,” Thailand has become one of the leading travel destinations in Asia over the last few decades. Officially known as the Kingdom of Thailand, this Southeast Asian nation is the only country in the region to have avoided colonialism, remaining a sovereign country in its own right. Economically, Thailand is still developing, although this doesn’t stop it from dominating much of the region’s rice and tourism industries. </p>
          <p>Home to nearly 11 million people, the Thailands capital, Bangkok is a vast network of busy streets, commercial centres and modern delights that hug the meandering banks of the Chao Phraya River. The perfect balance of city, country, mountains and water, Thailand is a dream for both nature lovers and urban dwellers with cheap massages on every corner. </p>
        </v-flex>
        <hr/>
        <v-flex xs12>
          <h3>Smart Traveller Advice</h3>
          <p>The following information is a summary of the Smart Traveller Advice produced by the Australian Governments Department of Foreign Affairs and Trade (as of December 2019) </p>
          <p>We advise you to exercise normal safety precautions in Thailand. You should exercise common sense and look out for suspicious behaviour, as you would in Australia and New Zealand. Monitor the media and other sources for changes to local travelling conditions.</p>
          <p>Thailand regulates the import of prescription and non-prescription medication. Some medications require a letter from the prescribing doctor. Contact the Thailand High Commission before you travel to check the rules regarding any medicines you take. Keep your medication in its original packaging.</p>
          <p>Border areas near Cambodia, Myanmar and Malaysia are dangerous due to violence, armed conflict and landmines. Pay close attention to your personal security. Don't travel to the 4 most southern provinces of the Thailand-Malaysia border: Yala, Pattani, Narathiwat and Songkhla. These areas experience frequent violence and bombings.</p>
          <p>Penalties for drug offences are severe and include the mandatory death sentence for drug trafficking.</p>
          <p>Commercial surrogacy is illegal. E-cigarettes, e-baraku, vaporisers and refills are illegal. Smoking on some beaches is illegal. Travel without carrying identification is illegal.</p>
          <p>Thailand is a multicultural but predominantly a Buddhist country. There are conservative standards of dress and behaviours in many areas of Thailand.</p>
          <p>To register your trip on Smart Traveller, or for more information visit:</p>
          <v-btn src="smarttraveller.gov.au/Thailand"> Smart Traveler</v-btn>
        </v-flex>
        <hr>
        <v-flex xs12>
          <h3>Travel Tips for Thailand</h3>

          <p><strong>Currency</strong></p>
          <p>Thai currency is the baht (BHT) </p>
          <p>AUD1 = 20.69 BHT (as at December 2019)</p>
          <p>Cash and travellers’ cheques can be readily exchanged with banks and money-changers. Major credit cards are widely accepted in hotels, restaurants and shops. We recommend you check with your bank to confirm if your ATM card will work in Thailand.</p>

          <p><strong>Water</strong></p>
          <p>It is not advisable to drink tap water but bottled mineral water is safe and available everywhere. Ice cubes in drinks are usually made from purified water and are usually not a problem. Some minor stomach problems are always possible when travelling in exotic countries. Bring a supply of your usual anti-diarrhea medicine.</p>

          <p><strong>Electricity</strong></p>
          <p>Electric current is usually 220 volts A/C (50 cycles). Various plugs and sockets are used. Most hotels supply adapters and transformers for 110V equipment.</p>

          <p><strong>Customs</strong></p>
          <p>Duty free allowance for visitors is 200 cigarettes and one litre of wine or spirits. Importing weapons and pornography is prohibited. Penalties for attempting to smuggle drugs are very severe in Thailand, including life imprisonment. Any amount of traveller’s cheques or drafts may be imported, but cash in excess of USD 10,000 must be declared. Not more than THB 50,000 in cash may be exported. Antiques and Buddha images require export licenses.</p>

          <p><strong>Hospital</strong></p>
          <p>Phuket International Hospital (sometimes referred to by its Thai name 'Siriroj') specifically offers treatment to the needs of foreign tourists and foreign residents, treating thousands of patients each year. They have the enviable reputation of providing high quality and cost efficient hospital services, coupled with the warmth and caring nature that only true Thai hospitality can provide.</p>
          <p>Address: Chalermprakiat Ror 9 Rd (Highway 402), next to Big C. It’s also not far from Tesco Lotus Superstore and Phuket Central Festival Mall.</p>
          <p>Tel: +66 (0)76-249 400</p>
          <p>For ambulance transportation, call 076-210 935</p>

          <p><strong>AUSTRALIAN EMBASSY</strong><br>
            6th Floor, CCM Complex<br>
            77/77 Charlermprakiat Rama 9 Road (Bypass Road)<br>
            Phuket Province, 83000 Thailand<br>
            Telephone <a href="tel:+66 (0) 76 317 700">+66 (0) 76 317 700</a><br>
            Fax +66 ( 0) 76 317 743<br>
            consular.phuket@dfat.gov.au</p>

          <p><strong>Transporation</strong></p>
          <p>For short distances tuk tuks are fine, but their small size makes them uncomfortable for anything longer than about 30 minutes. In the main resorts like Patong, even short distances cost around 100 Baht. You should state your destination and agree on the price before setting off! Trips further afield, beyond the immediate beach area can cost anything up to 400 Baht - depending on the distance and your bargaining skills! </p>

          <p><strong>Time</strong></p>
          <p>Thailand time is GMT +7 hours</p>
          <p>It's currently {{ thaiTime }} in Thailand and {{ ausTime }} in Melbourne</p>

          <p><strong>Tipping</strong></p>
          <p>Give a 10% tip at restaurants if a service charge is not included. Tip porters and bag boys B20. There’s no need to tip taxi drivers.</p>

          <p><strong>Health</strong></p>
          <p>Certificates of inoculation for cholera or yellow fever are required if you arrive from an infected area. Some border areas of Thailand are malarial and visitors should take the necessary precautions. Please check with your local health practitioner for the latest advice. </p>

          <p><strong>Clothing</strong></p>
          <p>Comfortable lightweight clothing in natural fabrics such as cotton is suitable for traveling in Thailand. It is advisable to cover arms and legs in the evenings and remember to use repellent against biting insects at most times. A lightweight raincoat and umbrella are a good idea for any occasional showers and an umbrella can also offer useful shade from the sun.</p>

          <p><strong>Internet</strong></p>
          <p>Broadband WiFi internet is commonplace in Thailand and speeds are very good. Most hotels, restaurants and coffee shops offer complimentary access these days. </p>

        </v-flex>
      </v-layout>
    </v-container>
  </div>


</template>

<script>
export default {
  name: 'about-thailand',
  computed: {
    thaiTime () {
      return new Date().toLocaleString('en-AU', { timeZone: 'Etc/GMT+7' })
    },
    ausTime () {
      return new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })
    }
  }
}
</script>
