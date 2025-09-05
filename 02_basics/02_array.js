const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //push dc_heros as a single elmt and not using new arr for this method

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //this method use new arr for concatenating the arrays
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //use this for concatenating 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Himani"))
console.log(Array.from("Himani"))  //convert himani into a arr

console.log(Array.from({name: "hitesh"})) // interesting cuz it gives empty arr we didn't declare form key or value to make arr

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //this method convert scores into a arr form