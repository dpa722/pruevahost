
/*======================================================================================================
                                               INGRESO
                             CANTIDAD DE JUGADORES-CANTIDAD DE TURNOS
======================================================================================================*/
/*var nombre = " jugadores";
var cantidad = "(disponible hasta dos jugadores)";
var cantidadJugadores;

alert ("Bienvenidos " + nombre + "\n" +" Escoje la cantidad de jugadores "+ cantidad );

cantidadJugadores = prompt ("Cuantos van a jugar?", "0");
cantidadJugadores = parseInt(cantidadJugadores);


  if(cantidadJugadores == 1 || cantidadJugadores == 2){
    if(cantidadJugadores == 1){
      alert( cantidadJugadores + " jugador");
    }else if(cantidadJugadores == 2){
      alert( cantidadJugadores + " jugadores");
    }
  } 
  if(cantidadJugadores != 1 && cantidadJugadores != 2){
    alert(" Cantidad de jugadores no aseptada " + "\n" + " Se jugara con una persona " );
  }*/

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
var dadosResultantes = [0, 0 ,0, 0, 0];
var imagenDados = ["imagenes/dado1.png", "imagenes/dado2.png", "imagenes/dado3.png","imagenes/dado4.png", "imagenes/dado5.png", "imagenes/dado6.png"];
//acumuladores de puntaje
var puntajeJugador1 = 0;
var puntajeMaquina = 0;
var puntajeJugador2 = 0;

document.querySelector("#botonSorteo").addEventListener("click", sortearTurno);
document.querySelector("#mano1").addEventListener("click", turnoPersona);
document.querySelector("#mano2").addEventListener("click", turnoMaquina);


//======================================================================================================
//                                               CREAR JUGADORES
//======================================================================================================
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
}5
//jugadores
var jugador1 = new jugador("jugador1", 0, false);
var maquina  = new jugador("maquina", 0, false);
var jugador2 = new jugador("jugador2", 0, false);

