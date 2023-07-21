<template>
  <TheHero />

  <v-container class="container">
    <v-row>
      <v-col cols="12">
        <h1 class="title">Recent Projects</h1>
      </v-col>
    </v-row>

    <v-row class="skills">
      <v-col cols="12" sm="6" md="4">
        <div class="front">
          <ul>
            <h2>Avalon infinty | Sound Engineering</h2>

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

      <v-col cols="12" sm="6" md="4">
        <div class="back">
          <ul>
            <h2>Shang Chi | Audio Production</h2>

            <div class="video-wrapper">
              <vue-plyr class="video">
                <div
                  data-plyr-provider="youtube"
                  data-plyr-embed-id="Nju6zB11eEI"
                ></div>
              </vue-plyr>
            </div>
          </ul>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <div class="front">
          <ul>
            <h2>Sestřih Trailerů 63. | Sound Engineering</h2>

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

      <v-col cols="12" sm="6" md="4">
        <div class="back">
          <ul>
            <h2>Evil Dead Rise | Audio Production</h2>

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
.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}

@media screen and (min-width: 1000px) {
  .skills {
    grid-template-columns: repeat(2, 1fr);
  }

  .front,
  .back {
    padding-left: 3%;
    flex-basis: calc(50% - 10px); /* Account for grid gap */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .front .video-wrapper,
  .back .video-wrapper {
    padding-bottom: 0; /* Remove the padding-bottom value */
  }
}

@media screen and (min-width: 1600px) {
  .skills {
    grid-template-columns: repeat(3, 1fr);
  }

  .front,
  .back {
    padding-left: 3%;
    flex-basis: calc(33.33% - 13.33px); /* Account for grid gap */
  }
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* Set aspect ratio for responsive videos */
  width: 100%; /* Set the width to 100% to fill the container */
  max-width: 800px; /* Adjust the maximum width of the video player */
  margin: 0 auto; /* Center the video player horizontally */
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

@media screen and (max-width: 800px) {
  .skills {
    grid-template-columns: 1fr;
  }
}

@media screen and (min-width: 1000px) {
  .front .video-wrapper,
  .back .video-wrapper {
    height: 300px;
    width: 400px;
  }
}
</style>
