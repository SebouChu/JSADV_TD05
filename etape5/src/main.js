import Vue from 'vue' //librairie "vue" dans node_modules
import VueRouter from 'vue-router'
import app from './app.vue' //fichier app.vue local

import MovieItemComponent from './components/movieitem.vue'
import MovieFormComponent from './components/movieform.vue'

import Home from './components/home.vue'
import ListMovies from './components/listmovies.vue'
import AddMovie from './components/addmovie.vue'
import EditMovie from './components/editmovie.vue'

Vue.use(VueRouter);

Vue.component('movie-item', MovieItemComponent);
Vue.component('movie-form', MovieFormComponent);

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/movies', component: ListMovies, name: 'movies' },
    { path: '/movies/new', component: AddMovie, name: 'new_movie' },
    { path: '/movies/:id/edit', component: EditMovie, name: 'edit_movie' }
]

const router = new VueRouter({
    routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(app)
})