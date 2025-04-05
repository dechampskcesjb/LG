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
const av = document.getElementById("av")

//Affichage des variables
const vlg = document.getElementById("nblg")
const vpf = document.getElementById("nbpf")
const vvoyante = document.getElementById("nbv")
const vchasseur = document.getElementById("nbc")
const vsorciere = document.getElementById("nbs")
const vvillageois = document.getElementById("nbvi")

//Variables Globales
var nbLG = 0
var nbvoyante = 0
var nbpf  = 0
var nbchasseur = 0
var nbvillageois = 0
var nbsorciere = 0
var potionVie  = 1
var potionMort  = 1

//Etapes de la partie
var avancement = 1

//Fonctions

function preparerpartie(nbjoueurs){

    if(nbjoueurs > 7 && nbjoueurs <= 18){
        //Le cas ou ça marche

        //Si le nombre de joueurs est superieur ou egal a 12 , on place 3 loups
        nbjoueurs >= 12 ? nbLG=3: nbLG=2
        nbjoueurs >= 8 || hvoyante.checked ? nbvoyante = 1 : btnsVoyante.disabled =true
        if (nbjoueurs >= 12 || hsorciere.checked) {
            nbsorciere = 1
        }else{
            btnsSorciere.disabled =true
            btnpVie.disabled =true
            btnpMort.disabled =true
        }
        nbjoueurs >= 14 || hpf.checked ? nbpf = 1 : btnsPF.disabled = true
        hchasseur.checked ? nbchasseur = 1 : btnsChasseur.disabled = true

        //Calculer le nb de villageois
        nbvillageois = nbjoueurs - nbpf - nbchasseur - nbsorciere - nbvoyante - nbLG
        haffichage.innerHTML = `Vous devez préparer ${nbLG} loups garous , ${nbpf} petite fille, ${nbvoyante} voyante , ${nbsorciere} sorciere, ${nbchasseur} chasseur et ${nbvillageois} villageois`
        //Garnir tableau
        vlg.innerHTML = nbLG
        vvoyante.innerHTML = nbvoyante
        vvillageois.innerHTML = nbvillageois
        vpf.innerHTML = nbpf
        vsorciere.innerHTML = nbsorciere
        vchasseur.innerHTML = nbchasseur
        
    }else{
        haffichage.innerHTML = "Le nombre de joueurs est invalide"
    }

}

//Bouton preparer partie
btnpreparer.onclick = function (){
    var nbjoueurs = hnbjoueurs.value
    preparerpartie(nbjoueurs)
}

/* Boutons de suppression */
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
        vvillageois.innerHTML = nbvillageois
    }
    if (nbvillageois == 0){
        btnsVillageois.disabled = true
    }
    victoire()
}
//Supprimer LG
btnsLG.onclick = function (){
    if (nbLG > 0){
        nbLG = nbLG -1
        vlg.innerHTML = nbLG
    }
    if (nbLG == 0){
        btnsLG.disabled = true
    }
    victoire()
}
//Supprimer PF
btnsPF.onclick = function (){
    if (nbpf > 0){
        nbpf = nbpf-1
        vpf.innerHTML = nbpf
    }
    if (nbpf == 0){
        btnsPF.disabled = true
    }
    victoire()
}
//Suppression Voyante
btnsVoyante.onclick = function (){
    if (nbvoyante > 0){
        nbvoyante = nbvoyante -1
        vvoyante.innerHTML = nbvoyante
    }
    if (nbvoyante == 0){
        btnsVoyante.disabled = true
    }
    victoire()
}
// Suppression Sorciere
btnsSorciere.onclick = function (){
    if (nbsorciere > 0){
        nbsorciere = nbsorciere-1
        vsorciere.innerHTML = nbsorciere
    }
    if (nbsorciere == 0){
        btnsSorciere.disabled =true
    }
    victoire()
}
//Suppression Chasseur
btnsChasseur.onclick = function (){
    if (nbchasseur > 0){
        chasseur()
        nbchasseur = nbchasseur-1
        vchasseur.innerHTML = nbchasseur
    }
    if (nbchasseur == 0){
        btnsChasseur.disabled =true
    }
    victoire()
}
//role chasseur
function chasseur(){
    if (nbchasseur !== 0){
        haffichage.innerHTML = "Le chasseur choisit une victime qu'il emportera avec lui"
    }
}
//Role voyante
function voyante(){
    if (nbvoyante !== 0){
        haffichage.innerHTML = "La voyante choisit un joueur dont elle veut connaitre le role"
    }
}
//role Loup garou
function loupsgarous(){
    if (nbLG !== 0){
        if (nbLG == 1){
            haffichage.innerHTML = "Le loup garou choisit sa victime"
        }else {
            haffichage.innerHTML = "Les loups garous choissent une victime"
        }
    }
}
//Role Sorciere
function sorciere() {
    if (nbsorciere !== 0) {
        var text = "Vous devez designer la victime des loups garous à la sorciere : Demandez à la sorciere si elle souhaite la sauver ; Ensuite si elle souhaite utiliser sa potion de mort, elle doit designer une victime"

        haffichage.innerHTML = text

    }
}

function vote(){
    haffichage.innerHTML = "Le village décide de la prochaine victime"
}

function victoire(){
    // On gagne quand : nblg == 0 , nblg >= villageois
    var villageois = nbpf + nbvillageois +nbvoyante + nbsorciere +nbchasseur
    if (nbLG == 0){
        haffichage.innerHTML = "Le village remporte la victoire"
    }
    if (nbLG > villageois){
        haffichage.innerHTML = "Les loups garous ont gagné"
    }
}

//avancement de la partie

function partie(etape){

    switch (etape) {
        //Etape 1 : La voyante
        case 1 : {
            voyante()
            avancement ++
        }
        break
        //Etape Loups garous
        case 2 : {
            loupsgarous()
            avancement ++
        }
        break
    }

}

av.onclick = function(){
    partie(avancement)
}

/*TODO :
Boucle
 */





