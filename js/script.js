window.addEventListener("load", function(){
    const contenedor_loader = document.querySelector('.contenedor_loader');
    contenedor_loader.style.opacity = 0;
    contenedor_loader.style.visibility = 'hidden';
});


// Scroll

$(document).ready(function(){
   var altura = $('.menu').offset().top;
   
   $(window).on('scroll', function(){
       if ($(window).scrollTop() > altura){
           $('.menu').addClass('menu-fixed')
       }  else{
           $('.menu').removeClass('menu-fixed')
       }
   });
});

$(document).ready(function(){
   var ir_a = $('.desplazar'); 
   ir_a.click(function(event){
    event.preventDefault();
    $('body, html').animate(
        {
            scrollTop: $(this.hash).offset().top,
        }, 1000
    );
   })
})

let modal = document.getElementById('miModal');
let flex = document.getElementById('flex');
let abrir = document.getElementById('html');
let cerrar = document.getElementById('close');

abrir.addEventListener('click', function(e){
    e.preventDefault();
    modal.style.display = 'block';
});


cerrar.addEventListener('click', function(){
    modal.style.display = 'none';
});

window.addEventListener('click', function(e){
    if(e.target == flex){
        modal.style.display = 'none'
    }
});