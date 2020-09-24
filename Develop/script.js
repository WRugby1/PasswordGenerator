// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var outputPassword = ''
function writePassword() {
  console.log("thisisrunning")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = outputPassword;
}
// Generate the password based off of the user inputs\
// Set the variables and user parameters
function generatePassword() {
  var passwordLength = NaN
  var pwLenPass = false
  var passwordLength = prompt("How many characters between 8 and 128?")
  var upperCaseEnable = prompt("Do you want uppercase characters (y/n)?").toUpperCase() == 'Y';
  var lowerCaseEnable = prompt("Do you want lowercase characters (y/n)?").toUpperCase() == 'Y';
  var symbolsEnable = prompt("Do you want symbols (y/n)?").toUpperCase() == 'Y';
  var numbersEnable = prompt("Do you want numbers (y/n)?").toUpperCase() == 'Y';
  var charCodes = []
// make sure the parameters will be able to produce a functioning password
  if (isNaN(passwordLength) === true) {
    alert("Must be a number");
    return;
  }
  else if (passwordLength === null) {
    return;
  }
  else if (passwordLength < 8) {
    alert("Length must be at least 8 characters");
  }
  else if (passwordLength > 128) {
    alert("Length must be no more than 128 characters");
  }

  if (!(upperCaseEnable || lowerCaseEnable || symbolsEnable || numbersEnable)) {
        alert("You have to pick at least one option\n");
    return
  }
  
  //build array of char codes to choose from
  if (upperCaseEnable) {
    for (var i=0; i<=26; i++) {
        charCodes.push(String.fromCharCode(i+65))
    }
  }
  if (lowerCaseEnable) {
    for (var i=0; i<=26; i++) {
        charCodes.push(String.fromCharCode(i+97))
    }
  }
  if (symbolsEnable) {
    const symbol = '!@#$%^&*(){}[]=<>/,.'
    charCodes = [...charCodes, ...symbol]
  }
  if (numbersEnable) {
    for (var i=0; i<=10; i++) {
        charCodes.push(String.fromCharCode(i+48))
    }
  }

  //build password

  for (var i=0; i<passwordLength; i++) {
    outputPassword += randomElement(charCodes)
  }

  // return outputPassword
  //DONE!

  //this function returns a random element from the provided array
  function randomElement(array) {
      var randomize = Math.floor(Math.random() * array.length);
      var rand = array[randomize];
      return rand
  }
}
document.getElementById("generate").addEventListener("click", function() { writePassword() });
