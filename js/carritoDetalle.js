const btnPagar=document.querySelector('#pagar');

const carritoLista=document.querySelector('.carrito-detalles');
btnPagar.addEventListener('click',pagarProd);
function pagarProd(e){
    e.preventDefault();
 
    const carritoUpdate=document.querySelector('#carritoUpdate')
    carritoLista.remove();
    console.log(carritoLista    	)

    carritoUpdate.classList.add('contenedorform');
    carritoUpdate.innerHTML=`
    <form action="datos.html" method="get">
    <div>
        <fieldset>
            <legend>Información Del Cliente </legend><hr>
            <div class="subcontenedorform">
                <div class="items" >     
                    <label for="nombre">Nombre <span class="requerido" >*</span></label><br>
                    <input required autofocus id="nombre" type="text">  
                    <label for="telefono">Teléfono <span class="requerido" >*</span></label><br>
                    <input required id=telefono type="tel">           
                </div>
                <div class="items">
                    <label for="email">Correo Eletrónico <span class="requerido" >*</span></label><br>
                    <input required type="email" placeholder="ejemplo@dominio.com">
                </div>
            </div>
        </fieldset>    
    </div>
    <div>
        <fieldset>
            <legend>Información De Entrega</legend><hr>
            <div>
                <label for="">Forma de Entrega <span class="requerido" >*</span></label>
                <div class="contenedoropcion">
                    <div>
                        <input required id="sucursal" type="radio" name="entrega" value="">
                        <label for="sucursal">Recoger en Sucursal</label>
                    </div>
                    <div>
                        <input required id="domicilio" type="radio" name="entrega" value="">
                        <label for="domicilio">Envío a Domicilio</label>
                    </div>
                </div>
            </div>
        </fieldset>
    </div> 
    <div>
        <fieldset>               
            <legend>Información de Pago <span class="requerido" >*</span></legend><hr>
            <div>
                <label for="">Forma de Pago<span class="requerido" >*</span></label>
                <div class="contenedoropcion">
                    <div>
                        <input required id="tarjeta" type="radio" name="pago" value="">
                        <label for="tarjeta">TARJETA DE CREDITO/DEBITO</label>
                    </div>
                    <div>
                        <input required id="transfer" type="radio" name="pago" value="">
                        <label for="transfer">TRANSFERENCIA</label> 
                    </div>
                </div>
            </div>
           <div>
                <input required type="checkbox" id="terminos" name="" value="">
                <label for="terminos">Acepto los términos y condiciones de pago, envío y garantías al realizas la compra <span class="requerido" >*</span></label>   
                <br><br>
            </div>
        </fieldset>
        <div>
            <fieldset id='carritoActualizado'>
                <legend>Resumen De La Orden</legend><hr>
                
            </fieldset>
        </div>
    </div>
    
</form>
    
    `
    btnPagar.textContent="PAGAR"
    const carritoUpdateAUX=document.querySelector('#carritoActualizado');
    console.log(carritoUpdateAUX)
    carritoUpdateAUX.appendChild(carritoLista)

   

  
   

}