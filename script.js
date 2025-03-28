//Elements HTML
const hnbjoueurs = document.getElementById("nbjoueurs")
const hvoyante = document.getElementById("voyante")
const hsorciere = document.getElementById("sorciere")
const hpf = document.getElementById("pf")
const hchasseur = document.getElementById("chasseur")
const haffichage = document.getElementById("affichage")
const btnpreparer = document.getElementById("preparer")


//Variables Globales
var nbLG = 0
var nbvoyante = 0
var nbpf  = 0
var nbchasseur = 0
var nbvillageois = 0
var nbsorciere = 0

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

btnpreparer.onclick = function (){
    var nbjoueurs = hnbjoueurs.value
    preparerpartie(nbjoueurs)

}





