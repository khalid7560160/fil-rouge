// Exercice 3 : recherche d'un prénom
// Un prénom est saisi au clavier. On le recherche dans le tableau tab donné ci-après.

// Si le prénom est trouvé, on l'élimine du tableau en décalant les cases qui le suivent, et en mettant à blanc la dernière case. Si le prénom n'est pas trouvé un message d'erreur apparait et aucun prénom ne se supprime.

 // var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// ( exemple : ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", " "]; )



// liste des prenoms d'ou on effectue la recherche
///////////////////////////////////////////////////////////////////////////////////////////////

var tab = ["Audrey" , "Aurelien", "Flavien" ,"Jeremy", "Laurent", "Melik", " Nouara", "Salem", "Stephane"]; 


// entrer un prénom
var entrer = window.prompt('Veuillez choisir un prénom parmi "Audrey" , "Aurelien", "Flavien" ,"Jeremy", "Laurent", "Melik", " Nouara", "Salem", "Stephane"')

// verification du prénom dans la liste
if(tab.includes(entrer)){
    tab.splice(tab.indexOf(entrer),1);
    tab.push(" ");
    alert(tab)
}

//si le prenom ne fait pas partie de la liste
    else{alert("erreur")
}
