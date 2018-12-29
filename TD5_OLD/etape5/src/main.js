import Vue from 'vue' //librairie "vue" dans node_modules
import VueRouter from 'vue-router'
import Vuex from 'vuex' //librairie "vuex" dans node_modules

import app from './app.vue' //fichier app.vue local

import MovieItemComponent from './components/movieitem.vue'
import MovieFormComponent from './components/movieform.vue'

import Home from './components/home.vue'
import ListMovies from './components/listmovies.vue'
import AddMovie from './components/addmovie.vue'
import EditMovie from './components/editmovie.vue'

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.component('movie-item', MovieItemComponent);
Vue.component('movie-form', MovieFormComponent);

const routes = [
    { path: '/', component: Home, name: 'home', meta: { title: 'Home' } },
    { path: '/movies', component: ListMovies, name: 'movies', meta: { title: 'Movies' } },
    { path: '/movies/new', component: AddMovie, name: 'new_movie', meta: { title: 'Add Movie' } },
    { path: '/movies/:id/edit', component: EditMovie, name: 'edit_movie', meta: { title: 'Edit Movie' } }
]

const router = new VueRouter({
    routes
});

const store = new Vuex.Store({
    state: {
        movies: [
            {
              id: 1,
              title: "Les Animaux fantastiques : Les Crimes de Grindelwald",
              year: 2018,
              director: "David Yates",
              synopsis: "1927. Quelques mois après sa capture, le célèbre sorcier Gellert Grindelwald s'évade comme il l'avait promis et de façon spectaculaire. Réunissant de plus en plus de partisans, il est à l'origine d'attaque d'humains normaux par des sorciers et seul celui qu'il considérait autrefois comme un ami, Albus Dumbledore, semble capable de l'arrêter. Mais Dumbledore va devoir faire appel au seul sorcier ayant déjoué les plans de Grindelwald auparavant : son ancien élève Norbert Dragonneau. L'aventure qui les attend réunit Norbert avec Tina, Queenie et Jacob, mais cette mission va également tester la loyauté de chacun face aux nouveaux dangers qui se dressent sur leur chemin, dans un monde magique plus dangereux et divisé que jamais.",
            },
            {
              id: 2,
              title: "Titanic",
              year: 1997,
              director: "James Cameron",
              synopsis: "Southampton, 10 avril 1912. Le paquebot le plus grand et le plus moderne du monde, réputé pour son insubmersibilité, le \"Titanic\", appareille pour son premier voyage. Quatre jours plus tard, il heurte un iceberg. A son bord, un artiste pauvre et une grande bourgeoise tombent amoureux.",
            },
            {
              id: 3,
              title: "Interstellar",
              year: 2014,
              director: "Christopher Nolan",
              synopsis: "Le film raconte les aventures d’un groupe d’explorateurs qui utilisent une faille récemment découverte dans l’espace-temps afin de repousser les limites humaines et partir à la conquête des distances astronomiques dans un voyage interstellaire.",
            }
        ]
    },
    mutations: {
        
    },
    actions: {

    }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | TD5 JSADV`
  next()
})


new Vue({
  el: '#app',
  router,
  render: h => h(app)
})