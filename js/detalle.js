// Muestro los datos del local Storage al html

const img =document.getElementById('prod-img')
const informacion=JSON.parse(localStorage.getItem('detalle')) ;
img.src=informacion['img'];
const titulo=document.getElementById('titulo-prod')
// console.log(informacion)
titulo.textContent=informacion['titulo']
const descripcion=document.getElementById('descripcion-prod');
descripcion.textContent=informacion['descripcion'];
const precio=document.getElementById('precio-prod')
precio.textContent=`$ ${informacion['precio']}`

// console.log(img)
// 

// Agrego al carrito 


