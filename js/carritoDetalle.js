


const btnPagar = document.querySelector('#pagar');

const carritoLista = document.querySelector('.carrito-detalles');



//compruebo si el carrito esta vacio
function mostrarErrorListaVacia(){

    const comprobarVacio=JSON.parse(localStorage.getItem("carrito")) || [];

if(comprobarVacio.length==0){
    
    carritoLista.remove();
    const carritoVacio=document.querySelector('#pago');
    const carritoUpdate=document.querySelector('#carritoUpdate');
    if(carritoUpdate){
        carritoUpdate.remove();
    }
    carritoVacio.classList.add('sinProductos');
    carritoVacio.innerHTML=`
       <div>
          <span>Carrito Vacio</span>
        </div>
        <div>
           <a href="/index.html">Volver al inicio</a>
        </div>
    `

   }
}

mostrarErrorListaVacia();






btnPagar.addEventListener('click', pagarProd);

function pagarProd(e) {
    const comprobarVacio=JSON.parse(localStorage.getItem("carrito")) || [];
    if(comprobarVacio.length==0){
        mostrarErrorListaVacia();
        return;
    }



    e.preventDefault();
    if (e.target.textContent == 'Procesar Pago') {
        const carritoUpdate = document.querySelector('#carritoUpdate')
        carritoLista.remove();
        console.log(carritoLista)

        carritoUpdate.classList.add('contenedorform');
        carritoUpdate.innerHTML = `
    
    <form action="datos.html" method="get" id='formulario'>
    <div class='AlertaError'>
        
 
    <div >
        <fieldset>
            <legend>Información Del Cliente </legend><hr>
            <div class="subcontenedorform">
                <div class="items" >     
                    <label for="nombre">Nombre <span class="requerido" >*</span></label><br>
                    <input required autofocus id="nombre" type="text">  
                    <label for="telefono">Teléfono <span class="requerido" >*</span></label><br>
                    <input required id=telefono type="tel" id='telefono'">           
                </div>
                <div class="items">
                    <label for="correo">Correo Eletrónico <span class="requerido" >*</span></label><br>
                    <input required type="email" placeholder="ejemplo@dominio.com" id='correo' name='correo'>
                </div>
            </div>
        </fieldset>    
    </div>
    <div>
        <fieldset>
            <legend>Información De Entrega</legend><hr>
            <div id='formaEntrega'>
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
            <div id='infoPago'>
                <label for="">Forma de Pago<span class="requerido" >*</span></label>
                <div class="contenedoropcion" id='contOpcTargeta'>
                    <div>
                    
                        <input required id="tarjeta" type="radio" name="pago" value="">
                        <label for="tarjeta">TARJETA DE CREDITO/DEBITO</label>
                        
                    </div>

                    <div>
                        <input required id="transfer" type="radio" name="pago" value="">
                        <label for="transfer">TRANSFERENCIA</label> 
                    </div>

                    

                </div>

        </fieldset>
        <div>
        
        <div id='comprobarTerminos'>
        <input required type="checkbox" id="terminos" >

        <label for="terminos">Acepto los términos y condiciones de pago, envío y garantías al realizas la compra <span class="requerido" >*</span></label>   
        

        
        
       
 
    </div>

           <div class='carritoEnDetalles'>
              <fieldset id='carritoActualizado' >
                <legend>Resumen De La Orden</legend><hr>
                
               </fieldset>
           
           </div>
            
        </div>
    </div>
    
</form>
    
    `
        btnPagar.textContent = "PAGAR"
        const carritoUpdateAUX = document.querySelector('#carritoActualizado');
        console.log(carritoUpdateAUX)

        carritoUpdateAUX.appendChild(carritoLista)

        eventosSelect();

    }

    //En esta parte verifico si el textContent de el boton es igual a pagar, asi proceso el pago

    else if(e.target.textContent == 'PAGAR'){
        validarFormulario();
    }




}



function eventosSelect() {
    formaEntrega();
    metodoPago();



}