//======================================================================================================
//                                               FUNCIONES
//======================================================================================================
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
//el total de los turnos que se van a jugar se va restando de uno en uno hasta que lleve a sero
function totalTurnos(){
  if(cantidadTotal > 0){
    cantidadTotal = cantidadTotal - 1;
    return cantidadTotal;
  }
  alert("JUEGO FINALIZADO");
  ganador();
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

  dadosResultantes = [dado1, dado2, dado3, dado4, dado5];

  for(var i = 0; i < dadosResultantes.length; i++){
    posicion[dadosResultantes[i]] ++;
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

  dadosResultantes = [dado1, dado2, dado3, dado4, dado5];

  for(var i = 0; i < dadosResultantes.length; i++){
    posicion[dadosResultantes[i]] ++;
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
    posicion[dadosResultantes[i]] ++;
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

  if(dado1 != dado2 && dado1 != dado3 && dado1 != dado4 && dado1 != dado5){
    resultado = true;
  }else if(dado2 != dado1 && dado2 != dado3 && dado2 != dado4 && dado2 != dado5 ){
    resultado = true;
  }else if(dado3 != dado1 && dado3 != dado2 && dado3 != dado4 && dado3 != dado5 ){
    resultado = true;
  }else if(dado4 != dado1 && dado4 != dado2 && dado4 != dado3 && dado4 != dado5 ){
    resultado = true;
  }else if(dado5 != dado1 && dado5 != dado2 && dado5 != dado3 && dado5 != dado4 ){
    resultado = true;
  }else{
    resultado = false;
  }
  return resultado;
}





function ganador(){
if (cantidadTurnos == 0) {
  if (puntajeJugador1 > puntajeMaquina) {
    //swal({ title: "Yeah!", text: `GANASTE`, imageUrl: "imagenes/bender-aplause.png" });
    //mensaje("gano el jugador");
    alert("ganaste jugador 1 felicidades");

  }else if (puntajeMaquina > puntajeJugador1) {
    //swal({ title: "LOL!", text: `PERDEDOR: INTENTALO NUEVAMENTE SI TE CREES MEJOR QUE ESTO`, imageUrl: "imagenes/fry-yeah.jpg" });
    //mensaje("gano la maquina");
     alert("ganaste jugador 2 felicidades");
  }else{
      //swal({ title: "Yeah!", text: "EMPATE (NADIE GANA)" });
      //mensaje("Es un empate, mejor suerte a la proxima");
      alert("empate mejor suerte la proxima");
    }
  }
}


/*======================================================================================================
/                                              JUEGO(EVENTOS)
======================================================================================================*/




function empezaJugador(){
var boton1 = document.getElementById("mano1");
var boton2 = document.getElementById("mano2");
var boton3 = document.getElementById("mano3");
boton1.disabled = false;
boton2.disabled = true;
boton3.disabled = true;
}
function empezaMaquina(){
var boton1 = document.getElementById("mano1");
var boton2 = document.getElementById("mano2");
var boton3 = document.getElementById("mano3");
boton1.disabled = true;
boton2.disabled = false;
boton3.disabled = true;
}



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
  mensajeJugador1("El jugador 1 saco los dados: " + dado1 + dado2 + dado3 + dado4 + dado5);
  //comprueba los puntajes
  if(turno = true){
    if(cincoIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeJugador1 = puntajeJugador1 + 50;
    }else if(cuatroIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeJugador1 = puntajeJugador1 + 40;
    }else if(tresIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeJugador1 = puntajeJugador1 + 30;
    }else if(dosIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeJugador1 = puntajeJugador1 + 20;
    }else if(unIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeJugador1 = puntajeJugador1 + 10;
    }
  }
  document.getElementById("puntaje1").innerHTML = puntajeJugador1;
  cantidadTurnos = cantidadTurnos - 1;
  ganador();
  empezaMaquina();
}










function turnoMaquina(){
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
  mensajeMaquina1("El jugador 2 saco los dados: " + dado1 + dado2 + dado3 + dado4 + dado5);
  if(turno = true){
    if(cincoIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeMaquina = puntajeMaquina + 50;
    }else if(cuatroIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeMaquina = puntajeMaquina + 40;
    }else if(tresIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeMaquina = puntajeMaquina + 30;
    }else if(dosIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeMaquina = puntajeMaquina + 20;
    }else if(unIguales(dado1, dado2, dado3, dado4, dado5) == true ){
       puntajeMaquina = puntajeMaquina + 10;
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
   // ocultaPanelSorteo()
    jugador1.setTurno(true);
    empezaJugador();

  }else if(jug1 < jug2) {
    mensaje("El jugador 2 empieza la partida. ")
   // ocultaPanelSorteo()
    maquina.setTurno(true);
    empezaMaquina();
  }else {
    mensaje("Empate, vuelva a tirar.")
  }
}









/*==============================================================================
FUNCIONES: CONTROL INTERFAZ
==============================================================================*/



function mensaje(contenido){
  document.getElementById("turnoGanador").innerHTML = contenido;
}
function mensajeJugador1(contenido){
  document.getElementById("resultadoTiroPersona1").innerHTML = contenido;
}
function mensajeMaquina1(contenido){
  document.getElementById("resultadoTiroMaquina").innerHTML = contenido;
}












function muestraDados(){
  ocultaDados()
  for(var i=0; i<dados.length; i++){
    document.getElementById(`app-dado-${i}`).src = imgDados[dados[i]]
    classie.remove(document.getElementById(`app-dado-${i}`), "hidden")
  }
}

function ocultaDados(){
  for(var i=0; i<3; i++)
    classie.add(document.getElementById(`app-dado-${i}`), "hidden")
}

function addResultadoLista(jugador){
  var li = document.createElement("li")
  li.innerHTML = `${dados.toString()} >> Acumulado: ${jugador.getPuntaje()}`
  classie.add(li, "list-group-item")
  document.getElementById(`puntajes-${jugador.getNombre()}`).appendChild(li)
}

function ocultaPanelSorteo(){
  setTimeout(function(){
    classie.add(document.getElementById("app-panel-sorteo"), "hidden")
    classie.remove(document.getElementById("panel-dados"), "hidden")
    },
    2500
  )
}

