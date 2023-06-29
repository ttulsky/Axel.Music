<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Axel Kim </v-list-item-title>
            <v-list-item-subtitle
              >Axel_loves_Sega@gmailcom</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <!-- <v-list dense>
        <router-link class="links" to="/projects">
          <v-list-item
            prepend-icon="mdi-star"
            title="Projects"
            value="Projects"
          ></v-list-item>
        </router-link>
        <router-link class="links" to="/contact">
          <v-list-item
            prepend-icon="mdi-email"
            title="Connect"
            value="Connect"
          ></v-list-item>
        </router-link>
        <router-link class="links" to="/about">
          <v-list-item
            prepend-icon="mdi-message-text"
            title="About"
            value="About"
          ></v-list-item>
        </router-link>
      </v-list> -->
    </v-navigation-drawer>

    <v-app-bar color="white" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link class="links" to="/"
        ><v-toolbar-title class="hover"
          >Axel Kim Sathana| Create, Preform, Produce</v-toolbar-title
        ></router-link
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  //   watch: {
  //     $route(to, from) {
  //       // close drawer when route changes
  //       this.drawer = false;
  //     },
  //   },
  methods: {
    closeDrawer() {
      // close drawer when clicking outside of it
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.links {
  text-decoration: none;
  color: black;
}
.hover :hover {
  background-color: #eff0f2; /* Or any color you like */
}
.v-toolbar-title {
  text-overflow: ellipsis; /* Will add '...' at the end of the line when the text overflows */
  overflow: hidden; /* Ensures that the text doesn't extend beyond its container */
  white-space: nowrap; /* Prevents the text from wrapping onto the next line */
}

@media screen and (max-width: 600px) {
  .v-toolbar-title {
    font-size: 14px; /* Reduce font size for viewports 600px and smaller */
  }
}
</style>
