// Declaramos variables
// Variables internas de la calculadora (estado UI)
var operandoa;
var operandob;
var operacion;

// --- Módulo de operaciones puras ---
function sumar(a, b){ 
  return parseFloat(a) + parseFloat(b); 
}

function restar(a, b){ 
  return parseFloat(a) - parseFloat(b); 
}

function multiplicar(a, b){ 
  return parseFloat(a) * parseFloat(b); 
}

function dividir(a, b){
  a = parseFloat(a); 
  b = parseFloat(b);
  if (b === 0) return "Error"; // Evitar división entre 0
  return a / b;
}

// Export CommonJS / ES Modules si está disponible (entorno de tests Node)
if (typeof module !== 'undefined' && module.exports){
    module.exports = { sumar, restar, multiplicar, dividir };
}

function init(){
  // variables
  var resultado = document.getElementById('resultado');
  var reset = document.getElementById('reset');
  var suma = document.getElementById('suma');
  var resta = document.getElementById('resta');
  var multiplicacion = document.getElementById('multiplicacion');
  var division = document.getElementById('division');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var cero = document.getElementById('cero');

  // Eventos de click
  uno.onclick = function(){ resultado.textContent += "1"; }
  dos.onclick = function(){ resultado.textContent += "2"; }
  tres.onclick = function(){ resultado.textContent += "3"; }
  cuatro.onclick = function(){ resultado.textContent += "4"; }
  cinco.onclick = function(){ resultado.textContent += "5"; }
  seis.onclick = function(){ resultado.textContent += "6"; }
  siete.onclick = function(){ resultado.textContent += "7"; }
  ocho.onclick = function(){ resultado.textContent += "8"; }
  nueve.onclick = function(){ resultado.textContent += "9"; }
  cero.onclick = function(){ resultado.textContent += "0"; }

  reset.onclick = function(){ resetear(); }

  suma.onclick = function(){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
  }

  resta.onclick = function(){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
  }

  multiplicacion.onclick = function(){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
  }

  division.onclick = function(){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
  }

  igual.onclick = function(){
    operandob = resultado.textContent;
    resolver();
  }
}

function limpiar(){
  resultado.textContent = "";
}

function resetear(){
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = sumar(operandoa, operandob);
      break;
    case "-":
      res = restar(operandoa, operandob);
      break;
    case "*":
      res = multiplicar(operandoa, operandob);
      break;
    case "/":
      res = dividir(operandoa, operandob);
      break;
  }
  resetear();
  resultado.textContent = res;
}
