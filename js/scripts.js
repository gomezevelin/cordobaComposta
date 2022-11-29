//* Funcion para agregar cartas a servicio
let agregarCartasServicio = (titulo, imagen, textoCorto, textoHover) => {
  let contenedor = document.querySelector(`.contenedorDeCartasServicio`);
  let servicios = `<div class="div-card-servicios col-sm-12  col-lg-6">
    <div class="card text-center tamañoCartas">
        <div class="card-body">
          <div class="imagenCard" >
            <img src="${imagen}" alt="${titulo}">
          </div>
          <h5 class="card-title">${titulo}</h5>
          <p class="card-text">${textoCorto}</p>
        </div>
        <div class="informacionServicioHover">
          <h5>${titulo}</h5>
          <p>${textoHover}</p>
          </div>
      </div>
    </div> `;
  contenedor.innerHTML += servicios;
};

const servicios = "./datos/servicios.json";

fetch(servicios)
  .then((res) => res.json())
  .then((datos) => {
    //* serv = servicio
    for (serv of datos) {
      agregarCartasServicio(
        serv.titulo,
        serv.imagen,
        serv.textoCorto,
        serv.textoHover
      );
    }
  })
  .catch((err) => console.log(`Ocurrió un error en la carga de servicios`))
  .finally((dat) => {
    console.log(`servicios cargados`);
  });

//* Función para renderizar Nosotros.

let seccionInformacion = document.querySelector(`.informacionNosotros`);
if (window.screen.width > 920) {
  seccionInformacion.innerHTML = `<div class="informacionNosotrosPc">
  <div class="valoresPc">
    <h4>Proyecto Cba Composta es una <b>oportunidad de Co-crear</b> espacios de <b>responsabilidad ambiental</b>. Nace en 2021, en el auge del Ecosistema Emprendedor Cordobés; en un intento de dos jóvenes profesionales y amigas; de proponer y fomentar la <b>innovación sustentable en las ciudades.</b></h4>
    <h4> Iniciativa <b>ganadora del desafio Jóvenes Innovadores</b> del laboratorio de innovación Govetch de la Municipalidad de Córdoba. MVP validado en el sector de la economía circular y Triple impacto. <br> Surgue de la experiencia de su equipo en el trabajo con distintos sectores, sumado al <b>anhelo</b> por sostener las motivaciones personales en un emprendimiento propio.</h4>
    <h4>Córdoba Composta es una marca de <b>propósitos comunitarios, colaborativos y de equidad,</b> encontrando su identida en la <b>generación de alianzas</b> estratégicas ambientales justas y en red</h4>
  </div>
  <div class="imagenNosotrosPc">
    <img src="./img/composteraCompleta.jpg" alt="Compostera">
  </div>
</div>`;
} else {
  seccionInformacion.innerHTML = `<div class="informacionNosotrosCelular">
            
   <div class="valoresNosotrosCelular">
     <div class="valorCelular">
       <img src="./img/CC HOJITAS.png" alt="Hoja valores">
       <h3>Somos proyecto Córdoba Composta, una oportunidad de Co-crear espacios de responsabilidad ambiental.</h3>
     </div>
     <div class="valorCelular">
       <img src="./img/CC HOJITAS.png" alt="Hoja valores">
       <h3>Nuestro objetivo es sensibilizar sobre cómo nuestros hábitos,consumos y residuos impactan tanto en nuestros hogares como en nuestra ciudad.</h3>
     </div>
     <div class="valorCelular">
       <img src="./img/CC HOJITAS.png" alt="Hoja valores">
       <h3>¿Qué hacemos? <br> Generamos alianzas estratégicas,articulando distintos sectores en experiencias de compostaje a gran escala.</h3>
     </div>
   </div>
   <div class="capaNosotros"></div>
 </div>`;
}


// Función para sección Impacto

let agregarCardsImpacto = (tituloImpacto, imagenImpacto, textoCardImpacto) => {
  let contenedor = document.querySelector(`.contenidoImpacto`);
  let impacto = `<img src=${imagenImpacto} class="d-block w-100"
  alt="compost">
<h4 class="sub-carrusel">${tituloImpacto}</h4>
<p>${textoCardImpacto}</p>`;
  contenedor.innerHTML += impacto;
};

const impacto = "./datos/impacto.json";

fetch(impacto)
  .then((res) => res.json())
  .then((datos) => {
    for (imp of datos) {
      agregarCardsImpacto(
        imp.tituloImpacto,
        imp.imagenImpacto,
        imp.textoCardImpacto,
      );
    }
  })
  .catch((err) => console.log(`Ocurrió un error en la carga de servicios`))
  .finally((dat) => {
    console.log(`servicios cargados`);
  });


let seccionImpacto = document.querySelector(`.contenidoImpacto`)
if (window.screen.width > 990){
  seccionImpacto.innerHTML = `probando`;
}else{
  seccionImpacto.innerHTML =`porbando2`
}