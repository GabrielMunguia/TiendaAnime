// agrego todos los botones a la variable
const listaProductosBtns = document.querySelectorAll(".boton");
let listaProductos = [];
const carrito = document.querySelector("#listaProductos tbody");
// contenedor lista
const contLista = document.querySelector(".contenedorLista");
// enlaces para eliminar item
const eliminarItem = document.querySelectorAll(".borrarItem");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
// console.log(contLista)

//Agregando algunos eventos
listaProductosBtns.forEach((producto) => {
  producto.addEventListener("click", leerProducto);
});

document.addEventListener("DOMContentLoaded", () => {
  listaProductos = JSON.parse(localStorage.getItem("carrito")) || [];

  borrarDatosAntiguos();
  agregarProductos();
});
// console.log(contLista)

contLista.addEventListener("click", eliminarProd);

// console.log(vaciarCarrito)

vaciarCarrito.addEventListener("click", (e) => {
  listaProductos = [];
  agregarProductos();
});

// funciones

function eliminarProd(e) {
  event.stopPropagation();
  e.preventDefault();

  if (e.target.classList.contains("borrarItem")) {
    const id = e.target.parentElement.attributes[1].value;
    console.log(id);
    listaProductos = listaProductos.filter((prod) => prod.id !== id);
    agregarProductos();
    console.log(listaProductos);
  }
}

//capturo los datos del producto

function leerProducto(producto) {
  //contenedor de producto
  const contenedorProducto = producto.target.parentElement.parentElement;

  const productoDetalle = {
    titulo:
      contenedorProducto.children[0].firstElementChild.children[1]
        .firstElementChild.textContent,
    descripcion:
      contenedorProducto.children[0].firstElementChild.children[1].children[1]
        .textContent,
    precio: parseFloat(
      contenedorProducto.children[0].firstElementChild.children[2].firstElementChild.textContent.replace(
        "$",
        ""
      )
    ),
    imagen:
      contenedorProducto.children[0].firstElementChild.children[0]
        .firstElementChild.src,
    id: producto.target.attributes["id-prod"].value,
    cantidad: 1,
  };

  const existe = listaProductos.some(
    (producto) => producto.id == productoDetalle.id
  );
  if (existe) {
    const lstProductos = listaProductos.map((prod) => {
      if (prod.id == productoDetalle.id) {
        prod.cantidad++;
        return prod;
      } else {
        return prod;
      }
    });
    listaProductos = [...lstProductos];
  } else {
    listaProductos = [...listaProductos, productoDetalle];
  }

  agregarProductos();
  //  console.log(listaProductos)
}
//agrego los productos al carrito
function agregarProductos() {
  //Limpio la informacion antigua
  borrarDatosAntiguos();
  //agregando al carrito
  listaProductos.forEach((producto) => {
    const { titulo, descripcion, precio, imagen, id, cantidad } = producto;
    const row = document.createElement("tr");
    row.innerHTML = `
       <tr>
          <th><img src=${imagen} alt=""></th>
          <th>${titulo}</th>
          <th>$ ${precio}</th>
          <th  class='carrito-prod-cantidad'> ${cantidad}</th>
          <th><a href="#" prod-id=${id}> <span class="borrarItem">X</span></a></th>
       </tr>
       `;

    carrito.appendChild(row);
  });

  agregaProdLocalStorage();
}

function borrarDatosAntiguos() {
  while (carrito.firstChild) {
    carrito.removeChild(carrito.firstChild);
  }
}

function agregaProdLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(listaProductos));
}

//Con este codigo  agrego la informacion del producto del cual se quiere ver a detalle

const detalleProductos = document.querySelectorAll(".link-prod");

detalleProductos.forEach((prod) => {
  prod.addEventListener("click", (e) => {
    // event.preventDefault();
    
    const producto = {
      img: prod.children[0].firstElementChild.src,
      titulo: prod.children[1].children[0].textContent,
      descripcion: prod.children[1].children[1].textContent,
      id:prod.parentElement.parentElement.children[1].children[0].attributes[2].value,
      precio: parseFloat(
        prod.children[2].children[0].textContent.replace("$", "")
      ),
     
    };

  

    localStorage.setItem("detalle", JSON.stringify(producto));
    // console.log(producto.img)
  });
});
//  Fin

const botonAgregarProd = document.querySelectorAll("#botonAggProd");
console.log(botonAgregarProd);

//Evento agregar al carrito

if(botonAgregarProd.length>0){
    
botonAgregarProd[0].addEventListener("click", (e) => {
   

    const informacion = JSON.parse(localStorage.getItem("detalle"));
    
    let contadorCantida = document.querySelector("#contadorProd");
    if(contadorCantida.value==0){
        contadorCantida.value=1;
     
  }
    const producto2 = {
      titulo: informacion["titulo"],
      descripcion: document.getElementById("descripcion-prod"),
  
      precio: informacion["precio"],
      imagen: informacion["img"],
      id: informacion["id"],
      cantidad: parseFloat(contadorCantida.value)
    };
    console.log(informacion['id']);
    const existe = listaProductos.some((producto) => producto.id == producto2.id);
    if (existe) {
      const lstProductos = listaProductos.map((prod) => {
        if (prod.id == producto2.id) {
          prod.cantidad+= producto2.cantidad;
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
  
  //   console.log(listaProductos);
  });
}

// detecto si la cantidad del producto se modifico desde el carrito


// document.addEventListener("DOMContentLoaded", () => {
//     const cantidades=document.querySelectorAll('.carrito-prod-cantidad')
//    console.log(cantidades)
//    const valoresAceptados = /(\d+)/;
   
// //    /(\d+)/

//    cantidades.forEach((cantidad)=>{
//        cantidad.addEventListener('blur',(e)=>{
//            const dato=e.target.textContent;
//           if(dato.match(valoresAceptados)){
//               console.log("pasoo")
//           }
//           else{
//               console.log("no paso")
//           }
        
          
//        })
//    })
//   });


// contenteditable=true


const btnCarrito=document.querySelector('.contenedorCarrito').firstElementChild;

btnCarrito.addEventListener('click',(e)=>{
  console.log('click carrtio')
})