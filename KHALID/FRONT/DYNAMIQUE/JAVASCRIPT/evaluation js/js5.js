<script type="text/javascript">
//<![CDATA[

function valider(){
  // si la valeur du champ prenom est non vide
  if(document.formSaisie.prenom.value != "") {
    // les données sont ok, on peut envoyer le formulaire    
    return true;
  }
  else {
    // sinon on affiche un message
    alert("Saisissez le prénom");
    // et on indique de ne pas envoyer le formulaire
    return false;
  }
}

//]]
</script>