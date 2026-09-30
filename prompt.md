# Proyecto DAWI — Piedra, Papel o Tijera ✊ ✋ ✌️

Quiero que trabajes sobre este proyecto para crear una versión completa del juego **Piedra, Papel o Tijera**, utilizando únicamente los conocimientos de JavaScript que hemos trabajado hasta el momento en la asignatura **DAWI — Desarrollo de Aplicaciones Web Inteligentes**.

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

Crear el juego:

## Piedra, Papel o Tijera ✊ ✋ ✌️

El jugador se enfrentará a la computadora.

La interacción del juego debe realizarse utilizando:

```js
prompt()
alert()
console.log()
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
- `console.log()`.

No utilices conceptos que todavía no hemos trabajado.

## NO utilizar

No utilices:

```js
document
querySelector
querySelectorAll
getElementById
innerHTML
textContent
addEventListener
onclick
```

Tampoco utilices:

- DOM;
- eventos;
- clases;
- módulos;
- asincronismo;
- APIs;
- frameworks;
- librerías externas.

El HTML y CSS pueden utilizarse para crear la presentación visual del videojuego, pero **JavaScript no debe modificar el HTML**.

---

# Reglas del juego

## 1. Nombre del jugador

Al comenzar la partida solicita el nombre mediante:

```js
prompt()
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
Math.random()
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
const jugadas = ['Piedra ✊', 'Papel ✋', 'Tijera ✌️']
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
return 'usuario'
```

```js
return 'computadora'
```

o:

```js
return 'empate'
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
  empates: 0
}
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
puntajes.empates++
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
console.log(puntajes)
```

---

# 11. Resultado final

Cuando alguno alcance 2 victorias, finaliza la partida.

Si gana el usuario:

```text
🏆 FIN DE LA PARTIDA 🏆

¡MARTÍN ganó!

MARTÍN: 2
COMPUTADORA: 1
EMPATES: 2

Rondas totales: 5
```

Si gana la computadora:

```text
🤖 FIN DE LA PARTIDA 🤖

La computadora ganó.

MARTÍN: 1
COMPUTADORA: 2
EMPATES: 0

Rondas totales: 3
```

---

# 12. Funciones

Organiza el código utilizando funciones sencillas y con responsabilidades claras.

Puedes utilizar funciones similares a:

```js
iniciarJuego()
pedirJugada()
jugadaRandom()
compararJugadas()
mostrarResultadoRonda()
actualizarPuntajes()
mostrarMarcador()
mostrarResultadoFinal()
jugarPartida()
```

No es obligatorio utilizar exactamente esos nombres.

Evita crear una única función gigante que resuelva todo el programa.

---

# 13. Código pensado para estudiantes principiantes

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
condicion ? resultado1 : resultado2
```

---

# 14. Operadores

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

# 15. Variables

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
eleccionJugador
eleccionComputadora
resultadoRonda
numeroRonda
puntajes
```

---

# 16. Comentarios didácticos

Agrega algunos comentarios para que podamos reconocer los conceptos utilizados.

Por ejemplo:

```js
// ARRAY: contiene las posibles jugadas.
const jugadas = ['Piedra ✊', 'Papel ✋', 'Tijera ✌️']
```

```js
// OBJETO: almacena los puntajes de la partida.
let puntajes = {
  usuario: 0,
  computadora: 0,
  empates: 0
}
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

# 17. Diseño del HTML y CSS

Aunque el juego funciona mediante `prompt()` y `alert()`, crea una página de presentación visual atractiva.

Debe parecer la pantalla inicial de un pequeño videojuego.

Incluye visualmente:

## Título

```text
PIEDRA, PAPEL O TIJERA
```

## Subtítulo

```text
Desafía a la computadora
```

Incluye también:

```text
✊ ✋ ✌️
```

Agrega:

- una tarjeta con las reglas;
- una sección que diga `Abrí el juego y comenzá el desafío`;
- una sección `Conceptos utilizados`.

Mostrar visualmente:

- Variables
- Condicionales
- Funciones
- Arrays
- Objetos
- Ciclos
- Math.random()

Footer:

```text
DAWI — Desarrollo de Aplicaciones Web Inteligentes
```

---

# 18. Estética

Utiliza una estética moderna relacionada con:

- videojuegos;
- programación;
- desarrollo web.

Puedes utilizar:

- fondo oscuro;
- degradados;
- tarjetas;
- bordes redondeados;
- sombras;
- colores de acento;
- emojis grandes;
- buena jerarquía visual;
- buena separación entre elementos.

Debe verse correctamente tanto:

- en una computadora;
- en un proyector;
- en un celular.

El diseño debe ser responsive.

No utilices imágenes externas.

Todo debe realizarse mediante:

- HTML;
- CSS;
- emojis;
- formas CSS.

---

# 19. Animaciones

Puedes incluir pequeñas animaciones realizadas exclusivamente mediante CSS.

Por ejemplo:

- aparición suave de tarjetas;
- movimiento sutil de emojis;
- brillo del título;
- hover;
- sombras animadas.

No utilices JavaScript para realizar animaciones.

---

# 20. README

Crea también:

```text
README.md
```

Debe explicar brevemente:

## Piedra, Papel o Tijera

Proyecto realizado como actividad introductoria de JavaScript para DAWI.

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
Mostrar resultado final
       ↓
      FIN
```

---

# 21. Archivos

Trabaja directamente sobre:

```text
index.html
styles.css
clase10.js
```

Crea también:

```text
README.md
```

si todavía no existe.

Asegúrate de que `index.html` tenga correctamente vinculados:

```text
styles.css
clase10.js
```

---

# 22. Casos que debes comprobar

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

La partida debe finalizar.

### Caso 5

La computadora llega a 2 victorias.

La partida debe finalizar.

### Caso 6

Se producen varios empates.

Los empates deben acumularse, pero la partida debe continuar.

---

# 23. Antes de finalizar

Revisa especialmente que no hayas utilizado:

```js
document
querySelector
getElementById
addEventListener
onclick
```

ni ningún otro mecanismo de manipulación del DOM.

También revisa que no hayas utilizado conceptos de JavaScript más avanzados que los indicados en este prompt.

---

# 24. Informe final

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
11. qué mejoras visuales realizaste.

El proyecto debe quedar listo para abrir:

```text
index.html
```

en un navegador y comenzar a jugar.

## Restricción final

**No utilices DOM ni conceptos de JavaScript que estén fuera del nivel indicado, aunque exista una forma más moderna, corta o eficiente de resolverlo.**

En este proyecto es más importante que el código permita comprender y reconocer los contenidos trabajados en clase que utilizar soluciones avanzadas.
