
/*======================================================================================================
                                               INGRESO
                             CANTIDAD DE JUGADORES-CANTIDAD DE TURNOS
======================================================================================================*/
//control de la cantidad de jugadores(uno contra la paquina o uno contra otro)
var nombre = " jugadores";
var cantidad = "(disponible hasta dos jugadores)";
var cantidadJugadores;
var cantidadTotalJugadores;

alert ("Bienvenidos " + nombre + "\n" +" Escoje la cantidad de jugadores " + "\n" + cantidad );
//agarra la cantidad de jugadores ingresados
cantidadJugadores = prompt ("Cuantos van a jugar?", "0");
cantidadJugadores = parseInt(cantidadJugadores);
cantidadTotalJugadores = cantidadJugadores;

  if(cantidadJugadores == 1 || cantidadJugadores == 2){
    if(cantidadJugadores == 1){
      alert( cantidadJugadores + " jugador");
    }else if(cantidadJugadores == 2){
      alert( cantidadJugadores + " jugadores");
    }
  } 
  if(cantidadJugadores != 1 && cantidadJugadores != 2){
    alert(" Cantidad de jugadores no aseptada " + "\n" + " Se jugara con una persona " );
  }

//agarra la cantidad de turnos
  var texto = prompt ("Cantidad de jugadas por jugador: ", "0")
  var cantidad = parseInt(texto);
  var cantidadTotal = cantidad * 2;
  var cantidadTurnos = cantidadTotal;
  alert(" Se jugara "+ cantidad + " turnos por jugador");

/*======================================================================================================
                                               VARIABLES GLOVALES
======================================================================================================*/
//definicion de los dados
var dado1 = 0; var dado2 = 0; var dado3 = 0;
var dado4 = 0; var dado5 = 0; var dado6 = 0;
//arreglo de cantidad 5 para cuando se tiran 5 dados
var imagenDados = ["imagenes/dado1.jpg", "imagenes/dado2.jpg", "imagenes/dado3.jpg","imagenes/dado4.jpg", "imagenes/dado5.jpg", "imagenes/dado6.jpg"];
//acumuladores de puntaje
var puntajeJugador1 = 0;
var puntajeMaquina = 0;

//relacionamiento de los botones con el html 
document.querySelector("#recarga").addEventListener("click", recargar);
document.querySelector("#botonSorteo").addEventListener("click", sortearTurno);
document.querySelector("#mano1").addEventListener("click", turnoPersona);
document.querySelector("#mano2").addEventListener("click", turnoJugador2);

//======================================================================================================
//                                               CREAR JUGADORES
//======================================================================================================
//funcion para crear los jugadores
function jugador(nombre, puntaje, turno){
  var nombre  = nombre;
  var puntaje = puntaje;
  var turno   = turno;
  return {
    getNombre : function(){ return nombre },
    getPuntaje: function(){ return puntaje },
    addPuntaje: function(puntaje){ puntaje += n_puntaje },
    setTurno  : function(turno){ turno = true },
    getTurno  : function(){ return turno },
    endTurno  : function(){ turno = false },
  }
}
//jugadores
var jugador1 = new jugador("jugador1", 0, false);
var jugador2  = new jugador("jugador2", 0, false);

