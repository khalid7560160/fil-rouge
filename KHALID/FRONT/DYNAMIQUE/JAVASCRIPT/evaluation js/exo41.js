var PU
var QTECOM 
var PAP 
var REM 
var PORT 
var TOT
var TOT1 
var TOT2

// Entrer le prix  
PU=parseInt(prompt("entrez le prix de l article"));
 
// Nombre d'article
QTECOM=parseInt(prompt("entrer le nombre d article commandés"));

//Calcul du prix 
TOT=( PU * QTECOM)

//calcul du prix remisé de 10%
TOT1=(TOT*10/100)


if (PU>500);(TOT>500)
{
    PORT=0

}
elseif (TOT<=500)
            // frais de port payant    
        {
            PORT=Math.max(6,TOT*(2/100));
        }   

    elseif(PU>500 && TOT1<500)  
            //frais de port gratuit
        {   PORT=0
        }  

        
        {
            PORT= TOT1*2/100
        }


        // Prix payé par le client 
PAP=((TOT+PORT)-REM); 
alert("produit "+ TOT);
alert("frais de port "+ PORT);
alert("remise de 10% " + REM);
alert("le prix a payer est "+ PAP);
