document.addEventListener('DOMContentLoaded',()=>{
    maximizarImg();
})

//ESTE CODIGO SIRVE PARA VER LA IMG EN PANTALLA COMPLETA

function maximizarImg(){
    const expandirBtn=document.querySelector('#expandirImg');
    const img = document.querySelector('#prod-img');
    img.addEventListener('click',()=>{
        expandirBtn.click();
    })    
    const imgGrande=document.createElement('div');

    expandirBtn.addEventListener('click',()=>{
    const url=document.querySelector('#prod-img').src;
    const menu=document.querySelector('#header');


    imgGrande.innerHTML=`
       <div>  
          <img src="${url}" alt=""></div>
          <div class='cerrarImg'><button id='cerrarImgGrande'>X</button> </div>
       </div>
    `
    imgGrande.classList.add('imgGrande');
    imgGrande.style.animation = "efectoImgGrande 1s";

    document.querySelector('body').insertBefore(imgGrande,menu);
    const cerrarImg=document.querySelector('#cerrarImgGrande');
    cerrarImg.addEventListener('click',()=>{
    
        imgGrande.remove();
    })


    })
  

}