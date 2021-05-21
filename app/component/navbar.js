
  const menu=document.querySelector('#header');
  console.log('hola')

menu.innerHTML=` <div class="envios">
<a href="/html/quienes-somos.html">Quienes Somos</a>
<a href="#">Contactanos</a>
</div>

<div class='busquedaCarrito'>

  <div class='logo'>
     <a class="logo-a" href="/index.html"><img src="/assets/img/logo/logo-tienda.png" alt=""></a>
  </div>

  

  <div class='busqueda'>
     <input type="search" id="inputBusqueda" placeholder='Ingrese su busqueda'>
      <a id='busquedaButton' href='/html/busqueda.html'><img src="/assets/img/iconos/lupa.png" alt="" ></a>
     <div id='alerta' class='oculto'> <img src='/assets/img/iconos/alerta.png'> <p></p></div>
  </div>
  <div class="contenedorCarrito">
  <div id='carritoCantidad'></div>
  <a href='/html/carrito.html'><img id='carritoImg' src="/assets/img/carrito.svg" alt=""></a>

  <div class="contenedorLista">
    <table id="listaProductos">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th></th>
        </tr>

      </thead>
      <tbody>

      </tbody>
    </table>

    <a href="#" id="vaciar-carrito" class="vaciarCarrito">Vaciar Carrito</a>
  </div>


</div>



</div>


</div>

<div class='btn-Menu'>
<div>
  <img id='img-menuMovil' src="/assets/img/menu.png" alt="">
</div>

</div>



<nav class="menu">

<ul id="menus " class="menu-x">
  <li id="menu-ul"><a href="#">NUEVOS</a></li>
  <li><a href="#">OFERTAS</a></li>

  <li class="submenu">
    <a class="link" href="accesorios.html">ACCESORIOS <span class="icon-down-open"></span></a>
    <ul class="subMenu-M">
      <li><a href="/html/llaveros.html ">LLAVEROS </a></li>
      <li><a href="/html/billeteras.html">BILLETERAS</a></li>
      <li><a href="/html/anillos.html">ANILLOS</a></li>
      <li><a href="/html/collares.html">COLLARES</a></li>
      <li><a href="/html/relojes.html">RELOJES</a></li>
    </ul>
  </li>
  <li class="submenu">
    <a class="link" href="#">COLLECTIBLES <span class="icon-down-open"></span></a>
    <ul class="subMenu-M">
      <li><a href="#">Bandai Banpresto</a></li>
      <li><a href="#">Funko pop</a></li>
      <li><a href="#">Good smile company</a></li>
    </ul>
  </li>
  <li class="submenu">
    <a class="link" href="llaveros.html">HOGAR <span class="icon-down-open"></span></a>
    <ul>
      <li><a href="#">Tazas</a></li>
      <li><a href="#">Lamparas</a></li>

    </ul>
  </li>
  <li class="submenu  " id="submenu">
    <a class="link" href="#">JUEGOS DE VIDEO <span class="icon-down-open"></span></a>
    <ul class="subMenu-M">
      <li><a href="#">sub-Item 1</a></li>
      <li><a href="#" sub->Item 2</a></li>
      <li><a href="#">sub-Item 3</a></li>
      <li><a href="#">sub-Item 4</a></li>
      <li><a href="#">sub-Item 5</a></li>
    </ul>
  </li>
  <li class="link" class="submenu" ubmenu">
    <a href="#">PELICULAS Y SERIES <span class="icon-down-open"></span></a>
    <ul class="subMenu-M">
      <li><a href="#">sub-Item 1</a></li>
      <li><a href="#">sub-Item 2</a></li>
      <li><a href="#">sub-Item 3</a></li>
      <li><a href="#">sub-Item 4</a></li>
      <li><a href="#">sub-Item 5</a></li>
    </ul>
  </li>
  <li>
    <a href="#">ROPA</a>
  </li>
</ul>
</nav>`


//EL SIGUIENTE CODIGO CORRESPONDE A LA BARRA DE BUSQUEDA Y A SU RESPECTIVO BOTON
//GUARDO EL TEXTO EN LOCAL STORAGE Y LUEGO REDIRIJO A LA PAGINA DE BUSQUEDA.HTML CON SU RESPECTIVO SCRIPT


const inputBusqueda=document.querySelector('#inputBusqueda');
const btnBusqueda=document.querySelector('#busquedaButton');
document.addEventListener('DOMContentLoaded',busqueda());

function busqueda(){
   
  //Agrego un evento al boton

  btnBusqueda.addEventListener('click',ValidarInput);
  inputBusqueda.addEventListener('keyup',validacionEnter);
  btnBusqueda.addEventListener('search',simularClick);
 
 
}

function validacionEnter(e){
   
     if(e.code==='Enter'){
        btnBusqueda.click();
     }
}

function simularClick(){
  btnBusqueda.click();
}
function ValidarInput(e){
 
   if(inputBusqueda.value==''){
      e.preventDefault();
      mostrarAlertaBusqueda('Rellene este campo');
    
      return
   }
   localStorage.setItem('busqueda', inputBusqueda.value);
   location.href ="/html/busqueda.html";
}

function mostrarAlertaBusqueda(msg){
   const  alerta=document.querySelector('#alerta')

   alerta.querySelector('p').textContent=msg;
   alerta.classList.remove('oculto');
   alerta.classList.add('Alerta');
   setTimeout(() => {
      alerta.classList.remove('Alerta')
      alerta.classList.add('oculto');
    
   }, 1500);
  
}

