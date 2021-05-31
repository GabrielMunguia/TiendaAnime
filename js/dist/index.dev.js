"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var mostrar = document.querySelector('#subCat');
  var contenedorInicioDivs = document.querySelectorAll('.contenedor-inicio >div img');
  contenedorInicioDivs.forEach(function (div) {
    div.addEventListener('click', function () {
      localStorage.setItem('subCategoria', div.attributes[1].value);
      mostrar.click();
    });
  });
});