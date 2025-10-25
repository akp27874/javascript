let counter = 0;
function getData(){
    console.log("Resizing..", counter++);
}

function throttle(fn, delay){
    let flag = true, timer;
    
return function(...args){
    let context = this;
    if(flag){
        fn.apply(context, args);
        flag = false;
        timer = setTimeout(()=>{
            flag = true;
        }, delay);
    }
    
}
}

const getBetterFunction = throttle(getData, 1000);
window.addEventListener('resize', getBetterFunction);