function metodoPago() {
    const contenedorPago = document.querySelector('#infoPago');


    contenedorPago.addEventListener('click', (e) => {
        const pago = e.target;
        const comprobarExiste = document.querySelector('.datosTarjeta');
        const comprobarExisteTransferencia = document.querySelector('.datosTransferencia');


        if (pago.getAttribute('id') == 'tarjeta') {
            if (comprobarExisteTransferencia) {
                comprobarExisteTransferencia.remove();
            }
            const comprobarSeleccionado = contenedorPago.querySelector('.seleccionado');
            if (comprobarSeleccionado) {
                comprobarSeleccionado.classList.remove('seleccionado')
            }
            pago.parentElement.classList.add('seleccionado')

            if (!comprobarExiste) {
                const pagoTargeta = document.createElement('div');
                pagoTargeta.classList.add('datosTarjeta');
                pagoTargeta.innerHTML = `
                  <div class="advertencia">
                     <h4>Importante</h4>
                     <p>"El titular" debe presentar la tarjeta de crédito/débito y documento de identificación al momento de recibir el pedido</p>    
                   </div>
                  <div>
                
                      <input type="text"  id="nomTargeta"  placeholder='Nombre del propietario'/>
               
                      <input type="number" id="numTargeta"  placeholder='Numero de la tarjeta' >
                   
                   </div>
                   <div>
                      <input type="number" id="datoTarjeta" min="1" max="9999" placeholder='MM/YY'>
                      <input type="number" id="cvcTarjeta"  placeholder='CVC'>
                   </div>
            `
                contenedorPago.appendChild(pagoTargeta)
                

            }


        }
        if (pago.getAttribute('id') == 'transfer') {



            const comprobarSeleccionado = contenedorPago.querySelector('.seleccionado');

            if (comprobarSeleccionado) {
                comprobarSeleccionado.classList.remove('seleccionado')
            }
            if (comprobarExiste) {
                comprobarExiste.remove();
            }
            pago.parentElement.classList.add('seleccionado')

            if (!comprobarExisteTransferencia) {
                const pagoTargeta = document.createElement('div');
                pagoTargeta.classList.add('datosTransferencia');
                pagoTargeta.innerHTML = `
                      <div class="advertencia">
                         <h4>Importante</h4>
                         <p>"Importante
                         <br>
                         1. Realizar la transferencia desde la plataforma del banco de su preferencia.
                         <br>
                         2. Elija una de las siguientes cuentas a donde hará el depósito:
                           <br>
                             Banco Cuscatlan - No Cuenta: 1412412512
                             <br>
                             Banco America Central - No Cuenta: 15213421512
                             <br>
                             Banco Agricola - No Cuenta: 14152612843</p>    
                       </div>
                       <div  class='transferencia'>
                          <div>
                          
                             <input  name='banco'  required id="cuscatlan" type="radio" name="cuscatlan" >
                             <label for'cuscatlan'>Banco Cuscatlan(1412412512) </label>
     
                          </div>
                          <div>
                          
                          <input  name='banco' required id="Central" type="radio" name="Central" >
                          <label for'Central'> Banco America Central(15213421512) </label>
  
                       </div>
                       <div>
                       
                          
                       <input required id="Agricola" type="radio" name="Agricola" >
                       <label name='banco'  for'Agricola'>Banco Agricola(14152612843) </label>

                    </div>
                       
                    
                    </div>

                    <div class='infoTransferencia'>
                    <div>
                       <div>
                          <label for='titularTransferencia'> Titular Cuenta</label>
                          <input type="text"  id="titularTransferencia"'/>
                       </div>
                       <div>
                          <label for ='conceptopTransferencia'> Concepto</label>
                          <input type="text" id="conceptopTransferencia"   >
                       </div>                 
                     </div>

                     <div>
                     <div>
                        <label for='propietarioTransferencia'>Numero de Referencia </label>
                        <input type="number"  id="propietarioTransferencia"  />
                     </div>
                     <div>
                        <label for='montoTransferencia'> Monto</label>
                        <input type="number" id='montoTransferencia'  >
                     </div>                 
                   </div>
                  
                  
                   
                 </div>
                    
                    </div>
                     
                `
                contenedorPago.appendChild(pagoTargeta)

                seleccionarBanco();
                


            }
        }
    })


}

