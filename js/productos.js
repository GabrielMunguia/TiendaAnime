class Producto{
constructor(titulo,descripcion,precio,img){
    this.Descripcion=descripcion;
    this.Precio=precio;
    this.Img=img;
    this.Titulo=titulo;
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

 getTitulo(){
     return this.Titulo;
 }
}

// Este codigo hace que se mueste los datos mas a detalle del producto seleccionado, se recolectara la informacion y se mandara al localStorage como un archivo Json

 const enlacesprod =document.getElementsByClassName('link-prod');
 
 
 for(boton of enlacesprod){
    
     boton.addEventListener('click',(e)=>{
        //  event.preventDefault();
         console.log(e)
         let img=e.path[0].currentSrc;
         img=e.path[2].childNodes[1].firstElementChild.currentSrc
         let titulo=e.path[2].childNodes[3].firstElementChild.outerText;
         console.log(titulo)
         let descripcion=e.path[2].childNodes[3].childNodes[3].innerText;
         descripcion=descripcion.trim()
         let precio=e.path[2].children[2].innerText;
         precio=precio.replace('$','');
         let producto= new Producto(titulo,descripcion,precio,img);
         console.log(img)
        
         localStorage.setItem('detalle',JSON.stringify(producto));
         console.log(e)

 });
 }

 



