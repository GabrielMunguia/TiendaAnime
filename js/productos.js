// agrego todos los botones a la variable
const listaProductosBtns = document.querySelectorAll(".boton");
let listaProductos = [];
const carrito = document.querySelector("#listaProductos tbody");
const carritoDetalle=document.querySelector("#tabla-carrito tbody");
console.log(carritoDetalle)
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
  calcularTotal()

  

  borrarDatosAntiguos();
  agregarProductos();
});
// console.log(contLista)

contLista.addEventListener("click", eliminarProd);

// console.log(vaciarCarrito)

vaciarCarrito.addEventListener("click", (e) => {
  listaProductos = [];
  localStorage.removeItem('carrito')
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
      
          <th><input prod-id=${id}  type="number" value=${cantidad}  min=1 class='inputCarritoCantidad'></th>
          <th><a href="#" prod-id=${id}> <span class="borrarItem">X</span></a></th>
       </tr>
       `;

       if(carritoDetalle){
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
       <th>$xxx</th>
       <th>  <button   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> </button> </th>
     
   </tr>
          `;
       
   

       
     carritoDetalle.appendChild(row2);
       }

       
    carrito.appendChild(row);
  
    
  



  });

  agregaProdLocalStorage();
  calcularTotal();
  
  
 
}

function borrarDatosAntiguos() {

  if(carritoDetalle){
    while (carritoDetalle.firstChild) {
      carritoDetalle.removeChild(carritoDetalle.firstChild);
    }
  }
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
// console.log(botonAgregarProd);

//Evento agregar al carrito

if(botonAgregarProd.length>0){
    
botonAgregarProd[0].addEventListener("click", (e) => {
   

    const informacion = JSON.parse(localStorage.getItem("detalle"));
    
    let contadorCantida = document.querySelector("#contadorProd");
    if(contadorCantida.value==0){
        contadorCantida.value=1;
     
  }
  else if(contadorCantida.value<0){
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
          producto2.cantidad=1;
       
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

let inputCarrito;
function actualizarDatos(){
  inputCarrito=document.querySelectorAll('.inputCarritoCantidad')
  return inputCarrito
}
 

function modificarCantidadCarrito(){
  
  let input=actualizarDatos()
   inputCarrito.forEach((inputCarrito) => {
     inputCarrito.addEventListener('blur',(e)=>{
       
        
         
          const id=e.target.attributes[0].value 
      
       
        
     
       const existe = listaProductos.some((producto) => producto.id ==id);
      
       if (existe) {
         const lstProductos = listaProductos.map((prod) => {
           if (prod.id == id) {
            // console.log(inputCarrito.value)
            if(inputCarrito.value<=0){
              inputCarrito.value=1;
            }
             prod.cantidad=parseInt( inputCarrito.value);
            
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

      if(carritoDetalle){
          calcularTotal()
          console.log('dasdsa')
         }
   })
   actualizarDatos()
  
}

modificarCantidadCarrito();

// contenteditable=true






const btnCarrito=document.querySelector('.contenedorCarrito').firstElementChild;

btnCarrito.addEventListener('mouseenter',(e)=>{

  actualizarDatos()
  modificarCantidadCarrito();

})

// 
if(carritoDetalle){


  carritoDetalle.addEventListener('mouseenter',(e)=>{

    actualizarDatos()
    
    modificarCantidadCarrito();
    
    })
    
    document.addEventListener("DOMContentLoaded",()=>{
      calcularTotal()
    })


   

    
  }
      

  







btnCarrito.addEventListener('click',(e)=>{
  console.log('click')
  location.href ="../carrito.html";
})


//calculo el   total de los productos
function  calcularTotal(){
  carritoDetalle.querySelectorAll('.inputCarritoCantidad').forEach((cantidad)=>{
     let total=cantidad.parentElement.nextElementSibling;
     let  precio=cantidad.parentElement.previousElementSibling.children[0].textContent;
     precio=Number(precio);
     let cantidadProd= cantidad.value 
     const totalValor= cantidadProd*precio;
      total.textContent=`${totalValor}`
   
    
    
  })
}



