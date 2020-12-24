<template>
  <div>
    <h2>Upcoming Movies</h2>
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
h2 {
  text-align: center;
  justify-content: center;
  align-content: center;
  font-size: 1.5em;
  margin: 0 0 4px 0;
  font-weight: 600;
  margin-right: 20px;
  white-space: nowrap;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
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
