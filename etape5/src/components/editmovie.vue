<template>
  <div class="edit-movie">
    <p><strong>Edit Movie</strong></p>

    <movie-form v-bind:movie="editingMovie" v-bind:button="'Update'" v-if="editingMovie != null" v-on:submit="endEdit()"></movie-form>

    <div v-if="editingMovie == null">
      <p>Pas de film avec l'ID {{ this.$route.params.id }}</p>
      <button type="button" v-on:click="endEdit()">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      editingMovie: this.$parent.$data.movies.find(item => item.id == this.$route.params.id)
    }
  },
  methods: {
    endEdit: function () {
        this.$router.push({ name: 'movies' });
    }
  }
}
</script>