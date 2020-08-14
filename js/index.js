//DBLCLICK//
const dbcImages = document.querySelector('.intro img');

dbcImages.addEventListener('dblclick', () => {
    dbcImages.src = "https://i.postimg.cc/4xJBzy9k/blurred-background-bus-combi-miniature-385998-1.jpg";
});
console.log(dbcImages, 'DBLCLICK');

//SCROLL//
const newColorNav = document.querySelector('.container')
window.addEventListener('scroll', () => {
    newColorNav.style.backgroundColor = '#EBDD94';
});
console.log(newColorNav, 'SCROLL');

//WHEEL//
const newBody = document.querySelector('body');
document.addEventListener('wheel', () => {
    newBody.style.backgroundColor = '#e6e2d3';
});
console.log(newBody,'WHEEL');

//KEYDOWN//
const newBus = document.querySelector('body');

newBus.addEventListener ('keyup', event => event.target.style.backgroundColor = 'hotpink'
)
console.log(newBus, 'KEYDOWN')

//MOUSEOVER//
const newMouseOver = document.querySelectorAll('a').forEach(newMouseOver => {
    newMouseOver.addEventListener('mouseover', () => {
        newMouseOver.style.color = '#50394c';
        newMouseOver.style.borderBottom = '2px solid #b9936c';
        newMouseOver.style.padding = '3px';
        event.preventDefault();
    });
    newMouseOver.addEventListener('mouseout', () => {
        newMouseOver.style.opacity = '75%';
    });
});
console.log(newMouseOver, 'MOUSEOVER', 'MOUSEOUT')

//LOAD//
window.addEventListener('load', (event) => {
    console.log('Page Is Loaded');
});

//DRAG-DROP//
var dragged;

document.addEventListener('drag', function(event) {

}, false);

document.addEventListener('dragstart', function(event) {
    dragged = event.target;
    event.target.style.opacity = '50%';
}, false);

document.addEventListener('dragend', function(event) {
    event.target.style.opacity = '100%';
}, false);

document.addEventListener('dragover', function(event) {
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
    
    if (event.target.className == "dropzone") {
      event.target.style.background = "purple";
    }
  
  }, false);

  document.addEventListener("dragleave", function(event) {

    if (event.target.className == "dropzone") {
      event.target.style.background = "";
    }
  
  }, false);
  
  document.addEventListener("drop", function(event) {
   
    event.preventDefault();
 
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
      dragged.parentNode.removeChild( dragged );
      event.target.appendChild( dragged );
    }
  }, false);

  
//RESIZE//

const worldPic = document.querySelector('.content-destination img');
window.addEventListener('resize', () => {
 worldPic.src = 'https://i.postimg.cc/bw9D9z24/ball-shaped-blur-close-up-focus-346885.jpg';
});
console.log(worldPic, 'RESIZE')

 
  
  
