/*
Calcule el porcentaje de alumnos y alumnas de un salón de clase, 
digitando el total de alumnos hombres y mujeres.
*/

var hombres = prompt("Ingrese el total de hombres en el salón");
var mujeres = prompt("Ingrese el total de mujeres en el salón");
var total = parseInt(hombres) + parseInt(mujeres);
var pm = parseInt (mujeres) / parseInt (total) * 100;
var ph = hombres / total * 100;

document.write("<br> El total de alumnos es de: " +total);
document.write("<br> El porcentaje de mujeres en el salón es de: " +pm+"%");
document.write("<br> El porcentaje de hombre en el salón es de: "+ ph+"%");
