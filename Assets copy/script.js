// Assignment Code
var generateBtn = document.querySelector("#generate");
var password 
function generatePassword () {
  genPassword()
}
function genPassword() {
//Arrays needed for password generation characters
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var specialChar = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '/', ':', ';', "'", '"', '<', '>', ',', '.', '?']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
//custom array for password generation
var totalCharacters = []

// Variable created to hold user input for the first prompt
//var pwdLength = 8
// allow variable value to be chosen by prompt
let pwdLength = prompt("Enter desired password length between 8-128 characters")

//function to select random numbers out of array
function lottery(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
}
//select the desired amount out of the array//
const arr = totalCharacters




//function to confirm special characters
function confirmChar() {
    let charYN = confirm("Should password contain special characters?")
// if statement to log numYN input
if (charYN === true) {
    //log answer, add spec char to new array, move onto selecting random elements from custom array
    console.log(charYN),
        //add special characters to custom array,
        totalCharacters.push.apply(totalCharacters, specialChar),
        console.log(totalCharacters);
    //select random elements from customn array
} else {
    //if false than console.log and move on to selecting random elements from custom array
    console.log(charYN);
    //select random elements from custom array
}
password = lottery(arr, pwdLength)
console.log(password)

}
//function to confirm numbers
function confirmNum() {
    let numYN = confirm("Should password contain numbers?")

// if statement to log numYN input
if (numYN === true) {
    //log answer, add numbers to new array, move onto special character confirmation
    console.log(numYN),
        //add numbers to custom array,
        totalCharacters.push.apply(totalCharacters, numbers),
        console.log(totalCharacters),
        confirmChar();
} else {
    //if false than console.log and move on to special character confirmation
    console.log(numYN),
        confirmChar();
}
}
//function to confirm upper case letters
function confirmUC() {
    let ucYN = confirm("Should password contain upper case letters?")

// if statement to log ucYN input
if (ucYN === true) {
    //log answer, add upperCase to new array, move onto number confirmation
    console.log(ucYN),
        //add upperCase to custom array,
        totalCharacters.push.apply(totalCharacters, upperCase),
        console.log(totalCharacters),
        confirmNum();
} else {
    //if false than console.log and move on to number confirmation
    console.log(ucYN),
        confirmNum();
}
}
//function to confirm lower case letters
function confirmLC() {
    let lcYN = confirm("Should password contain lower case letters?")

// if statement to log lcYN input
if (lcYN === true) {
    //log answer, add lowerCase to new array, move onto uppercase letter confirmation
    console.log(lcYN),
        //add lowerCase to custom array,
        totalCharacters.push.apply(totalCharacters, lowerCase),
        console.log(totalCharacters),
        confirmUC();
} else {
    //if false than console.log and move on to uppercase confirmation
    console.log(lcYN),
        confirmUC();
}
}

// function to obtain correct amount of characters
// function queryPwdLength() {
if (pwdLength >= 8 && pwdLength <= 128) {
    console.log(pwdLength)
    confirmLC();
} else if (isNaN(pwdLength)) {
    alert("Silly Goose, That's Not a Number")
} else if (pwdLength == null) {
    alert("I can't read your mind...yet.  Please input a number between 8 and 128")
} else if (pwdLength < 8) {
    alert("While it would be easier to memorize that many characters, your password needs to be at least 8 characters long")
} else if (pwdLength > 128) {
    alert("Whoa there! I applaud your ambition, but let's be a little sensible and keep our password length to 128 characters or less")
} else { alert("Huh.  I didn't expect that.  Try again.") }

// }


}
// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
