import './src/App/components/card/cardComponent.js';

const divCards = document.querySelector('#container-cards');
const alumnos = [
    {
        nombre : 'Alumno A',
        apellidos : 'Apellido A'
    },
    {
        nombre : 'Alumno B',
        apellidos : 'Apellido B'
    },
    {
        nombre : 'Alumno C',
        apellidos : 'Apellido C'
    },
    {
        nombre : 'Alumno D',
        apellidos : 'Apellido D'
    },
    {
        nombre : 'Alumno E',
        apellidos : 'Apellido E'
    }

]

document.addEventListener('DOMContentLoaded', (e) =>{
    alumnos.forEach((item) =>{
        divCards.insertAdjacentHTML('beforeend', `<card-component class="g-3 col-4">
        <span slot = "numero">${item.nombre}</span>
        <span slot = "contenido">${item.apellidos}</span>
        </card-component>`);
    });
});