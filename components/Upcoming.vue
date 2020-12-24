<template>
  <div class="movie-wrapper">
    <Movie
      v-for="movi in movies"
      :key="movi.id"
      :id="movi.id"
      :title="movi.title"
      :rdate="movi.release_date"
      :image="movi.poster_path"
      :rate="movi.vote_average"
    />
  </div>
</template>

<script>
const keys = require("@/config/keys");
const Movie = () => import("@/components/Movie");
import axios from "axios";
export default {
  name: "upcoming",
  components: {
    Movie,
  },
  data() {
    return {
      apiKey: keys.Mvkeys.api_key,
      movies: [],
    };
  },
  async created() {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`
    );

    const data = await res.data.results;
    this.movies = data;
    console.log(this.movies);
  },
};
</script>

<style scoped>
.movie-wrapper {
  width: 100%;
  max-width: 960px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #fff;

  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  margin: 0 auto;
}
</style>
