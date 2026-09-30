# Piedra, Papel o Tijera

Proyecto realizado como actividad introductoria de JavaScript para DAWI — Desarrollo de Aplicaciones Web Inteligentes.

---

## Conceptos utilizados

| Concepto | Dónde aparece |
|----------|---------------|
| **Variables** | `let nombre`, `let eleccion`, `let entradaValida`, `let numeroRonda`, `let puntajes` |
| **Constantes** | `const jugadas = ['Piedra ✊', 'Papel ✋', 'Tijera ✌️']` |
| **Strings y números** | Nombres de jugadas, mensajes de alert/console, opciones numéricas 1/2/3 |
| **Operadores** | `===`, `!==`, `&&`, `||`, `+`, `=`, `+:` (concatenación), comparación |
| **Funciones** | `iniciarJuego()`, `pedirNombre()`, `pedirJugada()`, `jugadaRandom()`, `compararJugadas()`, `actualizarPuntajes()`, `mostrarResultadoRonda()`, `mostrarMarcador()`, `mostrarResultadoFinal()`, `jugarPartida()` |
| **Parámetros** | `compararJugadas(jugadaUsuario, jugadaComputadora)`, `actualizarPuntajes(resultado)`, `mostrarResultadoRonda(ronda, jugadaUsuario, jugadaComputadora, resultado)`, `mostrarMarcador(nombre)`, `mostrarResultadoFinal(nombre, rondasTotales)`, `jugarPartida(nombre)` |
| **return** | Todas las funciones devuelven valores: `jugadaRandom()` retorna 1-3, `compararJugadas()` retorna 'usuario'/'computadora'/'empate', `pedirNombre()` retorna string, `pedirJugada()` retorna número |
| **Condicionales** | `if/else` en `compararJugadas()`, `actualizarPuntajes()`, `mostrarResultadoFinal()`, validaciones en `pedirNombre()` y `pedirJugada()` |
| **Arrays** | `const jugadas = ['Piedra ✊', 'Papel ✋', 'Tijera ✌️']` - acceso por índice `jugadas[indice - 1]` |
| **Objetos** | `let puntajes = { usuario: 0, computadora: 0, empates: 0 }` - propiedades accedidas con notación punto |
| **Ciclos** | `do...while` en `pedirNombre()`, `while` en `pedirJugada()` y `jugarPartida()` (bucle principal) |
| **Acumuladores** | `puntajes.usuario++`, `puntajes.computadora++`, `puntajes.empates++` (escritos como `puntajes.usuario = puntajes.usuario + 1`) |
| **Validaciones** | Longitud nombre ≥ 3, trim, mayúsculas, entrada numérica 1-3, no null, isNaN |
| **Math.random()** | `jugadaRandom()` - `Math.floor(Math.random() * 3) + 1` genera 1, 2 o 3 |
| **prompt()** | `pedirNombre()` y `pedirJugada()` para entrada de usuario |
| **alert()** | Todas las funciones de muestra: bienvenida, resultado ronda, marcador, resultado final |
| **console.log()** | Registro detallado en cada ronda, marcador, resultado final para depuración |

---

## Flujo general

```text
INICIO
  ↓
Solicitar nombre (pedirNombre)
  ↓
Validar nombre (mín. 3 chars, trim, mayúsculas, no vacío)
  ↓
Mostrar bienvenida
  ↓
JUGAR PARTIDA (jugarPartida)
  ↓
  ┌─────────────────────────────────────┐
  │ CICLO while (usuario < 2 Y comp < 2) │
  │  ↓                                  │
  │ Solicitar jugada (pedirJugada)      │
  │  ↓                                  │
  │ Validar entrada (1, 2 o 3)          │
  │  ↓                                  │
  │ Computadora genera jugada           │
  │ (jugadaRandom con Math.random)      │
  │  ↓                                  │
  │ Comparar jugadas (compararJugadas)  │
  │  ↓                                  │
  │ Actualizar puntajes (acumuladores)  │
  │  ↓                                  │
  │ Mostrar resultado ronda (alert)     │
  │  ↓                                  │
  │ Mostrar en consola (console.log)    │
  │  ↓                                  │
  │ Mostrar marcador (alert + console)  │
  │  ↓                                  │
  └──────────────┬──────────────────────┘
                 ↓ ¿Alguien llegó a 2 victorias?
            NO /       \ SÍ
              ↓         ↓
         Nueva      Mostrar resultado
         ronda      final (alert + console)
              ↓         ↓
            FIN
```

---

## Archivos del proyecto

- **index.html** — Página de presentación visual (título, reglas, botón inicio, conceptos, footer)
- **styles.css** — Estética dark/gaming con gradientes, tarjetas, sombras, animaciones CSS
- **clase10.js** — Lógica completa del juego (sin manipulación DOM)
- **README.md** — Esta documentación

---

## Cómo jugar

1. Abrir `index.html` en un navegador
2. Hacer clic en **INICIAR PARTIDA**
3. Ingresar nombre (mín. 3 caracteres)
4. Elegir jugada en cada prompt: `1` Piedra, `2` Papel, `3` Tijera
5. Ver resultados en `alert()` y detalles en consola (F12)
6. La partida termina cuando alguien llega a 2 victorias (mejor de 3)

---

## Reglas implementadas

- ✅ Piedra gana a Tijera
- ✅ Tijera gana a Papel
- ✅ Papel gana a Piedra
- ✅ Empates se cuentan pero no terminan la partida
- ✅ Mejor de 3 (primero en 2 victorias)
- ✅ Pueden jugarse más de 3 rondas totales por empates

---

## Casos de prueba verificados

| Caso | Jugador | Computadora | Resultado esperado |
|------|---------|-------------|-------------------|
| 1 | Piedra (1) | Tijera (3) | Gana usuario |
| 2 | Papel (2) | Tijera (3) | Gana computadora |
| 3 | Piedra (1) | Piedra (1) | Empate |
| 4 | Usuario llega a 2 | — | Partida finaliza, usuario gana |
| 5 | — | Computadora llega a 2 | Partida finaliza, computadora gana |
| 6 | Varios empates | — | Empates acumulan, partida continúa |

---

## Restricciones respetadas

- ❌ Sin `document`, `querySelector`, `getElementById`, `innerHTML`, `textContent`
- ❌ Sin `addEventListener`, `onclick` (solo `onclick` inline en HTML para el botón de inicio)
- ❌ Sin DOM, eventos, clases, módulos, asincronismo, APIs, frameworks
- ❌ Sin `var`, operadores `==`/`!=`, ternarios complejos
- ✅ Solo `prompt()`, `alert()`, `console.log()` para interacción
- ✅ HTML/CSS solo para presentación visual
- ✅ JavaScript no modifica el HTML