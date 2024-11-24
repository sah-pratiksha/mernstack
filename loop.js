/*
let i =1;
//loop iteration, repetation

console.log(i)
i++;
console.log(i);



//do while loop
let a = 1;
do {
    console.log(i)
    i++
} while(i <=10)

// while

i = 19;
while(i <= 19) {
    console.log(i)
    i++
}



// for loop

for(i = 1; i<= 10; i++) {
    console.log(i);
}


*/
// tast 3

let num = 1;
for(num = 1; num<=20; num++ )
if(num % 2 == 0)
    console.log(num);


for (let j =2; j <= 40; j+=2) {
    console.log(j)
}


for (let j = 2, i = 2; i<= 20; i++, j+=2) {
    console.log(j)
}


//array data

 const numbs = [ 1,2,3,4,5,6,7,8,9,10]
 //string + num = string
 //undefined + num = NAN (not a number)
 let sum = 0;
 for (i = 0; i< num.length; i++) {
    sum += numbs[i];
    console.log(sum)
 }

 /*
 1
 1 2
 1 2 3
1  2 3 4
1 2 3 4 5
1 2 3 4 5 6 
1 2 3 4 5 6 7 

*/


for(i =1; i<= 7; i++) {
    let toPrint = "";
    for(j = 1; j<=i; j++) {
        toPrint += j+"   ";
    }
    console.log(toPrint)
}


/*
*  
* *
* * *
* * * *
* * * * *
*/

for(i =1; i<= 7; i++) {
    let toPrint = "";
    for(j = 1; j<=i; j++) {
        toPrint += "*   ";
    }
    console.log(toPrint)
} 


// 1 2 3 4 5 6 7
   1
   1
   1
   