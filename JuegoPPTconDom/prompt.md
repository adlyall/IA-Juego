# Proyecto DAWI — Piedra, Papel o Tijera ✊ ✋ ✌️ (Versión 2.0)

Quiero que trabajes sobre este proyecto para crear una versión completa y ampliada del juego **Piedra, Papel o Tijera**, utilizando únicamente los conocimientos de JavaScript trabajados en la asignatura **DAWI — Desarrollo de Aplicaciones Web Inteligentes**.

## IMPORTANTE: antes de modificar el proyecto

Primero analiza los archivos existentes.

1. Revisa el código actual.
2. Identifica qué partes ya funcionan.
3. Identifica qué partes están incompletas.
4. Conserva y reutiliza todo el código existente que tenga sentido.
5. Completa y mejora el proyecto sin comenzar nuevamente desde cero, salvo que sea estrictamente necesario.

No reemplaces código correcto solamente para utilizar una solución diferente.

---

# Objetivo

Crear el juego completo con las siguientes páginas:

## Piedra, Papel o Tijera ✊ ✋ ✌️

El jugador se enfrentará a la computadora.

La interacción del juego debe realizarse utilizando:

```js
prompt();
alert();
console.log();
```

---

# MUY IMPORTANTE: nivel de JavaScript

Puedes utilizar:

- variables;
- constantes;
- strings;
- números;
- operadores;
- operadores lógicos;
- condicionales `if / else`;
- funciones;
- parámetros;
- `return`;
- arrays;
- objetos;
- ciclos `while`;
- ciclos `do...while`;
- acumuladores;
- validaciones;
- `Math.random()`;
- `prompt()`;
- `alert()`;
- `console.log()`;
- document;
- querySelector;
- querySelectorAll;
- getElementById;
- innerHTML;
- textContent;
- addEventListener;
- onclick.

No utilices conceptos que todavía no hemos trabajado.

## NO utilizar

No utilices:

```js
```

Tampoco utilices:

- eventos;
- clases;
- módulos;
- asincronismo;
- APIs;
- frameworks;
- librerías externas.

El HTML y CSS pueden utilizarse para crear la presentación visual del videojuego, pero **JavaScript no debe modificar el HTML**.

---

# Estructura del proyecto

El proyecto debe contener los siguientes archivos:

```text
index.html          → Página principal del juego
styles.css          → Estilos de todas las páginas
clase10.js          → Lógica del juego
ayuda.html          → Página de ayuda "Cómo jugar"
ganador.html        → Página de victoria con estadísticas
ganador.js          → Lógica de la página de victoria
DOM.html            → Explicación del DOM en el juego
conceptos1.html     → Conceptos: Variables, Condicionales, Funciones, Arrays
conceptos2.html     → Conceptos: Objetos, Ciclos, Math.random()
README.md           → Documentación del proyecto
```

---

# Reglas del juego

## 1. Nombre del jugador

Al comenzar la partida solicita el nombre mediante:

```js
prompt();
```

El nombre debe:

- ser obligatorio;
- tener al menos 3 caracteres;
- no admitir solamente espacios;
- eliminar espacios innecesarios al principio y al final;
- almacenarse en mayúsculas.

Si el nombre ingresado no es válido, debe volver a solicitarse utilizando un ciclo.

Después mostrar un mensaje similar a:

```text
¡Bienvenido MARTÍN!

Preparáte para jugar Piedra, Papel o Tijera.
```

---

# 2. Elegir una jugada

Solicita al jugador una opción mediante `prompt()`:

```text
1 - Piedra ✊
2 - Papel ✋
3 - Tijera ✌️
```

La entrada debe validarse.

Si el usuario ingresa:

- texto;
- un número menor a 1;
- un número mayor a 3;
- un valor inválido;

debe volver a solicitarse la jugada.

Utiliza un ciclo para realizar esta validación.

---

# 3. Jugada de la computadora

Crea una función que genere aleatoriamente un número entre:

```text
1
2
3
```

utilizando:

```js
Math.random();
```

Cada número representa:

```text
1 → Piedra ✊
2 → Papel ✋
3 → Tijera ✌️
```

La función debe utilizar `return`.

---

# 4. Array de jugadas

Utiliza un array para almacenar las posibles jugadas.

Por ejemplo:

```js
const jugadas = ["Piedra ✊", "Papel ✋", "Tijera ✌️"];
```

Utiliza este array cuando necesites mostrar el nombre correspondiente a una jugada.

---

# 5. Comparar las jugadas

Crea una función que reciba como parámetros:

- jugada del usuario;
- jugada de la computadora.

Debe determinar el resultado aplicando estas reglas:

