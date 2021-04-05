
const img =document.getElementById('prod-img')
const informacion=JSON.parse(localStorage.getItem('detalle')) ;
img.src=informacion['Img']
const titulo=document.getElementById('titulo-prod')
console.log(informacion)
titulo.textContent=informacion['Titulo']
const descripcion=document.getElementById('descripcion-prod');
descripcion.textContent=informacion['Descripcion'];
const precio=document.getElementById('precio-prod')
precio.textContent=informacion['Precio']
