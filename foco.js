// Se ejecuta al cargar la página completa
window.addEventListener('load', function () {
    // Llamada a la función foco()
    // Observe como puede estar la declaración abajo de la llamada.
    foco();
});


function foco() {
    // Le agrega una clase al body
    document.querySelector('body').classList.add('oscuridad');
    // Agrega el título
    const titulo = document.createElement("h1");
    titulo.classList.add("titulo");
    const anio = new Date().getFullYear();
    titulo.innerText = `Desarrollo web ${anio}`;
    document.body.appendChild(titulo);
    const img = document.createElement("img"); // Crea un elemento HTML imagen
    img.classList.add('foco'); // Le agrega una clase
    img.setAttribute('src', 'img/foco-apagado.jpg');
    img.addEventListener('click', () => {
        // Busca si la cadena 'apagado' esta en el attributo src
        if (img.src.indexOf("apagado") > 0) {
            // Cambiamos la imagen y el fondo
            img.setAttribute('src', 'img/foco-prendido.jpg');
            document.body.classList.remove('oscuridad');
            document.body.classList.add('luz');
        } else {
            // Cambiamos la imagen y el fondo
            img.setAttribute('src', 'img/foco-apagado.jpg');
            document.body.classList.remove('luz');
            document.body.classList.add('oscuridad');
        }
    });
    document.body.appendChild(img);
}