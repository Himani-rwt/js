function myname(){
    console.log("H");
    console.log('i');
    console.log('m');
    console.log('a');
    console.log('n');
    console.log('i');
}
myname()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);

function login(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(login('Himani'));
console.log(login());

function calculateCartPrice(val1, val2, ...num1){
    return num1  //... is rest operator use to bind ele in arr 
}

// console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username: "himani",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));