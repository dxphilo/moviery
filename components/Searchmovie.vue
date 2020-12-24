<template>
  <div class="search">
    <form>
      <span>
        <!-- Here's the inline SVG icon -->
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path
            fill="none"
            d="M18.109,17.776l-3.082-3.081c-0.059-0.059-0.135-0.077-0.211-0.087c1.373-1.38,2.221-3.28,2.221-5.379c0-4.212-3.414-7.626-7.625-7.626c-4.212,0-7.626,3.414-7.626,7.626s3.414,7.627,7.626,7.627c1.918,0,3.665-0.713,5.004-1.882c0.006,0.085,0.033,0.17,0.098,0.234l3.082,3.081c0.143,0.142,0.371,0.142,0.514,0C18.25,18.148,18.25,17.918,18.109,17.776zM9.412,16.13c-3.811,0-6.9-3.089-6.9-6.9c0-3.81,3.089-6.899,6.9-6.899c3.811,0,6.901,3.09,6.901,6.899C16.312,13.041,13.223,16.13,9.412,16.13z"
          ></path>
        </svg>
      </span>
      <input type="text" class="from-text" placeholder="Search movies" />
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.search {
  background-color: rgb(230, 71, 71);
  font-weight: 100;
}
form {
  background-color: rgb(230, 71, 71);
  margin: 0 20%;
}
input {
  background-color: rgb(230, 71, 71);
  border: none;
  font-size: 1rem;
  outline: none;
  color: white;
  padding: 1.525rem 0 1.225rem 0.325rem;
}
input::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 0.9; /* Firefox */
}

input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: white;
}

input::-ms-input-placeholder {
  /* Microsoft Edge */
  color: white;
}
input:focus {
  outline: none;
  color: white;
}
span {
  cursor: pointer;
}
.svg-icon {
  width: 1rem;
  height: 1rem;
  font-size: 1.5rem;
}
.svg-icon {
  width: 1em;
  height: 1em;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: white;
}

.svg-icon circle {
  stroke: #4691f6;
  stroke-width: 1;
}
</style>