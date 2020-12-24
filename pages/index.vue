<template>
  <div>
    <Searchmovie />
  </div>
</template>

<script>
const Searchmovie = () => import("@/components/Searchmovie");
export default {
  name: "index",
  components: {
    Searchmovie,
  },
};
</script>

<style>
</style>
