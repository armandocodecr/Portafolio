

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

let modal6 = document.getElementById('miModal6');
let flex6 = document.getElementById('flex6');
let abrir7 = document.getElementById('uno2');
let abrir8 = document.getElementById('uno3');
let cerrar6 = document.getElementById('close6');

abrir7.addEventListener('click', function(e){
    e.preventDefault();
    modal6.style.display = 'block';
});

 abrir8.addEventListener('click', function(e){
    e.preventDefault();
     modal6.style.display = 'block';
 });


cerrar6.addEventListener('click', function(){
    modal6.style.display = 'none';
});

window.addEventListener('click', function(e){
    if(e.target == flex6){
        modal6.style.display = 'none'
    }
});
