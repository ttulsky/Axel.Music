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
::v-deep .app-bar {
  background-color: #3a1579f7;
}
::v-deep .drawer {
  background-color: #673ccbfc;
}
.links {
  text-decoration: none;
  color: rgb(2, 2, 2);
}
.hover :hover {
  background-color: #144bb8;
}
.v-toolbar-title {
  color: rgb(2, 2, 2);
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
