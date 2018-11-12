Vue.component("movieItem", {
    props: ["movie"],
    data: function() {
        return {
            toggleDetails: false
        }
    },
    template: `<li>
        <p v-on:click="toggleDetails = !toggleDetails"><strong>{{ movie.title }} ({{ movie.year }})</strong></p>
        <div class="movie-details" v-if="toggleDetails">
            <p><i>Réalisé par {{ movie.director }}</i><br>{{ movie.synopsis }}</p>
            <p>
                <button type="button" v-on:click="$emit('edit')">Edit</button>
                <button type="button" v-on:click="$emit('destroy')" style="color:red;">Destroy</button>
            </p>
        </div>
    </li>`
});

Vue.component("movieForm", {
    props: ["movie"],
    template: `<form>
            <label for="movie.title">Title : </label>
            <input type="text" v-model="movie.title" placeholder="Interstellar" size="50"><br>

            <label for="movie.year">Year : </label>
            <input type="number" style="width:5em;" v-model="movie.year" placeholder="2014"><br>

            <label for="movie.director">Director : </label>
            <input type="text" v-model="movie.director" placeholder="Christopher Nolan"><br>

            <label for="movie.synopsis">Synopsis : </label><br>
            <textarea v-model="movie.synopsis" rows="8" cols="80" placeholder="Lorem ipsum dolor sit amet..."></textarea><br>

            <button type="button" v-on:click="$emit('submit')">End</button>
        </form>`
});

var app = new Vue({
    el: "#app",
    data: {
        message: "Hello Carbo!",
        messageTitle: "Because Carbo > Bolo",
        toggleLorem: false,
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
        ],
        lastId: 4,
        newMovie: {},
        search: { attribute: "title", value: "" },
        editingMovie: null
    },
    methods: {
        popMovies: function () {
            this.movies.pop();
        },

        addMovie: function () {
            this.newMovie.id = this.lastId;
            this.newMovie.year = parseInt(this.newMovie.year);
            this.movies.push(this.newMovie);
            this.lastId += 1;

            this.newMovie = {};
        },

        editMovie: function (id) {
            this.editingMovie = this.movies.find(item => item.id == id);
        },

        endEditMovie: function () {
            this.editingMovie = null;
        },

        destroyMovie: function (id) {
            if (this.editingMovie !== null && id == this.editingMovie.id) {
                this.editingMovie = null;
            }

            let index = this.movies.findIndex(item => item.id == id);
            if (index !== -1) {
                this.movies.splice(index, 1);
            }
        },
    },
    computed: {
        filteredMovies: function() {
            if (this.search.value.trim() == "") {
                return this.movies;
            }
            switch (this.search.attribute) {
                case "title":
                    return this.movies.filter(item => item.title.toLowerCase().indexOf(this.search.value.toLowerCase()) !== -1);
                case "director":
                    return this.movies.filter(item => item.director.toLowerCase().indexOf(this.search.value.toLowerCase()) !== -1);
                case "year":
                    return this.movies.filter(item => item.year == parseInt(this.search.value));
                default:
                    return [];
            }
        }
    }
});