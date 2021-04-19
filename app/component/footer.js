class footer extends HTMLElement{
    constructor (){
        super();
    }
    connectedCallback(){
     this.innerHTML=` <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <link rel="stylesheet" href="../../css/style-general.css">
         <title>Document</title>
     </head>
     <body>
         <footer>
             <div class="footer">
               <div class="footer-item">
                 
               </div>
       
               <ul>
                 <li>
                   <a
                     class="facebook"
                     href="https://www.facebook.com"
                     target="blank"
                   ></a>
                 </li>
                 <li>
                   <a
                     class="instagram"
                     href="https://www.instagram.com/"
                     target="blank"
                   ></a>
                 </li>
                 <li>
                   <a
                     class="whatsapp"
                     href="https://api.whatsapp.com/send?phone=+50360457714&text=%22GeekStore%20la%20mejor%20tienda%22"
                     target="blank"
                   ></a>
                 </li>
               </ul>
             </div>
           </footer>
     </body>
     </html>`
    }
}

window.customElements.define("footer-f",footer);