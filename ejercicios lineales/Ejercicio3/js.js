/*   
3.	Realiza las operaciones de suma, resta, multiplicación, división, y módulo 
pidiéndole solo 2 números al usuario.
*/
var n1 = prompt("Ingrese un número");
var n2 = prompt("Ingrese un número");
var suma = parseInt(n1) + parseInt(n2);
var resta = n1 - n2;
var división = n1 / n2;
var multiplicación = n1 * n2;
var módulo = ((n1 % n2)+n2)%n2;

document.write("<br> El total de ambos números es de: "+suma);
document.write("<br> El total de ambos números es de: "+resta);
document.write("<br> El total de ambos números es de: "+división);
document.write("<br> El total de ambos números es de: "+multiplicación);
document.write("<br> El total de ambos números es de: "+módulo);