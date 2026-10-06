// ARRAY: contiene las posibles jugadas.
const jugadas = ["Piedra ✊", "Papel ✋", "Tijera ✌️"];

// OBJETO: almacena los puntajes de la partida.
let puntajes = {
    usuario: 0,
    computadora: 0,
    empates: 0
};

// Variable para almacenar el nombre del jugador.
let nombreJugador = "";

// Variable para contar el número de ronda.
let numeroRonda = 0;

// FUNCIÓN: solicita y valida el nombre del jugador.
function pedirNombre() {
    let nombre = "";
    let nombreValido = false;

    // CICLO: repite hasta que el nombre sea válido.
    while (!nombreValido) {
        nombre = prompt("Ingresá tu nombre:");

        // Validación: nombre obligatorio.
        if (nombre === null) {
            alert("El nombre es obligatorio para jugar.");
            continue;
        }

        // Eliminar espacios innecesarios al principio y al final.
        nombre = nombre.trim();

        // Validación: al menos 3 caracteres y no solo espacios.
        if (nombre.length < 3) {
            alert("El nombre debe tener al menos 3 caracteres.");
            continue;
        }

        nombreValido = true;
    }

    // Almacenar en mayúsculas.
    nombreJugador = nombre.toUpperCase();

    alert("¡Bienvenido " + nombreJugador + "!\n\nPreparáte para jugar Piedra, Papel o Tijera.");
}

// FUNCIÓN: genera una jugada aleatoria para la computadora usando Math.random().
function jugadaRandom() {
    // Math.random() genera un número entre 0 y 1.
    // Multiplicamos por 3 para obtener 0-2.999...
    // Math.floor redondea hacia abajo: 0, 1, 2.
    // Sumamos 1 para obtener 1, 2, 3.
    let numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    return numeroAleatorio;
}

// FUNCIÓN: solicita y valida la jugada del usuario.
function pedirJugada() {
    let eleccion = 0;
    let entradaValida = false;

    // CICLO: repite hasta que la entrada sea válida.
    while (!entradaValida) {
        let entrada = prompt("Elegí tu jugada:\n\n1 - Piedra ✊\n2 - Papel ✋\n3 - Tijera ✌️");

        // Si el usuario cancela, se considera inválido y vuelve a preguntar.
        if (entrada === null) {
            alert("Debés elegir una opción válida.");
            continue;
        }

        // Convertir a número.
        eleccion = Number(entrada);

        // Validar: debe ser número, entre 1 y 3.
        if (isNaN(eleccion) || eleccion < 1 || eleccion > 3) {
            alert("Opción inválida. Ingresá 1, 2 o 3.");
            continue;
        }

        entradaValida = true;
    }

    return eleccion;
}

// FUNCIÓN: recibe dos jugadas y determina el resultado.
function compararJugadas(jugadaUsuario, jugadaComputadora) {
    // Empate: ambas jugadas son iguales.
    if (jugadaUsuario === jugadaComputadora) {
        return "empate";
    }

    // Usuario gana: Piedra(1) > Tijera(3), Tijera(3) > Papel(2), Papel(2) > Piedra(1).
    if (
        (jugadaUsuario === 1 && jugadaComputadora === 3) ||
        (jugadaUsuario === 3 && jugadaComputadora === 2) ||
        (jugadaUsuario === 2 && jugadaComputadora === 1)
    ) {
        return "usuario";
    }

    // Si no es empate ni gana el usuario, gana la computadora.
    return "computadora";
}

// FUNCIÓN: actualiza el objeto puntajes según el resultado.
function actualizarPuntajes(resultado) {
    if (resultado === "usuario") {
        puntajes.usuario++;
    } else if (resultado === "computadora") {
        puntajes.computadora++;
    } else {
        puntajes.empates++;
    }
}

