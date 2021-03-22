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
              console.log(`hola ${n1[i].textContent}`);
        
              n1[i].classList.remove("cambiosSub");
            }
        }
      });


}
let ancho= window.innerWidth;
if(ancho>768){
   script();
}
  
 
 





