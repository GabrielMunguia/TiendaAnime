document.addEventListener('DOMContentLoaded',()=>{
    const mostrar=document.querySelector('#subCat');
    const contenedorInicioDivs=document.querySelectorAll('.contenedor-inicio >div img')
    contenedorInicioDivs.forEach((div)=>{
        div.addEventListener('click',()=>{
            localStorage.setItem('subCategoria', div.attributes[1].value);
            mostrar.click();
        })
      
    })
})