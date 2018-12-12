<template>
<li>
  <p v-on:click="toggleDetails = !toggleDetails"><strong>{{ movie.title }} ({{ movie.year }})</strong></p>
  <div class="movie-details" v-if="toggleDetails">
    <p><i>Réalisé par {{ movie.director }}</i><br>{{ movie.synopsis }}</p>
    <p>
      <button type="button" v-on:click="$emit('edit')">Edit</button>
      <button type="button" v-on:click="$emit('destroy')" style="color:red;">Destroy</button>
    </p>
  </div>
</li>
</template>

<script>
export default {
  props: ["movie"],
  data: function() {
    return {
      toggleDetails: false
    }
  }
}
</script>