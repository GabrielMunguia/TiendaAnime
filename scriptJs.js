//   let nav = document.querySelector(".menu");



const script =()=>{
    document.addEventListener("wheel", () => {
        let top = window.scrollY;
        let nav = document.getElementById("menu");
        let n1 = Array.from(document.querySelectorAll("ul ul li"));
       
        n1
        if (top > 40 && window.screen.width>800) {
          nav.classList.add("cambios");
         
          console.log(n1);
          for (let i = 0; i < n1.length; i++) {
            console.log(`hola ${n1[i].textContent}`);
      
            n1[i].classList.add("cambiosSub");
          }
        } else {
          nav.classList.remove("cambios");
          for (let i = 0; i < n1.length; i++) {
              // console.log(`hola ${n1[i].textContent}`);
        
              n1[i].classList.remove("cambiosSub");
            }
        }
      });


}


const enlaces= document.getElementsByClassName('link');
let ancho= window.innerWidth;



if(ancho>768){
   script();
   
}
// AQUI QUITO EL LINK DE LOS ENLACES PARA QUE EL MENU MOVIL FUNCIONE BIEN
else {
  let x=Array.from(enlaces);
  x[0].href="#";
  console.log(x[0].href)
  
}


window.onresize = resize;

function resize()
{ 
  let ancho2= window.innerWidth;
 console.log(ancho2);
 if(ancho2>768){
  window.location.reload(); 
  script();
  
}
// AQUI QUITO EL LINK DE LOS ENLACES PARA QUE EL MENU MOVIL FUNCIONE BIEN
else {
  window.location.reload(); 
 let x=Array.from(enlaces);
 x[0].href="#";
 console.log(x[0].href)

 
 
}
}






  
 
 





