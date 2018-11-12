// Q6.1

var fantasticBeasts2 = {
    title: "Les Animaux fantastiques : Les Crimes de Grindelwald",
    synopsis: "1927. Quelques mois après sa capture, le célèbre sorcier Gellert Grindelwald s'évade comme il l'avait promis et de façon spectaculaire. Réunissant de plus en plus de partisans, il est à l'origine d'attaque d'humains normaux par des sorciers et seul celui qu'il considérait autrefois comme un ami, Albus Dumbledore, semble capable de l'arrêter. Mais Dumbledore va devoir faire appel au seul sorcier ayant déjoué les plans de Grindelwald auparavant : son ancien élève Norbert Dragonneau. L'aventure qui les attend réunit Norbert avec Tina, Queenie et Jacob, mais cette mission va également tester la loyauté de chacun face aux nouveaux dangers qui se dressent sur leur chemin, dans un monde magique plus dangereux et divisé que jamais.",
    releaseYear: 2018,
    director: {
        lastName: "Yates",
        firstName: "David",
        birthDate: new Date("1963-11-30")
    }
}

// Q6.2

var films = [
    {
        title: "Titanic",
        synopsis: "Southampton, 10 avril 1912. Le paquebot le plus grand et le plus moderne du monde, réputé pour son insubmersibilité, le \"Titanic\", appareille pour son premier voyage. Quatre jours plus tard, il heurte un iceberg. A son bord, un artiste pauvre et une grande bourgeoise tombent amoureux.",
        releaseYear: 1997,
        director: {
            lastName: "Cameron",
            firstName: "James",
            birthDate: new Date("1954-08-16")
        }
    },
    {
        title: "Interstellar",
        synopsis: "Le film raconte les aventures d’un groupe d’explorateurs qui utilisent une faille récemment découverte dans l’espace-temps afin de repousser les limites humaines et partir à la conquête des distances astronomiques dans un voyage interstellaire.",
        releaseYear: 2014,
        director: {
            lastName: "Nolan",
            firstName: "Christopher",
            birthDate: new Date("1970-07-30")
        }
    },
    {
        title: "La Ligne verte",
        synopsis: "Paul Edgecomb, pensionnaire centenaire d'une maison de retraite, est hanté par ses souvenirs. Gardien-chef du pénitencier de Cold Mountain en 1935, il était chargé de veiller au bon déroulement des exécutions capitales en s’efforçant d'adoucir les derniers moments des condamnés. Parmi eux se trouvait un colosse du nom de John Coffey, accusé du viol et du meurtre de deux fillettes. Intrigué par cet homme candide et timide aux dons magiques, Edgecomb va tisser avec lui des liens très forts.",
        releaseYear: 1999,
        director: {
            lastName: "Darabont",
            firstName: "Frank",
            birthDate: new Date("1959-01-28")
        }
    }
]

films.forEach(film => {
    console.log(`${film.title} (${film.releaseYear})`);
    console.log(`Réalisé par ${film.director.firstName} ${film.director.lastName}, né(e) le ${film.director.birthDate.toLocaleDateString()}`);
    console.log('-------------');
    console.log(film.synopsis);
    console.log("");
});