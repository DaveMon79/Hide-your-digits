
// Assignment Code
var generateBtn = document.querySelector("#generate");


// assigning strings of letters, numbers and special characters which will make up the end password
var uppercaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowercaseLetters = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","£","$","%","^","&","*","*","(",")","@","~","#","?","<",">"];

// creating global variable names to store the information which will be selected on prompted questions
var passwordLength = "";
var uppercasePrompt = "";
var lowercasePrompt = "";
var numbersPrompt = "";
var specialCharactersPrompt = "";
var generatePassword ="";
var password ="";


    
  //------------------------------Opens password length prompt & loop when generate button pressed-----------------------------
  var generatePassword = function () {
  var passwordLength = prompt ("How many characters would you like your password to contain? (It must be between 8 to 128 characters)");
  
    while (passwordLength < 8 || passwordLength > 128) {
    alert ("Password must be between 8 to 128 characters. Please choose again");
  var passwordLength = prompt ("How many characters would you like your password to contain? (It must be between 8 to 128 characters)");
    
  }  if (passwordLength >= 8 || passwordLength <= 128) {
     console.log (passwordLength);
  }

  
  //-----------------------------------Upper case promt & loop---------------------------------------------
  var uppercasePrompt = prompt ("Would you like your password to contain upper case letters? (Select - yes or no)"); 
    
    while (uppercasePrompt != "yes" && uppercasePrompt != "no") {
    alert (" You must input yes or no");
  var uppercasePrompt=prompt ("Would you like your password to contain upper case letters? (Select - yes or no)");
  
}  if (uppercasePrompt === "yes") {
  console.log (true);

}  else if (uppercasePrompt === "no") { 
  console.log (false);
}  

  //---------------------------Lower case promt & loop---------------------------------------------------
  var lowercasePrompt = prompt ("Would you like your password to contain lower case letters? (Select - yes or no)");
  
    while (lowercasePrompt != "yes" && lowercasePrompt != "no") {
    alert (" You must input yes or no");
  var lowercasePrompt=prompt ("Would you like lower case letters in your password? (Select - yes or no)");
  
}  if (lowercasePrompt === "yes") {
   console.log (true);

}  else if (lowercasePrompt === "no") { 
   console.log (false);
}  
  
  //-------------------------Numbers promt & loop-------------------------------------------------
  var numbersPrompt=prompt ("Would you like numbers in your password? (Select - yes or no)");
  
     while (numbersPrompt != "yes" && numbersPrompt != "no") {
     alert (" You must input yes or no");
  var numbersPrompt=prompt ("Would you like numbers in your password? (Select - yes or no)");
  
  }  if (numbersPrompt === "yes") {
     console.log (true);

  }  else if (numbersPrompt === "no") { 
     console.log (false);
  }  
  
  //------------------------Special characters promt & loop----------------------------------------------------
  var specialCharactersPrompt=prompt ("Would you like any special characters in your password? (Select - yes or no)");
  
     while (specialCharactersPrompt != "yes" && specialCharactersPrompt != "no") {
     alert (" You must input yes or no");
  var specialCharactersPrompt=prompt ("Would you like any special characters in your password? (Select - yes or no)");
  
  }  if (specialCharactersPrompt === "yes") {
     console.log (true);

  }  else if (specialCharactersPrompt === "no") { 
     console.log (false);
  }  
  
  }
  

  //Removing no answers from promt questions
  var generatePassword = function () {
  var length = (passwordLength);
  var uppercasePrompt = true;
  var lowercasePrompt = true;
  var numbersPrompt = true;
  var specialCharactersPrompt = true;
    
        
    var passwordArray = [];
      if (uppercasePrompt) {
      passwordArray.splice (uppercaseLetters);
    
    } if (lowercasePrompt) {
      passwordArray.splice (lowercaseLetters);
    
    } if (numbersPrompt) {
      passwordArray.splice (numbers);
    
    } if (specialCharactersPrompt) {
      passwordArray.splice (specialCharacters);
    
    } var password = "";
    
      for(i = 0; i <= length; i++) {
      var randomNum = Math.floor(Math.random() * passwordArray.length);
      password += passwordArray[randomNum];
    
    } return password;
  
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
