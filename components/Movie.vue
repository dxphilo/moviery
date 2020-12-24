<template>
  <div class="movie-card">
    <img :src="img" alt="" />
    <div class="content">
      <h2>{{ title }}</h2>
      <p>{{ rdate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: ["id", "title", "rdate", "image", "rate"],
  data() {
    return {
      img: "https://image.tmdb.org/t/p/w500/" + this.$props.image,
    };
  },
};
</script>

<style scoped>
.movie-card {
  width: calc(((100vw - 80px - 260px - 128px) / 4));
  max-width: 208px;
  margin-left: 30px;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  border: 1px solid #e3e3e3;
  overflow: hidden;
  margin-top: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
img {
  width: calc(((100vw - 80px - 260px - 128px) / 4));
  height: calc((((100vw - 80px - 260px - 128px) / 4)) * 1.5);
  max-width: 208px;
  max-height: calc(208px * 1.5);
}
.content {
  width: 100%;
  padding: 26px 10px 12px 10px;
  position: relative;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
}
h2 {
  font-size: 1em;
  margin: 0;
  width: 100%;
  word-wrap: normal;
  overflow-wrap: break-word;
}
p {
  font-size: 1em;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.6);
}
</style>
