<!-- <template>
  <TheHero />

  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="title">Technologies</h1>
      </v-col>
    </v-row>

    <v-row id="skills">
      <v-col cols="12" sm="6" md="4">
        <div class="front">
          <ul>
            <h2>Frontend</h2>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Vue.js</li>
          </ul>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <div class="back">
          <ul>
            <h2>Backend</h2>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Python</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </v-col>

      <v-col cols="12" md="4">
        <ul class="d-flex flex-wrap icon-list">
          <li>
            <img
              height="50"
              width="50"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
          </li>
          <li>
            <img
              height="50"
              width="50"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            />
          </li>
          <li>
            <img
              height="50"
              width="50"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
            />
          </li>
          <li>
            <img
              height="50"
              width="50"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain-wordmark.svg"
            />
          </li>
          <li>
            <img
              height="50"
              width="50"
              class="node"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            />
          </li>
          <li>
            <img
              height="50"
              width="50"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
            />
          </li>
          <li>
            <img
              height="50"
              width="50"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
            />
          </li>
          <li>
            <img
              height="55"
              width="55"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
            />
          </li>
        </ul>
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
#skills {
  align-items: flex-start;
}

.front ul,
.back ul,
.icon-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.front h2,
.back h2 {
  margin-top: 0;
}

.icon-list li {
  margin-right: 10px; /* add some margin to the right of each icon */
}

.title {
  margin-bottom: 2%;
}

ul.d-flex {
  justify-content: space-around;
  flex-wrap: wrap;
}
</style> -->
//////////////////////////////////////////////
<template>
  <TheHero />

  <v-container class="container">
    <v-row>
      <v-col cols="12">
        <h1 class="title">Recent Projects</h1>
      </v-col>
    </v-row>

    <v-row id="skills" class="d-flex flex-wrap">
      <v-col cols="6">
        <div class="front">
          <ul>
            <h2>2023 Projects</h2>
            <li>SHM Collab</li>
            <li>Kinife Party remix</li>
            <li>Ultra Headline</li>
            <li>Daft Punk Tribute</li>
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

      <v-col cols="6">
        <div class="back">
          <ul>
            <h2>Upcomming</h2>
            <li>Clothing Line</li>
            <li>Ibiza Residancy</li>
            <li>Europe Tour 2024</li>
            <li>Japan Tour 2025</li>
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
.video-wrapper {
  position: relative;
  height: 200px;
  width: 350px;
}

.font-example {
  font-family: "Caprasimo", cursive;
}
.container {
  padding-bottom: 200px;
}

#skills {
  align-items: flex-start;
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

@media screen and (max-width: 700px) {
  .container {
    padding-bottom: 35px;
  }
}

@media screen and (min-width: 1200px) {
  .front,
  .back {
    padding-left: 3%;
    flex-basis: 20%;
  }

  .icon-row {
    justify-content: center;
  }

  .icon-col {
    padding-left: 0 !important;
    padding-bottom: 10%;
  }
}
</style>
