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
    <h4>Córdoba Composta nace en 2021 como una alternativa a la gestión de residuos orgánicos en origen.</h4>

    <h4>Buscamos responsabilizarnos por nuestros consumos, hábitos y nuestro papel como productores de desechos, ofreciendo servicios vinculados al tratamiento de residuos orgánicos; destinados a empresas, organizaciones, instituciones, privadas y públicas.</h4>
    
    <h4>Es una Iniciativa Ganadora del desafío Jóvenes Innovadores del Laboratorio de Innovación Pública y Social de la Municipalidad de Córdoba.</h4>
    <h4>Sabemos que cada persona y organización es distinta y diversa, por eso nuestro propósito es co crear experiencias de compostaje teniendo en cuenta la singularidad de las personas y organizaciones.</h4>
    <h2>¡Animate a ser parte de la solución!</h2>
  </div>
  <div class="imagenNosotrosPc">
    <img src="./img/imagenSeccionNosotros.png" alt="Compostera">
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


// // Función para sección Impacto

// let agregarCardsImpacto = (tituloImpacto, imagenImpacto, textoCardImpacto) => {
//   let contenedor = document.querySelector(`.contenidoImpacto`);
//   let impacto = `<img src=${imagenImpacto} class="d-block w-100"
//   alt="compost">
// <h4 class="sub-carrusel">${tituloImpacto}</h4>
// <p>${textoCardImpacto}</p>`;
//   contenedor.innerHTML += impacto;
// };

// const impacto = "./datos/impacto.json";

// fetch(impacto)
//   .then((res) => res.json())
//   .then((datos) => {
//     for (imp of datos) {
//       agregarCardsImpacto(
//         imp.tituloImpacto,
//         imp.imagenImpacto,
//         imp.textoCardImpacto,
//       );
//     }
//   })
//   .catch((err) => console.log(`Ocurrió un error en la carga de servicios`))
//   .finally((dat) => {
//     console.log(`servicios cargados`);
//   });


// let seccionImpacto = document.querySelector(`.contenidoImpacto`)
// if (window.screen.width > 990){
//   seccionImpacto.innerHTML = `probando`;
// }else{
//   seccionImpacto.innerHTML =`porbando2`
// }

//* Evento de cards chicas
let cartaCamila=document.querySelector(".camilaCard")
let hoverCamila=document.querySelector(".hoverCardChicas1")

cartaCamila.addEventListener("mouseover",()=>{
  hoverCamila.classList.add(`activarHover`)
  setTimeout(()=>{
    hoverCamila.classList.add(`animar`)
  },1)
})

hoverCamila.addEventListener("mouseleave",()=>{
  hoverCamila.classList.remove(`animar`)
  setTimeout(()=>{
    hoverCamila.classList.remove(`activarHover`)
  },500)
})


let cartaMarianela=document.querySelector(".marianelaCard")
let hoverMarianela=document.querySelector(".hoverCardChicas2")
cartaMarianela.addEventListener("mouseenter",()=>{
  hoverMarianela.classList.add(`activarHover`)
  setTimeout(()=>{
    hoverMarianela.classList.add(`animar`)
  },1)
})

hoverMarianela.addEventListener("mouseleave",()=>{
  hoverMarianela.classList.remove(`animar`)
  setTimeout(()=>{
    hoverMarianela.classList.remove(`activarHover`)
  },500)
})