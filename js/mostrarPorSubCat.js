
const subCategoria= localStorage.getItem("subCategoria");
console.log(subCategoria)
//Productos es nuestra base de datos
productos.forEach((producto)=>{

    if(producto.subcategoria==subCategoria){
        
      

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


const subTitulo=document.querySelector("body > main > div.filtro-ordenar > div:nth-child(1) > h3");
const ubicacion= document.querySelector('#ubicacion');
//verifico si la subcategoria es cf para cambiar el dato
if(subCategoria=='cf'){
   
subTitulo.textContent='Ficcion';
ubicacion.textContent='FICCION';
}
else{
    subTitulo.textContent=subCategoria.toUpperCase();
    ubicacion.textContent=`${subCategoria.toUpperCase()}`;
    
}


function comprobarDisponible(producto){
    
   if(producto.cantidad<1){
       return 'prodNoDisponible'
   }
   return 'prodDisponible'

}

