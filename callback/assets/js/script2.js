/*  
var calc = function(a, b, type){
    if(type === 'add'){
        return a+b;
    }else if(type === 'multiply'){
        return a*b;
    }
}
*/
/* Case 1 
* Although this is not an example of callback here we are checking
* type and based on that we are performing some calculation.
* But this case can be handeled better way in realworld scenario.
*
*/

//console.log(calc(2,3, 'add'));          // output 5
//console.log(calc(2,3, 'multiply'));     // output 6



/* Case 2 */

var add = function(a,b){
    return a+b;
}

var multiply = function(a,b){
    return a*b;
}

calc = function(a,b, calculate){
    // return calculate(a,b); // Works fine for 'Test 1' but fails on 'Test 2'

    if(typeof calculate === 'function'){
        return calculate(a,b);
    }
}

/* Test 1 */
// Here add and multiply are function which we are passing as an arguments in calc
console.log(calc(10,20,add));   // output 30
console.log(calc(10,20,multiply)); // output 200

/* Test 2 */
// console.log(calc(10,20,abc)); // output error abc is not defined


/* Case 3 */
// We can pass anonymous function as an argument 
console.log(calc(30, 20, function(a,b){ return a-b;}));