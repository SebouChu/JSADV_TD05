// Q4.1

function reverseStr(input) {
    let i;
    let reverse = "";
    for (i = input.length - 1 ; i >= 0 ; i -= 1) {
        reverse += input[i];
    }
    return reverse;
}

console.log(`"Hello DAWIN" à l'envers, ça fait "${reverseStr('Hello DAWIN')}".`);

// Q4.2

function replace(str, fn) {
    let new_str = "";
    for(var i=0;i<str.length;i++) {
        new_str += fn(str[i]);
    }
    return new_str;
}

function my_fn(char) {
    let unaccentedChar = char.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
	let charCode = unaccentedChar.charCodeAt(0);

	if ((charCode >= 65) && (charCode <= 90)) {
        return String.fromCharCode(((charCode - 61) % 26) + 65);
    }
    if ((charCode >= 97) && (charCode <= 122)) {
        return String.fromCharCode(((charCode - 93) % 26) + 97);
    }

    return char;
}

console.log(replace("Je suis ton père", my_fn));