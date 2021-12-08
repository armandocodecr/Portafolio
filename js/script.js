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


// Animacion a la hora de hacer scroll

window.sr = ScrollReveal();

  sr.reveal('.nombre',{

     duration: 1000,
     origin: 'bottom',
     distance: '-100px'

  });

  sr.reveal('.navegador',{

    duration: 2000,
    origin: 'bottom',
    distance: '-100px'

 });

 sr.reveal('.texto-experiencia',{

    duration: 2000,
    origin: 'top',
    distance: '-100px'

 });

 sr.reveal('.contenedor-habilidades',{

    duration: 2000,
    origin: 'bottom',
    distance: '-100px'

 });


 sr.reveal('.contenedor-redes',{

    duration: 2000,
    origin: 'rigth',
    distance: '-100px'

 });

 sr.reveal('.contenedor-proyectos',{

    duration: 2000,
    origin: 'top',
    distance: '-100px'

 });
