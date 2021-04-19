const inputMinimo=document.querySelector('#InputMinimo');
const inputMaximo=document.querySelector('#Inputmaximo');
const minimo=document.querySelector('#minimo');
const maximo=document.querySelector('#maximo');
const btnFiltrar=document.querySelector('#Filtrar');
const btnLimpiar=document.querySelector('#Limpiar');
const gridContainer=document.querySelector('.grid-container');
inputMinimo.value=0;
inputMaximo.value=0;
minimo.textContent=inputMinimo.value;
maximo.textContent=inputMaximo.value;
let  listaProd;
document.addEventListener("DOMContentLoaded", () => {
  listaProd=[...document.querySelectorAll('.grid-item')]
  generarValorMaximoInputs();


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
     
     

     mostrarProductos(listaProd);
})
btnFiltrar.addEventListener('click',(e)=>{
    e.preventDefault();
   
    const resultado= [...listaProd.filter(filtrarMinimo).filter(filtrarMaximo)];
    console.log(resultado)
    mostrarProductos(resultado);
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


  