<template>
  <div class="add-movie">
    <p><strong>New Movie</strong></p>
    <p style="color:gray; font-size: 13px;">Première lettre : <span v-if="newMovie.title !== undefined && newMovie.title.trim() != ''">{{ newMovie.title[0] }}</span></p>

    <movie-form v-bind:movie="newMovie" v-bind:button="'Create'" v-on:submit="addMovie"></movie-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMovie: {}
    }
  },
  methods: {
    addMovie: function () {
      this.newMovie.id = this.$parent.$data.lastId;
      this.newMovie.year = parseInt(this.newMovie.year);
      this.$parent.$data.movies.push(this.newMovie);

      this.newMovie = {};
      this.$router.push({ name: 'movies' });
    }
  }
}
</script>