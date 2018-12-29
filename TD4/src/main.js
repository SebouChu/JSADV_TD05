import Vue from 'vue' //librairie "vue" dans node_modules
import app from './app.vue' //fichier app.vue local
import router from './router'
import MovieItemComponent from './components/movieitem.vue'
import MovieFormComponent from './components/movieform.vue'

Vue.component('movie-item', MovieItemComponent);
Vue.component('movie-form', MovieFormComponent);

new Vue({
  router,
  el: '#app',
  render: h => h(app)
})