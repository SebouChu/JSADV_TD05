// Q3.1

function triple(n) {
    return 3 * n;
}

console.log(`Le triple de 42 est ${triple(42)}`);

// Q3.2

console.log("La sortie sera : 2, 3, undefined, 5 ; car la variable d n'est définie qu'après l'appel de la fonction a.");

// Q3.3

function sum(a, b, c, d) {
    function add(x, y) {
        return x+y;
    }

    return add(add(a, b), add(c, d));
}

console.log(`La somme de 4, 2, 3 et 5 vaut : ${sum(4, 2, 3, 5)}`);
try {
    let test = add(2, 3);
} catch (e) {
    if (e instanceof ReferenceError) {
        console.log("La fonction add() est non définie")
    }
}

// Q3.4
function pow(b, n) {
    return Math.pow(b, n);
}

function pow2(b, n) {
    let i;
    let result = 1;
    for (i = 0 ; i < n ; i += 1) {
        result *= b;
    }

    return result;
}

function pow3(b, n, acc = 1) {
    if (n == 0) {
        return acc;
    }
    return pow3(b, n-1, acc*b);
}

console.log(`2 puissance 8 vaut ${pow(2, 8)} ou encore ${pow2(2, 8)} ou encore ${pow3(2, 8)}`);

// Q3.5

function qu3_5(a, b, c) {
    return a * c(b);
}

console.log(`5 multiplié par le triple de 4 vaut : ${qu3_5(5, 4, triple)}`);