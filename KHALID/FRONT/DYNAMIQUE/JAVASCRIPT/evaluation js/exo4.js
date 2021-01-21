// Exercice 4 : total d'une commande
// A partir de la saisie du prix unitaire noté PU d'un produit et de la quantité commandée QTECOM, afficher le prix à payer PAP, en détaillant la remise REM et le port PORT, sachant que :

// TOT = ( PU * QTECOM )
// la remise est de 5% si TOT est compris entre 100 et 200 € et de 10% au-delà
// le port est gratuit si le prix des produits ( le total remisé ) est supérieur à 500 €. Dans le cas contraire, le port est de 2%
// la valeur minimale du port à payer est de 6 €
// Testez tous les cas possibles afin de vous assurez que votre script fonctionne.

// Ci-dessous, un jeu de tests :

// Saisir 600 € et quantité = 1 : remise 10% (-60 €) soit 540,00 et frais port = 0; à payer : 540 €
// Saisir 501 € et quantité = 1 : remise 10% (-50,1 €) soit 450,90 et frais port 2% (de 450,90 €) soit +9,01 € ; à payer : 450,90+9.01 = 459,91 €.
// Saisir 100 € et quantité = 2 : 200 € donc remise 5% soit 190 € et frais de port 2% soit 3,8 € mini 6 €; à payer : 190+6 = 196 €
// Saisir 3 € et quantité = 1 : remise 0, frais de port 2% soit 0.06 € donc le minimum de 6 € s'applique; à payer : 3+6 = 9 €


// Declaration des variables

var PU
var QTECOM 
var PAP 
var REM 
var PORT 
var TOT
// Entrer le prix  
PU=parseInt(prompt("entrez le prix de l article"));
 
// Nombre d'article
QTECOM=parseInt(prompt("entrer le nombre d article commandés"));

//Calcul du prix 
TOT=( PU * QTECOM)

//Prix remisé




    if(PU>500)  
            //frais de port gratuit
        {   PORT=0
        }  

    
        else if(PU<=500)
            // frais de port payant    
        {
            PORT=Math.max(6,TOT*(2/100));
        }   
    
              
    if(TOT>200)    
             //remise de 10% 
        {
            REM=TOT*(10/100) ;
        }
        
    
        else if(TOT<=200 && TOT>=100)
            //remise de 5%
        { 
            REM=TOT*(5/100);
        }
        else
            //  pas de remise
        {
            REM=0;
        }

// Prix payé par le client 
PAP=((TOT+PORT)-REM); 
alert("somme "+ TOT);
alert("frais de port "+ PORT);
alert("remise sur 10% " + REM);
alert("le prix a payer est "+ PAP);






