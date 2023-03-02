<template>
  <v-container grid-list-md>
    <v-layout wrap class="attending-members">
      <v-flex xs12>
        <v-flex xs12 sm6 md4>
          <v-text-field type="text"
                        id="search"
                        label="Search"
                        v-model="search"
                        solo
                        append-icon="fa-search"
                        clearable
          ></v-text-field>
        </v-flex>
      </v-flex>
      <v-flex xs12>
        <v-list two-line subheader>
          <v-list-item v-for="member in filteredMembers" :key="member.name" @click="viewMember(member)">
            <v-list-item-avatar>
              <v-icon>fa-user</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ member.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ member.store }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>fa-chevron-right</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>

    <v-dialog v-model="dialog">
      <v-card dark>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs2>
                <v-icon large>fa-user-circle</v-icon>
              </v-flex>
              <v-flex xs10>
                <h2 class="text--white">{{ currentMember.name }}</h2>
                <div><i>{{ currentMember.store }}</i></div>
              </v-flex>

              <v-flex xs12 mb-5>
                <v-divider></v-divider>
              </v-flex>

              <v-flex v-if="currentMember.phone">
                <v-list two-line subheader>
                  <v-list-item @click="call">
                    <v-list-item-icon>
                      <v-icon>fa-phone</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Call
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        {{ currentMember.phone }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-icon>fa-chevron-right</v-icon>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item @click="text">
                    <v-list-item-icon>
                      <v-icon>fa-sms</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Text
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        {{ currentMember.phone }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-icon>fa-chevron-right</v-icon>
                    </v-list-item-action>
                  </v-list-item>

                  <v-list-item @click="addContact">
                    <v-list-item-icon>
                      <v-icon>fa-user-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Add To Contacts
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        {{ currentMember.phone }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-icon>fa-chevron-right</v-icon>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
let faker = require('faker')
import Fuse from 'fuse.js'

export default {
  name: 'alliance-members',
  data () {
    return {
      currentMember: {},
      dialog: false,
      members: [
        { 'name': 'Peter White', 'store': 'Airstep Flooring', 'phone': '0408 392 583' },
        { 'name': 'Kerry  Haddock', 'store': 'Airstep Flooring', 'phone': '' },
        { 'name': 'Phillip Scarlett', 'store': 'Airstep Flooring', 'phone': '' },
        { 'name': 'Rebecca Scarlett', 'store': 'Airstep Flooring', 'phone': '' },
        { 'name': 'Stephen Wootton', 'store': 'Airstep Flooring', 'phone': '' },
        { 'name': 'Emma Wootton', 'store': 'Airstep Flooring', 'phone': '' },
        { 'name': 'Isabelle Wootton', 'store': 'Airstep Flooring', 'phone': '' },
        { 'name': 'Mark Gannon', 'store': 'Beaulieu', 'phone': '0449 126 410' },
        { 'name': 'Allan Russell', 'store': 'Beaulieu', 'phone': '' },
        { 'name': 'Matthew Wilson', 'store': 'Belgotex', 'phone': '' },
        { 'name': 'Belinda Wilson', 'store': 'Belgotex', 'phone': '' },
        { 'name': 'Zara Wilson', 'store': 'Belgotex', 'phone': '' },
        { 'name': 'Christian Wilson', 'store': 'Belgotex', 'phone': '' },
        { 'name': 'Michael Ingham', 'store': 'Cavalier Bremworth', 'phone': '0415 166 602' },
        { 'name': 'Amanda Ingham', 'store': 'Cavalier Bremworth', 'phone': '' },
        { 'name': 'Lucy Ingham', 'store': 'Cavalier Bremworth', 'phone': '' },
        { 'name': 'Emily Ingham', 'store': 'Cavalier Bremworth', 'phone': '' },
        { 'name': 'Rochelle Flint', 'store': 'Cavalier Bremworth', 'phone': '0421 533 218' },
        { 'name': 'Alexander Flint', 'store': 'Cavalier Bremworth', 'phone': '' },
        { 'name': 'Georgia Flint', 'store': 'Cavalier Bremworth', 'phone': '' },
        { 'name': 'Maddison Flint', 'store': 'Cavalier Bremworth', 'phone': '' },
        { 'name': 'Leanne Drysdale', 'store': 'Classic Flooring', 'phone': '0428 445 563' },
        { 'name': 'Bruce Drysdale', 'store': 'Classic Flooring', 'phone': '' },
        { 'name': 'Deepak Narwani', 'store': 'Classic Flooring', 'phone': '' },
        { 'name': 'Andrew Spence', 'store': 'Dunlop Flooring', 'phone': '0412 350 548' },
        { 'name': 'Tracy Spence', 'store': 'Dunlop Flooring', 'phone': '' },
        { 'name': 'Anna Petkovski', 'store': 'Dunlop Flooring', 'phone': '0488 555 078' },
        { 'name': 'Toni Petkovski', 'store': 'Dunlop Flooring', 'phone': '' },
        { 'name': 'Olivia Petkovski', 'store': 'Dunlop Flooring', 'phone': '' },
        { 'name': 'Amber Petkovski', 'store': 'Dunlop Flooring', 'phone': '' },
        { 'name': 'Harley Petkovski', 'store': 'Dunlop Flooring', 'phone': '' },
        { 'name': 'Geoff Bryant', 'store': 'FDA', 'phone': '0417 927 707' },
        { 'name': 'Chris  Barker', 'store': 'Forbo', 'phone': '0401 775 559' },
        { 'name': 'George  Low', 'store': 'George Low', 'phone': '0418 333 301' },
        { 'name': 'Sarah Low', 'store': 'George Low', 'phone': '' },
        { 'name': 'Astrid Low', 'store': 'George Low', 'phone': '' },
        { 'name': 'Edwina Low', 'store': 'George Low', 'phone': '' },
        { 'name': 'Barbara Fatouros', 'store': 'Godfrey Hirst', 'phone': '' },
        { 'name': 'Geri Fatouros', 'store': 'Godfrey Hirst', 'phone': '0419 337 217' },
        { 'name': 'Bradley Rossborough', 'store': 'Godfrey Hirst', 'phone': '0410 481 418' },
        { 'name': 'Maggie Chretien', 'store': 'Godfrey Hirst', 'phone': '' },
        { 'name': 'Paul McCormack', 'store': 'Karndean Designflooring', 'phone': '0413 444 819' },
        { 'name': 'Geoffrey Weir', 'store': 'Karndean Designflooring', 'phone': '0407 624 084' },
        { 'name': 'Olivia Christie', 'store': 'Karndean Designflooring', 'phone': '' },
        { 'name': 'Neave Weir', 'store': 'Karndean Designflooring', 'phone': '' },
        { 'name': 'James Creswell', 'store': 'Mapei', 'phone': '0407 964 400' },
        { 'name': 'Kelly Creswell', 'store': 'Mapei', 'phone': '' },
        { 'name': 'Lily Creswell', 'store': 'Mapei', 'phone': '' },
        { 'name': 'Jak Creswell', 'store': 'Mapei', 'phone': '' },
        { 'name': 'Brett Sturgess', 'store': 'MJS Floorcoverings', 'phone': '' },
        { 'name': 'Leanne Sturgess', 'store': 'MJS Floorcoverings', 'phone': '0402 036 653' },
        { 'name': 'Laura Paige (Sturgess)', 'store': 'MJS Floorcoverings', 'phone': '' },
        { 'name': 'Luke Sturgess', 'store': 'MJS Floorcoverings', 'phone': '' },
        { 'name': 'Roger Blasse', 'store': 'Pegulan Floorcoverings', 'phone': '0409 536 519' },
        { 'name': 'Tamiko Blasse', 'store': 'Pegulan Floorcoverings', 'phone': '' },
        { 'name': 'Scott Foster', 'store': 'Polyflor Australia', 'phone': '' },
        { 'name': 'Leanne Thomas', 'store': 'Polyflor Australia', 'phone': '' },
        { 'name': 'Lachlan Foster', 'store': 'Polyflor Australia', 'phone': '' },
        { 'name': 'Imogen Foster', 'store': 'Polyflor Australia', 'phone': '' },
        { 'name': 'Hudson Foster', 'store': 'Polyflor Australia', 'phone': '' },
        { 'name': 'Ethan Thomas', 'store': 'Polyflor Australia', 'phone': '' },
        { 'name': 'Paige Thomas', 'store': 'Polyflor Australia', 'phone': '' },
        { 'name': 'Summer  Thomas', 'store': 'Polyflor Australia', 'phone': '' },
        { 'name': 'Mark Vanleerdam', 'store': 'Polyflor Australia', 'phone': '' },
        { 'name': 'Giovana Vanleerdam', 'store': 'Polyflor Australia', 'phone': '' },
        { 'name': 'Stephanie Ligertwood', 'store': 'Polyflor Australia', 'phone': '' },
        { 'name': 'Sara  Fakhraei', 'store': 'Polyflor Australia', 'phone': '0406 316 573' },
        { 'name': 'Adel Fakhraei', 'store': 'Polyflor Australia', 'phone': '' },
        { 'name': 'Jamie  Costello', 'store': 'Premium Floors', 'phone': '0431 330 238' },
        { 'name': 'Stuart Budge', 'store': 'Premium Floors', 'phone': '' },
        { 'name': 'Adele Clark', 'store': 'Proline Floors', 'phone': '' },
        { 'name': 'Timothy Clark', 'store': 'Proline Floors', 'phone': '0427 121 146' },
        { 'name': 'Olivia Clark', 'store': 'Proline Floors', 'phone': '' },
        { 'name': 'Lachlan Clark', 'store': 'Proline Floors', 'phone': '' },
        { 'name': 'Matthew Amos', 'store': 'Quest Carpets', 'phone': '0419 589 573' },
        { 'name': 'Sarah Amos', 'store': 'Quest Carpets', 'phone': '' },
        { 'name': 'Richard Ashworth', 'store': 'Signature Floors', 'phone': '0438 566 522' },
        { 'name': 'Chelsea Ashworth', 'store': 'Signature Floors', 'phone': '' },
        { 'name': 'Mark Lustica', 'store': 'Signature Floors', 'phone': '0438 044 416' },
        { 'name': 'Donna Lustica', 'store': 'Signature Floors', 'phone': '' },
        { 'name': 'Patrick Fagan', 'store': 'Signature Floors', 'phone': '0488 477 427' },
        { 'name': 'Jacqueline Sandars', 'store': 'Signature Floors', 'phone': '0407 853 732' },
        { 'name': 'Richard Braic', 'store': 'Signature Floors', 'phone': '0418 393 006' },
        { 'name': 'Michael Snee', 'store': 'Tarkett Australia', 'phone': '0438 532 222' },
        { 'name': 'Lorena Cook', 'store': 'Total Window Concepts', 'phone': '0410 759 165' },
        { 'name': 'Timothy Rabbette', 'store': 'Total Window Concepts', 'phone': '' },
        { 'name': 'Scott Gurnett', 'store': 'Total Window Concepts', 'phone': '0412 340 326' },
        { 'name': 'Nigel Griffiths', 'store': 'Tuftmaster Carpets', 'phone': '0402 119 556' },
        { 'name': 'Brendon Fall', 'store': 'Victoria Carpets', 'phone': '0439 334 999' },
        { 'name': 'Gina Fall', 'store': 'Victoria Carpets', 'phone': '' },
        { 'name': 'Scott Begnell', 'store': 'Armstrong Flooring', 'phone': '0433 733 530' },
        { 'name': 'Katherine McGarry', 'store': 'Armstrong Flooring', 'phone': '' },
        { 'name': 'Camille Hogeland', 'store': 'Advertising Associates', 'phone': '0421 359 177' },
        { 'name': 'Chris Hogeland', 'store': 'Advertising Associates', 'phone': '' },
        { 'name': 'Jessie Hogeland', 'store': 'Advertising Associates', 'phone': '' },
        { 'name': 'Sam Hogeland', 'store': 'Advertising Associates', 'phone': '' },
        { 'name': 'Bella Hogeland', 'store': 'Advertising Associates', 'phone': '' },
        { 'name': 'Andrew Dunne', 'store': 'Advertising Associates', 'phone': '0439 802 001' },
        { 'name': 'Helen Dunne', 'store': 'Advertising Associates', 'phone': '' },
        { 'name': 'Mathew Dunne', 'store': 'Advertising Associates', 'phone': '' },
        { 'name': 'Emily Dunne', 'store': 'Advertising Associates', 'phone': '' },
        { 'name': 'Sean Dunne', 'store': 'Advertising Associates', 'phone': '' },
        { 'name': 'Emily Ingram', 'store': 'Prendi', 'phone': '0429 880 590' },
        { 'name': 'James Ingram', 'store': 'Prendi', 'phone': '' },
        { 'name': 'William Murtagh', 'store': 'Prendi', 'phone': '' },
        { 'name': 'Nat Russell', 'store': 'Prendi', 'phone': '' },
        { 'name': 'Sophie Russell', 'store': 'Prendi', 'phone': '' },
        { 'name': 'Joel Olsson', 'store': 'Prendi', 'phone': '' },
        { 'name': 'Renee Olsson', 'store': 'Prendi', 'phone': '' },
        { 'name': 'Dan Ellis', 'store': 'Ellis Creative', 'phone': '0412 042 142' },
        { 'name': 'Kerrin Ellis', 'store': 'Ellis Creative', 'phone': '' },
        { 'name': 'Ivy Ellis', 'store': 'Ellis Creative', 'phone': '' },
        { 'name': 'April Ellis', 'store': 'Ellis Creative', 'phone': '' },
        { 'name': 'Ross Wilson', 'store': 'Australian Music Legend', 'phone': '' },
        { 'name': 'Mark Sydow', 'store': 'Band', 'phone': '' },
        { 'name': 'Chris Bekker', 'store': 'Band', 'phone': '' },
        { 'name': 'Haydn Meggitt', 'store': 'Band', 'phone': '' },
        { 'name': 'Alison Meggitt', 'store': 'Band', 'phone': '' },
        { 'name': 'James Ryan', 'store': 'Band', 'phone': '' },
        { 'name': 'Michael Pollard', 'store': 'Band', 'phone': '' },
        { 'name': 'Stewart Wilkinson', 'store': 'Band', 'phone': '' },
        { 'name': 'Georgia Holmes', 'store': 'Band', 'phone': '' },
        { 'name': 'Matt Duffey', 'store': 'Band', 'phone': '' },
        { 'name': 'Cara Duffey', 'store': 'Band', 'phone': '' },
        { 'name': 'Scout Duffey', 'store': 'Band', 'phone': '' },
        { 'name': 'Ian Jane', 'store': 'Bentleigh Travel', 'phone': '0414 776 668' },
        { 'name': 'Tim Miller', 'store': 'Bentleigh Travel', 'phone': '' },
        { 'name': 'Emma Miller', 'store': 'Bentleigh Travel', 'phone': '' },
        { 'name': 'Chloe Miller', 'store': 'Bentleigh Travel', 'phone': '' },
        { 'name': 'Simon  Herod', 'store': 'Bentleigh Travel', 'phone': '' },
        { 'name': 'Holly Jane', 'store': 'Bentleigh Travel', 'phone': '' }
      ],
      search: '',
      fuse: {}
    }
  },
  computed: {
    filteredMembers () {
      return this.search ? this.fuse.search(this.search) : this.members
    }
  },
  methods: {
    viewMember (member) {
      this.dialog = true
      this.currentMember = member
    },
    call () {
      window.location.href = 'tel:' + this.currentMember.phone
    },
    text () {
      window.location.href = 'sms:' + this.currentMember.phone
    },
    addContact () {
      if (navigator && navigator.contacts) {
        let contact = navigator.contacts.create({ 'displayName': this.currentMember.name, phoneNumbers: this.currentMember.phone, organizations: this.currentMember.store })
        contact.save(() => {alert('Contact Added!') }, () => {
          alert('Unexpected Error')
        })
      } else {
        alert('Contact management not supported on your device')
      }

    }
  },
  beforeMount () {
    faker.locale = 'en_AU'
    // for (let i = 0; i <= 30; i++) {
    //   const user = {
    //     name: faker.fake('{{name.firstName}} {{name.lastName}}'),
    //     phone: faker.phone.phoneNumber(),
    //     store: 'Choices Flooring ' + faker.address.city()
    //   }
    //
    //   this.members.push(user)
    // }

    var options = {
      shouldSort: true,
      tokenize: true,
      matchAllTokens: true,
      //includeMatches: true,
      threshold: 0.2,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        'name',
        'store'
      ]
    }

    this.fuse = new Fuse(this.members, options)
  },
  mounted () {

  }
}
</script>

<style lang="scss">
  .attending-members {
    .theme--light, .theme--dark {
      &.v-list {
        background-color: transparent;
      }

      .v-list-item {
        border-bottom: rgba(69, 69, 69, 0.27) solid 1px;

        &:last-of-type {
          border-bottom: none;
        }
      }

      .v-list-item__content {
        font-family: 'Permanent Marker', cursive;
        text-transform: uppercase;
        color: #993333;
        font-size: 1.35rem;
      }
    }
  }
</style>
