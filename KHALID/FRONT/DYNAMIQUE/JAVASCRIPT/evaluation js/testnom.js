function VotrenomCheck() {
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
