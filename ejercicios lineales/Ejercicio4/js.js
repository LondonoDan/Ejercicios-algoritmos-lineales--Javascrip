/*
4.	Calcule el sueldo mensual de un trabajador ingresando el número de horas trabajadas en el mes y el valor 
tanto como de las horas normales de trabajo y las horas extras.
*/
var nht = prompt("Ingrese el número de horas trabajadas al mes");
var vh = prompt ("Ingrese el valor de la hora");
var nhe = prompt ("Ingrese el número realizadas de horas extras al mes");
var vhe = prompt("Ingrese el valor de la hora extra");
var totalh = nht * vh;
var totale = nhe * vhe;
var total = parseInt(totalh) + parseInt(totale);

document.write("<br> El valor por las horas trabajas al mes es de$: "+totalh);
document.write("<br> El valor por las horas extras trabajadas al mes es de$:"+totale);
document.write("<br> El total a pagar con horas extras y sueldo es de $:"+total);
