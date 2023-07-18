<template>
  <ContactHero />
  <h1 Style="text-align: center ">Connect</h1>
  <v-card class="top">
    <div class="container">
      <form @submit.prevent="sendEmail">
        <strong><label>Name</label></strong>
        <input type="text" v-model="name" name="name" placeholder="Your Name" />
        <strong><label>Email</label></strong>
        <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Your Email"
        />
        <strong><label>Message</label></strong>
        <textarea
          name="message"
          v-model="message"
          cols="30"
          rows="5"
          placeholder="Please let me know if you have any questions or a specific project in mind!"
        >
        </textarea>

        <input type="submit" value="Send" />
      </form>
    </div>
    <h3 class="email">Axelkimsathia@gmail.com</h3>
    <div class="contacts">
      <v-btn href="" target=""> IG </v-btn>
      <v-btn href="" target=""> FB </v-btn>
    </div>
  </v-card>
</template>

<script>
import * as emailjs from "@emailjs/browser";
import ContactHero from "../components/ContactHero.vue";

export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  components: {
    ContactHero: ContactHero,
  },
  methods: {
    async sendEmail(e) {
      try {
        await emailjs.sendForm(
          process.env.VUE_APP_EMAILJS_SERVICE_ID,
          process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
          e.target,
          process.env.VUE_APP_EMAILJS_USER_ID,
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
        // If email sent successfully
        alert(
          "Thank you, your message has been received. We'll be in touch soon!"
        );
      } catch (err) {
        if (err instanceof ReferenceError) {
          alert("JSON Error: " + err.message);
        } else {
          throw err; // rethrow
        }
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.email {
  padding-top: 15px;
  text-align: center;
}

.contacts {
  padding-top: 15px;
  text-align: center;
  justify-content: space-around;
}

.contacts .v-btn {
  margin: 0 10px;
  color: white;
  background-color: #fc03d2af; /* Or any color you like */
}

.contacts .v-btn:hover {
  background-color: #d4adfc; /* Or any color you like */
}

.top {
  padding-top: 25px;
  overflow-y: auto;
  height: 100vh;
}

label {
  float: left;
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid white;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #fc03d2af;
  color: rgb(252, 250, 250);
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #d4adfc;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #0c0120df;
  padding: 20px;
  width: 50%;
}

/* Add media query for smaller viewports */
@media (max-width: 700px) {
  .container {
    width: 90%;
  }
}
</style>
