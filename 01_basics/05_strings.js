const name = "himani"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //modern method called stringinterpolation means inserting (embedding) variables or expressions directly inside a string. And we also able to use method in variable

const gameName = new String('himani-rwt') //able to use it as key value pair and by this we able to use multiple method in variable

 console.log(gameName[0]);
 console.log(gameName.__proto__);
 // console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   himani    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://himani.com/himani%20rwt"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //give boolean result

console.log(gameName.split('i'));
