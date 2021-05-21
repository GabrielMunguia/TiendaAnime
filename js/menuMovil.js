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


