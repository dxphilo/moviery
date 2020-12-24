<template>
  <div>
    <Searchmovie />
    <Imagesection />
    <Upcoming />
    <Footer />
  </div>
</template>

<script>
const keys = require("@/config/keys");
const Searchmovie = () => import("@/components/Searchmovie");
const Imagesection = () => import("@/components/Imagesection");
const Upcoming = () => import("@/components/Upcoming");
const Footer = () =>
  import(/*webpackChunkName: "Footer"*/ "@/components/Footer");
import axios from "axios";
export default {
  name: "index",
  components: {
    Searchmovie,
    Imagesection,
    Upcoming,
    Footer,
  },
};
</script>

<style scoped>
</style>
