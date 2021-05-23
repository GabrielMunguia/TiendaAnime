let listaProductos = [];
const carrito = document.querySelector("#listaProductos tbody");
const carritoDetalle = document.querySelector("#tabla-carrito tbody");
const contLista = document.querySelector('.contenedorLista');

const eliminarItem = document.querySelectorAll(".borrarItem");
const vaciarCarrito = document.querySelector("#vaciar-carrito");





// con esta funcion limpio el carrito de su array y desde el local storage
vaciarCarrito.addEventListener("click", (e) => {
    listaProductos = [];
    localStorage.removeItem('carrito')
    agregarProductos();
});


//Al cargar todo el documento se ejecutan algunas funciones y se le da
document.addEventListener("DOMContentLoaded", () => {
    listaProductos = JSON.parse(localStorage.getItem("carrito")) || [];
    borrarDatosAntiguos();
    agregarProductos();
    calcularTotal()

    //Le agrego un evento a cada boton de las targetas de los productos , ("Agregar al carrito");
    const listaProductosBtns = document.querySelectorAll(".boton");
    listaProductosBtns.forEach((producto) => {

        producto.addEventListener("click", leerProducto);
    });
    detalleProducto();


});


//Esta funcion captura todos los datos del producto agregandolos a un objeto
function leerProducto(producto) {
    console.log('click')
        //Esta variable se ubica desde el contenedor principal del producto("Grid-Item")
    const contenedorProducto = producto.target.parentElement.parentElement;

    const productoDetalle = {
        titulo: contenedorProducto.querySelector('.prod-detalles-descripcion h2').textContent,
        descripcion: contenedorProducto.querySelector('.prod-detalles-descripcion p').textContent,
        precio: parseFloat(
            contenedorProducto.querySelector('.prod-detalles-precio span').textContent.replace("$", "")
        ),
        imagen: contenedorProducto.querySelector('.prod-detalles-img img').src,
        id: producto.target.attributes["id-prod"].value,
        cantidad: 1,
    };


    // verifico si el producto ya se encontraba en el carrito


    const existe = listaProductos.some(
        (producto) => producto.id == productoDetalle.id
    );


    //si se encuentra solo modifico su cantidad y la aumento en uno
    if (existe) {
        const lstProductos = listaProductos.map((prod) => {

            if (prod.id == productoDetalle.id) {
                prod.cantidad++;
                return prod;
            } else {
                return prod;
            }
        });

        //actualizo la listaProductos

        listaProductos = [...lstProductos];

    } else {
        // si no se encontraba en listaProductos se lo agrego
        listaProductos = [...listaProductos, productoDetalle];
    }

    //Llamo la siguiente funcion
    agregarProductos();

}



//agrego los productos al carrito y tambien los agrega al local storage
function agregarProductos() {
    //Limpio la informacion antigua
    borrarDatosAntiguos();


    //agregando al carrito
    listaProductos.forEach((producto) => {

        //De esta forma saco los datos del producto, como se llaman igual  no es necesario especificar las varibles
        const { titulo, descripcion, precio, imagen, id, cantidad } = producto;

        let auxTitulo = '';
        let max = titulo.split(' ').length;

        //Con esto redusco el titulo para agregarlo al carrito para que al mostrarlo no sea demasiado largo
        if (max < 3) {
            max = 2;
        } else {
            max = 3
        }
        for (let i = 0; i < max; i++) {
            auxTitulo += titulo.split(' ')[i] + ' ';
        }


        if (carritoDetalle) {

            const row2 = document.createElement("tr");

            row2.innerHTML = `
    <tr>
    <td>
        <div class="carrito-detalle-img">
         <img src=${imagen} alt="">

        </div>
        <div class="carrito-detalle-descripcion">
            ${descripcion}
        </div>

    </td>

    <th>$ <span>${precio}</span></th>
    <th><input prod-id=${id}  type="number" value=${cantidad} min=1 class='inputCarritoCantidad'></th>
    <th></th>
    <th><a class='eliminarProd2' href="#" prod-id=${id}> <span  >X</span></a></th>
    
    </tr>
   
  
</tr>
       `;
            carritoDetalle.appendChild(row2);

            calcularTotal();
            agregarEliminarLink()

        }


        //Creo un tr y se lo agrego a la tabla del carrito de compras
        const row = document.createElement("tr");
        row.innerHTML = `
       <tr>
          <th><img src=${imagen} alt=""></th>
          <th>${auxTitulo}</th>
          <th>$ ${precio}</th>
      
          <th><input prod-id=${id}  type="number" value=${cantidad}  min=1 class='inputCarritoCantidad'></th>
          <th><a href="#" prod-id=${id}> <span class="borrarItem">X</span></a></th>
         
       </tr>
       `;
        carrito.appendChild(row);


    });


    agregaProdLocalStorage();

}

