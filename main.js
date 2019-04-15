// Création des variables pour le changement de couleur
var passWord = document.getElementById('password');
var confirmpassword = document.getElementById('confirmPassword');
var check = document.getElementById('checking');
// Ajout de l'évènement click avec la fonction couleur sur le bouton Vérification grace à la variable check
check.addEventListener('click', color);
// Création de la fonction color
function color (){
// Mise en place d'un algo type if-else afin de changer la couleur des champs de texte
if (passWord.value != confirmpassword.value) {
// Style.borderColor pour changer la couleur de la variable choisit
    password.style.borderColor ='red';
    confirmpassword.style.borderColor = 'red';
}
else {
    passWord.style.borderColor ='green';
    confirmpassword.style.borderColor = 'green';
}
}
