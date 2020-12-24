<template>
  <div class="movie-details">
    <nuxt-link to="/movies" class="link">Go Back</nuxt-link>

    <div class="movi">
      <div>
        <img :src="img" alt="" />
      </div>

      <div class="mdetails">
        <h1>{{ movi.title }}</h1>
        <div class="rating">
          <p>{{ movi.vote_average }}</p>
        </div>
        <div class="overview">
          <div class="genre">
            <p v-for="genre in movi.genres" :key="genre.id">{{ genre.name }}</p>
          </div>
          <h5>Overview</h5>
          <p>{{ movi.overview }}</p>
        </div>
      </div>
    </div>
    <div>{{ $route.params.id }}</div>
  </div>
</template>

<script>
const keys = require("@/config/keys");
import axios from "axios";
export default {
  name: "indexid",
  data() {
    return {
      apiKey: keys.Mvkeys.api_key,
      movi: {},
    };
  },
  async created() {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${this.apiKey}&language=en-US`
    );

    const data = await res.data;
    this.movi = data;
    console.log(this.movi);
  },
  computed: {
    img() {
      return "https://image.tmdb.org/t/p/w500/" + this.movi.poster_path;
    },
  },
};
</script>

<style scoped>
.movi {
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
}
.mdetails {
  padding-top: 2rem;
  padding-left: 2.5rem;
}
@media (max-width: 650px) {
  .movi {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  img {
    min-width: 300px;
    width: 300px;
    height: 400px;
  }
  .mdetails {
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
    padding-left: 2.5rem;
  }
  .rating {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid rgb(9, 158, 9);
    margin-left: 2.5rem;
  }
}
h1 {
  font-weight: 700;
}
.rating {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid rgb(9, 158, 9);
}
.rating p {
  padding-top: 0.669rem;
  padding-left: 0.669rem;
}
.genre {
  display: flex;
}
.genre p {
  padding-right: 0.587rem;
  font-weight: 400;
  font-size: 1rem;
}
.link {
  text-decoration: none;
}
img {
  min-width: 300px;
  width: 300px;
  height: 450px;
  border-radius: 8px;
}
.overview p {
  word-wrap: normal;
  overflow-wrap: break-word;
  font-size: 1em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.overview h5 {
  font-weight: 600;
  font-size: 1.3em;
}
</style>
