// singleton
// Object.create

// object literals(not singleton)

const mySym = Symbol("key1")

const JsUser = {
    name: "Himani",
    "full name": "Himani Rwt",
    [mySym]: "mykey1", //this key woek as symbol
    age: 18,
    location: "Jaipur",
    email: "himani@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
console.log(JsUser["full name"]) //isko dot se access nahi kr skte so use this formate for accessing
console.log(JsUser[mySym]) //symbol ko ese hi declare krte ha

JsUser.email = "himani@chatgpt.com" //for changes overwrite
//Object.freeze(JsUser)
JsUser.email = "himani@microsoft.com" //after freeze it doesn't change
 console.log(JsUser);

 JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())