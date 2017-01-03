/*Kata

En Javascript, écrire une fonction “masquer()” telle que :

1 string en entrée
remplace tous les caractères sauf les 4 derniers par “#” */

var input = prompt("Donne ton mot ??");

console.log(input);


var diese = "#".repeat(input.length-4);

console.log(diese);


var sliced = input.slice(input.length-4);

console.log(sliced);


var fini = diese+sliced;

console.log(fini);

