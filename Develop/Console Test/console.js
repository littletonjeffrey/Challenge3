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

//function to confirm lower case letters
function confirmLC() {
    let lcYN = confirm("Should password contain lower case letters?")}
// if statement to log lcYN input
if (lcYN===true) {
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

//function to confirm upper case letters
function confirmUC() {
    let ucYN = confirm("Should password contain upper case letters?")}
// if statement to log ucYN input
if (ucYN===true) {
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




// function to obtain correct amount of characters
// function queryPwdLength() {
    if (pwdLength >= 8 && pwdLength <= 128) {
        console.log(pwdLength),
        confirmLC();
    } else if (isNaN(pwdLength)){
        console.log("Silly Goose, That's Not a Number")
    } else if (pwdLength == null){
        console.log ("I can't read your mind...yet.  Please input a number between 8 and 128")
    } else if (pwdLength < 8){
        console.log ("While it would be easier to memorize that many characters, your password needs to be at least 8 characters long")
    } else if (pwdLength > 128){
        console.log ("Whoa there! I applaud your ambition, but let's be a little sensible and keep our password length to 128 characters or less")
    } else { (console.log ("Huh.  I didn't expect that.  Try again."))}
    
// }

