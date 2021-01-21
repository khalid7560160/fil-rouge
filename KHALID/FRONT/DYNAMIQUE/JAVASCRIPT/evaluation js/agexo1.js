
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