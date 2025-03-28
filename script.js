//Elements HTML
const hnbjoueurs = document.getElementById("nbjoueurs")
const hvoyante = document.getElementById("voyante")
const hsorciere = document.getElementById("sorciere")
const hpf = document.getElementById("pf")
const hchasseur = document.getElementById("chasseur")
const haffichage = document.getElementById("affichage")
const btnpreparer = document.getElementById("preparer")
const btnsLG = document.getElementById("sLG")
const btnsPF = document.getElementById("sPF")
const btnsVoyante = document.getElementById("sVoyante")
const btnsSorciere = document.getElementById("sSorciere")
const btnsChasseur = document.getElementById("sChasseur")
const btnsVillageois = document.getElementById("sVillageois")
const btnpVie = document.getElementById("pvie")
const btnpMort = document.getElementById("pmort")

//Variables Globales
var nbLG = 0
var nbvoyante = 0
var nbpf  = 0
var nbchasseur = 0
var nbvillageois = 0
var nbsorciere = 0
var potionVie  = 1
var potionMort  = 1

//Fonctions

function preparerpartie(nbjoueurs){

    if(nbjoueurs > 7 && nbjoueurs <= 18){
        //Le cas ou ça marche

        //Si le nombre de joueurs est superieur ou egal a 12 , on place 3 loups
        nbjoueurs >= 12 ? nbLG=3: nbLG=2
        nbjoueurs >= 8 || hvoyante.checked ? nbvoyante = 1 : nbvoyante = 0
        nbjoueurs >= 12 || hsorciere.checked ? nbsorciere = 1 : nbsorciere = 0
        nbjoueurs >= 14 || hpf.checked ? nbpf = 1 : nbpf = 0
        hchasseur.checked ? nbchasseur = 1 : nbchasseur = 0

        //Calculer le nb de villageois
        nbvillageois = nbjoueurs - nbpf - nbchasseur - nbsorciere - nbvoyante - nbLG
        haffichage.innerHTML = `Vous devez préparer ${nbLG} loups garous , ${nbpf} petite fille, ${nbvoyante} voyante , ${nbsorciere} sorciere, ${nbchasseur} chasseur et ${nbvillageois} villageois`
        
    }else{
        haffichage.innerHTML = "Le nombre de joueurs est invalide"
    }

}

//Bouton preparer partie
btnpreparer.onclick = function (){
    var nbjoueurs = hnbjoueurs.value
    preparerpartie(nbjoueurs)
}

//Role Sorciere
function sorciere() {
    if (nbsorciere !== 0) {
        var text = "Vous devez designer la victime des loups garous à la sorciere : Demandez à la sorciere si elle souhaite la sauver ; Ensuite si elle souhaite utiliser sa potion de mort, elle doit designer une victime"


    }
}
btnpVie.onclick = function (){
    if (potionVie > 0){
        potionVie = potionVie- 1
        console.log()
    }
    if (potionVie == 0){
        btnpVie.disabled = true
    }
}
btnpMort.onclick = function (){
    if (potionMort > 0){
        potionMort = potionMort- 1
    }
    if (potionMort == 0){
        btnpMort.disabled = true
    }
}
//Bouton supprimer villageois
btnsVillageois.onclick = function (){
    if (nbvillageois > 0){
        nbvillageois = nbvillageois -1
    }
    if (nbvillageois == 0){
        btnsVillageois.disabled = true
    }
}






