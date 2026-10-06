# Piedra, Papel o Tijera

Proyecto realizado como actividad introductoria de JavaScript para DAWI con DOM.

## Descripción

Juego interactivo de Piedra, Papel o Tijera donde el jugador se enfrenta a la computadora. Incluye página principal, página de ayuda, página de victoria con estadísticas, y páginas educativas de conceptos de JavaScript.

## Tecnologías

- HTML5
- CSS3 (animaciones, gradientes, responsive)
- JavaScript (vanilla, sin frameworks)

## Estructura del proyecto

```
index.html          → Página principal del juego
styles.css          → Estilos de todas las páginas
clase10.js          → Lógica del juego
ayuda.html          → Página de ayuda "Cómo jugar"
ganador.html        → Página de victoria con estadísticas
ganador.js          → Lógica de la página de victoria
DOM.html            → Explicación del DOM en el juego
conceptos1.html     → Variables, Condicionales, Funciones, Arrays
conceptos2.html     → Objetos, Ciclos, Math.random()
README.md           → Este archivo
```

## Cómo ejecutar

Abrir `index.html` en un navegador web.

## Cómo jugar

1. Hacer clic en **INICIAR PARTIDA**
2. Ingresar nombre (mínimo 3 caracteres)
3. Elegir jugada: 1 (Piedra), 2 (Papel), 3 (Tijera)
4. Ver resultado de la ronda y marcador
5. Repetir hasta que alguien gane 2 rondas
6. Ver página de victoria con estadísticas

## Conceptos utilizados

### Variables y constantes
- `const jugadas` — Array inmutable con las jugadas
- `let puntajes` — Objeto mutable con los marcadores
- `let nombreJugador` — Nombre del jugador
- `let numeroRonda` — Contador de rondas

### Strings y números
- Manipulación de cadenas con `.trim()`, `.toUpperCase()`
- Conversión con `Number()` y validación con `isNaN()`

### Operadores
- Aritméticos: `+`, `*`, `++`
- Comparación estricta: `===`, `!==`
- Lógicos: `&&`, `||`

### Funciones
- `pedirNombre()` — Solicita y valida el nombre
- `jugadaRandom()` — Genera jugada aleatoria
- `pedirJugada()` — Solicita y valida la opción del usuario
- `compararJugadas()` — Determina el ganador
- `actualizarPuntajes()` — Modifica el objeto puntajes
- `mostrarResultadoRonda()` — Muestra alert con detalles
- `mostrarMarcador()` — Muestra alert con puntajes
- `mostrarEnConsola()` — Registra información de depuración
- `mostrarResultadoFinal()` — Redirige a ganador.html
- `jugarRonda()` — Orquesta una ronda completa
- `jugarPartida()` — Controla el bucle principal
- `iniciarJuego()` — Punto de entrada

### Parámetros y return
- `compararJugadas(jugadaUsuario, jugadaComputadora)` retorna `"usuario"`, `"computadora"` o `"empate"`
- `jugadaRandom()` retorna número 1-3
- `pedirJugada()` retorna número validado 1-3

### Condicionales
- `if / else if / else` en validaciones de entrada
- Lógica de juego en `compararJugadas()` con operadores `&&` y `||`
- Control de flujo en `jugarPartida()`

### Arrays
- `const jugadas = ["Piedra ✊", "Papel ✋", "Tijera ✌️"]` para mapear índices a nombres

### Objetos
- `puntajes = { usuario: 0, computadora: 0, empates: 0 }` como acumulador de estado

### Ciclos
- `while` en `pedirNombre()` para validar nombre
- `while` en `pedirJugada()` para validar opción
- `while` en `jugarPartida()` para mantener partida activa hasta 2 victorias

### Acumuladores
- `puntajes.usuario++`, `puntajes.computadora++`, `puntajes.empates++`
- `numeroRonda++` para contar rondas totales

### Validaciones
- Nombre: obligatorio, ≥3 caracteres, no solo espacios, trim, uppercase
- Jugada: número entero entre 1 y 3, no NaN

### Math.random()
- En `jugadaRandom()`: `Math.floor(Math.random() * 3) + 1` genera 1, 2 o 3

### prompt(), alert(), console.log()
- `prompt()` para entrada de nombre y jugada
- `alert()` para bienvenida, resultado de ronda, marcador
- `console.log()` para depuración interna de cada ronda

### DOM
- `getElementById()` y `querySelector()` para seleccionar elementos
- `addEventListener('click')` para botones
- `addEventListener('DOMContentLoaded')` para animaciones de entrada
- `textContent` para mostrar datos dinámicos
- `style` para modificar estilos dinámicamente
- `createElement()`, `appendChild()`, `remove()` para efecto confeti

## Flujo general

```
INICIO
  ↓
Solicitar nombre (prompt)
  ↓
Validar nombre (while + if)
  ↓
Mostrar bienvenida (alert)
  ↓
Solicitar jugada (prompt)
  ↓
Validar jugada (while + if)
  ↓
Computadora genera jugada (Math.random)
  ↓
Comparar jugadas (if/else + operadores lógicos)
  ↓
Actualizar puntajes (objeto + acumuladores)
  ↓
Mostrar resultado ronda (alert + console.log)
  ↓
Mostrar marcador (alert + console.log)
  ↓
¿Alguien llegó a 2 victorias? (while condition)
       ↓ NO
    Nueva ronda
       ↓ SÍ
Redirigir a ganador.html
       ↓
Mostrar resultado final
       ↓
      FIN
```

## Reglas del juego

- Piedra ✊ gana a Tijera ✌️
- Tijera ✌️ gana a Papel ✋
- Papel ✋ gana a Piedra ✊
- Dos jugadas iguales producen empate
- Gana quien llegue primero a 2 victorias (mejor de 3)
- Los empates se contabilizan pero no cuentan como victoria

## Navegación entre páginas

- `index.html` → `ayuda.html` → `index.html`
- `index.html` → `ganador.html` → `index.html`
- `index.html` → `DOM.html` → `index.html`
- `index.html` → `conceptos1.html` → `index.html`
- `index.html` → `conceptos2.html` → `index.html`

## Créditos

DAWI — Desarrollo de Aplicaciones Web Inteligentes
