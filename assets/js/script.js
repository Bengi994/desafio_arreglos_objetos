const propiedades_venta = [
    {
        nombre: 'Casa en la playa',
        src: '/assets/img/casa_playa.jpg',
        descripcion: 'Linda casa a las orillas de la playa san bartolo',
        ubicacion: 'Lima',
        habitaciones: 4,
        banios:3,
        costo: 500000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Departamento en el centro',
        src: '/assets/img/centro.jpg',
        descripcion: 'Moderno departamento en el centro de la ciudad.',
        ubicacion: 'Lima',
        habitaciones: 3,
        banios:2,
        costo: 300000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa de campo',
        src: '/assets/img/aqp.jpg',
        descripcion: 'Amplia casa en el campo.',
        ubicacion: 'Arequipa',
        habitaciones: 5,
        banios:2,
        costo: 450000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Departamento con vista al parque',
        src: '/assets/img/cusco.jpg',
        descripcion: 'Departamento con hermosa vista al parque.',
        ubicacion: 'Cusco',
        habitaciones: 2,
        banios: 1,
        costo: 250000,
        smoke: true,
        pets: false
    }
];

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en Miraflores',
        src: '/assets/img/miraflores.jpg',
        descripcion: 'Cómodo apartamento cerca a la playa.',
        ubicacion: 'Lima',
        habitaciones: 1,
        banios:2,
        costo: 1500,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa en Surco',
        src: '/assets/img/surco.jpg',
        descripcion: 'Espaciosa casa con jardín.',
        ubicacion: 'Lima',
        habitaciones: 3,
        banios:4,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Departamento en San Isidro',
        src: '/assets/img/img-main.jpeg',
        descripcion: 'Lujoso departamento en una zona exclusiva.',
        ubicacion: 'Lima',
        habitaciones: 2,
        banios:1,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa en la Molina',
        src: '/assets/img/la_molina.jpg',
        descripcion: 'Casa amplia con piscina.',
        ubicacion: 'Lima',
        habitaciones: 4,
        banios:2,
        costo: 3000,
        smoke: true,
        pets: false
    }
];

// FUNCIONES *******
//*******************/


function renderPropiedades(propiedades, containerId) {
    const container = document.getElementById(containerId);
    const row = document.createElement('div');
    row.className = 'row'; // Agregamos la clase row para que se comporten como filas

    propiedades.forEach(propiedad => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4'; // Agregamos clases de columna de Bootstrap para el diseño

        const propiedadElement = document.createElement('div');
        propiedadElement.innerHTML = `
            <div class="card">
                <img
                    src="${propiedad.src}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">
                        ${propiedad.nombre}
                    </h5>
                    <p class="card-text">
                        ${propiedad.descripcion}
                    </p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                        <i class="fas fa-bath"></i> ${propiedad.banios || 'N/A'} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> $${propiedad.costo}</p>
                    <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                        <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> 
                        ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                    </p>
                    <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                        <i class="fas fa-paw"></i> 
                        ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
            </div>
        `;
        
        col.appendChild(propiedadElement);
        row.appendChild(col);
    });

    container.appendChild(row);
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('venta')) {
        const propiedadesMostrar = propiedades_venta.slice(0, 3);
        renderPropiedades(propiedadesMostrar, 'venta');
    }
    if (document.getElementById('alquiler')) {
        const propiedadesMostrar = propiedades_alquiler.slice(0, 3);
        renderPropiedades(propiedadesMostrar, 'alquiler');
    }
});