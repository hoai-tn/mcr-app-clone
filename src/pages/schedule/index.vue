<template>
  <v-container grid-list-md>
    <v-layout wrap class="schedule">
      <v-flex xs12>
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="day in days" :key="day.title">
            <v-expansion-panel-header>{{ day.title }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list two-line subheader>
                <v-list-item
                  :to="event.link"
                  v-for="event in day.events"
                  :key="event.text"
                >
                  <v-list-item-avatar>
                    <v-icon>{{ event.icon }}</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ event.text }}
                    </v-list-item-title>
                    <v-list-item-subtitle v-if="event.subtitle">
                      {{ event.subtitle }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action v-if="event.link">
                    <v-icon>fa-chevron-right</v-icon>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      days: [
        {
          title: "Day 1 - Saturday, 15th April",
          events: [
            {
              icon: "fa-plane-arrival",
              text: "Main Arrivals",
              link: "/events/arrival",
              subtitle: "Hotel Lobby",
            },
          ],
        },
        {
          title: "Day 2 - Sunday, 16th April",
          events: [
            {
              icon: "fa-concierge-bell",
              text: "Registration",
              link: "",
            },
            {
              icon: "fa-camera",
              text: "Group Photo",
              link: "/events/group-photo",
              subtitle: "1pm Sharp",
            },
            {
              icon: "fa-cocktail",
              text: "GEMs Cocktail Party & Concert",
              link: "/events/gems-cocktail-party-and-concert",
              subtitle: "6:00pm - 10:00pm",
            },
          ],
        },
        {
          title: "Day 3 - Monday, 17th April",
          events: [
            {
              icon: "fa-hiking",
              text: "Zipline and Skywalk",
              link: "/events/zipline-and-skywalk",
              subtitle: "8:30am - Departing from Hotel Lobby",
            },
            {
              icon: "fa-dice",
              text: "Dunlop Poker Tournament",
              link: "/events/dunlop-poker-tournament",
              subtitle: "11:00am - Ballroom C",
            },
            {
              icon: "fa-utensils",
              text: "Thai Cooking Class",
              link: "/events/thai-cooking-class",
              subtitle: "4:00pm - Thai Pantry",
            },
            {
              icon: "fa-cloud-moon",
              text: "Free Night",
              link: "",
            },
          ],
        },
        {
          title: "Day 4 - Tuesday, 18th April",
          events: [
            {
              icon: "fa-swimming-pool",
              text: "Andamanda Water Park",
              link: "/events/splash-jungle",
              subtitle: "8:30am - Departing from Hotel Lobby",
            },
            {
              icon: "fa-hiking",
              text: "Zipline and Skywalk",
              link: "/events/zipline-and-skywalk",
              subtitle: "8:30am - Departing from Hotel Lobby",
            },
            {
              icon: "fa-utensils",
              text: "Thai Cooking Class",
              link: "/events/thai-cooking-class",
              subtitle: "11:00am - Thai Pantry",
            },
            {
              icon: "fa-hiking",
              text: "Zipline and Skywalk",
              link: "/events/zipline-and-skywalk",
              subtitle: "12:30pm - Departing from Hotel Lobby",
            },
            {
              icon: "fa-utensils-alt",
              text: "Cultural Dinner",
              link: "/events/cultural-dinner",
              subtitle: "4:45pm - Departing from Hotel Lobby",
            },
          ],
        },
        {
          title: "Day 5 - Wednesday, 19th April",
          events: [
            {
              icon: "fa-golf-ball",
              text: "Airstep Golf Day",
              link: "/events/airstep-golf-day",
              subtitle: "6.30am - Departing from the Hotel Lobby",
            },
            {
              icon: "fa-utensils",
              text: "Thai Cooking Class",
              link: "/events/thai-cooking-class",
              subtitle: "11:00am - Thai Pantry",
            },
            {
              icon: "fa-utensils",
              text: "Thai Cooking Class",
              link: "/events/thai-cooking-class",
              subtitle: "4:00pm - Thai Pantry",
            },
            {
              icon: "fa-cloud-moon",
              text: "Free Night",
              link: "",
            },
          ],
        },
        {
          title: "Day 6 - Thursday, 20th April",
          events: [
            {
              icon: "fa-umbrella-beach",
              text: "Island Beach Party",
              link: "/events/island-beach-party",
              subtitle: "8:45am - Departing from Hotel Lobby",
            },
            {
              icon: "fa-cloud-moon",
              text: "Free Night",
              link: "",
            },
          ],
        },
        {
          title: "Day 7 - Friday, 21st April",
          events: [
            {
              icon: "fa-swimming-pool",
              text: "Andamanda Water Park",
              link: "/events/splash-jungle",
              subtitle: "8:30am - Departing from Hotel Lobby",
            },
            {
              icon: "fa-hiking",
              text: "Zipline and Skywalk",
              link: "/events/zipline-and-skywalk",
              subtitle: "8:30am - Departing from Hotel Lobby",
            },
            {
              icon: "fa-utensils",
              text: "Thai Cooking Class",
              link: "/events/thai-cooking-class",
              subtitle: "11:00am - Thai Pantry",
            },
            {
              icon: "fa-hiking",
              text: "Zipline and Skywalk",
              link: "/events/zipline-and-skywalk",
              subtitle: "12:30pm - Departing from Hotel Lobby",
            },
            {
              icon: "fa-glass-cheers",
              text: "Closing Drinks",
              link: "/events/closing-drinks",
              subtitle: "6:00pm - Beach Lawn",
            },
          ],
        },
        {
          title: "Day 8 - Saturday, 22nd April",
          events: [
            {
              icon: "fa-plane-departure",
              text: "Departing Phuket",
              link: "/events/departing-phuket",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.schedule {
  .v-expansion-panels {
    & > :last-child,
    & > :first-child {
      border-radius: 0;
    }

    .v-expansion-panel {
      &::before {
        box-shadow: none;
      }

      background-color: transparent;
      border-bottom: 1px solid black;

      .v-list {
        background-color: transparent;
        .v-list-item {
          color: black;
          border-bottom: 1px solid black;
          &:last-child {
            border-bottom: none;
          }
        }
      }

      .v-expansion-panel-header {
        font-family: "Permanent Marker", cursive;
        text-transform: uppercase;
        color: #993333;
        font-size: 1.15rem;
      }
    }
  }
}
</style>
