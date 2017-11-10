var donnees = require("./data/devfest-2015")

module.exports = {
    listerTousLesPresentateurs: function () {
        return donnees.speakers
    },
    trouverUneSession: function (idSession) {
        return donnees.sessions.filter(session => session.id == idSession)
    },
    listerTopPresentateurs: function () {
        return donnees.speakers.filter(speaker =>  speaker.topspeaker)
    },
    listerSessions: function () {
        return donnees.sessions
    }
}