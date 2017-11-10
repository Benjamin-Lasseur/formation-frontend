function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return this.nom + " " + this.prenom + " " + this.pseudo
    }
    this.getInitiales = function () {
        return this.nom.charAt(0) + this.prenom.charAt(0)
    }
}

var jules = new Personne('Jules', 'LEMAIRE', 'Jules77');
var paul = new Personne('Paul', 'LEMAIRE', 'paul44');

function afficher(personne) {
    console.log(personne.nom)
    console.log(personne.prenom)
    console.log(personne.pseudo)
    console.log(personne.getNomComplet())
}

afficher(paul)
afficher(jules)
jules.pseudo = 'jules44'
console.log(jules.getNomComplet())
console.log(jules.age)
Personne.prototype.age = 'NON RENSEIGNE'
console.log(jules.age)
jules.age = 30
console.log(jules.age)
console.log(jules.getInitiales())

var Robert = { prenom: "Robert", nom: "LEPREFET", pseudo: "robert77", getNomComplet: function () { return this.nom + " " + this.prenom + " " + this.pseudo } }
afficher(Robert)

function Client(nom, prenom, pseudo, numClient){
    Personne.call(this,nom,prenom,pseudo)
    this.numClient=numClient
    this.getInfos = function(){return this.nom+" "+this.prenom+" "+this.numClient}
}

var steve = new Client('Steve','Lucas','Steve88','A01')
afficher(steve)
console.log(steve.numClient)
console.log(steve.getInfos())
