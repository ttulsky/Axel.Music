<template>
  <v-app>
    <TheHeader></TheHeader>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-spacer class="space-ghost"></v-spacer>
    <TheFooter></TheFooter>
  </v-app>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",

  components: {
    TheHeader: TheHeader,
    TheFooter: TheFooter,
  },
};
</script>

<style scoped>
.space-ghost {
  padding-top: 50px;
}
</style>
