const inputMinimo=document.querySelector('#InputMinimo');
const inputMaximo=document.querySelector('#Inputmaximo');
const minimo=document.querySelector('#minimo');
const maximo=document.querySelector('#maximo');
const btnFiltrar=document.querySelector('#Filtrar');
const btnLimpiar=document.querySelector('#Limpiar');
const gridContainer=document.querySelector('.grid-container');

const ordenarBtn=document.querySelector('#ordenar')
inputMinimo.value=0;
inputMaximo.value=0;
minimo.textContent=inputMinimo.value;
maximo.textContent=inputMaximo.value;
let  listaProd;
document.addEventListener("DOMContentLoaded", () => {
 listaProd=[...document.querySelectorAll('.grid-item')]
  
  generarValorMaximoInputs();
  ordenarBtn.addEventListener('change',ordenar)
  ordenar();



  });

  function generarValorMaximoInputs(){
      let maximo=0;
      
    listaProd.forEach(prod => {
        let valor=parseInt(prod.querySelector('.prod-detalles-precio').firstElementChild.textContent.replace('$',''));
       if(valor>maximo){
           maximo=valor;
       }
         
        
    });

    inputMaximo.attributes[4].value=maximo
    inputMinimo.attributes[4].value=maximo
  }

  inputMinimo.addEventListener('change',()=>{
  
    minimo.textContent=inputMinimo.value;


   })     
   inputMaximo.addEventListener('change',()=>{
       
    maximo.textContent=inputMaximo.value;
   }) 
btnLimpiar.addEventListener('click',()=>{
     limpiarHtml();
     inputMaximo.value=0;
     maximo.textContent=0;
     inputMinimo.value=0;
     minimo.textContent=0;
     mostrarProductos(listaProd);
     ordenar();
})
btnFiltrar.addEventListener('click',(e)=>{
    
    e.preventDefault();
    let aux=[...document.querySelectorAll('.grid-item')];
   
    const resultado= [...aux.filter(filtrarMinimo).filter(filtrarMaximo)];

   
    console.log(resultado)
    mostrarProductos(resultado);
    ordenar();

    
})

function filtrarMinimo(prod){
   
    const minimo=parseInt( prod.querySelector('.prod-detalles-precio').firstElementChild.textContent.replace('$',''));


   if(minimo){
       console.log(minimo>=inputMinimo.value)
    return  minimo>=inputMinimo.value
   }
   else return prod;
}

function filtrarMaximo(prod){
   
    const maximo=parseInt( prod.querySelector('.prod-detalles-precio').firstElementChild.textContent.replace('$',''));
   


   if(inputMaximo.value!=0){
        return  maximo<=inputMaximo.value ;
   }
   else return prod;
}

//Mostrar prod

function  mostrarProductos(array){
    limpiarHtml();
   
    if(array.length>0){
        array.forEach(prod=>{
            gridContainer.appendChild(prod);
        })

       
    }

   

   

    
  
}
//limpiar html


function limpiarHtml(){

    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }

}


//ORDENAR PRODUCTOS

function ordenar(e){
    let auxLista;
    let listaProdAux=[...document.querySelectorAll('.grid-item')];
  
    console.log(ordenarBtn.value)
    switch(ordenarBtn.value){
        case 'nombreAsc':{
           
           auxLista=[...listaProdAux.sort((prev,next)=>{
               
                if((prev.querySelector('.prod-detalles-descripcion').firstElementChild.textContent) > (next.querySelector('.prod-detalles-descripcion').firstElementChild.textContent)){
                    return 1;
                }
                if((prev.querySelector('.prod-detalles-descripcion').firstElementChild.textContent) < (next.querySelector('.prod-detalles-descripcion').firstElementChild.textContent)){
                    return -1;
                }
                return 0;

                })]

                mostrarProductos(auxLista)

        }break;
        case 'nombreDsc':{
           
            auxLista=[...listaProdAux.sort((prev,next)=>{
                
                 if((prev.querySelector('.prod-detalles-descripcion').firstElementChild.textContent) < (next.querySelector('.prod-detalles-descripcion').firstElementChild.textContent)){
                     return 1;
                 }
                 if((prev.querySelector('.prod-detalles-descripcion').firstElementChild.textContent) > (next.querySelector('.prod-detalles-descripcion').firstElementChild.textContent)){
                     return -1;
                 }
                 return 0;
 
                 })]
 
                 mostrarProductos(auxLista)
 
         }break;


         case 'precioMayor':{
            auxLista=[...listaProdAux.sort((prev,next)=>{
                     return  next.querySelector('.prod-detalles-precio').firstElementChild.textContent.replace('$','')-prev.querySelector('.prod-detalles-precio').firstElementChild.textContent.replace('$','')  
                })]

                mostrarProductos(auxLista)
             
         }break;


         case 'precioMenor':{
            auxLista=[...listaProdAux.sort((prev,next)=>{
                return  prev.querySelector('.prod-detalles-precio').firstElementChild.textContent.replace('$','') -next.querySelector('.prod-detalles-precio').firstElementChild.textContent.replace('$',''); 
           })]

           mostrarProductos(auxLista)

         }break;


         default:{
            auxLista=[...listaProdAux.sort((prev,next)=>{
               
                if((prev.querySelector('.prod-detalles-descripcion').firstElementChild.textContent) > (next.querySelector('.prod-detalles-descripcion').firstElementChild.textContent)){
                    return 1;
                }
                if((prev.querySelector('.prod-detalles-descripcion').firstElementChild.textContent) < (next.querySelector('.prod-detalles-descripcion').firstElementChild.textContent)){
                    return -1;
                }
                return 0;

                })]

                mostrarProductos(auxLista)

         }break;
    }
}






  

  