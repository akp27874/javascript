let counter = 0;
function getData(){
    console.log("fetching data..", counter++);
}

function doSomeMagic(fn, delay){
    let  timer;
    return function(...args){
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context, args);
        }, delay);
    }
}

const betterFunction = doSomeMagic(getData, 300);

function clearSearch(){
    document.getElementById('search').value = '';
}