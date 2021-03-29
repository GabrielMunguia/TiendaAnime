
let resolucion = $(window).width();
if( resolucion<=769)
 {

    $(".submenu").click(function(){

        $(this).children("ul").slideToggle();
      
    })
    
    $("ul").click(function(p){
       p.stopPropagation();
    })
 }

 
