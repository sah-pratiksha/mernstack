// Arithmetic operator
/**
 * +
 * -
 * *
 * /
 * %  module
 * -- decrement
 * ++  increment
 */


let a = 10;
let b = 3;
let c = a/b;
console.log(c);

console.log(a);
a++;
console.log(a);
++a;
console.log(a);

a--;
console.log(a)


/**
 * Assignment operators
 * 
 * = 
 * +=
 * -=
 * *=
 * /=
 * %=
 */


a = a+1;  //12
a++;     //13
++a;     //14
a += 1;  //15

console.log(a)


/**
 * concatination string operator
 *  +  , 
 */


let name = "pratiksha"
let last = "sah"
console.log(name + last);

name += last;
console.log(name)

let e = 10;
let f = '10'
console.log(e + f)  // 1010
console.log(e - f) //  0
console.log(e * f)  // 100
console.log(e / f)  // 1

console.log( e, f, last, name)

/**
 * comparison operators (return boolean)
 * <, >, <=, >=, ==, !=, ===, !== 
 */


console.log(e === f);  //false  ( value + data type both check)
console.log( e == f);  // true  ( only value check)

let g = 5;
let h = 3;
console.log(g > h); // true
console.log(g < h);  // false
console.log(g >= h); // true
console.log(g <= h); // false 
console.log(g == h);  // false
console.log(g != h); // true


/**
 * logical operator
 * &&  and  ( both statement are true)
 * ||   or  ( at leat one statement are true)
 * !  not   (true/false, false/true)
 */

console.log((g > h) && (g != h));
console.log((g > h) || (g == h));
console.log(!(g != h));


/**
 * conditional statement or ternary operator
 * (exp) ? "true statement" : "false statement"
 */



// conditional operator
const loading = true;
console.log((loading === true) ? "loading..." : "not loading....")


/**
 * js specific operator 
 * template literals `${}`
 */

let emailTemp = `dear .....${name},
 you have .....no ${a}of notification.
 Regrads,
 ......
 ............`
console.log(emailTemp)


/**
 * object destructure
 */


let user = {
    userName: "pratiksha",
    contact: 98007776,
    address: "kathmandu",
    role: "student",
    language: "mern stact"

}

// destructuring of an object
let {userName, address, ...leftOver} = user;
console.log(name, address,)


// spread or rest operator 
 // ... spread operator


 let sandesh = {
    ...user,  // ... spread operator
    contact: 9898999
 }

 console.log(sandesh)