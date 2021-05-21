let palabraBusqueda= localStorage.getItem("busqueda");

document.addEventListener('DOMContentLoaded',()=>{
    mostrarProductosBusqueda();
})

function mostrarProductosBusqueda(){

    
productos.forEach((producto)=>{

    if(comprobarCoincidencia(producto)){
        
      

        const div = document.createElement('div');
        div.classList.add('grid-item')
        div.innerHTML= ` 
        <div class=${ comprobarDisponible(producto)}>Agotado</div>
        <div class="prod-detalles">
        <a class="link-prod" href="detalle.html">
          <div class="prod-detalles-img">
            <img src=${producto.img} />
          </div>
    
          <div class="prod-detalles-descripcion">
            <h2>${producto.titulo}</h2>
            <p>${producto.descripcio}</p>
          </div>
    
          <div class="prod-detalles-precio">
            <span>$ ${producto.precio}</span>
          </div>
        </a>
      </div>
    
      <div class="prod-boton">
        <button class="boton" type="submit" id-prod=${producto.id}>Agregar al carrito</button>
      </div>
    </div>
    
      </div>`
    
      const grid= document.querySelector('.grid-container');
      grid.appendChild(div);
        
    }
  
})


function comprobarDisponible(producto){
 
   if(producto.cantidad<1){
       return 'prodNoDisponible'
   }
   return 'prodDisponible'

}



}

function comprobarCoincidencia(prod){

  
if(
    prod.titulo.toLowerCase().indexOf(palabraBusqueda.toLowerCase())!=-1 ||
    prod.descripcio.toLowerCase().indexOf(palabraBusqueda.toLowerCase())!=-1 ||
    prod.categoria.toLowerCase().indexOf(palabraBusqueda.toLowerCase())!=-1 ||
    prod.subcategoria.toLowerCase().indexOf(palabraBusqueda.toLowerCase())!=-1 
){
    return true;
    
}
}


function comprobarResultado(){
  const existe=document.querySelector('.grid-container').firstElementChild;
  if(existe){
  
    return true;
  }
  else{
    
    return false;
  }
  
}



