let a;
console.log(a);

let b = null;
console.log(b);

if(a==b){
    console.log("a and b are equal in case of ==");
}

if(a===b){
    console.log("It's true");
}else{
    
    console.log(typeof(a))
    console.log(typeof(b))
    console.log("a and b are not equal in case of ===");
}