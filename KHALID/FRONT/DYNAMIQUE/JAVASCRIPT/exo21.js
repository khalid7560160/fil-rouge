var age = 0;
        var j = 0;
        var m = 0;
        var v = 0;
    
        age = prompt("Quelle est l'age de la personne ?");
        if (age == null) {
            window.close();
        }
        else {
            if (!controle.test(age)) {
                alert("Il faut entrer un nombre \n Recommencez !");
                window.location.reload(_calcul());
            }
            else {
                age = parseInt(age);
                if (age > 100) {
                    v++;
                }
                else if (age < 20) {
                    j++;
                }
                else {
                    m++;
                }
                while (age < 100) {
                    age = parseInt(prompt("Quelle est l'age de la personne ?"));
    
                    if (!controle.test(age))
                    {
                        alert("Il faut entrer un nombre \n Recommencez !");
                        window.location.reload(_calcul());                
                    }
                 
                    if (age < 20) {
                        j++;
                    }
                    else if (age >= 20 && age <= 40) {
                        m++;
                    }
                    else {
                        v++;
                    }
                }
            }
        }
    
        alert("Il y a " + j + " jeunes \n Il y a " + m + " moyens \n Il y a " + v + " vieux");
        if (confirm("Voulez vous recommencer ?") == true) {
            window.location.reload(_calcul());
        }
        else {
            window.close();
        }
    }
    _calcul();