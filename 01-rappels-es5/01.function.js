console.log("01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1, nb2) {
    return nb1 + nb2;
}

var resultat1 = additionner(nombre1, nombre2);

console.log("resultat1==" + resultat1);

var somme = additionner;
var resultat2 = somme(nombre1, nombre2);

console.log("resultat2==" + resultat2);

var multiplication = function (nb1, nb2) {
    return nb1 * nb2;
}

resultat3 = multiplication(nombre1, nombre2);
console.log("resultat3==" + resultat3);

var afficherOperation = function (nom, operation, nb1, nb2) {
    return nom+" [ nb1=="+nb1+" nb2=="+nb2+" ]=="+operation(nb1,nb2);
}

console.log(afficherOperation("Somme",somme,20,40));
console.log(afficherOperation("Multiplication",multiplication,10,20));
console.log(afficherOperation("Soustraction",function(nb1,nb2){return nb1-nb2},15,5));