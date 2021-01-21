var reponse1 = window.prompt("Entrez votre nom");
var reponse2 = window.prompt("Entrez votre prénom");

if (window.confirm("Etes-vous un homme ?") == true)
{
    result = "Monsieur";
}
else 
{
    result = "Madame";
};


window.alert("Bonjour "  + result + " " + reponse1 + " " + reponse2 + "\n\nBienvenue sur notre site web !");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////