function seleccionarBanco() {
    const contenedorBancoSelect = document.querySelector('.transferencia');
    contenedorBancoSelect.addEventListener('click', (e) => {
        const banco = e.target;
        if (banco.getAttribute('id') == 'cuscatlan' || banco.getAttribute('id') == 'Agricola' || banco.getAttribute('id') == 'Central') {
            const removerSeleccionado = contenedorBancoSelect.querySelector('.seleccionado');
            if (removerSeleccionado) {
                removerSeleccionado.classList.remove('seleccionado');
            }
            banco.parentElement.classList.add('seleccionado')
        }

    })
}

function formaEntrega() {
    const entrega = document.querySelector('.contenedoropcion');
    const divDomicilio = document.createElement('div');
    divDomicilio.classList.add('opcionesEntrega')

    const formaEntrega = document.querySelector('#formaEntrega')

    entrega.addEventListener('click', (e) => {
        const tipoEntrega = e.target;


        if (tipoEntrega.getAttribute('id') == 'domicilio') {
            const comprobarSeleccionado = entrega.querySelector('.seleccionado');
            if (comprobarSeleccionado) {
                comprobarSeleccionado.classList.remove('seleccionado');
            }
            const divPadre = e.target.parentElement;
            divPadre.classList.add('seleccionado');

            divDomicilio.innerHTML = ` 

               <div>

               <div>
               <label for="Dep">Departamento <span class="requerido domicilio" >*</span></label><br>
               <select id='selectDepartamento'>
                  <option value='default'  disabled="true"  selected="selected">Selecciona un departamento</option>
                  <option value="AH">Ahuachapán</option>
                  <option value="CA">Cabañas</option>
                  <option value="CH">Chalatenango</option>
                  <option value="CU">Cuscatlán</option>
                  <option value="LI">La Libertad</option>
                  <option value="MO">Morazán</option>
                  <option value="PA">La Paz</option>
                  <option value="SA">Santa Ana</option>
                  <option value="SM">San Miguel</option>
                  <option value="SO">Sonsonate</option>
                  <option value="SS">San Salvador</option>
                  <option value="SV">San Vicente</option>
                  <option value="UN">La Unión</option>
                  <option value="US">Usulután</option>
                </select>
               </div>
               
               <div>
                  <label for="dep">Municipio<span class="requerido">*</span></label><br>
                  <select id='municipios'>
                   <option value="default"  selected="selected"  disabled="true" >Default</option>
                   </select>
               
               </div>
               </div>        

             <div>
                <div>
                   <label for="Direc">Dirección <span class="requerido">*</span></label><br>
                   <textarea class="cajadetexto" maxlenght="140" id='direccion'></textarea>
                 </div>
                 <div>
                   <label for="Direc">Punto de referencia <span class="requerido">*</span></label><br>
                   <textarea class="cajadetexto" maxlenght="140" id='referencia'></textarea>
                 </div>
          
             </div>
              
           
            
                         
            `

            formaEntrega.appendChild(divDomicilio);
        } else if (tipoEntrega.getAttribute('id') == 'sucursal') {
            const comprobarSeleccionado = entrega.querySelector('.seleccionado');
            if (comprobarSeleccionado) {
                comprobarSeleccionado.classList.remove('seleccionado');
            }
            const divPadre = e.target.parentElement;
            divPadre.classList.add('seleccionado');

            const comprobarDomicilio = document.querySelector('.domicilio');
            if (comprobarDomicilio) {
                divDomicilio.remove();
            }


        }

        comprobarDepartamento();

    })
}

function comprobarDepartamento() {
    const departamento = document.querySelector('#selectDepartamento');
    if (departamento) {
        departamento.addEventListener('change', () => {
            const dep = departamento.value;
            llenarMunicipios(dep);


        })

    }

}


