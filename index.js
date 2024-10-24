console.log("hello world");

var a = 10;
console.log(a) // output 10
{
    //block
    var a = 20
    console.log(a)  //output 20
}

//global as well block
let z = 10;
console.log(b) //10
{
    let b = 20 
    console.log(b) //20
}

console.log(b)  //10

// array
//single dimensional array
let user1 = [
    "sandesh",  //0
    "sande@5324gmail.com", //1
    "kathmandud",  //2
    8876667 //3
]

console.log(user[0])
console.log(user[1])
console.log(user[2])
console.log(user[3])


//multi dimensional array

let user2 = [
    [
    "sandesh",  //0
    "sande@5324gmail.com", //1
    "kathmandud",  //2
    8876667 //3
]
[
    "pratiksa",  //0
    "pratiksha@5324gmail.com", //1
    "kathmandud",  //2
    8876667 //3
]

]
console.log(user[0])
console.log(user[1])
console.log(user[2])
console.log(user[3])


console.log(user2[0][0]) 


//object

let students = {
    name: "pratikhsa",
    class: "bca",
    address: "birgunj",
    contact: 86290852
}
console.log(students.name);

// array of object

const pupularCourse = [
  {
      id: 1,
      image: "image not found",
      title: "digital marketing",
      duration: "3 months"
  },
  {
    id: 2,
    image: "image not found",
    title: "digital marketing",
    duration: "3 months"
     }   
]

console.log(popularCourses[0].id)
console.log(popularCourses[0].image)
console.log(popularCourses[0].title)
console.log(popularCourses[0].duration)

//push, read
//default operation is called push 
//in q operation lifo method


let allProducts = []; 
let products1 = 
{
  name:"iphone",
  price: 3422,
  discount: 10,
  brand: "apple"
}

console.log("")
console.log(allProducts)
allProducts.push(products1)
console.log(allProducts)  // 0 index


let products2 = 
{
  name:"samsung galaxy",
  price: 3422,
  discount: 10,
  brand: "samsung"
}

allProducts.push(products2)
console.log(allProducts)


//insert at top
  allProducts.splice(2,0, products1)


  //read
  //query

  const lastelem = allProducts.pop()  //last element

  const firstElem = allProducts.shift()  //0 index value

  const index = allProducts.splice(2,1); //spice alway return array data type


  console.log(allProducts.length) 

  //increment / decrement

  let x = 10;
  let b = 2;

  console.log(a);

  console.log(a++)  //print 10, increment => a = 11 , post assign
  console.log(++a)   //increment => 12 , print, 12


  a = a+1   //13
  a++      //14
  ++a    //  15
  a += 1;   //16



let name = "pratiksha";
let last = "sah";

console.log(name+last);
name += last;
console.log(name)

let e = 5;
let f = "2"
console.log(e+f);  //52
console.log(e-f);  //3
console.log(e*f);  //10
console.log(e%f)  //1

console.log(name, last, e)
let g = 3
let h = 2
console.log(g <= h)  //false
 //vallue of value and datatype

 console.log(e === f)  //false //value+datatype
 console.log(e == f)  // true //only value
 
 console.log(e !== f)  //  true 

 console.log(e != f)   //  false



 console.log((g>h) && (e !==f))
 //true && true => all the expression is true

 console.log((g<h) || (e !==f))
 //false || ture ==> if any one of the expression is true

 console.log(!(g>h))
 //!true 

 let nums = [1,2,3,4,5]
 let numb1 = 2
 //numb1 => numbs

 console.log(!nums.includes(numb1))  //true
 

 const loading = true;
 console.log(
    (loading === true) ? "loading...": ""
 )



 //template literals
 let emailTemp = `Dear ${name}`




 let user = {
    fullname: "pratiksa sah",
    email: "sahfha@gamil.com",
    address: "kathmandu",
    role: "student",
    language: "mern stack"
 }


   let pratikshauser = {
    ...user,   //spread operator
    phone: 3525626,
    oerganization: "broadway"
   }

 // destructuring of an object

 let{fullname:username, email, address} = user;
console.log(username, email, address)


//rest operator
// let{fullname:username, email, address, ...leftover} = user;



//control statement
//git
