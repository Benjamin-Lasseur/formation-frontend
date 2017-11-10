var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']

villes.forEach(function (ville) { console.log(ville) })

console.log("lettreADansToutesLesVilles==" + villes.every(function (ville) {
    return ville.includes('a')
}))


console.log("auMoinsUneVilleAvecUnTiret==" + villes.some(function (ville) {
    return ville.includes('-')
}))

var villesSansTiretSansEspace = villes.filter(function (ville) { return !ville.includes('-') && !ville.includes(' ') })

console.log("villesSansTiretSansEspace==[" + villesSansTiretSansEspace + "]")

var villesMajusculeSeTerminantParS = villes.filter(function (ville) {
    return ville.slice(-1) == 's'
}).map(function (ville) {
    return ville.toLocaleUpperCase()
})

console.log("villesMajusculeSeTerminantParS==[" + villesMajusculeSeTerminantParS + "]")


