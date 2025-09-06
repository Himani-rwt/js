//const tinderUser = new Object()
const tinderUser = {}
tinderUser.name = "alsa"
tinderUser.email="alsa@.com"
tinderUser.rollno = 12
//console.log(tinderUser);

const secUser ={Id:'123ab',
    Username:{
        name:{
            firstname: 'himani',
            lastname: 'rwt'
        }
    },
    eamil: 'himani@gmail.com'
}
//console.log(secUser);
console.log(secUser.Username.name.lastname);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}
const obj3 = {5:'a',6:'b'
}

//const newobj = Object.assign({},obj1,obj2,obj3)//by {}thhis we make a newobj not in obj1

const newobj ={...obj1,...obj2,...obj3}
//console.log(newobj);
//console.log(obj1==newobj);

//console.log(tinderUser);
//console.log(Object.keys(tinderUser)); //make arr of keys and  same for values
//console.log(Object.entries(tinderUser)) //make arr of all keyl value pair
//console.log(tinderUser.hasOwnProperty('email'));


const userdata=[{
    id:1,
    name:'joe',
    email:'joe@google.com'
},{
    id:2,
    name:'alse',
    email:'alse@google.com'
}]
//console.log(userdata[0].email);


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "ritu"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }  //this is json formate of data not a object cuz var not provided and it is use for api

[
    {},
    {},
    {}
]  //this is also a api data formate means json