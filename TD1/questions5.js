var arr = [ { a: 1, b: 2 }, { a:2 , b: 4 }, { a: 9, b: 1 }, { a: 19, b: 29 }, { a: 187, b: 4 } ];

// Q5.1

var arr1_1 = arr.slice(0);
var arr1_2 = arr.slice(0);

var i;
for (i = 0 ; i < arr1_1.length ; i++) {
    arr1_1[i] = arr1_1[i]["b"];
}
console.log(`Q5.1. | Méthode 1 : ${JSON.stringify(arr1_1)}`);

arr1_2 = arr1_2.map(item => item["b"]);
console.log(`Q5.1. | Méthode 2 : ${JSON.stringify(arr1_2)}`);

// Q5.2

function withAGreaterThanThree(input) {
    let i;
    let result = [];
    for (i = 0 ; i < input.length ; i += 1) {
        if (input[i]["a"] > 3) {
            result.push(input[i]);
        }
    }
    return result;
}

var arr2_1 = arr.slice(0);
filtered_arr2_1 = withAGreaterThanThree(arr2_1);
console.log(`Q5.2. | Méthode 1 : ${JSON.stringify(filtered_arr2_1)}`);

var arr2_2 = arr.slice(0);
filtered_arr2_2 = arr2_2.filter(item => item["a"] > 3);
console.log(`Q5.2. | Méthode 2 : ${JSON.stringify(filtered_arr2_2)}`);

// Q5.3

var persos = [ "Luke Skywalker", "Maître Yoda", "R2D2", "Padmé Amidala",  "Anakin Skywalker", "Obi-Wan Kenobi" ];

function joinElements(input) {
    return input.reduce((perso1, perso2) => perso1 + ", " + perso2);
}

function joinElementsWithoutSkywalker(input) {
    let filteredInput = input.filter(item => item.indexOf("Skywalker") == -1);
    return joinElements(filteredInput);
}

console.log(joinElements(persos));
console.log(joinElementsWithoutSkywalker(persos));