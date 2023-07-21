<template>
  <div class="hero-image">
    <div class="hero-text">
      <h1></h1>
      <h3></h3>
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
  height: 5%;
}

/* The hero image */
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qXzZGnaBncezIVWGKuA83taYAoiND_cdXA&usqp=CAU");
  height: 70vh; /* Reduce the size of the hero */
  background-position: center; /* Center the image */
  background-repeat: no-repeat;

  position: absolute;
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

@media screen and (max-width: 700px) {
  .hero-image {
    height: 30vh; /* Adjust this value as needed */
  }
}

.my-btn:hover {
  background-color: #fc03d254 !important;
}
</style>
