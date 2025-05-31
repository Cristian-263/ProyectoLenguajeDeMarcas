// La función se mantiene igual, se encarga de cargar las películas del JSON
function cargarPeliculas(cartelera) {
    const contenedor = document.getElementById('contenedor-cartelera');
    contenedor.innerHTML = ''; // Limpia el contenedor antes de añadir nuevas películas

    cartelera.forEach(pelicula => {
        const card = document.createElement('div');
        card.className = 'col'; // Clase de Bootstrap para las columnas de la cuadrícula
        card.innerHTML = `
          <div class="card h-100 rounded-shadow border-0">
            <img src="${pelicula.imagen}" class="card-img-top card-img-poster" alt="Cartel de ${pelicula.nombre}">
            <div class="card-body d-flex flex-column">
              <h2 class="card-title">${pelicula.nombre}</h2>
              <p class="card-text"><strong>Director:</strong> ${pelicula.director}</p>
              <p class="card-text"><strong>Actores:</strong> ${pelicula.actores_principales.join(', ')}</p>
              <p class="card-text flex-grow-1"><strong>Sinopsis:</strong> ${pelicula.sinopsis}</p>
              <a href="https://www.reelcinemas.ae/movie/${pelicula.id || 'buy-tickets'}" target="_blank" class="btn btn-primary mt-auto">Comprar Entrada</a>
            </div>
          </div>
        `;

        contenedor.appendChild(card);
    });
}

// Se ejecuta al cargar la página para obtener la cartelera desde cartelera.json
window.onload = function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'cartelera.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const cartelera = JSON.parse(xhr.responseText);
            cargarPeliculas(cartelera);
        }
    };
    xhr.send();
};