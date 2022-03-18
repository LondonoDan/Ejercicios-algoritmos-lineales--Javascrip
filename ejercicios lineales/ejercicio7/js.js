/*
Calcule el promedio de 5 notas de un alumno, el rango de cada nota es del 1 al 5.
*/

var no1 = prompt("Ingrese la nota 1:");
var no2 = prompt("Ingrese la nota 2:");
var no3 = prompt("Ingrese la nota 3:");
var no4 = prompt("Ingrese la nota 4:");
var no5 = prompt("Ingrese la nota 5:");
var promedio = (parseInt(no1) + parseInt (no2) +parseInt(no3) +parseInt (no4) +parseInt(no5))/5;

document.write("<br> El promedio de las 5 notas es de: "+promedio);
