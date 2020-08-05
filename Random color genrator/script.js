const button=document.querySelector('#button');
const body=document.querySelector('#background');
let random=Math.floor(Math.random()*360);

button.addEventListener('click', handleColor);

function handleColor (){
  body.style.backgroundColor=`hsla(${random},100%,50%,1)`;
  random=Math.floor(Math.random()*360);
}
