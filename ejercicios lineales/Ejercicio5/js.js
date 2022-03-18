/*
Digita el ingreso del precio de un producto y se debe calcular el IVA, 
mostrar cuanto es el IVA que se agrega, 
mostrar el precio del producto sin IVA y el total a pagar
*/

var vproducto = prompt("Ingrese el valor del producto");
var iva = vproducto - 0.19;
var total = vproducto;

document.write("<br> El precio del producto sin IVA es de$: "+iva);
document.write("<br> El total a pagar con IVA incluido es de$:" + total);



