//Esta variable comprueba si  ya se agrego un producto al carrito


// agrego todos los botones a la variable


const listaProductosBtns = document.querySelectorAll(".boton");
let listaProductos = [];
const carrito = document.querySelector("#listaProductos tbody");
const carritoDetalle=document.querySelector("#tabla-carrito tbody");

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
  calcularTotal()
  detalleProducto();
  

  

 
});


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

  console.log(producto.target.parentElement.parentElement.parentElement.parentElement)
  const contenedorProducto = producto.target.parentElement.parentElement;
  console.log(  contenedorProducto.children[1].firstElementChild.children[0].firstElementChild.src)

  const productoDetalle = {
    titulo:
    contenedorProducto.children[1].firstElementChild.children[1].firstElementChild.textContent,
    descripcion:
    contenedorProducto.children[1].firstElementChild.children[1].children[1].textContent,
    precio: parseFloat(
      contenedorProducto.children[1].firstElementChild.children[2].firstElementChild.textContent.replace(
        "$",
        ""
      )
    ),
    imagen:
    contenedorProducto.children[1].firstElementChild.children[0].firstElementChild.src,
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


    let auxTitulo='';
    let max=titulo.split(' ').length;
    if(max<3){
      max=2;
    }
    else{
      max=3
    }
    for(let i=0;i<max;i++){
      auxTitulo+=titulo.split(' ')[i]+' ';
    }
  
 
    

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
       <th></th>
       <th><a class='eliminarProd2' href="#" prod-id=${id}> <span  >X</span></a></th>
       
       </tr>
      
     
   </tr>
          `;
       
   

       
     carritoDetalle.appendChild(row2);
       }

       
    carrito.appendChild(row);
  
    
  



  });

  agregaProdLocalStorage();
  calcularTotal();
  agregarEliminarLink()
  
  
 
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

function detalleProducto(){
  
  const detalleProductos = document.querySelectorAll(".link-prod");

detalleProductos.forEach((prod) => {
  prod.addEventListener("click", (e) => {
  
    // event.preventDefault();
    // console.log(prod.parentElement.parentElement.children[2].firstElementChild.attributes[2].value)
    
    const producto = {
      img: prod.children[0].firstElementChild.src,
      titulo: prod.children[1].children[0].textContent,
      descripcion: prod.children[1].children[1].textContent,
      id:prod.parentElement.parentElement.children[2].firstElementChild.attributes[2].value,
      precio: parseFloat(
        prod.children[2].children[0].textContent.replace("$", "")
      
      ),
    
     
    };

    console.log(producto)

  

    localStorage.setItem("detalle", JSON.stringify(producto));
    // console.log(producto.img)
  });
});
}
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
      descripcion:informacion['descripcion'],
  
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
    
   


   

    
  }

  function agregarEliminarLink(){
    const eliminarLink=document.querySelectorAll('.eliminarProd2')
    eliminarLink.forEach((eliminar)=>{
      eliminar.addEventListener('click',(e)=>{
        
          e.preventDefault();
          
          const id = e.target.parentElement.attributes[2].value

    
          listaProductos = listaProductos.filter((prod) => prod.id !== id);
          agregarProductos();

         
         
        
        
      })
    })
  }
      

  







btnCarrito.addEventListener('click',(e)=>{
  console.log('click')
    location.href ="../carrito.html";

 
  
})


//calculo el   total de los productos
function  calcularTotal(){
  
  // comprobarProductosCarrito()
 
   let subTotal=0;
   if(carritoDetalle){
    carritoDetalle.querySelectorAll('.inputCarritoCantidad').forEach((cantidad)=>{
    
      let total=cantidad.parentElement.nextElementSibling;
      let  precio=cantidad.parentElement.previousElementSibling.children[0].textContent;
      precio=Number(precio);
      let cantidadProd= cantidad.value 
      let totalValor= cantidadProd*precio;
      
    
       total.textContent=`${totalValor.toFixed(2)}`
       subTotal+=totalValor;
 
     
   })
   document.querySelector("#tabla-carrito > tfoot > tr.tfoot-tr-1 > td:nth-child(2) > div > p:nth-child(1) > span").textContent= subTotal.toFixed(2);
   document.querySelector("#tabla-carrito > tfoot > tr.tfoot-tr-1 > td:nth-child(2) > div > p:nth-child(2) > span").textContent=(subTotal/4).toFixed(2);
   document.querySelector("#tabla-carrito > tfoot > tr.tfoot-tr-1 > td:nth-child(2) > div > p:nth-child(3) > span").textContent=((subTotal)+(subTotal/2)).toFixed(2);
   }


 

  
}


function comprobarProductosCarrito(){
  let boolCompra;
    if(listaProductos.length>0){
      boolCompra=true;
    }else{
      boolCompra=false;
     
    }

    return boolCompra;

}




