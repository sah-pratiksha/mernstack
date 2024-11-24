/* 
 a. if else
 b. esle -if
 c. switch-case
 d. loop
    -do-while
    -while
    -for
    -for in
    -for-of

 */

    
 let day = "Sunday";
   //friday => weekend
   //saturday or sunday => holiday
   // monday-thursday => working day
   
   //if-else

 if(day === 'friday') {
    //if body
    console.log("friday")
 }  else {
    //else body
    //optional
    if (day === 'saturday' || day === 'saturday')  {
        console.log("holiday");
    }else {
        console.log("working day")
    }
 }


 //else if

 if(day === 'friday') {
    console.log("weekend")
 } else if(day === 'saturday' || day === 'sunday') {
    console.log("holiday")
 } else {
    console.log("working day");
 }

 //or
 if(day === 'friday') {
    console.log("weekend")
 } else if(day === 'saturday' || day === 'sunday') {
    console.log("holiday")

 } else if(["monday","tuesday", "weekend", "thursday"].includes(day))   {
    console.log("holiday");
 }

 //tast-1
 /* create a java script program to calculate division on persentage
-  create a java script variable to store to obtained marks. assume total to be 500 .
 the obtained marks should be less than total.
  -calculate percentage based on the obtained marks. and find the division
  -consider the follwing for division calculate
  -if percentage is >= 80 distinction
  ->= 60 but < 80  first division
  >



*/

let markObt = 400;
let marks = 500;
let percentage =  (markObt/marks) * 100;
if(marks >= 80) {
    console.log("division is disctinction");
} else if(percentage >= 60 && marks < 80) {
    console.log("division is first division");
} else if(percentage >= 45 && marks < 60) {
    console.log("second division");
}  else if (percentage >= 32 && marks < 45) {
    console.log("third division");
} else {
   console.log("sorry you are failed");
}

/* task-2
 
*/

let userUnits = 350;
let billamout = 0;
if (userUnits <= 30)
   ( billamout = 150)
else if (userUnits <= 30 && userUnits === 50) {
    console.log("price is :" userUnits*7.5);
} else if (userUnits )




   //switch case

   day = "monday";
   if(day === 'friday') {
      console.log("weekend");
   } else if (day === 'saturday' || day === 'sunday')   {
      console.log("holiday")
   }else {
      console.log("weekend")
   }

     

    switch(day) {
      case "friday":
         console.log("weeken");
         break;

         case "saturday":
            console.log("holiday");
            break;

            case "sunday":
               consolele.log("holiday");
               break;

               default: //optional
               console.log("weekend");
               break; //optional
    }




    switch(true)  {
      case (10<10):
         //body
         break;
         default:
            //body
            break;
    }