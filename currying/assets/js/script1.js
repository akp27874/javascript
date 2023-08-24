/* 
Function currying is a technique in javascript where a function that takes 
multiple arguments is transformed into a series of functions, each taking a single argument. 
This allows you to partially apply the function by providing some of the arguments upfront,
and it returns a new function that expects the remaining arguments


*/

function add(x){
    return function(y){
        return (x + y);
    }
}

// console.log(add(5));    // this will return function

const add5 = add(5);        //  this assigns a function to add5
// console.log(add5);       // prints function 
console.log(add5(3));       // prints 8


/* 
In this example, the add function is curried, so you can create new functions with specific behavior 
by supplying only some of the arguments. Currying can be useful for creating more flexible and reusable 
functions in functional programming paradigms.

*/


