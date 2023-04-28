// Assignment code here
String s1;
  s1 = JOptionPane.showInputDialog("Password must contain at least 8 characters but no more than 128 characters:");
String s2;
  s2 = JOptionPane.showInputDialog("You must include at least one capitalized letter, one number, and one special character i.e. ! @ # $ %:");



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

object.onclick = function(){myScript};

