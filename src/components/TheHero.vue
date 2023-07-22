<template>
  <div class="hero-image">
    <div class="hero-text">
      <h1></h1>
      <h3></h3>

      <router-link to="/contact"
        ><v-btn class="my-btn" rounded="xl" color="black"
          >Hire Me Today!</v-btn
        ></router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

<style scoped>
body,
html {
  height: 100%;
}

/* The hero image */
.hero-image {
  border: 1px solid red;
  height: 40vh; /* Adjust this value */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qXzZGnaBncezIVWGKuA83taYAoiND_cdXA&usqp=CAU");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

/* Place text in the middle of the image */
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
@media screen and (max-width: 1000px) {
  .hero-image {
    height: 15%; /* Adjust this value as needed */
  }
}
.my-btn:hover {
  background-color: #fc03d254 !important;
}
</style>
