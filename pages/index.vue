<template>
  <div>
    <Searchmovie />
    <Imagesection />
  </div>
</template>

<script>
const keys = require("@/config/keys");
const Searchmovie = () => import("@/components/Searchmovie");
const Imagesection = () => import("@/components/Imagesection");
import axios from "axios";
export default {
  name: "index",
  components: {
    Searchmovie,
    Imagesection,
  },
  data() {
    return {
      apiKey: keys.Mvkeys.api_key,
    };
  },
  async created() {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`
    );

    const data = await res.data.results;
    console.log(data);
  },
};
</script>

<style>
</style>
