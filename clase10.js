// ARRAY: contiene las posibles jugadas con sus emojis
const jugadas = ['Piedra ✊', 'Papel ✋', 'Tijera ✌️'];

// OBJETO: almacena los puntajes de la partida
let puntajes = {
    usuario: 0,
    computadora: 0,
    empates: 0
};

// Variable para contar el número total de rondas jugadas
let numeroRonda = 0;

// FUNCIÓN: genera aleatoriamente la jugada de la computadora (1, 2 o 3)
function jugadaRandom() {
    // Math.random() devuelve un número entre 0 (inclusive) y 1 (exclusivo)
    // Multiplicamos por 3 para obtener 0-2.999..., sumamos 1 para obtener 1-3.999...
    // Math.floor redondea hacia abajo: 1, 2 o 3
    return Math.floor(Math.random() * 3) + 1;
}

// FUNCIÓN: solicita y valida el nombre del jugador
function pedirNombre() {
    let nombre = '';
    // CICLO: do...while para validar el nombre (se ejecuta al menos una vez)
    do {
        nombre = prompt('Ingresá tu nombre (mínimo 3 caracteres):');
        
        // Validar que no sea null (usuario canceló)
        if (nombre === null) {
            alert('El nombre es obligatorio para jugar.');
            continue;
        }
        
        // Eliminar espacios al principio y al final
        nombre = nombre.trim();
        
        // Convertir a mayúsculas
        nombre = nombre.toUpperCase();
        
        // Validar longitud mínima
        if (nombre.length < 3) {
            alert('El nombre debe tener al menos 3 caracteres.');
        }
        
        // Validar que no sea solo espacios (ya se hizo trim, pero por seguridad)
        if (nombre === '') {
            alert('El nombre no puede estar vacío.');
        }
        
    } while (nombre.length < 3 || nombre === '');
    
    return nombre;
}

// FUNCIÓN: solicita y valida la jugada del usuario (1, 2 o 3)
function pedirJugada() {
    let eleccion = 0;
    let entradaValida = false;
    
    // CICLO: while para validar la jugada
    while (!entradaValida) {
        let entrada = prompt(
            'Elegí tu jugada:\n\n' +
            '1 - Piedra ✊\n' +
            '2 - Papel ✋\n' +
            '3 - Tijera ✌️'
        );
        
        // Validar que no sea null (usuario canceló)
        if (entrada === null) {
            alert('Debés elegir una opción para continuar.');
            continue;
        }
        
        // Convertir a número
        eleccion = Number(entrada);
        
        // Validar: debe ser número, entre 1 y 3
        if (isNaN(eleccion) || eleccion < 1 || eleccion > 3) {
            alert('Opción inválida. Ingresá 1, 2 o 3.');
        } else {
            entradaValida = true;
        }
    }
    
    return eleccion;
}

// FUNCIÓN: compara las jugadas y determina el resultado
// Recibe: jugada del usuario (1-3) y jugada de la computadora (1-3)
// Devuelve: 'usuario', 'computadora' o 'empate'
function compararJugadas(jugadaUsuario, jugadaComputadora) {
    // Si son iguales, es empate
    if (jugadaUsuario === jugadaComputadora) {
        return 'empate';
    }
    
    // Reglas del juego:
    // Piedra (1) gana a Tijera (3)
    // Tijera (3) gana a Papel (2)
    // Papel (2) gana a Piedra (1)
    
    // Usuario elige Piedra (1) y computadora Tijera (3)
    if (jugadaUsuario === 1 && jugadaComputadora === 3) {
        return 'usuario';
    }
    
    // Usuario elige Tijera (3) y computadora Papel (2)
    if (jugadaUsuario === 3 && jugadaComputadora === 2) {
        return 'usuario';
    }
    
    // Usuario elige Papel (2) y computadora Piedra (1)
    if (jugadaUsuario === 2 && jugadaComputadora === 1) {
        return 'usuario';
    }
    
    // En cualquier otro caso, gana la computadora
    return 'computadora';
}

// FUNCIÓN: actualiza el objeto puntajes según el resultado
function actualizarPuntajes(resultado) {
    if (resultado === 'usuario') {
        puntajes.usuario = puntajes.usuario + 1;  // Acumulador
    } else if (resultado === 'computadora') {
        puntajes.computadora = puntajes.computadora + 1;  // Acumulador
    } else if (resultado === 'empate') {
        puntajes.empates = puntajes.empates + 1;  // Acumulador
    }
}

