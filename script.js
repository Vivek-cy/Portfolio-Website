
//Change introduction h2 background color on mouse down and up
const first = document.getElementById('intro');
let changeColor = (event) =>{
    event.target.style.backgroundColor = '#FF6A3D';
    
};
let changeBack = (event) =>{
    event.target.style.backgroundColor = '';
}
first.addEventListener('mousedown', changeColor);
first.addEventListener('mouseup', changeBack)


//Change NanceCademy background color on mouse down and up

const eventHand = document.getElementById('Nance');

eventHand.addEventListener('mouseover', changeColor);
eventHand.addEventListener('mouseout', changeBack);