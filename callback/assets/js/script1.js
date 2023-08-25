/* 
* We can pass function as argument in javascript 
* Call back is higher order functions in javascript
*/


var sachin = function(){
    console.log("My name is Sachin and I called inside a function");
}

var callHero = function(sachin){
    console.log("+++Before Adding Heros+++");
    sachin();
}

/* Case 1 */
//callHero(); // error It is expecting an argument "Uncaught TypeError: sachin is not a function"

/* Case 2 */
callHero(sachin);