
// Assignment Code
var generateBtn = document.querySelector("#generate");


// assigning strings of letters, numbers and special characters which will make up the end password
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","J","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","£","$","%","^","&","*","*","(",")","@","~","#","?","<",">"];

// creating a variable name to store the information which will be selected on prompted questions
var passwordLength = "";
var uclPrompt = "";
var lclPrompt = "";
var numbersPrompt = "";
var scPrompt = "";



//------------------------------------------Opens password length prompt & loop when generate button pressed-----------------------------
function generatePassword () {
var passwordLength = prompt ("How many characters would you like your password to contain? (It must be between 8 to 128 characters)");

  while (passwordLength < 8 || passwordLength > 128) {
  alert ("Password must be between 8 to 128 characters. Please choose again");
var passwordLength = prompt ("How many characters would you like your password to contain? (It must be between 8 to 128 characters)");
  
}  if (passwordLength >= 8 || passwordLength <= 128) {

}

//-----------------------------------Upper case promt & loop---------------------------------------------
var uclPrompt = prompt ("Would you like your password to contain upper case letters? (Select - yes or no)"); 
  
  while (uclPrompt != "yes" && uclPrompt != "no") {
  alert (" You must input yes or no");
var uclPrompt=prompt ("Would you like your password to contain upper case letters? (Select - yes or no)");

}  if (uclPrompt === "yes" && uclPrompt === "no") {

}

//---------------------------Lower case promt & loop---------------------------------------------------
var lclPrompt=prompt ("Would you like your password to contain lower case letters? (Select - yes or no)");

  while (lclPrompt != "yes" && lclPrompt != "no") {
  alert (" You must input yes or no");
var lclPrompt=prompt ("Would you like lower case letters in your password? (Select - yes or no)");

}  if (lclPrompt === "yes" && lclPrompt === "no") {

}

//-------------------------Numbers promt & loop-------------------------------------------------
var numbersPrompt=prompt ("Would you like numbers in your password? (Select - yes or no)");

  while (numbersPrompt != "yes" && numbersPrompt != "no") {
  alert (" You must input yes or no");
var numbersPrompt=prompt ("Would you like numbers in your password? (Select - yes or no)");

}  if (numbersPrompt === "yes" && numbersPrompt === "no") {
 
}

//------------------------Special characters promt & loop----------------------------------------------------
var scPrompt=prompt ("Would you like any special characters in your password? (Select - yes or no)");

  while (scPrompt != "yes" && scPrompt != "no") {
  alert (" You must input yes or no");
var scPrompt=prompt ("Would you like any special characters in your password? (Select - yes or no)");

}  if (scPrompt === "yes" && scPrompt === "no") {
  alert("Thank you. Your password will now be generated");

}

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);