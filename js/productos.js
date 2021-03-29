class Producto{
constructor(descripcion,precio,img){
    this.Descripcion=descripcion;
    this.Precio=precio;
    this.Img=img;
}
 getDescripcion(){
     return this.Descripcion;
 }
 getPrecio(){
     return this.Precio;

 }
 getImg(){
     return this.Img;
 }
}






// let hijos= document.getElementsByClassName('grid-item')

// for(let i =0;i<hijos.length;i++){
      
//     let hijo=hijos[i];
   
//     hijo.addEventListener('click',(e)=>{
//         event.preventDefault();
//         let img=hijo.firstElementChild.firstElementChild.firstElementChild.firstElementChild.src
//         console.log(img)
//         let descripcion=hijo.firstElementChild.firstElementChild.childNodes[3].textContent;
   
//         descripcion.trim();
//         let precio=hijo.firstElementChild.firstElementChild.childNodes[5].textContent;
//         precio=parseFloat(precio.replace('$',''));
//         const  prodAux = JSON.stringify(new Producto(descripcion,precio,img));
//         // console.log(prodAux)
//         // console.log("ddsadasdas")
//         localStorage.setItem('producto-detalle',prodAux)

//     })

// }

let hijos= document.getElementsByClassName('prod-detalles')

for(let i =0;i<hijos.length;i++){
      
    let hijo=hijos[i];
   
    hijo.addEventListener('click',(e)=>{
        event.preventDefault();
        let img=hijo.firstElementChild.firstElementChild.firstElementChild.src;
        let descripcion=hijo.firstElementChild.childNodes[3].textContent
        console.log(descripcion)
        descripcion.trim();
        let precio=hijo.firstElementChild.childNodes[5].textContent;
        precio=parseFloat(precio.replace('$',''));
        console.log(precio)
        const  prodAux = JSON.stringify(new Producto(descripcion,precio,img));
        console.log(prodAux)
        localStorage.setItem('producto-detalle',prodAux)

    })

}


const botones=document.getElementsByClassName('boton')
console.log(botones)

for (let i=0;i<botones.length;i++){
    let boton=botones[i];
    boton.addEventListener('click',(e)=>{ 
        console.log("hac echo click");
       
    })
   
}




