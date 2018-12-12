import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const ListMovies = {
    template: `<div class="movies-list">
            <div class="search-form">
              <p>
                <strong>Search by</strong>
                <select v-model="search.attribute">
                  <option value="title">Title</option>
                  <option value="year">Year</option>
                  <option value="director">Director</option>
                </select> :
                <input type="text" v-model="search.value" placeholder="Search...">
              </p>
            </div>

            <ul>
              <li is="movie-item" v-for="movie in filteredMovies" v-bind:movie="movie" v-bind:key="movie.id" v-on:edit="editMovie(movie.id)" v-on:destroy="destroyMovie(movie.id)">
              </li>
            </ul>

            <p>Nombre de films enregistrés : {{ movies.length }} <button type="button" v-on:click="popMovies">Pop</button></p>
          </div>`
}

const AddMovie = {
    template: `<div class="add-movie">
            <p><strong>New Movie</strong></p>
            <p style="color:gray; font-size: 13px;">Première lettre : <span v-if="newMovie.title !== undefined && newMovie.title.trim() != ''">{{ newMovie.title[0] }}</span></p>

            <movie-form v-bind:movie="newMovie" v-bind:button="'Add'" v-on:submit="addMovie"></movie-form>
        </div>`
}

const EditMovie = {
    template: `<div class="edit-movie" v-if="editingMovie !== null">
          <p><strong>Edit Movie</strong></p>

          <movie-form v-bind:movie="editingMovie" v-bind:button="'End'" v-if="editingMovie !== null" v-on:submit="endEditMovie"></movie-form>
        </div>`
}

export default new VueRouter({
    routes: [
        { path: '/', component: ListMovies },
        { path: '/add', component: AddMovie },
        { path: '/edit', component: EditMovie }
    ]
});