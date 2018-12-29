<template>
<div>
  <h1>{{ this.$route.meta.title }}</h1>

  <router-view></router-view>
</div>
</template>

<script>
export default {
  data() {
    return {
       
    }
  },
  computed: {
    lastId: function () {
      return this.movies[this.movies.length].id;
    }
  }
}
</script>