document.getElementById('menu').addEventListener('click', (event)=>{
    console.log('Clicked Item : ', event.target.textContent);
    console.log('Current Item : ', event.currentTarget);
})