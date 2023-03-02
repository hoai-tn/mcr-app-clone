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
          <v-list-item v-for="member in filteredMembers" :key="member.name + member.store" @click="viewMember(member)">
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
  name: 'attending-members',
  data () {
    return {
      currentMember: {},
      dialog: false,
      members: [

        { 'name': 'Jason Verstak', 'store': 'Central Office', 'phone': '0498 136 395' },
        { 'name': 'Ethan Verstak', 'store': 'Central Office', 'phone': '' },
        { 'name': 'Milla Verstak', 'store': 'Central Office', 'phone': '' },
        { 'name': 'Andrew Lewis', 'store': 'Central Office', 'phone': '0400 400 036' },
        { 'name': 'Tim Drew', 'store': 'Central Office', 'phone': '0425 751 756' },
        { 'name': 'Sam  Lam', 'store': 'Central Office', 'phone': '' },
        { 'name': 'Helen Nguyen', 'store': 'Central Office', 'phone': '0436 364 352' },
        { 'name': 'Paddy  Deery', 'store': 'Central Office', 'phone': '' },
        { 'name': 'Arthur Tran', 'store': 'Central Office', 'phone': '' },
        { 'name': 'Matthew Tran', 'store': 'Central Office', 'phone': '' },
        { 'name': 'Ingrid Powell', 'store': 'Central Office', 'phone': '0407 539 495' },
        { 'name': 'Justin Powell', 'store': 'Central Office', 'phone': '' },
        { 'name': 'William Powell', 'store': 'Central Office', 'phone': '' },
        { 'name': 'Benjamin Powell', 'store': 'Central Office', 'phone': '' },
        { 'name': 'Jan Brewster', 'store': 'Central Office', 'phone': '' },
        { 'name': 'Garry Brewster', 'store': 'Central Office', 'phone': '' },
        { 'name': 'Karen Prelovsky', 'store': 'Central Office', 'phone': '' },
        { 'name': 'George Prelovsky', 'store': 'Central Office', 'phone': '' },
        { 'name': 'Andrew Verstak', 'store': 'Central Office', 'phone': '0499 828 000' },
        { 'name': 'Cheryl Verstak', 'store': 'Central Office', 'phone': '' },
        { 'name': 'John Nicholls', 'store': 'Central Office', 'phone': '64 273 228 679' },
        { 'name': 'Karen McGill', 'store': 'Central Office', 'phone': '' },

        { 'name': 'Ian Paterson', 'store': 'Choices Flooring Albury', 'phone': '0417 488 876' },
        { 'name': 'Lee Paterson', 'store': 'Choices Flooring Albury', 'phone': '' },
        { 'name': 'Gemma O\'Brien', 'store': 'Choices Flooring Alderley', 'phone': '0405 279 407' },
        { 'name': 'James O\'Brien', 'store': 'Choices Flooring Alderley', 'phone': '' },
        { 'name': 'Rob Andrew', 'store': 'Choices Flooring Alexandria', 'phone': '0425 212 266' },
        { 'name': 'Kathryn Andrew', 'store': 'Choices Flooring Alexandria', 'phone': '' },
        { 'name': 'Paul Riggall', 'store': 'Choices Flooring Armidale', 'phone': '0411 231 609' },
        { 'name': 'Emily Riggall', 'store': 'Choices Flooring Armidale', 'phone': '' },
        { 'name': 'Harrison Riggall', 'store': 'Choices Flooring Armidale', 'phone': '' },
        { 'name': 'Evie  Riggall', 'store': 'Choices Flooring Armidale', 'phone': '' },
        { 'name': 'Kristy Harris', 'store': 'Choices Flooring Atherton', 'phone': '0431 332 747' },
        { 'name': 'Wade Harris', 'store': 'Choices Flooring Atherton', 'phone': '' },
        { 'name': 'Chanel Harris', 'store': 'Choices Flooring Atherton', 'phone': '' },
        { 'name': 'Joshua Harris', 'store': 'Choices Flooring Atherton', 'phone': '' },
        { 'name': 'Ben Condon', 'store': 'Choices Flooring Bald Hills', 'phone': '0409 919 574' },
        { 'name': 'Archie Condon', 'store': 'Choices Flooring Bald Hills', 'phone': '' },
        { 'name': 'Molly Condon', 'store': 'Choices Flooring Bald Hills', 'phone': '' },
        { 'name': 'Oscar Condon', 'store': 'Choices Flooring Bald Hills', 'phone': '' },
        { 'name': 'Julia Connolly', 'store': 'Choices Flooring Bald Hills', 'phone': '' },
        { 'name': 'Ava Connolly', 'store': 'Choices Flooring Bald Hills', 'phone': '' },
        { 'name': 'Kade Sampson', 'store': 'Choices Flooring Bald Hills', 'phone': '' },
        { 'name': 'Amanda Evans', 'store': 'Choices Flooring Balgowlah', 'phone': '0432 883 049' },
        { 'name': 'Adam Evans', 'store': 'Choices Flooring Balgowlah', 'phone': '' },
        { 'name': 'Rusty-Jay Evans', 'store': 'Choices Flooring Balgowlah', 'phone': '' },
        { 'name': 'Lynn Hawkins', 'store': 'Choices Flooring Batemans Bay', 'phone': '' },
        { 'name': 'Barry Hawkins', 'store': 'Choices Flooring Batemans Bay', 'phone': '0408 447 266' },
        { 'name': 'Anthony Wright', 'store': 'Choices Flooring Blacktown', 'phone': '0404 888 995' },
        { 'name': 'Kelly  Wright', 'store': 'Choices Flooring Blacktown', 'phone': '' },
        { 'name': 'Bailey Wright', 'store': 'Choices Flooring Blacktown', 'phone': '' },
        { 'name': 'Mackenzie Wright', 'store': 'Choices Flooring Blacktown', 'phone': '' },
        { 'name': 'Scott Shearer', 'store': 'Choices Flooring Bulleen', 'phone': '0438 935 492' },
        { 'name': 'Kirsty Shearer', 'store': 'Choices Flooring Bulleen', 'phone': '' },
        { 'name': 'George Shearer', 'store': 'Choices Flooring Bulleen', 'phone': '' },
        { 'name': 'Zac Shearer', 'store': 'Choices Flooring Bulleen', 'phone': '' },
        { 'name': 'Raelene Knox', 'store': 'Choices Flooring Bunbury', 'phone': '' },
        { 'name': 'Daniel  Knox', 'store': 'Choices Flooring Bunbury', 'phone': '0417 733 398' },
        { 'name': 'Kiah Knox', 'store': 'Choices Flooring Bunbury', 'phone': '' },
        { 'name': 'Tiani Knox', 'store': 'Choices Flooring Bunbury', 'phone': '' },
        { 'name': 'Sienna Knox', 'store': 'Choices Flooring Bunbury', 'phone': '' },
        { 'name': 'Nakita Maynard', 'store': 'Choices Flooring Bundall', 'phone': '0408 722 633' },
        { 'name': 'Sam Fitzpatrick', 'store': 'Choices Flooring Bundall', 'phone': '' },
        { 'name': 'Scott Watson', 'store': 'Choices Flooring Burleigh Heads', 'phone': '0434 269 378' },
        { 'name': 'Martine Watson', 'store': 'Choices Flooring Burleigh Heads', 'phone': '' },
        { 'name': 'Phillip Bradley', 'store': 'Choices Flooring Burnie', 'phone': '0418 148 835' },
        { 'name': 'Paul Lonergan', 'store': 'Choices Flooring by Advance', 'phone': '0418 126 661' },
        { 'name': 'Lynda Lonergan', 'store': 'Choices Flooring by Advance', 'phone': '' },
        { 'name': 'Amy Watson', 'store': 'Choices Flooring by Advance', 'phone': '' },
        { 'name': 'James Watson', 'store': 'Choices Flooring by Advance', 'phone': '' },
        { 'name': 'Christopher Aggenbach', 'store': 'Choices Flooring by Aggenbachs', 'phone': '0409 171 256' },
        { 'name': 'Marian Winter', 'store': 'Choices Flooring by Aggenbachs', 'phone': '' },
        { 'name': 'Graham Meecham', 'store': 'Choices Flooring by Charteris', 'phone': '64 021 774 423' },
        { 'name': 'Jennifer Meecham', 'store': 'Choices Flooring by Charteris', 'phone': '' },
        { 'name': 'Tracey Winterton', 'store': 'Choices Flooring by Dandy', 'phone': '0413 794 862' },
        { 'name': 'Mark Winterton', 'store': 'Choices Flooring by Dandy', 'phone': '' },
        { 'name': 'Steven Winterton', 'store': 'Choices Flooring by Dandy', 'phone': '' },
        { 'name': 'Rob Godfrey', 'store': 'Choices Flooring by Godfreys', 'phone': '' },
        { 'name': 'Sarah Godfrey', 'store': 'Choices Flooring by Godfreys', 'phone': '0414 361 315' },
        { 'name': 'Charlotte Godfrey', 'store': 'Choices Flooring by Godfreys', 'phone': '' },
        { 'name': 'Andrew  Jones', 'store': 'Choices Flooring by Godfreys', 'phone': '' },
        { 'name': 'Danielle Jones', 'store': 'Choices Flooring by Godfreys', 'phone': '' },
        { 'name': 'Taryn Jones', 'store': 'Choices Flooring by Godfreys', 'phone': '' },
        { 'name': 'Riley Jones', 'store': 'Choices Flooring by Godfreys', 'phone': '' },
        { 'name': 'Steven Mallet', 'store': 'Choices Flooring by Mallets (Ipswich)', 'phone': '0418 857 287' },
        { 'name': 'Jaye Mallet', 'store': 'Choices Flooring by Mallets (Ipswich)', 'phone': '' },
        { 'name': 'Georgia Mallet', 'store': 'Choices Flooring by Mallets (Ipswich)', 'phone': '' },
        { 'name': 'Charlie Mallet', 'store': 'Choices Flooring by Mallets (Ipswich)', 'phone': '' },
        { 'name': 'Nicholas Mallet', 'store': 'Choices Flooring by Mallets (Ipswich)', 'phone': '' },
        { 'name': 'Joshua Mallet', 'store': 'Choices Flooring by Mallets (Ipswich)', 'phone': '' },
        { 'name': 'Emma Semmens', 'store': 'Choices Flooring by Mallets (Ipswich)', 'phone': '' },
        { 'name': 'Natalie Thomas', 'store': 'Choices Flooring by Max Miller', 'phone': '0488 221 253' },
        { 'name': 'Kathryn Minter', 'store': 'Choices Flooring by Max Miller', 'phone': '' },
        { 'name': 'Gemma Thomas', 'store': 'Choices Flooring by Max Miller', 'phone': '' },
        { 'name': 'Ryan Thomas', 'store': 'Choices Flooring by Max Miller', 'phone': '' },
        { 'name': 'Stephanie Paull', 'store': 'Choices Flooring by Paulls', 'phone': '0400 252 466' },
        { 'name': 'Mitchell Guillerme', 'store': 'Choices Flooring by Paulls', 'phone': '' },
        { 'name': 'Geoff Smith', 'store': 'Choices Flooring by Smiths', 'phone': '0408 397 865' },
        { 'name': 'Sally Smith', 'store': 'Choices Flooring by Smiths', 'phone': '' },
        { 'name': 'Ned Smith', 'store': 'Choices Flooring by Smiths', 'phone': '' },
        { 'name': 'Lawrence Stolz', 'store': 'Choices Flooring by Stolz (Benalla)', 'phone': '0427 622 010' },
        { 'name': 'Elizabeth Stolz', 'store': 'Choices Flooring by Stolz (Benalla)', 'phone': '' },
        { 'name': 'Trevor Bonney', 'store': 'Choices Flooring by Swintons (Warrnambool)', 'phone': '0417 145 800' },
        { 'name': 'Helen  Bonney', 'store': 'Choices Flooring by Swintons (Warrnambool)', 'phone': '' },
        { 'name': 'Jacqui Thomson', 'store': 'Choices Flooring by Thomsons (Euroa)', 'phone': '0439 952 922' },
        { 'name': 'Karah Buckley', 'store': 'Choices Flooring by Thomsons (Euroa)', 'phone': '' },
        { 'name': 'Lexi Koroma', 'store': 'Choices Flooring by Thomsons (Euroa)', 'phone': '' },
        { 'name': 'Craig Decker', 'store': 'Choices Flooring by Westside (Horsham)', 'phone': '0438 825 499' },
        { 'name': 'Sallyanne Penny', 'store': 'Choices Flooring by Westside (Horsham)', 'phone': '' },
        { 'name': 'John Griffiths', 'store': 'Choices Flooring by Westside (Stawell)', 'phone': '0448 355 812' },
        { 'name': 'Angela Griffiths', 'store': 'Choices Flooring by Westside (Stawell)', 'phone': '' },
        { 'name': 'Bethany Griffiths', 'store': 'Choices Flooring by Westside (Stawell)', 'phone': '' },
        { 'name': 'Holly Griffiths', 'store': 'Choices Flooring by Westside (Stawell)', 'phone': '' },
        { 'name': 'Kirby Griffiths', 'store': 'Choices Flooring by Westside (Stawell)', 'phone': '' },
        { 'name': 'Tracey Barber', 'store': 'Choices Flooring by Westside (Stawell)', 'phone': '0400 726 514' },
        { 'name': 'Wayne Barber', 'store': 'Choices Flooring by Westside (Stawell)', 'phone': '' },
        { 'name': 'Chantelle Barber', 'store': 'Choices Flooring by Westside (Stawell)', 'phone': '' },
        { 'name': 'Olivia Barber', 'store': 'Choices Flooring by Westside (Stawell)', 'phone': '' },
        { 'name': 'Leanne Price', 'store': 'Choices Flooring Caringbah', 'phone': '' },
        { 'name': 'Susan Donnelly', 'store': 'Choices Flooring Caringbah', 'phone': '' },
        { 'name': 'Stephen Donnelly', 'store': 'Choices Flooring Caringbah', 'phone': '0410 524 861' },
        { 'name': 'Kenneth Donnelly', 'store': 'Choices Flooring Caringbah', 'phone': '' },
        { 'name': 'Lesley Donaldson', 'store': 'Choices Flooring Centenary', 'phone': '0408 625 894' },
        { 'name': 'Kevin Donaldson', 'store': 'Choices Flooring Centenary', 'phone': '' },
        { 'name': 'Isaac Donaldson', 'store': 'Choices Flooring Centenary', 'phone': '' },
        { 'name': 'Anthony Frangoulis', 'store': 'Choices Flooring Darwin', 'phone': '0409 873 338' },
        { 'name': 'Kellie white', 'store': 'Choices Flooring Darwin', 'phone': '' },
        { 'name': 'Jack Frangoulis', 'store': 'Choices Flooring Darwin', 'phone': '' },
        { 'name': 'Aliyah Frangoulis', 'store': 'Choices Flooring Darwin', 'phone': '' },
        { 'name': 'Scarlett Nolan', 'store': 'Choices Flooring Darwin', 'phone': '' },
        { 'name': 'Amy Michael', 'store': 'Choices Flooring Erina', 'phone': '0415 973 443' },
        { 'name': 'Jared Michael', 'store': 'Choices Flooring Erina', 'phone': '' },
        { 'name': 'Tyson Michael', 'store': 'Choices Flooring Erina', 'phone': '' },
        { 'name': 'Bayley Michael', 'store': 'Choices Flooring Erina', 'phone': '' },
        { 'name': 'David Gairen', 'store': 'Choices Flooring Esperance', 'phone': '0407 998 533' },
        { 'name': 'Elisia Gairen', 'store': 'Choices Flooring Esperance', 'phone': '' },
        { 'name': 'Fraser Gairen', 'store': 'Choices Flooring Esperance', 'phone': '' },
        { 'name': 'Hudson Gairen', 'store': 'Choices Flooring Esperance', 'phone': '' },
        { 'name': 'Lacey Gairen', 'store': 'Choices Flooring Esperance', 'phone': '' },
        { 'name': 'Roxanne Moroney', 'store': 'Choices Flooring Ferntree Gully', 'phone': '0458 889 700' },
        { 'name': 'Brian Moroney', 'store': 'Choices Flooring Ferntree Gully', 'phone': '' },
        { 'name': 'Baiden Moroney', 'store': 'Choices Flooring Ferntree Gully', 'phone': '' },
        { 'name': 'Keira Moroney', 'store': 'Choices Flooring Ferntree Gully', 'phone': '' },
        { 'name': 'Ethan Moroney', 'store': 'Choices Flooring Ferntree Gully', 'phone': '' },
        { 'name': 'Todd Maynard', 'store': 'Choices Flooring Forster', 'phone': '' },
        { 'name': 'Jane Maynard', 'store': 'Choices Flooring Forster', 'phone': '0414 824 169' },
        { 'name': 'Duane Maynard', 'store': 'Choices Flooring Forster', 'phone': '' },
        { 'name': 'Connor Maynard', 'store': 'Choices Flooring Forster', 'phone': '' },
        { 'name': 'Debbie Sumegi', 'store': 'Choices Flooring Fortitude Valley', 'phone': '0418 980 238' },
        { 'name': 'John Sumegi', 'store': 'Choices Flooring Fortitude Valley', 'phone': '' },
        { 'name': 'Nicholas Sumegi', 'store': 'Choices Flooring Fortitude Valley', 'phone': '' },
        { 'name': 'Michelle  Sumegi', 'store': 'Choices Flooring Fortitude Valley', 'phone': '' },
        { 'name': 'Matthew Rex', 'store': 'Choices Flooring Fortitude Valley', 'phone': '' },
        { 'name': 'Chaim Sproles', 'store': 'Choices Flooring Fortitude Valley', 'phone': '' },
        { 'name': 'Jacquelyne Sproles', 'store': 'Choices Flooring Fortitude Valley', 'phone': '' },
        { 'name': 'Oliver Sproles', 'store': 'Choices Flooring Fortitude Valley', 'phone': '' },
        { 'name': 'Archer Sproles', 'store': 'Choices Flooring Fortitude Valley', 'phone': '' },
        { 'name': 'Everly Sproles', 'store': 'Choices Flooring Fortitude Valley', 'phone': '' },
        { 'name': 'Mitch March', 'store': 'Choices Flooring Geraldton', 'phone': '0409 373 882' },
        { 'name': 'Abbey March', 'store': 'Choices Flooring Geraldton', 'phone': '' },
        { 'name': 'Layla March', 'store': 'Choices Flooring Geraldton', 'phone': '' },
        { 'name': 'Peter Christian', 'store': 'Choices Flooring Hobart', 'phone': '0417 575 221' },
        { 'name': 'Hue Cam Huynh', 'store': 'Choices Flooring Hobart', 'phone': '' },
        { 'name': 'David Hodgkinson', 'store': 'Choices Flooring Hobart', 'phone': '' },
        { 'name': 'Angelique Hodgkinson', 'store': 'Choices Flooring Hobart', 'phone': '' },
        { 'name': 'Violet Hodgkinson', 'store': 'Choices Flooring Hobart', 'phone': '' },
        { 'name': 'Xavier Hodgkinson', 'store': 'Choices Flooring Hobart', 'phone': '' },
        { 'name': 'Ryan Barber', 'store': 'Choices Flooring Hobart', 'phone': '' },
        { 'name': 'Gabrielle Barber', 'store': 'Choices Flooring Hobart', 'phone': '' },
        { 'name': 'Nira Barber', 'store': 'Choices Flooring Hobart', 'phone': '' },
        { 'name': 'Landon Barber', 'store': 'Choices Flooring Hobart', 'phone': '' },
        { 'name': 'Haken Barber', 'store': 'Choices Flooring Hobart', 'phone': '' },
        { 'name': 'Ariela Barber', 'store': 'Choices Flooring Hobart', 'phone': '' },
        { 'name': 'Lesley Smart', 'store': 'Choices Flooring Launceston', 'phone': '0408 449 556' },
        { 'name': 'Christopher Smart', 'store': 'Choices Flooring Launceston', 'phone': '' },
        { 'name': 'Macey Smart', 'store': 'Choices Flooring Launceston', 'phone': '' },
        { 'name': 'Nathan Smart', 'store': 'Choices Flooring Launceston', 'phone': '' },
        { 'name': 'Nicholas Smart', 'store': 'Choices Flooring Launceston', 'phone': '' },
        { 'name': 'Mark Winterton', 'store': 'Choices Flooring Narre Warren', 'phone': '0417 577 001' },
        { 'name': 'Kate Winterton', 'store': 'Choices Flooring Narre Warren', 'phone': '' },
        { 'name': 'Jake Winterton', 'store': 'Choices Flooring Narre Warren', 'phone': '' },
        { 'name': 'Ethan Winterton', 'store': 'Choices Flooring Narre Warren', 'phone': '' },
        { 'name': 'Lachlan Winterton', 'store': 'Choices Flooring Narre Warren', 'phone': '' },
        { 'name': 'Ivy Winterton', 'store': 'Choices Flooring Narre Warren', 'phone': '' },
        { 'name': 'Fiona Proctor ', 'store': 'Choices Flooring New Plymouth', 'phone': '0273 282 529' },
        { 'name': 'Timothy Proctor ', 'store': 'Choices Flooring New Plymouth', 'phone': '' },
        { 'name': 'Mark Godfrey', 'store': 'Choices Flooring New Plymouth', 'phone': '' },
        { 'name': 'Warwick McMillan', 'store': 'Choices Flooring Nowra South', 'phone': '' },
        { 'name': 'Charlene McMillan', 'store': 'Choices Flooring Nowra South', 'phone': '' },
        { 'name': 'Savannah McMillan', 'store': 'Choices Flooring Nowra South', 'phone': '0411 073 816' },
        { 'name': 'Charlotte McMillan', 'store': 'Choices Flooring Nowra South', 'phone': '' },
        { 'name': 'Bianca McMillan', 'store': 'Choices Flooring Nowra South', 'phone': '' },
        { 'name': 'Shane Valenti', 'store': 'Choices Flooring Parkdale', 'phone': '0413 553 994' },
        { 'name': 'Sarah Doherty', 'store': 'Choices Flooring Parkdale', 'phone': '' },
        { 'name': 'Suzanne Treasure', 'store': 'Choices Flooring Port Macquarie', 'phone': '0401 305 944' },
        { 'name': 'Peter Treasure', 'store': 'Choices Flooring Port Macquarie', 'phone': '' },
        { 'name': 'Bartholomew Loadsman', 'store': 'Choices Flooring Port Macquarie', 'phone': '' },
        { 'name': 'Hayley Loadsman', 'store': 'Choices Flooring Port Macquarie', 'phone': '' },
        { 'name': 'Ian Doherty', 'store': 'Choices Flooring Port Stephens', 'phone': '0418 862 115' },
        { 'name': 'Elissa Doherty', 'store': 'Choices Flooring Port Stephens', 'phone': '' },
        { 'name': 'Jye Doherty', 'store': 'Choices Flooring Port Stephens', 'phone': '' },
        { 'name': 'Hugh Doherty', 'store': 'Choices Flooring Port Stephens', 'phone': '' },
        { 'name': 'William Doherty', 'store': 'Choices Flooring Port Stephens', 'phone': '' },
        { 'name': 'Annette Ellis', 'store': 'Choices Flooring Shepparton', 'phone': '0417 651 434' },
        { 'name': 'Robert Ellis', 'store': 'Choices Flooring Shepparton', 'phone': '' },
        { 'name': 'Ian Harrison', 'store': 'Choices Flooring Silverwater', 'phone': '0425 281 986' },
        { 'name': 'Diesel Harrison', 'store': 'Choices Flooring Silverwater', 'phone': '' },
        { 'name': 'Levi Harrison', 'store': 'Choices Flooring Silverwater', 'phone': '' },
        { 'name': 'Rod Preston', 'store': 'Choices Flooring Southern Highlands', 'phone': '0412 209 995' },
        { 'name': 'Lisa Fay', 'store': 'Choices Flooring Southern Highlands', 'phone': '' },
        { 'name': 'Hugo Fay', 'store': 'Choices Flooring Southern Highlands', 'phone': '' },
        { 'name': 'Warwick Preston', 'store': 'Choices Flooring Southern Highlands', 'phone': '' },
        { 'name': 'Kenneth Bradley', 'store': 'Choices Flooring Sunbury', 'phone': '0419 524 738' },
        { 'name': 'Jennifer Bradley', 'store': 'Choices Flooring Sunbury', 'phone': '' },
        { 'name': 'Joanne  Russell', 'store': 'Choices Flooring Tamworth', 'phone': '0427 654 043' },
        { 'name': 'David Russell', 'store': 'Choices Flooring Tamworth', 'phone': '' },
        { 'name': 'Shane Chillingworth', 'store': 'Choices Flooring Tamworth', 'phone': '' },
        { 'name': 'Ann Chillingworth', 'store': 'Choices Flooring Tamworth', 'phone': '' },
        { 'name': 'Jason Fair', 'store': 'Choices Flooring Tauranga', 'phone': '' },
        { 'name': 'Raewyn Fair', 'store': 'Choices Flooring Tauranga', 'phone': '0274 551 100' },
        { 'name': 'Malcolm Davison', 'store': 'Choices Flooring Toowoomba', 'phone': '0429 442 044' },
        { 'name': 'Prudence Davison', 'store': 'Choices Flooring Toowoomba', 'phone': '' },
        { 'name': 'Robert Ditton', 'store': 'Choices Flooring Tuggerah', 'phone': '0408 475 850' },
        { 'name': 'Ann Ditton', 'store': 'Choices Flooring Tuggerah', 'phone': '' },
        { 'name': 'Steven New', 'store': 'Choices Flooring Tuggerah', 'phone': '' },
        { 'name': 'Megan New', 'store': 'Choices Flooring Tuggerah', 'phone': '' },
        { 'name': 'Jackson New', 'store': 'Choices Flooring Tuggerah', 'phone': '' },
        { 'name': 'Abbey New', 'store': 'Choices Flooring Tuggerah', 'phone': '' },
        { 'name': 'David Lenton', 'store': 'Choices Flooring Wagga', 'phone': '0418 219 137' },
        { 'name': 'Nicole Lenton', 'store': 'Choices Flooring Wagga', 'phone': '' },
        { 'name': 'Sidney Lenton', 'store': 'Choices Flooring Wagga', 'phone': '' },
        { 'name': 'Ruby Lenton', 'store': 'Choices Flooring Wagga', 'phone': '' },
        { 'name': 'Angus Lenton', 'store': 'Choices Flooring Wagga', 'phone': '' },
        { 'name': 'Robyn Kuhn', 'store': 'Choices Flooring Warwick', 'phone': '0410 484 192' },
        { 'name': 'Kirra-Louise Kunh', 'store': 'Choices Flooring Warwick', 'phone': '' },
        { 'name': 'Lincoln Smith', 'store': 'Choices Flooring by Fletchers', 'phone': '0407 094 147' },
        { 'name': 'Elizabeth Smith', 'store': 'Choices Flooring by Fletchers', 'phone': '' },
        { 'name': 'Graham Smith', 'store': 'Choices Flooring by Fletchers', 'phone': '' },
        { 'name': 'Denise Kennerley', 'store': 'Choices Flooring Helensvale', 'phone': '0487 008 881' },
        { 'name': 'Ralph Kennerley', 'store': 'Choices Flooring Helensvale', 'phone': '' }
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