function llenarMunicipios(dep) {
    let municipios;
    const contenedorMunicipios = document.querySelector('#municipios');

    switch (dep) {
        case 'SO': {
            municipios = [
                'Sonsonate', 'Acajutla', 'Armenia', 'Caluco', 'Cuisnahuat',
                'Izalco', 'Juayúa', 'Nahuizalco', 'Nahulingo', 'Salcoatitán',
                'San Antonio del Monte', 'San Julián', 'Santa Catarina',
                'Masahuat', 'Santa Isabel Ishuatán', 'Santo Domingo de',
                'Guzmán', 'Sonzacate'
            ]
        }
        break;
    case 'CA': {
        municipios = [
            'Sensuntepeque', 'Cinquera', 'Dolores ', 'Guacotecti', 'Ilobasco', 'Jutiapa',
            'San Isidro', 'Tejutepeque', 'Victoria'
        ]
    }
    break;
    case 'CH': {
        municipios = [
            'Agua Caliente', 'Arcatao', 'Azacualpa', 'Chalatenango', 'Citalá', 'Comalapa',
            'Concepción', 'Quezaltepeque', 'Dulce Nombre de María', 'El Carrizal', 'El Paraíso',
            'La Laguna', 'La Palma', 'La Reina', 'Las Vueltas', 'Nombre de Jesús', 'Nueva Concepción',
            'Nueva Trinidad', 'Ojos de Agua', 'Potonico', 'San Antonio de la Cruz', 'San Antonio Los Ranchos',
            'San Fernando', 'San Francisco Lempa', 'San Francisco Morazán', 'San Ignacio', 'San Isidro Labrador',
            'Cancasque', 'San José Las Flores ', 'San Luis del Carmen', 'San Miguel de Mercedes', 'San Rafael',
            'Santa Rita', 'Tejutla'
        ]
    }
    break;
    case 'AH': {
        municipios = [
            'Ahuachapán', 'Apaneca', 'Atiquizaya', 'Concepción de Ataco', 'El Refugio',
            'Guaymango', 'Jujutla', 'San Francisco Menéndez', 'San Lorenzo', 'San Pedro Puxtla',
            'Tacuba', 'Turín'
        ]
    }
    break;
    case 'CU': {
        municipios = [
            'Candelaria', 'Cojutepeque', 'El Carmen', 'El Rosario', 'Monte San Juan',
            'Oratorio de Concepción', 'San Bartolomé Perulapía', 'San Cristóbal', 'San José Guayabal', 'San Pedro Perulapán',
            'San Rafael Cedros', 'San Ramón', 'Santa Cruz Analquito', 'Santa Cruz Michapa', 'Suchitoto',
            'Tenancingo'
        ]
    }
    break;
    case 'LI': {
        municipios = [
            'Antiguo Cuscatlán', 'Chiltiupán', 'Ciudad Arce', 'Colón', 'Comasagua',
            'Huizúcar', 'Jayaque', 'Jicalapa', 'La Libertad', 'Santa Tecla',
            'Nuevo Cuscatlán', 'San Juan Opico', 'Quezaltepeque', 'Sacacoyo', 'San José Villanueva',
            'San Matías', 'San Pablo Tacachico', 'Talnique', 'Tamanique', 'Teotepeque',
            'Tepecoyo', 'Zaragoza'
        ]
    }
    break;
    case 'MO': {
        municipios = [
            'Arambala', 'Cacaopera', 'Chilanga', 'Corinto', 'Delicias de Concepción',
            'El Divisadero', 'El Rosario', 'Gualococti', 'Guatajiagua', 'Joateca',
            'Jocoaitique', 'Jocoro', 'Lolotiquillo', 'Meanguera', 'Osicala',
            'Perquín', 'San Carlos', 'San Fernando', 'San Francisco Gotera', 'San Isidro',
            'San Simón', 'Sensembra', 'Sociedad', 'Torola', 'Yamabal',
            'Yoloaiquín'


        ]
    }
    break;
    case 'PA': {
        municipios = [
            'Cuyultitán', 'El Rosario', 'La Paz', 'Jerusalén', 'Mercedes La Ceiba',
            'Olocuilta', 'Paraíso de Osorio', 'San Antonio Masahuat', 'San Emigdio', 'San Francisco Chinameca',
            'San Juan Nonualco', 'San Juan Talpa', 'San Juan Tepezontes', 'San Luis La Herradura', 'San Luis Talpa',
            'San Miguel Tepezontes', 'San Pedro Masahuat', 'San Pedro Nonualco', 'San Rafael Obrajuelo', 'Santa María Ostuma',
            'Santiago Nonualco', 'Tapalhuaca', 'Zacatecoluca'
        ]
    }
    break;
    case 'SA': {
        municipios = [
            'Candelaria de la Frontera', 'Chalchuapa', 'Coatepeque', 'El Congo', 'El Porvenir',
            'Masahuat', 'Metapán', 'San Antonio Pajonal', 'San Sebastián Salitrillo', 'Santa Ana',
            'Santa Rosa Guachipilín', 'Santiago de la Frontera', 'Texistepeque'
        ]
    }
    break;
    case 'SM': {
        municipios = [
            'San Miguel', 'Carolina', 'Chapeltique', 'Chinameca', 'Chirilagua',
            'Ciudad Barrios', 'Comacarán', 'El Tránsito', 'Lolotique', 'Moncagua',
            'Nueva Guadalupe', 'Nuevo Edén de San Juan', 'Quelepa', 'San Antonio del Mosco', 'San Gerardo',
            'San Jorge', 'San Luis de la Reina', 'San Rafael Oriente', 'Sesori', 'Uluazapa'
        ]
    }
    break;
    case 'SS': {
        municipios = [
            'San Salvador', 'Aguilares', 'Apopa', 'Ayutuxtepeque', 'Delgado',
            'Cuscatancingo', 'El Paisnal', 'Guazapa', 'Ilopango', 'Mejicanos',
            'Nejapa', 'Panchimalco', 'Rosario de Mora', 'San Marcos', 'San Martín',
            'Santiago Texacuangos', 'Santo Tomás', 'Soyapango', 'Tonacatepeque'
        ]
    }
    break;
    case 'SV': {
        municipios = [
            'San Vicente', 'Apastepeque', 'Guadalupe', 'San Cayetano Istepeque	', 'San Esteban Catarina',
            'San Ildefonso', 'San Lorenzo', 'San Sebastián', 'Santa Clara', 'Santo Domingo',
            'Tecoluca', 'Tepetitán', 'Verapaz'

        ]
    }
    break;
    case 'UN': {
        municipios = [
            'La Unión', 'Anamorós', 'Bolívar', 'Concepción de Oriente', 'Conchagua',
            'El Carmen', 'El Sauce', 'Intipucá', 'Lilisque', 'Meanguera del Golfo',
            'Nueva Esparta', 'Pasaquina', 'Polorós', 'San Alejo', 'San José',
            'Santa Rosa de Lima', 'Yayantique', 'Yucuaiquín'
        ]
    }
    break;
    case 'US': {
        municipios = [
            'Usulután', 'Alegría', 'Berlín', 'California', 'Concepción Batres',
            'El Triunfo', 'Ereguayquín', 'Estanzuelas', 'Jiquilisco', 'Jucuapa',
            'Jucuarán', 'Mercedes Umaña', 'Nueva Granada', 'Ozatlán', 'Puerto El Triunfo',
            'San Agustín', 'San Buenaventura', 'San Dionisio', 'San Francisco Javier', 'Santa Elena',
            'Santa María', 'Santiago de María', 'Tecapán'
        ]
    }
    break;


    }


    console.log(municipios)
    limpiarMunicipios();
    municipios.forEach(municipio => {
        const option = document.createElement('option');
        option.textContent = municipio;
        contenedorMunicipios.appendChild(option);

    });


}

