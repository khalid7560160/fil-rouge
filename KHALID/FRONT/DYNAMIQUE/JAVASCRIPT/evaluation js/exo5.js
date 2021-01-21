// Exercice 5 : vérification d'un formulaire
// Effectuez le contrôle de saisie de votre formulaire Jarditou en Javascript.

// Lorsqu'une erreur est détectée, l'utilisateur doit en être informé grâce à l'affichage d'un message sous le champ concerné.

// Le formulaire ne peut être envoyé que lorsque tout est bon.



// déclaration de variable qui serviront à la récupération de la valeur des champs de saisie

var Votrenom = document.getElementById('Votrenom');
var Votreprénom = document.getElementById('Votreprénom');
var Codepostal = document.getElementById('Codepostal*');
var Adresse = document.getElementById('adresse');
var Ville = document.getElementById('Ville');
var Email = document.getElementById('Email');
var Votresujet = document.getElementById('Votresujet');
var Votrequestion = document.getElementById('Votrequestion');

// pour récupérer la valeur de la liste déroulante
var Envoyer = document.getElementById('Envoyer');
var Annuler = document.getElementById('Annuler');
//////////////////////////////////////////////////////////////////////////////////////////////////////

// définition du ciblage pour l'affichage du message d'erreur
var missVotrenom = document.getElementById('missVotrenom*');
var missVotreprénom = document.getElementById('missVotreprénom');
var missCodepostal = document.getElementById('missCodepostal');
var missAdresse = document.getElementById('missAdresse');
var missVille = document.getElementById('missVille');
var missEmail = document.getElementById('missEmail');
var missVotresujet = document.getElementById('missVotresujet*');
var missVotrequestion = document.getElementById('missVotrequestion');
var missEnvoyer = document.getElementById('missEnvoyer');
var missAnnuler = document.getElementById('missAnnuler');
////////////////////////////////////////////////////////////////////////////////////////////////////////

// définition des conditons de validation des champs de saisie
var textValid = /^("a-zA-Z")+$/;
var codepostalValid = /^((0[1-9])|([1-8][0-9])|(9[0-8])|(2A)|(2B))[0-9]{3}$/;
var EmailValid = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/;
// check de l'évènement sur le bouton 'Envoyer' et 'Annuler'
// Envoyer.addEventListener('click', checkForm);
// Annuler.addEventListener('click', checkForm);
// quand il y a perte de focus sur un champ

Votrenom.onblur = Votrenom*Check;
Votreprénom.onblur = Votreprénom*Check;
Codepostal.onblur = Codepostal*Check;
adresse.onblur = adresseCheck;
Ville.onblur = Ville*Check;
Email.onblur = Email*Check;
textEnvironement.onblur = textEnvironmentCheck;
Votrequestion.onblur = VotrequestionCheck;

environment.onchange = getSelect;

///////////////////////////////////////////////////////////////////////////////////////////////////////
// déclaration des fonctions vérifiant les champs de saisie du formulaire
// vérification du champ société

function VotrenomCheck() 
{
    // si le champ est vide
    if (Votrenom.validity.valueMissing) {
        event.preventDefault()
        missVotrenom.textContent = 'Champ non renseigné';
        missVotrenom.style.color = 'red';
        // test de la validité du champs de saisie
    } else if (textValid.test(Votrenom.value) == false) {
        event.preventDefault();
        missVotrenom.textContent = 'Format incorrect';
        missVotrenom.style.color = 'red';
        // si la saisie est correct
    } else {

        missVotrenom.textContent = 'Ok';
        missVotrenom.style.color = 'green';
    }

 };


function VotreprénomCheck() {
    // si le champ est vide
    if (Votreprénom.validity.valueMissing) {
        event.preventDefault()
        missVotreprénom.textContent = 'Champ non renseigné';
        missVotreprénom.style.color = 'red';
        // test de la validité du champs de saisie
    } else if (textValid.test(Votreprénom.value) == false) {
        event.preventDefault();
        missVotreprénom.textContent = 'Format incorrect';
        missVotreprénom.style.color = 'red';
        // si la saisie est correct
    } else {

        missVotreprénom.textContent = 'Ok';
        missVotreprénom.style.color = 'green';
    }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////
function CodepostalCheck() {
    // si le champ est vide
    if (Codepostal.validity.valueMissing) {
        event.preventDefault()
        missCodepostal.textContent = 'Champ non renseigné';
        missVotrepostal.style.color = 'red';
        // test de la validité du champs de saisie
    } else if (textValid.test(Votreprénom.value) == false) {
        event.preventDefault();
        missCodepostal.textContent = 'Format incorrect';
        missCodepostal.style.color = 'red';
        // si la saisie est correct
    } else {

        missCodepostal.textContent = 'Ok';
        missCodepostal.style.color = 'green';
    }

};

    //vérification du champ adresse
function adresseCheck() {
    if (Adresse.validity.valueMissing) {
        event.preventDefault()
        missAdresse.textContent = 'Champ non renseigné';
        missAdresse.style.color = 'red';
    } else if (textValid.test(adresse.value) == false) {
        event.preventDefault();
        missAdresse.textContent = 'Format incorrect';
        missAdresse.style.color = 'red';
    } else {
        missAdresse.textContent = 'Ok';
        missAdresse.style.color = 'green';
    }
};
//////////////////////////////////////////////////////////////////////////////////////////////
// vérification du champ ville
function VilleCheck() {
    if (Ville.validity.valueMissing) {
        event.preventDefault()
        missVille.textContent = 'Champ non renseigné';
        missVille.style.color = 'red';
    } else if (textValid.test(city.value) == false) {
        event.preventDefault();
        missVille.textContent = 'Format incorrect';
        missVille.style.color = 'red';
    } else {
        missVille.textContent = 'Ok';
        missVille.style.color = 'green';
    }
};

//////////////////////////////////////////////////////////////////////////////////////////////////

// vérification du champ email
function EmailCheck() {
    if (Email.validity.valueMissing) {
        event.preventDefault()
        missEmail.textContent = 'Champ non renseigné';
        missEmail.style.color = 'red';
    } else if (emailValid.test(email.value) == false) {
        event.preventDefault();
        missEmail.textContent = 'Format incorrect';
        missEmail.style.color = 'red';
    } else {
        missEmail.textContent = 'Ok';
        missEmail.style.color = 'green';
    }
};
//////////////////////////////////////////////////////////////////////////////////////////////////
//vérification du champ environnement
function textEnvironmentCheck() {
    if (textEnvironment.validity.valueMissing) {
        event.preventDefault()
        missTextEnvironment.textContent = 'Champ non renseigné';
        missTextEnvironment.style.color = 'red';
    } else if (textValid.test(environment.value) == false) {
        event.preventDefault();
        missTextEnvironment.textContent = 'Format incorrect';
        missTextEnvironment.style.color = 'red';
    } else {
        missTextEnvironment.textContent = 'Ok';
        missTextEnvironment.style.color = 'green';
    }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////
function getSelect() {
    // récupération de l'index de l'option choisi dans la liste déroulante
    var choice = environment.selectedIndex;
    var value = environment.options[choice].text;
    textEnvironment.append(value + ', ');
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////