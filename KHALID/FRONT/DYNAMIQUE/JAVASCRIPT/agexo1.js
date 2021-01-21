
////////////////////////////////////////////////////////////////////////


//Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux
//Il s'agit de dénombrer les personnes d'âge strictement inférieur à 20 ans, les personnes d'âge strictement supérieur à 40 ans et celles dont l'âge est compris entre 20 ans et 40 ans (20 ans et 40 ans y compris).

//Le programme doit demander les âges successifs.

//Le comptage est arrêté dès la saisie d'un centenaire. Le centenaire est compté.

//Donnez le programme Javascript correspondant qui affiche les résultats.





var count = 1
var jeunes = 0  
var moyens = 0
var vieux = 0


do 
{age = window.prompt("Entrez votre age" + count + "\nou  annuler ")
if (age !=null && age != "")
{ 
    count++;
}
if (age < 20 && age > 0)
{
    jeunes++;
}
else if (age >40 && age <= 100)
{
    vieux++;
}
else if (age>=20 && age<= 40)
{

    moyens++;
}
else (age > 100)
{
    result = "ERREUR";

}
}
while (age!= null && age !="");
console.log("Il y a " + jeunes + " jeunes." + "\nIl y a " + vieux  + " vieux." + "\nIl y a " +  moyens + " moyens.")





