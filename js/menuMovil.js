const menuBtn=document.querySelector('#img-menuMovil');

const subMenu=document.querySelectorAll('.submenu')

menuBtn.addEventListener('click',mostrarMenu);



//Muestro el menu al hacer click , y le quito algunas propiedades a los sub menu

function mostrarMenu(){
    const menu= document.querySelector('.menu')
    const auxCerrarMenu=document.querySelector('.trasladarMenu');
    if(auxCerrarMenu){
        menu.classList.remove('trasladarMenu')
       
    }
    else{
        menu.classList.add('trasladarMenu')
        
        
    }
    
    
}
//El siguiente codigo hacer que al tener el menu movil se despliegue al darle click

subMenu.forEach(menu=>{
     menu.addEventListener('click',(e)=>{
       
          if(e.target.classList.contains('link')){
              console.log('link')
          }else{
              const sub= menu.querySelector('.subMenu-M');
              sub.classList.toggle('menuDespliegue');
              sub.style.animation = "menuMovil 1s";

             
          }
     })
})