// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  //YOUR CODE GOES HERE
}

//Pseudocode
//prompt = length 
  // let pwdLength = prompt("how many character")
  // console.log
//confirm - lowercase, uppercase,numeric, special characters
  //let numbers = confirm (Do you want numbers?)
    //console.log(numbers):
//create var to hold answer to prompt/confirm
//function to validate user answers
//if and equalaity operators (check)   
  //if(numbers){

  //}
  //what happens if not?
  // array
  // method to combine all arrays in one array
    //(resources, random selection from array)
    //creat a string set equal to password var
    //array method to check if something is in array
  //generate random password
//return password


return password;