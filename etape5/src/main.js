import Vue from 'vue' //librairie "vue" dans node_modules
import VueRouter from 'vue-router'
import app from './app.vue' //fichier app.vue local
import MovieItemComponent from './components/movieitem.vue'
import MovieFormComponent from './components/movieform.vue'

Vue.use(VueRouter);

Vue.component('movie-item', MovieItemComponent);
Vue.component('movie-form', MovieFormComponent);

new Vue({
  el: '#app',
  render: h => h(app)
})