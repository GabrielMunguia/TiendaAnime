
var resolucion = $(window).width();
if( resolucion<=769)
 {

    $(".submenu").click(function(){
        $(this).children("ul").slideToggle();
    })
    
    $("ul").click(function(p){
       p.stopPropagation();
    })
 }

// var menu= document.getElementById('menu');
// var menu2=document.getElementById('menu-item');
// var altura = menu.offsetTop;
// window.addEventListener('scroll', function(){
//     if(window.pageYOffset>altura){
//         menu.classList.add('fixed');
//         menu2.classList.add('cambio');
        
//     }
//     else{
//         menu.classList.remove('fixed');
//         menu2.classList.remove('cambio');
//     }
// })

