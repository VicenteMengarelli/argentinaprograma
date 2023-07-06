// PIEDRA-PAPEL-TIJERAS
// El objetivo de este práctico es desarrollar un programa sencillo en JavaScript que permite jugar
// al famoso juego de "Piedra, Papel o Tijeras" contra la computadora.
// Descripción:
// El juego de "Piedra, Papel o Tijeras" es un juego de manos en el que dos jugadores eligen entre
// tres opciones: piedra, papel o tijeras. Las reglas son las siguientes:
// - La piedra vence a las tijeras.
// - Las tijeras vencen al papel.
// - El papel vence a la piedra.
// El programa que desarrollarás permitirá al usuario jugar contra la computadora. La computadora
// elegirá una opción de forma aleatoria, y el usuario podrá ingresar su elección a través de la
// consola. El programa determinará el ganador y mostrará el resultado por pantalla.
// Pasos a seguir:
// 1. Crea un nuevo archivo JavaScript con nombre piedraPapelTijeras.js.
// 2. Crea una función llamada obtenerJugadaComputadora que generará un número
// aleatorio entre 0 y 2 para representar las opciones:
// - 0 para "piedra",
// - 1 para "papel" y
// - 2 para "tijeras"
// Siempre utilizando los valores de strings y no los valores númericos.
// Ayuda1: Utilizar alguna estructura de datos para almacenar la relación entre los valores
// numércios y los strings “piedra”, “papel” y “tijeras.
// Ayuda2: revisar en el teórico cuál es la función de la librería Math que genera un número
// random.

function obtenerJugadaComputadora(){

    let jugada=Math.floor(Math.random()*3)
    
    switch (jugada){
        case 0: jugada="piedra"; break;
        case 1: jugada="papel"; break;
        case 2: jugada="tijeras"; break;
    }
    return jugada
}    
let jugada_comp=obtenerJugadaComputadora()

// 3. Crea una función llamada obtenerJugadaUsuario que solicitará al usuario ingresar su
// elección a través de la consola. Los valores posibles son: piedra, papel o tijeras.
// Ayuda: revisa en el práctico de condicionales, como solicitar al usuario que ingrese un
// valor por consola.

function obtenerJugadaUsuario(){
    do {
        let condicion=false
        const readlineSync = require('readline-sync');
        const eleccion = readlineSync.question('Elija "Piedra" "Papel" o "Tijeras" para jugar: ');
        eleccion.toLowerCase

        if (eleccion=='piedra' || eleccion=='papel'|| eleccion=='tijeras'){return eleccion; break}
        else if(eleccion!='piedra' && eleccion!='papel'&& eleccion!='tijeras') {
            console.log("Ingrese un valor valido");
            condicion=true
            };
    } while (condicion=true);
};

let jugada_usuario = obtenerJugadaUsuario()

// 4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas
// de la computadora y del usuario. Implementa las reglas del juego para determinar el
// ganador y retorna el resultado.

function determinarGanador(jugada_comp,jugada_usuario){
let ganador=''
    if (jugada_comp=='piedra' && jugada_usuario=="tijeras"||jugada_comp=='papel' && jugada_usuario=="piedra"||jugada_comp=='tijeras' && jugada_usuario=="papel"){
        ganador='Gana la computadora'
    }
    else if (jugada_usuario=='piedra' && jugada_comp=="tijeras"||jugada_usuario=='papel' && jugada_comp=="piedra"||jugada_usuario=='tijeras' && jugada_comp=="papel"){
        ganador='Felicitaciones Ganaste'
    }
    else {ganador='Empate'};

    return ganador
}

let resultado=determinarGanador(jugada_comp,jugada_usuario)
console.log('Jugada de la computadora:',jugada_comp + ' | Jugada del usuario: ', jugada_usuario + ' | Resultado final:',resultado)

// 5. Llama a las funciones en el orden adecuado para ejecutar el juego:
// a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una
// variable.
// b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.
// c) Invoca la función determinarGanador pasando como argumentos las jugadas de
// la computadora y del usuario. Almacena el resultado en una variable.

// 6. Imprime por pantalla el resultado del juego utilizando la función console.log(). El mensaje
// debe indicar la jugada de la computadora, la jugada del usuario y el resultado del juego
// (quién ganó o si fue un empate). Se debe respetar el siguiente formato dependiendo del
// resultado:
// La computadora eligio: [jugadaComputador]. El usuario eligio: [jugadaUsuario].
// El resultado fue: [Empate | Gana la computadora | Gana el usuario].
// NOTA: no es necesario imprimir todo el mensaje en una sola línea, se puede imprimir en
// tres párrafos.
// EXTRA 1: Definir constantes para las distintas jugadas, es decir, piedra, papel y tijera y adaptar el
// código para su correcta utilización.
// EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el
// juego, es decir:
// ● Una jugada: gana el ganador de esa única jugada.
// ● Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de que
// el usuario gane una jugada y la computadora la otra.
// ● Mejor de 3: quien gane 3 o 2 jugadas será el ganador, etc.