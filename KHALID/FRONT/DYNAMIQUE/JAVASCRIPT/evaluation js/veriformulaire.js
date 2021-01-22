

// déclaration de variable qui serviront à la récupération de la valeur des champs de saisie

var Votrenom = document.getElementById('Votrenom');

// définition du ciblage pour l'affichage du message d'erreur
var missVotrenom = document.getElementById('missVotrenom*');

// définition des conditons de validation des champs de saisie
var textValid = /^("a-zA-Z")+$/;

// déclaration des fonctions vérifiant les champs de saisie du formulaire
function VotrenomCheck() 
{
    // si le champ est vide
    if (Votrenom.validity.valueMissing) {
        Event.preventDefault()
        missVotrenom.textContent = 'Champ non renseigné';
        missVotrenom.style.color = 'red';
        // test de la validité du champs de saisie
    } else if (textValid.test(Votrenom.value) == false) {
        Event.preventDefault();
        missVotrenom.textContent = 'Format incorrect';
        missVotrenom.style.color = 'red';
        // si la saisie est correct
    } else {

        missVotrenom.textContent = 'Ok';
        missVotrenom.style.color = 'green';
    }

 };
 //veifier si la case a ete cochée
function condition() 
{
    if (document.getElementById("case") .checked == true)
    {
        alert('la case est cochée');
    }
                    
    }

        

    //interditre les caracteres speciaux 
    //function verifierCaracteres(event) {
	 		
      //  var keyCode = event.which ? event.which : event.keyCode;
        //var touche = String.fromCharCode(keyCode);
                
        //var champ = document.getElementById('mon_input');
                
       // var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                
       // if(caracteres.indexOf(touche) >= 0) {
      //      champ.value += touche;
      //  }
                
   // }


   //Si vous voulez faire l’inverse, c’est à dire inscrire dans listChars les caractères interdits, modifier la fin du code ainsi :
  // Votre fonction ajoutera le caractère que si ce dernier n’est donc pas dans listChars.
  
//autoriser les caracteres speciaux 
//if(caracteres.indexOf(touche) == -1) {
//	champ.value += touche;
//}





//Maintenant, si vous voulez avoir des caractères autorisés ou interdit différents pour le 1er caractère de votre input, il suffit d’étudier l’attribut length de la valeur de l’input.

//Pour l’exemple ici, si mon input est vide (donc pour le 1er caractère), j’interdis les nombres.

//if(champ.value.length == 0) {
	//var caracteres = '0123456789';
//}
//else {
//	var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//}