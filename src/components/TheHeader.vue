<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary class="drawer">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Axel Kim Sathia </v-list-item-title>
            <v-list-item-subtitle>Axelkimsathia@gmailcom</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>

    <v-app-bar class="app-bar" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link class="links" to="/">
        <v-toolbar-title class="hover"
          >Axel Kim Sathia| Producer - Composer - Sound Designer
        </v-toolbar-title></router-link
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
  methods: {
    closeDrawer() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
::v-deep .v-app-bar .v-app-bar-nav-icon .v-icon {
  color: #ff0000; /* replace with your desired color */
}
::v-deep .app-bar {
  background-color: #0c0120f7;
}
::v-deep .drawer {
  background-color: #250266f7;
  color: white;
  max-width: 210px;
}
.links {
  text-decoration: none;
  color: rgb(252, 251, 251);
}
.hover :hover {
  background-color: #144bb8;
}
.v-toolbar-title {
  color: rgb(247, 245, 245);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

@media screen and (max-width: 600px) {
  .v-toolbar-title {
    font-size: 14px;
  }
}
</style>
