//* Funcion para agregar cartas a servicio
let agregarCartasServicio = (titulo, imagen, textoCorto, textoHover, id) => {
  let contenedor = document.querySelector(`.contenedorDeCartasServicio`);
  let servicios = `<div class="div-card-servicios col-sm-12  col-lg-6 cartaServicio${id}">
    <div class="card text-center tamañoCartas">
        <div class="card-body">
          <div class="imagenCard" >
            <img src="${imagen}" alt="${titulo}">
          </div>
          <h5 class="card-title">${titulo}</h5>
          <p class="card-text">${textoCorto}</p>
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
    let count = 0;
    for (serv of datos) {
      agregarCartasServicio(
        serv.titulo,
        serv.imagen,
        serv.textoCorto,
        serv.textoHover,
        count
      );
      count++;
    }
  })
  .catch((err)=>console.log(`Ocurrió un error en la carga de servicios`))
  .finally(()=>{
    console.log(`Servicios cargados`)
  })
