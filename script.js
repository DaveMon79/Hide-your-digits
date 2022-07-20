
// Assignment Code
var generateBtn = document.querySelector("#generate");


// assigning strings of letters, numbers and special characters which will make up the end password
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "£", "$", "%", "^", "&", "*", "*", "(", ")", "@", "~", "#", "?", "<", ">"];

// creating global variable names to store the information which will be selected on prompted questions
var passwordLength = "";
var uppercasePrompt = "";
var lowercasePrompt = "";
var numbersPrompt = "";
var specialCharactersPrompt = "";


function generatePassword() {
  //------------------------------Opens password length prompt & loop when generate button pressed-----------------------------

  var passwordLength = prompt("How many characters would you like your password to contain? (It must be between 8 to 128 characters)");

  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 to 128 characters. Please choose again");
    var passwordLength = prompt("How many characters would you like your password to contain? (It must be between 8 to 128 characters)");
  }

  if (passwordLength >= 8 && passwordLength <= 128) {
  }


  //-----------------------------------Upper case promt & loop---------------------------------------------
  var uppercasePrompt = confirm("Would you like your password to contain uppercase letters?");
  var lowercasePrompt = confirm("Would you like your password to contain lowercase letters?");
  var numbersPrompt = confirm("Would you like numbers in your password?");
  var specialCharactersPrompt = confirm("Would you like any special characters in your password?");

  while (uppercasePrompt === false && lowercasePrompt === false && numbersPrompt === false && specialCharactersPrompt === false) {
    alert("You must select at least one option!");
    var uppercasePrompt = confirm("Would you like your password to contain uppercase letters?");
    var lowercasePrompt = confirm("Would you like your password to contain lowercase letters?");
    var numbersPrompt = confirm("Would you like numbers in your password?");
    var specialCharactersPrompt = confirm("Would you like any special characters in your password?");
  }


  // Splicing characters from arrays chosen by user and storing them in randomPassword variable
  var randomPassword = [];

  if (uppercasePrompt === true) {
    randomPassword.splice(0, 0, ...uppercaseLetters);
  } if (lowercasePrompt === true) {
    randomPassword.splice(0, 0, ...lowercaseLetters);
  } if (numbersPrompt === true) {
    randomPassword.splice(0, 0, ...numbers);
  } if (specialCharactersPrompt === true) {
    randomPassword.splice(0, 0, ...specialCharacters);
  }


  // Generates password using password length to splice required characters from chosen arrays
  var password = "";

  for (let i = 0; i <= passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * randomPassword.length);
    password += randomPassword[randomNum];

  }

  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
