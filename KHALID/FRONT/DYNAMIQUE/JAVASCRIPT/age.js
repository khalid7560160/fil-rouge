////////////////////////////////////////////////////////////////////////


//Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux
//Il s'agit de dénombrer les personnes d'âge strictement inférieur à 20 ans, les personnes d'âge strictement supérieur à 40 ans et celles dont l'âge est compris entre 20 ans et 40 ans (20 ans et 40 ans y compris).

//Le programme doit demander les âges successifs.

//Le comptage est arrêté dès la saisie d'un centenaire. Le centenaire est compté.

//Donnez le programme Javascript correspondant qui affiche les résultats.




var response= "age";
moinsjeune = 0;
jeune = 0;
plusjeune = 0 ;
centenaire = 0 ;
age = 1 ;
var age = window.prompt("Entrez votre age");

do
{

            if (age < "20")
        {   
                console.log("personne de moins de 20 ans ");
                plusjeune++; // Augmente le score de 1
   
        }// fin du 1er if
                window.alert(score);
/////////////nombre de personne de moins de 20 ans/////////////////


            if (age > 40)
        {
                console.log("personne de plus de 40 ans");
                jeune++; // Augmente le score de 1 
                } // fin du 2ème if  
                window.alert(score);
//////////// nombre de personne de plus de 40 ans ///////////////


            if (age >= 20 && age <= 40 ) 
        {
                console.log("personne entre 20 et 40 ans");
                plusjeune++; // Augmente le score de 1 
                } //fin du 3eme if 
                window.alert(score);
////////////nombre de personne entre 20 et 40 ans/////////////////
  

            if (age >=100)
        {
            console.log("personne de plus de 100 ans")
                centenaire++; //Augmente le score 1
                window.alert(score);
                break;
////////////nombre de personne de plus de 100ans/////
      
}// fin du 4 eme if 

alert("Il y a " + j + " jeunes \n Il y a " + m + " moyens \n Il y a " + v + " vieux");
        if (confirm("Voulez vous recommencer ?") == true) {
            window.location.reload(_calcul());
        }
        else {
            window.close();
} while (age >= 100)


///////////////////////////////////////////////////////////////////////////////
 






















