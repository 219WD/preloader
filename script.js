// Selecciona el elemento HTML con el ID "preload-container" y lo guardamos en la variable "preloader".
const preloader = document.getElementById("preload-container");

// Selecciona el elemento HTML con el ID "main" y lo guardamos en la variable "main".
const main = document.getElementById("main");

// Utilizamos GSAP para animar los elementos con la clase "preload".
// La animación dura 1.5 segundos, cambia la opacidad de 0 a 1, escala de 0.3 a 1 y utiliza la animación "back".
gsap.from(".preload", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"});

// Definimos una función asincrónica llamada "loadData".
async function loadData() {
  // Cambia el estilo de "preloader" para que sea visible con un (display: flex).
  preloader.style.display = "flex";

  // Espera 2 segundos antes de continuar la ejecución.
  await sleep(2);

  // Después de esperar 2 segundos, oculta el "preloader".
  preloader.style.display = "none";

  // Muestra el contenido principal estableciendo el estilo de "main" a visible con un (display: flex).
  main.style.display = "flex";
}

// Definimos una función asincrónica llamada "sleep" que toma la cantidad de segundos como argumento.
async function sleep(seconds){
  // Devuelve una promesa que se resuelve después de esperar la cantidad de segundos especificada.
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

// Llama a la función "loadData" para iniciar el proceso de carga de la página.
loadData();
