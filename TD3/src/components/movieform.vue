<template>
<form>
  <label for="movie.title">Title : </label>
  <input type="text" v-model="movie.title" placeholder="Interstellar" size="50"><br>

  <label for="movie.year">Year : </label>
  <input type="number" style="width:5em;" v-model="movie.year" placeholder="2014"><br>

  <label for="movie.director">Director : </label>
  <input type="text" v-model="movie.director" placeholder="Christopher Nolan"><br>

  <label for="movie.synopsis">Synopsis : </label><br>
  <textarea v-model="movie.synopsis" rows="8" cols="80" placeholder="Lorem ipsum dolor sit amet..."></textarea><br>

  <button type="button" v-on:click="$emit('submit')">{{ button }}</button>
</form>
</template>

<script>
export default {
  props: ["movie", "button"]
}
</script>