function limpiarMunicipios() {
    const municipios = document.querySelector('#municipios');
    municipios.innerHTML = ``

}


//VALIDACION DEL FORMULARIO 



function validarFormulario(e) {

 
    const correoInput=document.querySelector('#correo');
    const telefonoInput=document.querySelector('#telefono');
    const terminosYCondiciones=document.querySelector('#terminos').checked;
    validarPago();
    
   if(!validarNombre()||
      !validacionCorreo(correoInput.value)||
      !validarEntrega()||
      !validarNumero(telefonoInput.value)||
      !validarPago()||!terminosYCondiciones){
       mostrarError(`Todos los campos son obligatorios <br> No paso la validacion`)
       return;
   }
   procesarPago();
   console.log('paso la prueba')
 

    

}

function mostrarError(mensaje){
  const existe=document.querySelector('.AlertaDatos');
  if(!existe){
    
    const errorDiv=document.createElement('div');
    errorDiv.classList.add('AlertaDatos')
    errorDiv.innerHTML=`<div><span>Error!</span> ${mensaje}</div>`
    carritoLista.appendChild(errorDiv);
  
  
    setTimeout(()=>{
        errorDiv.remove();
    },3000)
  }
  
}



function validarNombre(){
    const nombreInput = document.querySelector('#nombre');
    if(nombreInput.value==''||nombreInput.value==' '){
   
        return false;
    }
  
    return true;
}

