/* We can achieve function currying objective with 'bind' method  */

function add(x, y){
    console.log(x + y);
}

/* Case 1 */
const add5 = add.bind(this, 5);
add5(3);    // output 8


/* Case 2 */
const add4 = add.bind(this, 4, 7);
add4(5); // It will ignore argument '5' 


/* Case 3 */
const add3 = add.bind(3);  // First argument is missing : 'this'
add3(2);    // Output will be NaN

/* Case 4 */
const add2 = add.bind(9, 2); // Although first argument is passed as '9' It will ignore it
add2(10);  // Output 12