let registrationSignInButton = document.querySelector(".account-registration__sign-in__button");
let registrationCreateButton = document.querySelector(".sign-in-account__button");
let registrationForm = document.querySelector(".registration__form");
let registrationSignIn = document.querySelector(".registration__sign-in");

registrationSignInButton.addEventListener('click', function() {
    registrationForm.style.display = "none";
    registrationSignIn.style.display = "inline-block";
});
registrationCreateButton.addEventListener('click', function() {
    registrationForm.style.display = "inline-block";
    registrationSignIn.style.display = "none";
});