// FUNCIÓN: muestra el resultado de la ronda con alert() y console.log()
function mostrarResultadoRonda(ronda, jugadaUsuario, jugadaComputadora, resultado) {
    // Obtener nombres de las jugadas desde el array
    let nombreJugadaUsuario = jugadas[jugadaUsuario - 1];
    let nombreJugadaComputadora = jugadas[jugadaComputadora - 1];
    
    // Determinar mensaje de resultado
    let mensajeResultado = '';
    if (resultado === 'usuario') {
        mensajeResultado = '🎉 ¡Ganaste esta ronda!';
    } else if (resultado === 'computadora') {
        mensajeResultado = '🤖 La computadora ganó esta ronda.';
    } else {
        mensajeResultado = '🤝 ¡Empate!';
    }
    
    // Mostrar con alert()
    alert(
        'RONDA ' + ronda + '\n\n' +
        'VOS:\n' + nombreJugadaUsuario + '\n\n' +
        'COMPUTADORA:\n' + nombreJugadaComputadora + '\n\n' +
        mensajeResultado
    );
    
    // Mostrar en consola para depuración
    console.log('--- RONDA ' + ronda + ' ---');
    console.log('Jugada usuario: ' + nombreJugadaUsuario + ' (' + jugadaUsuario + ')');
    console.log('Jugada computadora: ' + nombreJugadaComputadora + ' (' + jugadaComputadora + ')');
    console.log('Resultado: ' + resultado);
    console.log('Puntajes actuales:', puntajes);
}

// FUNCIÓN: muestra el marcador actual
function mostrarMarcador(nombre) {
    alert(
        'MARCADOR\n\n' +
        nombre + ': ' + puntajes.usuario + '\n' +
        'COMPUTADORA: ' + puntajes.computadora + '\n' +
        'EMPATES: ' + puntajes.empates
    );
    
    // También en consola
    console.log('--- MARCADOR ---');
    console.log('Usuario: ' + puntajes.usuario);
    console.log('Computadora: ' + puntajes.computadora);
    console.log('Empates: ' + puntajes.empates);
    console.log('Objeto completo:', puntajes);
}

// FUNCIÓN: muestra el resultado final de la partida
function mostrarResultadoFinal(nombre, rondasTotales) {
    if (puntajes.usuario === 2) {
        alert(
            '🏆 FIN DE LA PARTIDA 🏆\n\n' +
            '¡' + nombre + ' ganó!\n\n' +
            nombre + ': ' + puntajes.usuario + '\n' +
            'COMPUTADORA: ' + puntajes.computadora + '\n' +
            'EMPATES: ' + puntajes.empates + '\n\n' +
            'Rondas totales: ' + rondasTotales
        );
    } else {
        alert(
            '🤖 FIN DE LA PARTIDA 🤖\n\n' +
            'La computadora ganó.\n\n' +
            nombre + ': ' + puntajes.usuario + '\n' +
            'COMPUTADORA: ' + puntajes.computadora + '\n' +
            'EMPATES: ' + puntajes.empates + '\n\n' +
            'Rondas totales: ' + rondasTotales
        );
    }
    
    console.log('=== PARTIDA FINALIZADA ===');
    console.log('Ganador: ' + (puntajes.usuario === 2 ? nombre : 'Computadora'));
    console.log('Rondas totales: ' + rondasTotales);
    console.log('Puntajes finales:', puntajes);
}

// FUNCIÓN PRINCIPAL: controla el flujo completo de la partida
function jugarPartida(nombre) {
    // Reiniciar puntajes y contador de rondas
    puntajes.usuario = 0;
    puntajes.computadora = 0;
    puntajes.empates = 0;
    numeroRonda = 0;
    
    // CICLO: while - mantiene la partida activa hasta que alguien llegue a 2 victorias
    // La condición es: mientras NINGUNO tenga 2 victorias, seguir jugando
    while (puntajes.usuario < 2 && puntajes.computadora < 2) {
        numeroRonda = numeroRonda + 1;
        
        // 1. Pedir jugada al usuario
        let eleccionUsuario = pedirJugada();
        
        // 2. Generar jugada de la computadora
        let eleccionComputadora = jugadaRandom();
        
        // 3. Comparar jugadas
        let resultado = compararJugadas(eleccionUsuario, eleccionComputadora);
        
        // 4. Actualizar puntajes
        actualizarPuntajes(resultado);
        
        // 5. Mostrar resultado de la ronda
        mostrarResultadoRonda(numeroRonda, eleccionUsuario, eleccionComputadora, resultado);
        
        // 6. Mostrar marcador
        mostrarMarcador(nombre);
    }
    
    // 7. Mostrar resultado final
    mostrarResultadoFinal(nombre, numeroRonda);
}

// FUNCIÓN DE INICIO: punto de entrada del juego
function iniciarJuego() {
    // 1. Pedir y validar nombre
    let nombre = pedirNombre();
    
    // 2. Mostrar mensaje de bienvenida
    alert('¡Bienvenido ' + nombre + '!\n\nPreparáte para jugar Piedra, Papel o Tijera.');
    
    // 3. Iniciar la partida
    jugarPartida(nombre);
}