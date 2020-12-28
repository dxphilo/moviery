<template>
  <div>
    <Searchmovie />
    <Imagesection />
    <Upcoming />
  </div>
</template>

<script>
const keys = require("@/config/keys");
const Searchmovie = () => import("@/components/Searchmovie");
const Imagesection = () => import("@/components/Imagesection");
const Upcoming = () => import("@/components/Upcoming");
import axios from "axios";
export default {
  name: "index",
  components: {
    Searchmovie,
    Imagesection,
    Upcoming,
  },
};
</script>

<style scoped>
</style>