- Piedra gana a Tijera.
- Tijera gana a Papel.
- Papel gana a Piedra.
- Dos jugadas iguales producen empate.

Utiliza:

- condicionales;
- operadores lógicos;
- parámetros;
- `return`.

La función debe devolver un valor que permita saber quién ganó.

Por ejemplo:

```js
return "usuario";
```

```js
return "computadora";
```

o:

```js
return "empate";
```

No determines quién ganó analizando el texto mostrado en pantalla.

---

# 6. Mostrar cada ronda

Después de cada ronda utiliza `alert()` para mostrar algo similar a:

```text
RONDA 1

MARTÍN:
Piedra ✊

COMPUTADORA:
Tijera ✌️

🎉 ¡Ganaste esta ronda!
```

También utiliza `console.log()` para mostrar:

- jugada del usuario;
- jugada de la computadora;
- resultado de la ronda;
- puntajes actuales.

La consola debe permitir observar cómo funciona internamente el programa.

---

# 7. Objeto de puntajes

Utiliza un objeto para almacenar los resultados.

Por ejemplo:

```js
let puntajes = {
  usuario: 0,
  computadora: 0,
  empates: 0,
};
```

Actualiza correctamente las propiedades después de cada ronda.

Debe quedar claramente representado el uso de:

- objetos;
- propiedades;
- acumuladores.

---

# 8. Empates

Los empates deben contabilizarse.

Por ejemplo:

```js
puntajes.empates++;
```

Sin embargo:

**un empate no cuenta como victoria para ninguno de los jugadores.**

---

# 9. Partida al mejor de 3

La partida debe jugarse **al mejor de 3 rondas decisivas**.

Esto significa que:

- gana quien consiga primero 2 victorias;
- los empates se contabilizan;
- los empates no cuentan como victoria;
- los empates no terminan la partida;
- pueden existir más de 3 rondas totales.

Ejemplo:

```text
Ronda 1 → Usuario gana
Ronda 2 → Empate
Ronda 3 → Computadora gana
Ronda 4 → Empate
Ronda 5 → Usuario gana
```

Resultado:

```text
Usuario: 2
Computadora: 1
Empates: 2
```

El usuario gana porque fue el primero en alcanzar 2 victorias.

Utiliza un ciclo para mantener la partida activa hasta que alguno de los dos alcance las 2 victorias.

---

# 10. Marcador

Después de cada ronda muestra mediante `alert()` algo similar a:

```text
MARCADOR

MARTÍN: 1
COMPUTADORA: 0
EMPATES: 1
```

También muestra el objeto completo en consola:

```js
console.log(puntajes);
```

---

# 11. Resultado final — Página de victoria (ganador.html)

Cuando alguno alcance 2 victorias, finaliza la partida y **redirige a `ganador.html`** pasando los datos por URL.

### Redirección con parámetros URL

```js
let url = "ganador.html?";
url += "ganador=" + encodeURIComponent(ganador);
url += "&nombre=" + encodeURIComponent(nombreJugador);
url += "&puntajeUsuario=" + encodeURIComponent(puntajes.usuario);
url += "&puntajeComputadora=" + encodeURIComponent(puntajes.computadora);
url += "&empates=" + encodeURIComponent(puntajes.empates);

window.location.href = url;
```

### Página ganador.html

Debe mostrar:

- Nombre del ganador (visible inmediatamente, sin animación de entrada ni ocultamiento)
- Icono según quién ganó (👑 usuario / 🤖 computadora)
- Mensaje descriptivo
- Estadísticas finales en grid:
  - Rondas jugadas
  - Victorias del usuario
  - Victorias de la computadora
  - Empates
- Botón "🗑️ BORRAR ESTADÍSTICAS" que resetea los valores a 0 con feedback visual
- Botón "🔄 VOLVER A JUGAR" que enlaza a `index.html`

### Tema visual de ganador.html

- Fondo oscuro: `linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)`
- Container con borde sutil púrpura y sombra con animación de pulso
- Título dorado con glow
- Nombre del ganador en blanco sólido con sombra dorada (sin animación)
- Cards con fondo semitransparente oscuro
- Efecto de confeti (creado con `createElement` + `appendChild`) si ganó el usuario

### Lógica de ganador.js

- Leer parámetros URL con `URLSearchParams`
- Configurar contenido según quién ganó
- Mostrar estadísticas
- Manejar click en botón "BORRAR ESTADÍSTICAS":
  - Poner a 0 las 4 estadísticas
  - Feedback visual: texto "✅ BORRADO", fondo verde, volver a estado original en 1.5s

---

# 12. Página de ayuda (ayuda.html)