//Agrego la lista de productos al local storage
function agregaProdLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(listaProductos));
}





//Esta funcion sirve para eliminar los productos tanto del carrito como del localstorage;

contLista.addEventListener('click', eliminarProd)


function eliminarProd() {
    const eliminarProdCarrito = document.querySelectorAll('.borrarItem');
    eliminarProdCarrito.forEach((btn => {


        btn.addEventListener('click', eliminarProdLista)
    }))


}


function eliminarProdLista(e) {
    const id = e.target.parentElement.attributes[1].value

    listaProductos = listaProductos.filter((prod) => prod.id !== id);
    agregarProductos();

}






//Con esta funcion Limpio todos los datos de la tabla de carrito
function borrarDatosAntiguos() {
    if (carritoDetalle) {
        while (carritoDetalle.firstChild) {
            carritoDetalle.removeChild(carritoDetalle.firstChild);
        }
    }

    while (carrito.firstChild) {
        carrito.removeChild(carrito.firstChild);
    }

}


// detecto si la cantidad del producto se modifico desde el carrito

let inputCarrito;

function actualizarDatos() {
    inputCarrito = document.querySelectorAll('.inputCarritoCantidad')
    return inputCarrito
}


function modificarCantidadCarrito() {

    let input = actualizarDatos()
    inputCarrito.forEach((inputCarrito) => {
        inputCarrito.addEventListener('blur', (e) => {



            const id = e.target.attributes[0].value




            const existe = listaProductos.some((producto) => producto.id == id);

            if (existe) {
                const lstProductos = listaProductos.map((prod) => {
                    if (prod.id == id) {
                        // console.log(inputCarrito.value)
                        if (inputCarrito.value <= 0) {
                            inputCarrito.value = 1;
                        }
                        prod.cantidad = parseInt(inputCarrito.value);

                        return prod;
                    } else {
                        return prod;
                    }


                });
                listaProductos = [...lstProductos];
            }
            agregarProductos();
            calcularTotal()
                //  console.log(listaProductos)
        })

        if (carritoDetalle) {
            calcularTotal()

        }
    })
    actualizarDatos()

}

modificarCantidadCarrito();

// contenteditable=true






const btnCarrito = document.querySelector('#carritoImg');

btnCarrito.addEventListener('mouseenter', (e) => {

    actualizarDatos()
    modificarCantidadCarrito();

})

// 
if (carritoDetalle) {


    carritoDetalle.addEventListener('mouseenter', (e) => {

        actualizarDatos()

        modificarCantidadCarrito();

    })



}

function agregarEliminarLink() {
    const eliminarLink = document.querySelectorAll('.eliminarProd2')
    eliminarLink.forEach((eliminar) => {

        eliminar.addEventListener('click', (e) => {

            e.preventDefault();

            const id = e.target.parentElement.attributes[2].value


            listaProductos = listaProductos.filter((prod) => prod.id !== id);
            agregarProductos();
            calcularTotal()





        })
    })
}










btnCarrito.addEventListener('click', (e) => {
    console.log('click')
    location = "/html/carrito.html";



})


//Con este codigo  agrego la informacion del producto del cual se quiere ver a detalle

