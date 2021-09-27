const signupNav = document.querySelector(".signupNav");
const loginNav = document.querySelector(".loginNav");
const signupLink = document.querySelector(".switch");
const signupForm = document.querySelector(".signup");
const loginLink = document.querySelector(".switch1");
const loginForm = document.querySelector(".login");
const icon = document.querySelector(".icon");
const icon1 = document.querySelector(".icon1");
const loginButton = document.querySelector(".loginButton");

signupNav.addEventListener("click", () => {
  loginForm.classList.add("display-none");
  signupForm.classList.remove("display-none");
});

loginNav.addEventListener("click", () => {
  loginForm.classList.remove("display-none");
  signupForm.classList.add("display-none");
});

signupLink.addEventListener("click", () => {
  loginForm.classList.add("display-none");
  signupForm.classList.remove("display-none");
});

icon.addEventListener("click", () => {
  loginForm.classList.add("display-none");
});

icon1.addEventListener("click", () => {
  signupForm.classList.add("display-none");
});

function validationLogin() {
  var loginEmailValidate = document.querySelector(".loginEmailValidate");
  var loginEmail = document.querySelector(".loginEmail").value;
  var emailformat1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var loginPassword = document.querySelector(".loginPassword").value;
  var loginPasswordValidate = document.querySelector(".loginPasswordValidate");
  var displayUser = document.querySelector(".displayUser");
  let str = loginEmail;
  const myArr = str.split("@");
  const myArr1 = myArr[0];
  const myArr2 = myArr[1];
  const myArrUppercase = myArr1[0].toUpperCase() + myArr1.slice(1);

  console.log(myArrUppercase);

  if (loginEmail != "" && emailformat1.test(loginEmail)) {
    loginEmailValidate.innerHTML = "";
  } else {
    loginEmailValidate.innerHTML = "Please provide the valid email format";
  }
  console.log("this is " + loginEmailValidate);

  if (loginPassword.length < 7) {
    loginPasswordValidate.innerHTML =
      "Password length must be atleast 7 characters";
  } else {
    loginPasswordValidate.innerHTML = "";
  }
  if (loginPassword == "") {
    loginPasswordValidate.innerHTML = "Input a value for password";
  }

  if (
    loginEmail != "" &&
    emailformat1.test(loginEmail) &&
    loginPassword.length > 7
  ) {
    displayUser.innerHTML = "Welcome " + myArrUppercase + "!!!!";
  }

  if (myArr2 == "gmail.com") {
    displayUser.style.color = "green";
  }
}

function validationForm() {
  var name1 = document.querySelector(".name1").value;
  var nameValidate = document.querySelector(".nameValidate");
  var emailValidate = document.querySelector(".emailValidate");
  var email = document.querySelector(".email").value;
  var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var signupPassword = document.querySelector(".signupPassword").value;
  var passwordValidate = document.querySelector(".passwordValidate");
  var confirmPassword = document.querySelector(".confirmPassword").value;
  var password = document.querySelector(".password");
  var differentMail = document.querySelector(".differentMail");

  if (name1 == "") {
    nameValidate.innerHTML = "Name field is blank...please return a value";
  } else {
    nameValidate.innerHTML = "";
  }

  if (email != "" && emailformat.test(email)) {
    emailValidate.innerHTML = "";
  } else {
    emailValidate.innerHTML = "Please provide the valid email format";
  }
  console.log("this is " + email);

  if (signupPassword.length < 7) {
    passwordValidate.innerHTML = "Password length must be atleast 7 characters";
  } else {
    passwordValidate.innerHTML = "";
  }
  if (signupPassword == "") {
    passwordValidate.innerHTML = "Input a value for password";
  }

  console.log("this is " + signupPassword);

  if (confirmPassword != signupPassword) {
    password.innerHTML = "password is not matching";
  } else {
    password.innerHTML = "";
  }

  let userInput = { name: name1, username: email, password: signupPassword };

  console.log(userInput);

  let existingUsersFromLocalStorage =
    JSON.parse(localStorage.getItem("users")) || [];
  if (existingUsersFromLocalStorage.includes(userInput.username)) {
    differentMail.innerHTML = "Sorry you have already entered this email";
  } else {
    differentMail.innerHTML = "";
    existingUsersFromLocalStorage.push(userInput.username);
    localStorage.setItem(
      "users",
      JSON.stringify(existingUsersFromLocalStorage)
    );
  }
}
