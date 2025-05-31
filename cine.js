
    function cargarPeliculas(cartelera) {
      const contenedor = document.getElementById('contenedor-cartelera');
      contenedor.innerHTML = '';

      cartelera.forEach(pelicula => {
        const card = document.createElement('div');
        card.className = 'col';
        card.innerHTML = `
          <div class="card h-100 rounded-shadow border-0">
            <img src="${pelicula.imagen}" class="card-img-top" style="height: 500px;" alt="Cartel de ${pelicula.nombre}">
            <div class="card-body">
              <h2 class="card-title ">${pelicula.nombre}</h2>
              <p class="card-text"><strong>Director:</strong> ${pelicula.director}</p>
              <p class="card-text"><strong>Actores:</strong> ${pelicula.actores_principales.join(', ')}</p>
              <p class="card-text"><strong>Sinopsis:</strong> ${pelicula.sinopsis}</p>
            </div>
          </div>
        `;

        contenedor.appendChild(card);
      });
    }

    // Se ejecuta al cargar la página
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
 