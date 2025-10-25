document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
});


document.getElementById('outer').addEventListener('click', () => {
  console.log('Outer clicked during capture');
}, true); // capture = true

document.getElementById('inner').addEventListener('click', () => {
  console.log('Inner clicked');
});