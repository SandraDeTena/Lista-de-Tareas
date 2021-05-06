// Capturar los elementos de la lista <ul>
let lista = document.getElementById('lista');
let tareaInput = getElementById('tareaInput');
btnNuevaTarea = document.getElementById('btn-agregar');


//Funciones

let agregarTarea = function () {
    let tarea = tareaInput.value;
    let nuevaTarea = document.createElement('li');
    let enlace = document.createElement('a');
    let contenido = document.createTextNode('tarea');

    if (tarea === '') {
        tareaInput.setAttribute('placeholder', 'Agregar una tarea');
        tareaInput.className = 'error';
        return false;
    }

    //Agregar el contenido al enlace.
    enlace.appendChild(contenido);
    //Le establecemos al <a> el href.
    enlace.setAttribute('href', '#');
    //Agregamos el enlace <a> a la Nueva Tarea que es <li>
    nuevaTarea.appendChild(enlace);
    //Agregar la nueva tarea a al lista <ul>
    lista.appendChild(nuevaTarea);

    tareaInput.value = '';

    for (var i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener('click', function () {
            this.parentNode.removeChild(this);
        });
    }
};

let comprobarInput = function () {
    tareaInput.className = '';
    tareaInput.setAttribute('placeholder', 'Agrear una tarea');

}

let eleminarTarea = function () {
    this.parentNode.removeChild(this)
}




//Eventos --> Agregar contenido al pulgar 'Agregar Tarea".
btnNuevaTarea.addEventListener('click', agregarTarea);

//Evento de Comprobar Input
tareaInput.addEventListener('click', comprobarInput)

//Borrar las tareas de las listas de forma dinámica
for (var i = 0; i <= lista.children.length - 1; i++) {
    lista.children[i].addEventListener('click', eliminarTarea);
}

