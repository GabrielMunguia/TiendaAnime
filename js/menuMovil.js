const menuBtn=document.querySelector('#img-menuMovil');
console.log(menuBtn);
const subMenu=document.querySelectorAll('.submenu')

menuBtn.addEventListener('click',mostrarMenu);
console.log(menuBtn)


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


