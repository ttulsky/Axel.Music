<template>
  <TheHero />

  <v-container class="container">
    <v-row>
      <v-col cols="12">
        <h1 class="title">Recent Productions</h1>
      </v-col>
    </v-row>

    <v-row class="skills">
      <v-col class="my-col" cols="12" sm="6" md="6" xl="4">
        <div class="front">
          <ul>
            <h2>|Avalon infinty|</h2>

            <div class="video-wrapper">
              <vue-plyr class="video">
                <div
                  data-plyr-provider="youtube"
                  data-plyr-embed-id="x0lwodEMNXY"
                ></div>
              </vue-plyr>
            </div>
          </ul>
        </div>
      </v-col>

      <v-col class="my-col" cols="12" sm="6" md="6" xl="4">
        <div class="back">
          <ul>
            <h2>|Miami Beats - Flat Disk|</h2>

            <div class="video-wrapper">
              <vue-plyr class="video">
                <div
                  data-plyr-provider="youtube"
                  data-plyr-embed-id="LNM9-sfPVNk"
                ></div>
              </vue-plyr>
            </div>
          </ul>
        </div>
      </v-col>

      <v-col class="my-col" cols="12" sm="6" md="6" xl="4">
        <div class="front">
          <ul>
            <h2>|Sestřih Trailerů 63.|</h2>

            <div class="video-wrapper">
              <vue-plyr class="video">
                <div
                  data-plyr-provider="youtube"
                  data-plyr-embed-id="YKOw950iwxk"
                ></div>
              </vue-plyr>
            </div>
          </ul>
        </div>
      </v-col>

      <v-col class="my-col" cols="12" sm="6" md="6" xl="4">
        <div class="back">
          <ul>
            <h2>|Evil Dead Rise|</h2>

            <div class="video-wrapper">
              <vue-plyr class="video">
                <div
                  data-plyr-provider="youtube"
                  data-plyr-embed-id="PelnoDkHrR8"
                ></div>
              </vue-plyr>
            </div>
          </ul>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <br />
</template>

<script>
import TheHero from "../components/TheHero.vue";

export default {
  components: {
    TheHero: TheHero,
  },
};
</script>

<style scoped>
.my-col {
  padding: 10px;
}

.container {
  padding-bottom: 50px;
}

.front ul,
.back ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-family: "Caprasimo", cursive;
}

.front h2,
.back h2 {
  margin-top: 0;
}

.title {
  margin-bottom: 2%;
}

.icon-row img {
  max-width: 100%;
  height: auto;
  text-align: center;
}

.icon-col {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-wrapper {
  position: relative;
  width: 100%;
  max-height: 275px; /* Set height here */
  max-width: 500px;
  margin: 0 auto;
  overflow: hidden; /* Add this line to cut off anything beyond this height */
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
/* Nju6zB11eEI */
