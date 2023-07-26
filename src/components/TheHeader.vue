<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary class="drawer">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="subtitle-2"
              >Axel Kim Sathia
            </v-list-item-title>
            <v-list-item-subtitle class="caption"
              >Axelkimsathia@gmail.com</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>

    <v-app-bar class="app-bar" app dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link class="links" to="/">
        <v-toolbar-title class="body-1 hover d-none d-sm-block">
          Axel Kim Sathia | Producer - Composer - Sound Designer
        </v-toolbar-title>
        <v-toolbar-title class="body-1 hover d-sm-none">
          Axel Kim Sathia
        </v-toolbar-title>
      </router-link>
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
  color: #fc03d2d2; /* replace with your desired color */
}
::v-deep .app-bar {
  background-color: #0c0120f7;
}
::v-deep .drawer {
  background-color: #251347f7;
  color: white;
  max-width: 80%; /* 80% of the viewport width */
  border: solid 1px red;
}
::v-deep .v-list-item-subtitle {
  overflow-x: auto; /* Enable horizontal scrolling if necessary */
}
.links {
  text-decoration: none;
  color: rgb(252, 251, 251);
}
.hover :hover {
  background-color: #fc03d246;
}
.v-app-bar-nav-icon :hover {
  background-color: #fc03d23d;
}
.v-toolbar-title {
  color: rgb(247, 245, 245);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>

<!-- <template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary class="drawer">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Axel Kim Sathia </v-list-item-title>
            <v-list-item-subtitle>Axelkimsathia@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>

    <v-app-bar class="app-bar" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link class="links" to="/">
        <v-toolbar-title class="hover"
          >Axel Kim Sathia Producer - Composer - Sound Designer
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
  color: #fc03d2d2; /* replace with your desired color */
}
::v-deep .app-bar {
  background-color: #0c0120f7;
}
::v-deep .drawer {
  background-color: #251347f7;
  color: white;
  max-width: 225px;
  border: solid 1px red;
}
.links {
  text-decoration: none;
  color: rgb(252, 251, 251);
}
.hover :hover {
  background-color: #fc03d246;
}
.v-app-bar-nav-icon :hover {
  background-color: #fc03d23d;
}
.v-toolbar-title {
  color: rgb(247, 245, 245);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

@media screen and (max-width: 800px) {
  .v-toolbar-title {
    font-size: 14px;
  }
  ::v-deep .drawer {
    font-size: 12px;
  }
}

@media screen and (max-width: 600px) {
  .v-toolbar-title {
    font-size: 10px;
  }
  ::v-deep .drawer {
    font-size: 4px;
  }
}

@media screen and (max-width: 400px) {
  .v-toolbar-title {
    font-size: 10px;
  }
  .drawer {
    font-size: 4px;
  }
}
</style> -->
