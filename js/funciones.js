// Capturar los elementos de la lista <ul>
let lista = document.getElementById('lista');
let tareaInput = getElementById('tareaInput');
btnNuevaTarea = document.getElementById('btn-agregar');

//Eventos --> Agregar contenido al pulgar 'Agregar Tarea".
btnNuevaTarea.addEventListener('click', agregarTarea);

//Evento de Comprobar Input
tareaInput.addEventListener('click', comprobarInput)

//Borrar las tareas de las listas de forma dinámica
for (var i = 0; i <= lista.children.length - 1; i++) {
    lista.children[i].addEventListener('click', eliminarTarea);
}


//Funciones

function agregarTarea(params) {
    console.log(agregarTarea);

}

function comprobarInput(params) {
    alert('Comprobar input');

}

function eliminarTareas(params) {
    alert('ELIMINAR');
}