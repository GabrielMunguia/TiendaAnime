class menu extends HTMLElement{
    constructor (){
        super();
    }
    connectedCallback(){
     this.innerHTML=` <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <link rel="stylesheet" href="css/style-general.css">
         <title>Document</title>
     </head>
     <body>
         <div class="envios">
             <a href="quienes-somos.html">Quienes Somos</a>
             <a href="#">Contactanos</a>
           </div>
           <div class="busqueda">
             <div class="logo">
               <!-- <img src="assets/images/logo.png" alt="" /> -->
               <a class="logo-a" href="index.html"></a>
             </div>
       
             <div class="busqueda-div">
               <input
                 type="search"
                 name=""
                 id=""
                 placeholder="Busqueda en el catalogo"
               />
               <span class="icon-search-1"></span>
             </div>
       
             
           </div>
           <header id="menu">
             <input type="checkbox" id="boton-menu" />
             <label for="boton-menu" class="icon-menu"></label>
             <nav class="menu">
               <ul id="menus" class="menu-x">
                 <li id="menu-ul"><a href="#">NUEVOS</a></li>
                 <li><a href="#">OFERTAS</a></li>
       
                 <li class="submenu" id="submenu">
                   <a class="link" href="accesorios.html"
                     >ACCESORIOS <span class="icon-down-open"></span
                   ></a>
                   <ul id="sub-menu">
                     <li><a href="llaveros.html ">LLAVEROS </a></li>
                     <li><a href="pulseras.html">PULSERAS</a></li>
                     <li><a href="anillos.html">ANILLOS</a></li>
                     <li><a href="collares.html">COLLARES</a></li>
                     <li><a href="relojes.html">RELOJES</a></li>
                   </ul>
                 </li>
                 <li class="submenu" id="submenu">
                   <a class="link" href="#"
                     >COLLECTIBLES <span class="icon-down-open"></span
                   ></a>
                   <ul>
                     <li><a href="#">Bandai Banpresto</a></li>
                     <li><a href="#">Funko pop</a></li>
                     <li><a href="#">Good smile company</a></li>
                   </ul>
                 </li>
                 <li class="submenu" id="submenu">
                   <a class="link" href="#"
                     >HOGAR <span class="icon-down-open"></span
                   ></a>
                   <ul>
                     <li><a href="#">Tazas</a></li>
                     <li><a href="#">Lamparas</a></li>
                     
                   </ul>
                 </li>
                 <li class="submenu" id="submenu">
                   <a class="link" href="#"
                     >JUEGOS DE VIDEO <span class="icon-down-open"></span
                   ></a>
                   <ul>
                     <li><a href="#">sub-Item 1</a></li>
                     <li><a href="#" sub->Item 2</a></li>
                     <li><a href="#">sub-Item 3</a></li>
                     <li><a href="#">sub-Item 4</a></li>
                     <li><a href="#">sub-Item 5</a></li>
                   </ul>
                 </li>
                 <li class="link" class="submenu" id="submenu">
                   <a href="#"
                     >PELICULAS Y SERIES <span class="icon-down-open"></span
                   ></a>
                   <ul>
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
             </nav>
           </header>
         
     </body>
     </html>`
    }
}

window.customElements.define("menu-opc",menu);