function detalleProducto() {
    const detalleProductos = document.querySelectorAll(".link-prod");
    detalleProductos.forEach((prod) => {
        prod.addEventListener("click", (e) => {


            const producto = {
                img: prod.querySelector('.prod-detalles-img img').src,
                titulo: prod.querySelector('.prod-detalles-descripcion h2').textContent,
                descripcion: prod.querySelector('.prod-detalles-descripcion p').textContent,
                id: prod.parentElement.parentElement.querySelector('.boton').attributes["id-prod"].value,
                precio: parseFloat(
                    prod.querySelector('.prod-detalles-precio span').textContent.replace("$", ""),

                )
            };
            //Agrego la informacion al localstorage para poderlo mostrar en la pagina de detalles
            localStorage.setItem("detalle", JSON.stringify(producto));
        });
    });
}

//EL SIGUIENTE CODIGO SIRVE EN EL PARA EL APARTADO DE DETALLES , POR EL MOMENTO LO EH DEJADO ASI 
//SI EL TIEMPO NOS FAVORECE  PASARE EL PROYECTO A MODULOS PARA PODER REUTILIZAR EL CODIGO Y SEPARAR MAS LAS FUNCIONES SEGUN SE NECESITEN

const validarPaginaDetalle = document.querySelector('.pagDetalles');
if (validarPaginaDetalle) {
    // Muestro los datos del local Storage al html

    const img = document.getElementById('prod-img')
    const informacion = JSON.parse(localStorage.getItem('detalle'));
    const titulo = document.getElementById('titulo-prod')
    const descripcion = document.getElementById('descripcion-prod');
    const precio = document.getElementById('precio-prod')

    img.src = informacion['img'];
    titulo.textContent = informacion['titulo']
    descripcion.textContent = informacion['descripcion'];
    precio.textContent = `$ ${informacion['precio']}`


    //Detecto cuando se dio click al boton agregar al carrito



    document.addEventListener('DOMContentLoaded', () => {
        agregarProductoAlCarrito();
    })

    function agregarProductoAlCarrito() {
        const botonAgregarProd = document.querySelector("#botonAggProd");
        botonAgregarProd.addEventListener('click', () => {
            let contadorCantida = document.querySelector("#contadorProd");
            if (contadorCantida.value <= 0) {
                contadorCantida.value = 1;
            }
            const producto2 = {
                titulo: informacion["titulo"],
                descripcion: informacion['descripcion'],
                precio: informacion["precio"],
                imagen: informacion["img"],
                id: informacion["id"],
                cantidad: parseFloat(contadorCantida.value)
            };
            console.log(informacion);
            const existe = listaProductos.some((producto) => producto.id == producto2.id);
            if (existe) {
                const lstProductos = listaProductos.map((prod) => {
                    if (prod.id == producto2.id) {
                        prod.cantidad += producto2.cantidad;
                        producto2.cantidad = 1;
                        return prod;
                    } else {
                        return prod;
                    }
                });
                listaProductos = [...lstProductos];
            } else {
                listaProductos = [...listaProductos, producto2];
            }
            agregarProductos();
        })

    }








}



//calculo el   total de los productos
function calcularTotal() {

    // comprobarProductosCarrito()
    let envio = 10;

    let subTotal = 0;
    if (carritoDetalle) {
        carritoDetalle.querySelectorAll('.inputCarritoCantidad').forEach((cantidad) => {

            let total = cantidad.parentElement.nextElementSibling;
            let precio = cantidad.parentElement.previousElementSibling.children[0].textContent;
            precio = Number(precio);
            let cantidadProd = cantidad.value
            let totalValor = cantidadProd * precio;


            total.textContent = `${totalValor.toFixed(2)}`
            subTotal += totalValor;


        })
        if (subTotal.toFixed(2) == 0) {
            envio = 0;
        }

        document.querySelector("#tabla-carrito > tfoot > tr.tfoot-tr-1 > td:nth-child(2) > div > p:nth-child(1) > span").textContent = subTotal.toFixed(2);
        document.querySelector("#tabla-carrito > tfoot > tr.tfoot-tr-1 > td:nth-child(2) > div > p:nth-child(2) > span").textContent = envio;
        document.querySelector("#tabla-carrito > tfoot > tr.tfoot-tr-1 > td:nth-child(2) > div > p:nth-child(3) > span").textContent = ((subTotal) + envio).toFixed(2);
    }





}