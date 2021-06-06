(function(){

    const formulario=document.querySelector('#formulario');
 
    document.addEventListener('DOMContentLoaded',()=>{
     
    
        formulario.addEventListener('submit',validarFormulario)
   })
   
   
   function validarFormulario(e){
      e.preventDefault();
       const nombre =document.querySelector("#nombreForm").value;
       const correo=document.querySelector('#correoForm').value;
       const mensaje=document.querySelector('#mensajeForm').value;
       if(nombre.length<2 || !validarCorreo(correo)||mensaje.length<2){
          mostrarAlerta('Los datos ingresados son muy cortos')
          return;
       }
      
       e.target.reset();
       mostrarGif();
     
       
     
   
      
   }
   
   function validarCorreo(correo){
   
        const arroba='@';
        const punto='.';
        if(correo.indexOf(arroba)!=-1 && correo.indexOf(punto)!=-1){
            return true;
        }
     
        return false;
     
   };
   
   function mostrarAlerta(mensaje){
       const divAlerta=document.querySelector("#formulario > div:nth-child(2)");
       const existe=document.querySelector('.AlertaDatos');
       if(!existe){
         
         const errorDiv=document.createElement('div');
         errorDiv.classList.add('AlertaDatos')
         errorDiv.innerHTML=`<div><span>Error!</span> ${mensaje}</div>`
         divAlerta.appendChild(errorDiv);
       
         setTimeout(()=>{
             errorDiv.remove();
         },5000)
       }
       
     }
   
     function mostrarGif(){
        const divFormulario=document.querySelector('.formularioTienda');
        formulario.remove();
        divFormulario.classList.add('sinBordes');
        const enviandoMensajeDiv=document.createElement('div');
        enviandoMensajeDiv.classList.add('enviandoCorreo');
        enviandoMensajeDiv.innerHTML=`<img src="/assets/img/iconos/enviandoEmail.gif" alt="">`;
        divFormulario.appendChild(enviandoMensajeDiv);
        setTimeout(()=>{
            enviandoMensajeDiv.remove();
            divFormulario.classList.remove('sinBordes');
            divFormulario.appendChild(formulario);
   

        },4000);

     }

})()