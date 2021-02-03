

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