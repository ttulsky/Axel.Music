<template>
  <v-footer class="custom-footer-color pa-0 footer">
    <v-row
      class="ma-0 text-center d-flex"
      justify="space-around"
      align="center"
    >
      <v-col class="pa-0" cols="auto">
        <a href="https://www.instagram.com/axelkimsathia/" target="_blank">
          <h6>|IG|</h6>
        </a>
      </v-col>
      <v-col class="pa-0" cols="auto">
        <router-link to="/contact"><h6>|Contact|</h6></router-link>
      </v-col>
      <v-col class="pa-0" cols="auto">
        <a href="https://www.facebook.com/axel.ulivi" target="_blank">
          <h6>|FB|</h6>
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  color: #fc03d2d2;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 22px;
  z-index: 9999; /* Ensures the footer is always on top */
}

.footer a {
  text-decoration: none;
  color: inherit; /* Keeps the color from .footer */
}

.custom-footer-color {
  background-color: #0c0120f7; /* Replace with your desired hex color */
}

.v-col {
  flex-grow: 0;
}
</style>
