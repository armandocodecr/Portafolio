

let modal2 = document.getElementById('miModal2');
let flex2 = document.getElementById('flex2');
let abrir2 = document.getElementById('css');
let cerrar2 = document.getElementById('close2');

abrir2.addEventListener('click', function(e){
    e.preventDefault();
    modal2.style.display = 'block';
});


cerrar2.addEventListener('click', function(){
    modal2.style.display = 'none';
});

window.addEventListener('click', function(e){
    if(e.target == flex2){
        modal2.style.display = 'none'
    }
});

let modal3 = document.getElementById('miModal3');
let flex3 = document.getElementById('flex3');
let abrir3 = document.getElementById('sql');
let cerrar3 = document.getElementById('close3');

abrir3.addEventListener('click', function(e){
    e.preventDefault();
    modal3.style.display = 'block';
});


cerrar3.addEventListener('click', function(){
    modal3.style.display = 'none';
});

window.addEventListener('click', function(e){
    if(e.target == flex3){
        modal3.style.display = 'none'
    }
});

let modal4 = document.getElementById('miModal4');
let flex4 = document.getElementById('flex4');
let abrir4 = document.getElementById('sass');
let cerrar4 = document.getElementById('close4');

abrir4.addEventListener('click', function(e){
    e.preventDefault();
    modal4.style.display = 'block';
});


cerrar4.addEventListener('click', function(){
    modal4.style.display = 'none';
});

window.addEventListener('click', function(e){
    if(e.target == flex4){
        modal4.style.display = 'none'
    }
});


let modal5 = document.getElementById('miModal5');
let flex5 = document.getElementById('flex5');
let abrir5 = document.getElementById('uno');
let abrir6 = document.getElementById('uno1');
let cerrar5 = document.getElementById('close5');

abrir6.addEventListener('click', function(e){
    e.preventDefault();
    modal5.style.display = 'block';
});

abrir5.addEventListener('click', function(e){
    e.preventDefault();
    modal5.style.display = 'block';
});


cerrar5.addEventListener('click', function(){
    modal5.style.display = 'none';
});

window.addEventListener('click', function(e){
    if(e.target == flex5){
        modal5.style.display = 'none'
    }
});
