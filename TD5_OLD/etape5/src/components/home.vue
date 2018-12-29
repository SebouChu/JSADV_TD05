<template>
  <div class="lorem-container">
    <label for="toggleLorem">Tu veux du Lorem ?</label>
    <input type="checkbox" v-model="toggleLorem">
    <p v-if="toggleLorem">Eh bah non, mais tu peux voir des films <router-link to="movies">ici</router-link> !</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      toggleLorem: false
    }
  }
}
</script>