// Obtener parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const ganador = urlParams.get('ganador') || 'usuario';
const nombreJugador = urlParams.get('nombre') || 'JUGADOR';
const puntajeUsuario = parseInt(urlParams.get('puntajeUsuario')) || 0;
const puntajeComputadora = parseInt(urlParams.get('puntajeComputadora')) || 0;
const empates = parseInt(urlParams.get('empates')) || 0;
const totalRondas = puntajeUsuario + puntajeComputadora + empates;

// Elementos del DOM
const winnerTitle = document.getElementById('winnerTitle');
const winnerName = document.getElementById('winnerName');
const winnerIcon = document.getElementById('winnerIcon');
const winnerMessage = document.getElementById('winnerMessage');
const winnerEmojis = document.getElementById('winnerEmojis');
const totalRondasEl = document.getElementById('totalRondas');
const victoriasUsuarioEl = document.getElementById('victoriasUsuario');
const victoriasComputadoraEl = document.getElementById('victoriasComputadora');
const empatesEl = document.getElementById('empates');
const winnerCard = document.getElementById('winnerCard');
const statsCard = document.getElementById('statsCard');
const buttonGroup = document.querySelector('.button-group');

// Configurar según quién ganó
if (ganador === 'usuario') {
    winnerTitle.textContent = '🏆 ¡GANADOR!';
    winnerName.textContent = nombreJugador;
    winnerIcon.textContent = '👑';
    winnerMessage.textContent = 'Ha derrotado a la computadora';
    winnerEmojis.textContent = '✊ ✋ ✌️';
    winnerCard.style.borderLeft = '6px solid #4ade80';
} else {
    winnerTitle.textContent = '🤖 LA COMPUTADORA GANÓ';
    winnerName.textContent = 'COMPUTADORA';
    winnerIcon.textContent = '🤖';
    winnerMessage.textContent = 'Mejor suerte la próxima vez';
    winnerEmojis.textContent = '🤖 ⚙️ 💻';
    winnerCard.style.borderLeft = '6px solid #f87171';
}

// Actualizar estadísticas
totalRondasEl.textContent = totalRondas;
victoriasUsuarioEl.textContent = puntajeUsuario;
victoriasComputadoraEl.textContent = puntajeComputadora;
empatesEl.textContent = empates;

// Animación de entrada solo para stats y botón (winner-card visible desde el inicio)
document.addEventListener('DOMContentLoaded', function() {
    statsCard.style.opacity = '0';
    buttonGroup.style.opacity = '0';
    
    setTimeout(() => {
        statsCard.style.animation = 'slideUp 0.6s ease-out';
        statsCard.style.opacity = '1';
    }, 200);
    setTimeout(() => {
        buttonGroup.style.animation = 'slideUp 0.6s ease-out';
        buttonGroup.style.opacity = '1';
    }, 400);
});

// Efecto de confeti simple con CSS
function crearConfeti() {
    const colores = ['#667eea', '#764ba2', '#4ade80', '#f87171', '#fbbf24'];
    for (let i = 0; i < 30; i++) {
        const confeti = document.createElement('div');
        confeti.className = 'confeti';
        confeti.style.left = Math.random() * 100 + '%';
        confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        confeti.style.animationDelay = Math.random() * 2 + 's';
        confeti.style.animationDuration = (2 + Math.random() * 2) + 's';
        document.body.appendChild(confeti);
        setTimeout(() => confeti.remove(), 4000);
    }
}

// Lanzar confeti si ganó el usuario
if (ganador === 'usuario') {
    setTimeout(crearConfeti, 500);
}

// Botón borrar estadísticas
const btnBorrarStats = document.getElementById('btnBorrarStats');
if (btnBorrarStats) {
    btnBorrarStats.addEventListener('click', function() {
        totalRondasEl.textContent = '0';
        victoriasUsuarioEl.textContent = '0';
        victoriasComputadoraEl.textContent = '0';
        empatesEl.textContent = '0';
        
        // Efecto visual de confirmación
        this.textContent = '✅ BORRADO';
        this.style.background = 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)';
        this.style.boxShadow = '0 4px 20px rgba(74, 222, 128, 0.5)';
        
        setTimeout(() => {
            this.textContent = '🗑️ BORRAR ESTADÍSTICAS';
            this.style.background = '';
            this.style.boxShadow = '';
        }, 1500);
    });
}