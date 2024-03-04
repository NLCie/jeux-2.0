/******************************************************************************************************************
 *                             1e partie
 *                              Declarations des mots et phrases
 * 
 * 
******************************************************************************************************************/
//liste des mots et phrases
let listephrase = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]
let listmots =["ball", "bac", "buff"]
/****************************
 * 
 * declarations des elts de l'app
 * 
 ***************************/
//la declaration la zone de saisie



let btnvaliderMot = document.getElementById("btnvaliderMot")
console.log(btnvaliderMot)

// declar zone proposition
let divzoneProposition = document.querySelector(".zoneProposition")
console.log(divzoneProposition)

// declar zone score
let spanScore = document.querySelector(".zoneScore span")
console.log(spanScore)

//declar zone option
let listeBtnRadio = document.querySelectorAll(".optionSource input")
console.log(listeBtnRadio)