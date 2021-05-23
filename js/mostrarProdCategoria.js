const categoria = document.querySelector('.grid-container').attributes[1].value;

productos.forEach((producto) => {

    if (producto.categoria == categoria) {



        const div = document.createElement('div');
        div.classList.add('grid-item')
        div.innerHTML = ` 
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

        const grid = document.querySelector('.grid-container');
        //Si el producto en cuestion es una  prenda de vestir le agrego el atributo talla
        if (categoria == 'camisas' || categoria == 'sudaderas') {
            let aux = div.querySelector('.boton').setAttribute('talla', producto.talla)

        }
        grid.appendChild(div);

    }

})


function comprobarDisponible(producto) {

    if (producto.cantidad < 1) {
        return 'prodNoDisponible'
    }
    return 'prodDisponible'

}

//Esta funcion comprueba si el producto es camisa o sudadera si eso es verdadero agrega las tallas