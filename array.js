/**
 * Array
 * collection of data
 * seprated by comma
 * stored in index value pair
 * index are autidefined and always star from 0
 * enclosed within []
 */



let user_1 = [
    "pratiksha sah",  //0
    "sahpratiksha374@gmail.com",  //1
    "kathmandu",  //2
    9803629163 //3
]

console.log(user_1[0])
console.log(user_1[2])
console.log(user_1[3])
console.log(user_1[1])


let product = [
    "iphone 12",
    "offer",
    "apple",
    10,
    10
]
console.log(product)


// single dimensional array
 //  - if an array does not include any other array as a value

     let user_2 = [
    "pratiksha sah",  //0
    "sahpratiksha374@gmail.com",  //1
    "kathmandu",  //2
    9803629163 //3
]

console.log(user_2[2])


// multi dimensional array
 // - atleast one array data within an array

let student = [
    [
     "usha basel",
     "usha34@gmail.com",
      990278527
    ],

    [
        "ritu sah",
        "ritu35@gmail.com",
        8874932692
    ]
]
console.log(student[0])
console.log(student[0][1])
console.log(student[1])
console.log(student[1][1])


/** 
 * object
 * always assign with key value paird
 */ 


let user_3 = {
    name: "pratiksha sah", 
    email:"sahpratiksha374@gmail.com",  
    address:"kathmandu",  
    contact: 9803629163 
}
console.log(user_3)    
console.log(user_3.name)


// array of object

let product3 = [
    {
        id: 1,
        name: "pen",
        price: 10,
        offer: "10%"
    },

    {
        id: 2,
        name: "copy",
        price: 100,
        offer: "5%"

    }
]
console.log(product2[1].name)
console.log(product2[1].id)
console.log(product2[1].price)
console.log(product2[1].offer)


console.log(product2[0].name)
console.log(product2[0].id)
console.log(product2[0].price)
console.log(product2[0].offer)


// push, read

// array can behave like a stack and queue

let allProducts = [];
let product1 = {
    name: "iphone 13",
    price: 129999,
    dicsount: 10,
    brand: "iphone"
};


// default operation is called push operation
// array is alway support push operation
// queue is allway insert in last
console.log("");
console.log(allProducts)
allProducts.push(product1)
console.log(allProducts)



let product2 = {
    name: "samsung",
    price: 4326272,
    dicsount: 10,
    brand: "samsung"
};

allProducts.push(product2);
console.log("After adding product2:", allProducts);


let product4 = {
    name: "samsung ultra",
    price: 4326272,
    dicsount: 10,
    brand: "samsung"
};

allProducts.unshift(product4)
console.log("After adding product4 to the beginning:", allProducts);

// push(): Adds an element to the end of the array.
// unshift(): Adds an element to the beginning of the array.


// read
// query
// read always read first element


const last = allProducts.pop()   // last element
const firstElement = allProducts.shift()  // 0 index value