Página que explica cómo jugar con las siguientes secciones:

- Objetivo del juego
- Reglas básicas
- Flujo de la partida (lista ordenada paso a paso)
- Consejos
- Controles (click, teclado, recargar)
- Botón "← VOLVER AL JUEGO" que enlaza a `index.html`

---

# 13. Página DOM.html

Página que explica la utilización del DOM dentro del juego con ejemplos de código reales:

- ¿Qué es el DOM?
- Seleccionar elementos: `getElementById`, `querySelector`
- Eventos: `addEventListener('click')`, `DOMContentLoaded`
- Modificar contenido: `textContent` (no `innerHTML` por seguridad)
- Modificar estilos: `style.property` (camelCase)
- Crear elementos: `createElement`, `appendChild`, `remove` (confeti)
- Flujo completo entre páginas
- Resumen de lo usado y lo no usado
- Botón "← VOLVER AL INICIO" que enlaza a `index.html`

---

# 14. Página conceptos1.html

Página que explica con ejemplos del juego:

- **Variables**: `let` (reasignable) vs `const` (constante)
- **Condicionales**: `if / else`, operadores `===`, `!==`, `&&`, `||`
- **Funciones**: parámetros, argumentos, `return`
- **Arrays**: índices desde 0, acceso por índice, relación con `jugadas`
- Botón "🎮 REGRESAR AL JUEGO" que enlaza a `index.html`

---

# 15. Página conceptos2.html

Página que explica con ejemplos del juego:

- **Objetos**: propiedades, acceso con punto, acumuladores con `++`
- **Ciclos**: `while` (evalúa antes), `do...while` (ejecuta al menos una vez)
- **Math.random()**: desglose paso a paso, fórmula general
- Botón "🎮 REGRESAR AL JUEGO" que enlaza a `index.html`

---

# 16. Funciones del juego

Organiza el código utilizando funciones sencillas y con responsabilidades claras.

Puedes utilizar funciones similares a:

```js
iniciarJuego();
pedirJugada();
jugadaRandom();
compararJugadas();
mostrarResultadoRonda();
actualizarPuntajes();
mostrarMarcador();
mostrarResultadoFinal();
jugarPartida();
```

No es obligatorio utilizar exactamente esos nombres.

Evita crear una única función gigante que resuelva todo el programa.

---

# 17. Código pensado para estudiantes principiantes

El código debe poder ser leído y explicado por estudiantes que están aprendiendo JavaScript.

Prioriza:

```js
if (condicion) {
  // código
} else {
  // código
}
```

Evita soluciones excesivamente compactas o avanzadas.

Por ejemplo, no utilices operadores ternarios para reemplazar condicionales si eso dificulta la comprensión:

```js
condicion ? resultado1 : resultado2;
```

---

# 18. Operadores

Cuando corresponda utiliza:

```js
===
!==
&&
||
```

Evita:

```js
==
!=
```

---

# 19. Variables

Utiliza:

```js
const
let
```

No utilices:

```js
var
```

Utiliza nombres descriptivos, por ejemplo:

```js
eleccionJugador;
eleccionComputadora;
resultadoRonda;
numeroRonda;
puntajes;
```

---

# 20. Comentarios didácticos

Agrega algunos comentarios para que podamos reconocer los conceptos utilizados.

Por ejemplo:

```js
// ARRAY: contiene las posibles jugadas.
const jugadas = ["Piedra ✊", "Papel ✋", "Tijera ✌️"];
```

```js
// OBJETO: almacena los puntajes de la partida.
let puntajes = {
  usuario: 0,
  computadora: 0,
  empates: 0,
};
```

```js
// FUNCIÓN: recibe dos jugadas y determina el resultado.
function compararJugadas(...) {
```

```js
// CICLO: mantiene la partida activa hasta que alguien gane.
while (...) {
```

No comentes cada línea.

Los comentarios deben servir para señalar los conceptos importantes que estamos estudiando.

---

# 21. Diseño del HTML y CSS

Aunque el juego funciona mediante `prompt()` y `alert()`, crea páginas de presentación visual atractivas.

Todas las páginas deben compartir la misma estética:

- Fondo claro con degradado (páginas informativas) u oscuro (ganador.html)
- Tarjetas con bordes redondeados y sombras
- Colores de acento púrpura/azul
- Emojis grandes
- Buena jerarquía visual
- Buena separación entre elementos
- Responsive (computadora, proyector, celular)
- No utilices imágenes externas
- Todo mediante HTML, CSS, emojis y formas CSS

---

# 22. Animaciones

Puedes incluir pequeñas animaciones realizadas exclusivamente mediante CSS.

Por ejemplo:

- aparición suave de tarjetas;
- movimiento sutil de emojis;
- brillo del título;
- hover;
- sombras animadas.

No utilices JavaScript para realizar animaciones.

**Excepción**: En `ganador.html`, el nombre del ganador **no debe tener animación** y debe estar **visible inmediatamente** al cargar la página.

---

# 23. README

El `README.md` debe explicar brevemente:

## Piedra, Papel o Tijera

Proyecto realizado como actividad introductoria de JavaScript para DAWI con DOM.

## Conceptos utilizados

Explica dónde aparecen:

- variables;
- constantes;
- strings y números;
- operadores;
- funciones;
- parámetros;
- `return`;
- condicionales;
- arrays;
- objetos;
- ciclos;
- acumuladores;
- validaciones;
- `Math.random()`;
- `prompt()`;
- `alert()`;
- `console.log()`.

## Flujo general

Incluye un esquema similar a:

```text
INICIO
  ↓
Solicitar nombre
  ↓
Validar nombre
  ↓
Solicitar jugada
  ↓
Computadora genera jugada
  ↓
Comparar jugadas
  ↓
Actualizar puntajes
  ↓
Mostrar marcador
  ↓
¿Alguien llegó a 2 victorias?
       ↓ NO
    Nueva ronda
       ↓ SÍ
Redirigir a ganador.html
       ↓
Mostrar resultado final
       ↓
      FIN
```

---

# 24. Archivos finales

El proyecto debe contener:

```text
index.html
styles.css
clase10.js
ayuda.html
ganador.html
ganador.js
DOM.html
conceptos1.html
conceptos2.html
README.md
```

Asegúrate de que `index.html` tenga correctamente vinculados:

```text
styles.css
clase10.js
```

Y que todas las páginas tengan enlaces entre sí:

```text
index.html → ayuda.html → index.html
index.html → ganador.html → index.html
index.html → DOM.html → index.html
index.html → conceptos1.html → index.html
index.html → conceptos2.html → index.html
```

---

# 25. Casos que debes comprobar

Antes de finalizar revisa que funcionen correctamente estas situaciones:

### Caso 1

```text
Jugador: Piedra
Computadora: Tijera
```

Debe ganar el jugador.

### Caso 2

```text
Jugador: Papel
Computadora: Tijera
```

Debe ganar la computadora.

### Caso 3

```text
Jugador: Piedra
Computadora: Piedra
```

Debe producirse un empate.

### Caso 4

El usuario llega a 2 victorias.

La partida debe finalizar y redirigir a `ganador.html`.

### Caso 5

La computadora llega a 2 victorias.

La partida debe finalizar y redirigir a `ganador.html`.

### Caso 6

Se producen varios empates.

Los empates deben acumularse, pero la partida debe continuar.

### Caso 7

En `ganador.html`, el nombre del ganador debe ser visible inmediatamente sin animación.

### Caso 8

En `ganador.html`, el botón "BORRAR ESTADÍSTICAS" debe resetear los valores a 0.

### Caso 9

Todas las páginas deben tener botón de regreso a `index.html`.

### Caso 10

El diseño debe verse correctamente en computadora, proyector y celular.

---

# 26. Antes de finalizar

Revisa especialmente que no hayas utilizado:

```js
```

ni ningún otro mecanismo de manipulación del DOM.

También revisa que no hayas utilizado conceptos de JavaScript más avanzados que los indicados en este prompt.

---

# 27. Informe final

Después de realizar las modificaciones, no te limites a decir que el proyecto está terminado.

Indícame:

1. qué archivos modificaste;
2. qué código original conservaste;
3. qué errores encontraste y corregiste;
4. qué funcionalidades agregaste;
5. qué conceptos de JavaScript aparecen y dónde;
6. cómo funciona la lógica del mejor de 3;
7. qué ciclo utilizaste para mantener activa la partida;
8. qué función utiliza `Math.random()`;
9. dónde utilizaste arrays;
10. dónde utilizaste objetos;
11. qué mejoras visuales realizaste;
12. cómo funciona la redirección a `ganador.html`;
13. qué hace el botón "BORRAR ESTADÍSTICAS";
14. qué páginas de ayuda y conceptos creaste;
15. cómo es la navegación entre todas las páginas.

El proyecto debe quedar listo para abrir:

```text
index.html
```

en un navegador y comenzar a jugar.

## Restricción final

**No utilices conceptos de JavaScript que estén fuera del nivel indicado, aunque exista una forma más moderna, corta o eficiente de resolverlo.**

En este proyecto es más importante que el código permita comprender y reconocer los contenidos trabajados en clase que utilizar soluciones avanzadas.
