const categoriaPrinc=  localStorage.getItem("catPrincipal");
const nomDiv=document.querySelector("body > main > div.filtro-ordenar > div:nth-child(1) > h3");
nomDiv.textContent=`${categoriaPrinc.toUpperCase()}`;
const ubicacion=document.querySelector('#ubicacion');
ubicacion.textContent=`${categoriaPrinc.toUpperCase()}`;
console.log(categoriaPrinc)
let arryProd;

switch(categoriaPrinc){
    case 'ACCESORIOS ':{
        arryProd=['llaveros','billeteras','anillos','collares','relojes'];
        productos.forEach((producto)=>{

            if(producto.categoria=='llaveros'||
               producto.categoria=='billeteras'||
               producto.categoria=='anillos'||
               producto.categoria=='collares'||
               producto.categoria=='relojes'){
                
              
        
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
        

    }break;
    case 'COLLECTIBLES ':{
        arryProd=['llaveros','billeteras','anillos','collares','relojes'];
        productos.forEach((producto)=>{

            if(producto.categoria=='bandai'||
               producto.categoria=='funko'||
               producto.categoria=='figma'){
                
              
        
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
        

    }break;
    case 'HOGAR ':{
        arryProd=['llaveros','billeteras','anillos','collares','relojes'];
        productos.forEach((producto)=>{

            if(producto.categoria=='tazas'||
               producto.categoria=='lamparas'){
                
              
        
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
        

    }break;
    case 'ROPA':{
        arryProd=['llaveros','billeteras','anillos','collares','relojes'];
        productos.forEach((producto)=>{

            if(producto.categoria=='camisas'||
               producto.categoria=='sudaderas'){
                
              
        
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
        

    }break;
}


function comprobarDisponible(producto){
    
    if(producto.cantidad<1){
        return 'prodNoDisponible'
    }
    return 'prodDisponible'
 
 }