/* Realiza el cálculo del salario que debe recibir un trabajador que gana 
x salario con un descuento del 8% por salud y 8% por pensión. */

var salario = prompt("Ingrese el salario que devenga");
var salud = salario * 0.8 / 100;
var pensión = salario * 0.8 /100;
var salarioapagar = salario - salud - pensión;
document.write ("<br> El descuento por salud es de$: " +salud);
document.write("<br> El descuento de pensión es de$: "+pensión);
document.write("<br> El total a pagar, con deducciones es de$: "+salarioapagar);