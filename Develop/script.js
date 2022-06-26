// Assignment Code

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var specialChar = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '/', ':', ';', "'", '"', '<', '>', ',', '.', '?']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

// Write password to the #password input
function writePassword() {
 let pwdLength = prompt("Type desired password length between 8-128 characters");
  if (pwdLength >= 8 && pwdLength <= 128){
    console.log(pwdLength);
  } else {
    alert("Please select a number between 8 and 128");
  }
  return
 
}
 // let pwdLength =
//   var pwdLength =  prompt("Type desired password length between 8-128 characters");
//   if (pwdLength >= 8 && pwdLength <= 128) {
//     console.log(pwdLength);  
//   } else {
//     return;
// }
}
function smallLetter() {
  let lowerCase = confirm("Include lower case letters?");
  if lowerCase == true) {
    var array =//add lower case letters to custom array
    bigLetter();
  } else {
    bigletter();
  }
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
