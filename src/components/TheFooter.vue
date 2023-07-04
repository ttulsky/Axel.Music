<template>
  <v-footer class="custom-footer-color pa-0 footer">
    <v-row
      class="ma-0 text-center d-flex"
      justify="space-around"
      align="center"
    >
      <v-col class="pa-0" cols="auto">
        <h6>Axelkimsathia@gmail.com</h6>
      </v-col>
      <v-col class="pa-0" cols="auto">
        <h6>IG | Axel Kim Sathia</h6>
      </v-col>
      <v-col class="pa-0" cols="auto">
        <h6>FB | Axel Kim Sathia</h6>
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
.link-icon {
  white-space: nowrap;
}
.link {
  color: whitesmoke;
  text-decoration: none;
}
.custom-footer-color {
  background-color: #0c0120f7; /* Replace with your desired hex color */
}
.v-col {
  flex-grow: 0;
}
</style>