// FUNCIÓN: muestra el resultado de la ronda con alert().
function mostrarResultadoRonda(ronda, jugadaUsuario, jugadaComputadora, resultado) {
    let mensaje = "RONDA " + ronda + "\n\n";
    mensaje += nombreJugador + ":\n" + jugadas[jugadaUsuario - 1] + "\n\n";
    mensaje += "COMPUTADORA:\n" + jugadas[jugadaComputadora - 1] + "\n\n";

    if (resultado === "usuario") {
        mensaje += "🎉 ¡Ganaste esta ronda!";
    } else if (resultado === "computadora") {
        mensaje += "🤖 La computadora ganó esta ronda.";
    } else {
        mensaje += "🤝 ¡Empate!";
    }

    alert(mensaje);
}

// FUNCIÓN: muestra el marcador actual con alert().
function mostrarMarcador() {
    let mensaje = "MARCADOR\n\n";
    mensaje += nombreJugador + ": " + puntajes.usuario + "\n";
    mensaje += "COMPUTADORA: " + puntajes.computadora + "\n";
    mensaje += "EMPATES: " + puntajes.empates;
    alert(mensaje);
}

// FUNCIÓN: muestra información en consola para depuración.
function mostrarEnConsola(ronda, jugadaUsuario, jugadaComputadora, resultado) {
    console.log("--- RONDA " + ronda + " ---");
    console.log("Jugada usuario:", jugadas[jugadaUsuario - 1]);
    console.log("Jugada computadora:", jugadas[jugadaComputadora - 1]);
    console.log("Resultado:", resultado);
    console.log("Puntajes actuales:", puntajes);
    console.log("-------------------");
}

// FUNCIÓN: muestra el resultado final de la partida y redirige a ganador.html
function mostrarResultadoFinal() {
    let totalRondas = puntajes.usuario + puntajes.computadora + puntajes.empates;
    let ganador = puntajes.usuario > puntajes.computadora ? "usuario" : "computadora";

    // Construir URL con parámetros
    let url = "ganador.html?";
    url += "ganador=" + encodeURIComponent(ganador);
    url += "&nombre=" + encodeURIComponent(nombreJugador);
    url += "&puntajeUsuario=" + encodeURIComponent(puntajes.usuario);
    url += "&puntajeComputadora=" + encodeURIComponent(puntajes.computadora);
    url += "&empates=" + encodeURIComponent(puntajes.empates);

    // Redirigir a la página de victoria
    window.location.href = url;
}

// FUNCIÓN: ejecuta una ronda completa del juego.
function jugarRonda() {
    numeroRonda++;

    // 1. Pedir jugada al usuario.
    let jugadaUsuario = pedirJugada();

    // 2. Generar jugada de la computadora.
    let jugadaComputadora = jugadaRandom();

    // 3. Comparar jugadas.
    let resultado = compararJugadas(jugadaUsuario, jugadaComputadora);

    // 4. Actualizar puntajes.
    actualizarPuntajes(resultado);

    // 5. Mostrar resultado de la ronda.
    mostrarResultadoRonda(numeroRonda, jugadaUsuario, jugadaComputadora, resultado);

    // 6. Mostrar en consola.
    mostrarEnConsola(numeroRonda, jugadaUsuario, jugadaComputadora, resultado);

    // 7. Mostrar marcador.
    mostrarMarcador();

    return resultado;
}

// FUNCIÓN: controla el flujo principal de la partida (mejor de 3).
function jugarPartida() {
    // Inicializar puntajes.
    puntajes.usuario = 0;
    puntajes.computadora = 0;
    puntajes.empates = 0;
    numeroRonda = 0;

    // CICLO: mantiene la partida activa hasta que alguien alcance 2 victorias.
    while (puntajes.usuario < 2 && puntajes.computadora < 2) {
        jugarRonda();
    }

    // Mostrar resultado final.
    mostrarResultadoFinal();
}

// FUNCIÓN: inicia el juego completo.
function iniciarJuego() {
    pedirNombre();
    jugarPartida();
}

// Evento click en el botón para iniciar el juego.
document.getElementById("btnIniciar").addEventListener("click", function() {
    iniciarJuego();
});