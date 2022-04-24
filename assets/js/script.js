// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//password is generated with all the true variablesS
function generatePassword(finalString,passwordLength){
  var password="";
  for(let i=0; i<passwordLength; i++){
    password+=finalString.charAt(Math.floor(Math.random() * finalString.length));
  }
return password;
}

// Write password to the #password input
function writePassword() {
  var numeric ="0123456789"
  var lowers= "abcdefghijklmnopqrstuvwxyz";
  var uppers= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var finalString="";
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  //if invalid input is entered
  if (passwordLength === "" || passwordLength===null){
    window.alert("You must provide a value.");
    return writePassword();
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters long.");
    return writePassword();
  } else if(isNaN(passwordLength)) {
    window.alert("Must be a number!");
    return writePassword();
  } else {
    //if all perameters are met
  var specialChars = window.confirm("Click OK to confirm if you want special characters");
  var numericChars = window.confirm("Click OK to confirm if you want numeric characters");
  var lowercaseChars = window.confirm("Click OK to confirm if you want lowercase characters");
  var uppercaseChars = window.confirm("Click OK to confirm if you want uppercase characters");
  
  //if none are selected
  if (!specialChars && !numericChars && !lowercaseChars && !uppercaseChars) {
    finalString = window.alert("You must choose at least one option.");
    return writePassword();
  }
  
  //adds the ones that are true to the final string
  if(specialChars) {
    finalString+=special
  }
  if(numericChars) {
    finalString+=numeric
  }
  if(lowercaseChars) {
    finalString+=lowers
  }
  if(uppercaseChars) {
    finalString+=uppers
  }

  var password = generatePassword(finalString,passwordLength);
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);