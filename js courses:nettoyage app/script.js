/*******************************************************************************************************************
 *                      2e partie
 * 
 *                   les fonctions et Suite de la declaration
 *                            et les prompts
 * 
 ******************************************************************************************************************/

//déclaration des variables
let reponse
let scoress = 0

//fonction d'affichage de resultat
function afficherResultat(scoress, totalmot){
     // les variable connectées de html
   let spanScore = document.querySelector(".zoneScore span")
   spanScore.innerText = `${scoress} / ${totalmot}`
 
   // boucle pour choisir entre mot et phrase
  /*  switch(reponse){
        
        case "phrase":
            totalmot = listephrase.length
            //affichage resultat en html
            spanScore.innerHTML = `${scoress} / ${totalmot}`
            break  
        case "mot":
            totalmot = listmots.length
            //affichage resultat en html
            spanScore.innerText = `${scoress} / ${totalmot}`
            break
    }
    console.log("vous avez obtenue " + scoress + " sur " + totalmot) */
}/* prompt
let reponse = prompt("voulez-vous jouer, vous devrez choisir entre : phrase ou mot") */
//fonction de faire le choix entre phrase et mot
function choisirPhraseOUMot(){
    
    //while(reponse !== "phrase" && reponse !== "mot"){
        //prompt
     //   reponse = prompt("voulez-vous jouer, vous devrez choisir entre : phrase ou mot")
   //} 
   //return reponse
   
}


// fonction de lancement du boucle de jeux
function lancerBoucleDeJeux(){
   //_________________________ choix phrase   ________________________
   /*
if(reponse === "phrase"){
    
    for(i = 0; i < 3; i++){
     --------------------------   prompt   -----------------------------
        let motTape = prompt("Tapez ce mot: " + listephrase[i]) 
    ----------------------------------------------------------------------
    if(motTape === listephrase[i]){
        console.log("Bravo")
        scoress ++
        console.log(scoress)
    }else{
        console.log("Echoué")
        console.log(scoress)
    }
    }
    //afficher resultat de phrase
    console.log("vous avez eu " + scoress + " sur " + listephrase.length)
    }  */
    //_________________________choix mot  _______________
    
    if(reponse === "mot"){
        
        let listmots =["ball", "bac", "buff"]
    
    for(i = 0; i < 3; i++){
        /* ------------------------  prompt  ----------------------------------
         motTape = prompt("Tapez ce mot: " + listmots[i])
         ------------------------------------------------------------------------- */
    
    if(motTape === listmots[i]){
        console.log("Bravo")
        scoress ++
        console.log(scoress)
    }else{
        console.log("Essaie avec le svt pr voir")
        console.log(scoress)
    }
    }
    //afficher resultat de mot
    console.log("vous avez eu " + scoress + " sur " + listmots.length)
    }
    
}
// afficher proposition 
function afficherProposition(proposition){
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = proposition
}
/*fonction de shareScore  
* Ajout d'un lien
******************************************/
function afficherEmail(){
    let lien = `lien:${email}+?subject=partage du score Azertype&body=salut jai ${nomShare}`
    location.href = lien
}

/*************************************************************************************************************************
 * 
 * La gestion des erreurs
 *                                       Avec le fonction gererFormulaire de shareScore
 **********************************************************************************************************************/
function gererFormulaire(scoreEmail) {
    let baliseNomShare = document.getElementById("nomShare")
    let nomShare = baliseNomShare.value

    let baliseEmailShare = document.getElementById("email")
    let emailShare = baliseEmailShare.value

    if(validerNom(nomShare) && vakiderEmail(emailShare)){
        
        afficherEmail(nomShare, emailShare, scoreEmail)
    }
}

// fonction qui execute les autres fonctions
function lancerJeux(){
    let BtnvaliderMot = document.getElementById("btnvaliderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    let i = 0
    let baliseaRadio = document.querySelectorAll("input[type=radio]")
    let listeProposition = listmots
    /*************************************************************/
    //pour le bouton qui appelle un lien ds shareScore
    /*let formShare = document.getElementById("share")
    formShare.addEventListener("submit", (event) => {
        
        event.preventDefault()
       
        let scoreEmail = `${scoress} / ${i}`
        gererFormulaire(scoreEmail)
    })
    //************************************************************/
    
    afficherProposition(listeProposition[i])
    BtnvaliderMot.addEventListener("click", ()=>{
        console.log(inputEcriture.value)
        if(inputEcriture.value === listeProposition[i]){
            scoress++
        }
        i++
        afficherResultat(scoress, i)
        inputEcriture.value = ''
        if(listeProposition[i] === undefined){
            afficherProposition("Le jeux est terminé")
            BtnvaliderMot.disabled = true
        }else{
            afficherProposition(listeProposition[i])
        }
        
    }) 

    for(let a = 0; a < baliseaRadio.length; a++){
        baliseaRadio[a].addEventListener("change", (event) => {
            if(baliseaRadio[a].checked){
                console.log(event.target.value)
                if(event.target.value === "mots"){
                    listeProposition = listmots
                }else{
                    listeProposition = listephrase
                }
           
            }
            afficherProposition(listeProposition[i])
            if(listeProposition[i] === undefined){
                afficherProposition("Le jeux est terminé")
                BtnvaliderMot.disabled = true
            }else{
                afficherProposition(listeProposition[i])
            }
        })
    }
    

    // choisirPhraseOUMot()
  //  lancerBoucleDeJeux()
    afficherResultat(scoress, i)
    console.log("l'utilisateur a choisi : " + reponse)
    
   

}