//======================================================================================================
//                                               FUNCIONES
//======================================================================================================
//recarga la paquina al momento de precionar el boton
function recargar(){
  window.location.reload();
}
//genera un numero aleatorio de enteros en un rango dado
function aleatorio(minimo, maximo){
  var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);//buena sintacis
  return numero;
}
//genera un numero aleatorio de enteros entre 1 y 6
function tirarDados(elementos){
  for(var i=0; i<elementos.length; i++){
    elementos[i] = 1 + Math.floor((Math.random() * 6))
  }
}
//para cuando se tiro cinco dados iguales
function cincoIguales(dado1, dado2, dado3, dado4, dado5){
  var resultado = false;
  if(dado1 == dado2 && dado1 == dado3 && dado1 == dado4 && dado1 == dado5){
    resultado = true;
  }else{
    resultado = false;
  }
  return resultado;
}
//para cuando se tiro cuatro dados iguale
function cuatroIguales(dado1, dado2, dado3, dado4, dado5){
  var resultado = false;
  var posicion = [0, 0, 0, 0, 0, 0];

  var dadosResultantes = [dado1, dado2, dado3, dado4, dado5];

  for(var i = 0; i < dadosResultantes.length; i++){
    posicion[dadosResultantes[i] - 1 ] ++;
  }
  if(posicion[0] == 4){
    resultado = true;
  }else if(posicion[1] == 4){
    resultado = true;
  }else if(posicion[2] == 4){
    resultado = true;
  }else if(posicion[3] == 4){
    resultado = true;
  }else if(posicion[4] == 4){
    resultado = true;
  }else {
    resultado = false;
  }
  return resultado
}
//para cuando se tiro tres dados iguale
function tresIguales(dado1, dado2, dado3, dado4, dado5){
  var resultado = false;
  var posicion = [0, 0, 0, 0, 0];

  var dadosResultantes = [dado1, dado2, dado3, dado4, dado5];

  for(var i = 0; i < dadosResultantes.length; i++){
    posicion[dadosResultantes[i] - 1 ] ++;
  }
  if(posicion[0] == 3){
    resultado = true;
  }else if(posicion[1] == 3){
    resultado = true;
  }else if(posicion[2] == 3){
    resultado = true;
  }else if(posicion[3] == 3){
    resultado = true;
  }else if(posicion[4] == 3){
    resultado = true;
  }else {
    resultado = false;
  }
  return resultado
}
//para cuando se tiro dos dados iguale
function dosIguales(dado1, dado2, dado3, dado4, dado5){
  var resultado = false;
  var posicion = [0, 0, 0, 0, 0];;

  dadosResultantes = [dado1, dado2, dado3, dado4, dado5];

  for(var i = 0; i < dadosResultantes.length; i++){
    posicion[dadosResultantes[i] - 1] ++;
  }
  if(posicion[0] == 2){
    resultado = true;
  }else if(posicion[1] == 2){
    resultado = true;
  }else if(posicion[2] == 2){
    resultado = true;
  }else if(posicion[3] == 2){
    resultado = true;
  }else if(posicion[4] == 2){
    resultado = true;
  }else {
    resultado = false;
  }
  return resultado
}
//para cuando se tiro un dados iguale
function unIguales(dado1, dado2, dado3, dado4, dado5){
  var resultado = false;

  if (dado1 != dado2 && dado1 != dado3 && dado1 != dado4 && dado1 != dado5 &&
      dado2 != dado3 && dado2 != dado4 && dado2 != dado5 && 
       dado3 != dado4 && dado3 != dado5 && 
       dado4 != dado5) {
    resultado = true;
  }else{
    resultado = false;
  }
  return resultado;
}
//funcion que da a conocer quien es el ganador de la partida y recarga la pagina
function ganador(){
  if (cantidadTurnos == 0) {
    if (puntajeJugador1 > puntajeMaquina){
      alert("ganador jugador 1");
      window.location.reload();
    }else if (puntajeJugador1 < puntajeMaquina) {
    alert("ganador jugador 2");
    window.location.reload();
    }else{
      alert("EMPATE: JUEGA DE NUEVO");
    window.location.reload();
    }
  }
  return 0;
}
/*======================================================================================================
/                                              JUEGO(EVENTOS)
======================================================================================================*/
//cunado gana el sorteo el jugador 1 
function empezaJugador(){
var boton1 = document.getElementById("mano1");
var boton2 = document.getElementById("mano2");
boton1.disabled = false;
boton2.disabled = true;
}
//cunado gana el sorteo el jugador 2 
function empezaJugador2(){
var boton1 = document.getElementById("mano1");
var boton2 = document.getElementById("mano2");
boton1.disabled = true;
boton2.disabled = false;
}
//cunado gana el sorteo el jugador 2 jugando contra la computadora
function empezaJugador22(){
  var boton1 = document.getElementById("mano1");
  var boton2 = document.getElementById("mano2");
  boton1.disabled = true;
  boton2.disabled = true;
  turnoJugador22();
}
//cuando el usuario click en el boton para tirar dados siendo su turno
function turnoPersona(){
  //dar un numero aleatorio a los dados
  var dado1 = aleatorio(1,6);
  var dado2 = aleatorio(1,6);
  var dado3 = aleatorio(1,6);
  var dado4 = aleatorio(1,6);
  var dado5 = aleatorio(1,6);

  dadosResultantes = [dado1, dado2, dado3, dado4, dado5];

  //cambia la imagen de los dados por la del numero que salio
  document.getElementById("dado0").src = imagenDados[dado1 - 1];
  document.getElementById("dado1").src = imagenDados[dado2 - 1]; 
  document.getElementById("dado2").src = imagenDados[dado3 - 1];
  document.getElementById("dado3").src = imagenDados[dado4 - 1];
  document.getElementById("dado4").src = imagenDados[dado5 - 1];
  //actualiza el h3 de los dados del jugador
  mensajeJugador1(dado1 + " " + dado2 + " " + dado3 + " " + dado4 + " " + dado5);
  //comprueba los puntajes
  if(turno = true){
    if(cincoIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeJugador1 = puntajeJugador1 + 50;
    }else if(cuatroIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeJugador1 = puntajeJugador1 + 40;
    }else if(tresIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeJugador1 = puntajeJugador1 + 30;
    }else if(dosIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeJugador1 = puntajeJugador1 + 30;
    }else if(unIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeJugador1 = puntajeJugador1 + 20;
    }
  }
  document.getElementById("puntaje1").innerHTML = puntajeJugador1;
  cantidadTurnos = cantidadTurnos - 1;
  ganador();
  if (cantidadTotalJugadores == 2) {
  empezaJugador2();
  }else{
    empezaJugador22();
  }
}
//cuando el turno pertenese al jugador 2 siendo una partida de 2 personas
function turnoJugador2(){
//dar un numero aleatorio a los dados
  var dado1 = aleatorio(1,6);
  var dado2 = aleatorio(1,6);
  var dado3 = aleatorio(1,6);
  var dado4 = aleatorio(1,6);
  var dado5 = aleatorio(1,6);

  dadosResultantes = [dado1, dado2, dado3, dado4, dado5];

  //cambia la imagen de los dados por la del numero que salio
  document.getElementById("dado0").src = imagenDados[dado1 - 1];
  document.getElementById("dado1").src = imagenDados[dado2 - 1]; 
  document.getElementById("dado2").src = imagenDados[dado3 - 1];
  document.getElementById("dado3").src = imagenDados[dado4 - 1];
  document.getElementById("dado4").src = imagenDados[dado5 - 1];
  //actualiza el h3 de los dados del jugador
  mensajeJugador2(dado1 + " " + dado2 + " " + dado3 + " " + dado4 + " " + dado5);
  if(turno = true){
    if(cincoIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeMaquina = puntajeMaquina + 50;
    }else if(cuatroIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeMaquina = puntajeMaquina + 40;
    }else if(tresIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeMaquina = puntajeMaquina + 30;
    }else if(dosIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeMaquina = puntajeMaquina + 30;
    }else if(unIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeMaquina = puntajeMaquina + 20;
    }
  }
  document.getElementById("puntaje2").innerHTML = puntajeMaquina;
  cantidadTurnos = cantidadTurnos - 1;
  ganador();
  empezaJugador();

}
//cuando el turno pertenese al jugador 2 siendo una partida de mas de 2 personas
function turnoJugador22(){
  //dar un numero aleatorio a los dados
  var dado1 = aleatorio(1,6);
  var dado2 = aleatorio(1,6);
  var dado3 = aleatorio(1,6);
  var dado4 = aleatorio(1,6);
  var dado5 = aleatorio(1,6);

  dadosResultantes = [dado1, dado2, dado3, dado4, dado5];

  //cambia la imagen de los dados por la del numero que salio
  document.getElementById("dado0").src = imagenDados[dado1 - 1];
  document.getElementById("dado1").src = imagenDados[dado2 - 1]; 
  document.getElementById("dado2").src = imagenDados[dado3 - 1];
  document.getElementById("dado3").src = imagenDados[dado4 - 1];
  document.getElementById("dado4").src = imagenDados[dado5 - 1];
  //actualiza el h3 de los dados del jugador
  mensajeJugador2(dado1 + " " + dado2 + " " + dado3 + " " + dado4 + " " + dado5);
  if(turno = true){
    if(cincoIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeMaquina = puntajeMaquina + 50;
    }else if(cuatroIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeMaquina = puntajeMaquina + 40;
    }else if(tresIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeMaquina = puntajeMaquina + 30;
    }else if(dosIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeMaquina = puntajeMaquina + 30;
    }else if(unIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeMaquina = puntajeMaquina + 20;
    }
  }
  document.getElementById("puntaje2").innerHTML = puntajeMaquina;
  cantidadTurnos = cantidadTurnos - 1;
  ganador();
  empezaJugador();
}
//crea un sorteo con dos dados //el mayor empieza
function sortearTurno(){
  var jug1 = aleatorio(1,6);
  var jug2 = aleatorio(1,6);
  //cambia la imagen de los dados por la del numero que salio
  document.getElementById("dadoSorteo1").src = imagenDados[jug1 - 1];
  document.getElementById("dadoSorteo2").src = imagenDados[jug2 - 1]; 
  //comprueva cual es el mayor
   if(jug1 > jug2) {
    mensaje("El jugador 1 empieza la partida. ")
    ocultaPanelSorteo()
    jugador1.setTurno(true);
    empezaJugador();

   }else if(jug1 < jug2) {
              if (cantidadTotalJugadores == 2) {
                mensaje("El jugador 2 empieza la partida. ");
        ocultaPanelSorteo();
             jugador2.setTurno(true);
        empezaJugador2();
      }else{
        mensaje("El jugador 2 empieza la partida. ");
        ocultaPanelSorteo();
             jugador2.setTurno(true);
        empezaJugador22();
      }    
    }else{
       mensaje("Empate buelve a sortear los turnos ");
    }
    
}
/*==============================================================================
FUNCIONES: CONTROL INTERFAZ
==============================================================================*/
//funciones que muestran mensajes en el html en los respectivos <h>
function mensaje(contenido){
  document.getElementById("turnoGanador").innerHTML = contenido;
}
function mensajeJugador1(contenido){
  document.getElementById("resultadodadosPersona1").innerHTML = contenido;
}
function mensajeJugador2(contenido){
  document.getElementById("resultadodadosjugador2").innerHTML = contenido;
}
//funcion para ocultar el boton del sorteo una vez realizado
function ocultaPanelSorteo(){
  var ver = document.getElementById("botonSorteo");
  ver.style.visibility = 'hidden';

}