function validarNumero(numero){
  
    if(numero.length>=8){
        if(isNaN(numero)||!Number(numero)){
      
            return false;
        }else if(numero%1==0){
           
         return true;
            }

    }
    return false;
 
 
     
}

function validacionCorreo(correo){
   const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
   if(expReg.test(correo)){
       return true;
   }
   return false;
}

function validarEntrega(){

    const sucursalInput=document.querySelector('#sucursal').checked;
    const domicilioInput=document.querySelector('#domicilio').checked;
  
    if(!sucursalInput&&!domicilioInput){
        return false;
    }

    if(sucursalInput){
        return true;
    }else if(domicilioInput){
        const departamentoSelect=document.querySelector('#selectDepartamento').value;
        const municipiosSelect=document.querySelector('#municipios').value;
        const direccionTextArea=document.querySelector('#direccion').value;
        const referenciaTexArea=document.querySelector('#referencia').value;
        if(departamentoSelect=='default'||municipiosSelect=='default'||
           direccionTextArea==''||direccionTextArea==' '||
           referenciaTexArea==''||referenciaTexArea==' '
          ){
             
              return false;        
           }
      

    }
  
    return true;
    
}

function validarPago(){
    const targetaInput=document.querySelector('#tarjeta').checked;
    const tranferenciaInput=document.querySelector('#transfer').checked;
    if(!targetaInput&&!tranferenciaInput){
        console.log('hoas')
        return false;
    }
    if(targetaInput){
        const nombreTarjeta=document.querySelector('#nomTargeta').value;
        const numTarjeta=document.querySelector('#numTargeta').value;
        const fechaVenTarjeta=document.querySelector('#datoTarjeta').value;
        const cvcTarjeta=document.querySelector('#cvcTarjeta').value;
        if(nombreTarjeta==''||nombreTarjeta==' '||
           numTarjeta.length<8||cvcTarjeta.length<3||
           cvcTarjeta.length<3
        ){
            return false
        }
        return true;

       
        
    }else{
        const cuscatlan=document.querySelector('#cuscatlan').checked;
        const americaCentral= document.querySelector('#Central').checked;
        const agricola=document.querySelector('#Agricola').checked;
        const titularTransferencia=document.querySelector('#titularTransferencia').value;
        const concepto=document.querySelector('#conceptopTransferencia').value;
        const numReferencia=document.querySelector('#propietarioTransferencia').value;
        const monto=document.querySelector('#montoTransferencia').value;
        if(!cuscatlan&&!americaCentral&&!agricola){
            return false;
        }else if(titularTransferencia==''||concepto==''||numReferencia.length<1||monto<1){
               return false;
        }
        return true;



        

    }
 

}
//cuando todo el formulario se hizo valido se utiliza esta funcion para procesar el pago
function procesarPago(){
    const formPago = document.querySelector('#carritoUpdate');
    formPago.remove();
    const procesandoPago=document.querySelector('#pago');
    procesandoPago.classList.add('procesandoPago');
    procesandoPago.innerHTML=`<div> <img src="/assets/img/iconos/img-loading.gif" alt=""></div>`
  
    setTimeout(()=>{
       procesandoPago.classList.remove('procesandoPago');
       procesandoPago.classList.add('pagoRealizado');
 
       procesandoPago.innerHTML=`
       <div>
       <div> <img src="/assets//img/iconos/exito.png" alt=""> </div> 
       <div>  <span>SU PAGO SE HA COMPLETADO CORRECTAMENTE</span> </div>   
    </div>
    <div>
        <p id='NumeroOrdern'><b>Numero de Orden :</b>   <span>3496123</span></p>   
        <p id='IDOrganización'><b>ID Organizacion :</b>   <span>Geek-Store</span></p>           
        <p id='Nro.Factura'><b>Numero  Factura :</b>   <span>1</span></p>           
        <p id='Importe'><b>Numero    Importe :</b>   <span>1234</span></p>                    
    </div>

    <div>
        <p>A la brevedad recibira su comprobante de pago</p>
        <a href="/index.html">Volver al inicio</a>
    </div>`;


    //Elimino todos los productos almacenados
  procesandoPago.click();
    localStorage.removeItem('carrito') 
    
    },3000)
 

  
  
   

 
}



