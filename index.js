// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

// adds cat Ralph at the end of the array

function destructivelyAppendCat (){
    return cats.push('Ralph');
}

// adds cat Bob at the end of the array


function destructivelyPrependCat (){
    return cats.unshift("Bob");
}

// destructively reoves the last cat on the array

function destructivelyRemoveLastCat(){
    return cats.pop();
}

// destructively reoves the last cat on the array

 function destructivelyRemoveFirstCat(){
    return cats.shift();
 }

// appends a cat to the cats array and returns a new array, leaving the cats array unchanged

 function appendCat(){
    return [...cats, "Broom"];
 }

// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged

function prependCat (){
    return ['Arnold', ...cats];
}

//  removes last cat and returns a new array

function removeLastCat(){
    return cats.slice(0,cats.length - 1);
}

//  removes last cat and returns a new array

function removeFirstCat(){
    return cats.slice(1);
}