// ------------------------------
// ABRIR LA SORPRESA
// ------------------------------

const boton = document.getElementById("abrir");
const pantalla = document.getElementById("inicio");
const pagina = document.querySelector(".pagina");

boton.addEventListener("click", () => {
    pantalla.classList.add("ocultar");
    pagina.classList.add("mostrar");
    iniciarPetalos();
});


// ------------------------------
// PÉTALOS
// ------------------------------

let petalosActivos = false;

function iniciarPetalos() {
    if (petalosActivos) return;

    petalosActivos = true;

    setInterval(crearPetalo, 650);
}

function crearPetalo() {

    const petalo = document.createElement("div");

    const flores = [
    "✦",
    "✧",
    "•",
    "❋"
];

    petalo.className = "petalo";

    petalo.textContent =
        flores[Math.floor(Math.random() * flores.length)];

    petalo.style.left =
        `${Math.random() * 100}vw`;

    petalo.style.fontSize =
        `${12 + Math.random() * 14}px`;

    const duracion =
        5 + Math.random() * 5;

    petalo.style.animationDuration =
        `${duracion}s`;

    document.body.appendChild(petalo);

    setTimeout(() => {
        petalo.remove();
    }, duracion * 1000);
}


// ------------------------------
// CONTADOR
// ------------------------------

// 14 de febrero de 2024
const fechaInicio =
    new Date(2024, 1, 14, 0, 0, 0);


function actualizarReloj() {

    const ahora = new Date();

    let diferencia =
        ahora - fechaInicio;

    if (diferencia < 0) {
        diferencia = 0;
    }

    const totalSegundos =
        Math.floor(diferencia / 1000);

    const dias =
        Math.floor(totalSegundos / 86400);

    const horas =
        Math.floor(
            (totalSegundos % 86400) / 3600
        );

    const minutos =
        Math.floor(
            (totalSegundos % 3600) / 60
        );

    const segundos =
        totalSegundos % 60;


    document.getElementById("reloj").textContent =
        `${dias} días · ${horas} horas · ${minutos} minutos · ${segundos} segundos`;
}


// Actualizar el contador inmediatamente
actualizarReloj();

// Actualizar cada segundo
setInterval(actualizarReloj, 1000);