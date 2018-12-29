const express = require('express')
const bodyParser = require('body-parser');

global.MOVIES = [
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

const app = express()
app.use(bodyParser.json()) //parse JSON body
app.use(bodyParser.urlencoded()) //parse x-www-form-urlencoded body

app.use((req, res, next) => {
    req.date = new Date()
    console.log(`${req.date} | [${req.method}] ${req.path} : ${JSON.stringify(req.body)}`)
    next()
})

app.use('/api', (req, res, next) => {
    res.type('text/json')
    next()
})

app.get('/api/movies/all', (req, res) => {
    res.status(200).send(MOVIES)
})

app.post('/api/movies', (req, res) => {
    var newMovie = {}
    newMovie.id = MOVIES[MOVIES.length - 1].id + 1
    newMovie.title = `${req.body.title}`
    newMovie.year = parseInt(req.body.year)
    newMovie.director = `${req.body.director}`
    newMovie.synopsis = `${req.body.synopsis}`
    MOVIES.push(newMovie)

    res.status(200).send(newMovie)
})

app.get('/api/movies/:id', (req, res) => {
    var movie = MOVIES.find(movie => movie.id == req.params.id)

    if (movie === null) {
        res.status(404).send({ error: 'Movie not found.' })
    } else {
        res.status(200).send(movie)
    }
})

app.post('/api/movies/:id', (req, res) => {
    var movie = MOVIES.find(movie => movie.id == req.params.id)

    if (movie === null) {
        res.status(404).send({ error: 'Movie not found.' })
    } else {
        if (req.body.title !== undefined) {
            movie.title = `${req.body.title}`
        }

        if (req.body.year !== undefined) {
            movie.year = parseInt(req.body.year)
        }

        if (req.body.director !== undefined) {
            movie.director = `${req.body.director}`
        }

        if (req.body.synopsis !== undefined) {
            movie.synopsis = `${req.body.synopsis}`
        }

        res.status(204).send(null)
    }
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))