var service = require("./service");

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var continuer = true;

var menus = {
    "1": {
        libelle: "Liste de tous les présentateurs",
        execute: function () { console.log(service.listerTousLesPresentateurs().map(pres => pres.firstname + " " + pres.lastname)) }
    },
    "2": {
        libelle: "Top présentateurs",
        execute: function () { console.log(service.listerTopPresentateurs().map(pres => pres.firstname + " " + pres.lastname)) }
    },
    "3": {
        libelle: "Liste des sessions",
        execute: function () { console.log(service.listerSessions().map(session => session.title)) }
    },
    "4": {
        libelle: "Détails d'une session",
        execute: function () {
            rl.question("Entrez l'id de la session souhaitée\n", (id) => {
                console.log(service.trouverUneSession(id).map(session => session.title + " | Speakers :" + afficherSpeakers(session.speakers)))
                boucle();
            }
            );
        }

    },
    "5": {
        libelle: "Quitter",
        execute: function () { rl.close() }
    }

}

function afficherSpeakers(speakers) {
    var str = ""
    if (speakers != undefined) {
        speakers.forEach(function (nom) {
            str = str + service.listerTousLesPresentateurs().filter(speaker => speaker.id == nom ).map(speaker => speaker.lastname + " " + speaker.firstname+"| ")
        });
    } else {
        str = "Aucun"
    }
    return str
}

function boucle() {
    rl.question(afficherMenu(), (answer) => {
        if(answer in menus){
            menus[answer].execute()
            if (answer != 5) {
                boucle();
            }
        }else{
            console.log("Entrée non valide")
            boucle();
        }
        
    });
}

function afficherMenu() {
    str = ""
    for (var indice in menus) {
        str = str + indice + ". " + menus[indice].libelle + "\n"
    }
    return str
}

boucle()


