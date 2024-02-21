let button = document.getElementById('patate')
let error = document.getElementById('error')
let email = document.getElementById('email');
let password = document.getElementById('password')

function Validate() {
    console.log(button, email.value, password.value)
    if (email.value == "" || password.value == "") {
        error.innerHTML = "Les champs ne peuvent pas etre vides"
        prompt("c'est faux")
        return false
    } else {
        return true
        prompt("le formulaire est bien remplie")
    }
}

button.addEventListener("click", Validate)