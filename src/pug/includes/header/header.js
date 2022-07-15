let userButtonLogin = document.querySelector(".user-button__login");
let userButton = document.querySelector(".user-button");
let userAuthorization = document.querySelector(".user-authorization");

userButtonLogin.addEventListener('click', function() {
  userButton.style.display = "none";
  userAuthorization.style.display = "inline-block";
});
