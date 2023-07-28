let generateBtn = document.querySelector("#generate");

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '?'];

let builtArray = [];

generateBtn.addEventListener("click", writePassword);


function generatePassword(){

  if(confirm("Do you want your password to contain uppercase letters?"))
  {
    builtArray = [...builtArray, ...upperAlphabet]
  }
  if(confirm("Do you want your password to contain lowercase letters?"))
  {
    builtArray = [...builtArray, ...lowerAlphabet]
  }
  if(confirm("Do you want your password to contain numbers?"))
  {
    builtArray = [...builtArray, ...numbers]
  }
  if(confirm("Do you want your password to contain special characters?"))
  {
    builtArray = [...builtArray, ...specialCharacters]
  }
  
  let password = "";

  let passwordlength = prompt("How long do you want the password to be?")
  for (let i = 0; i < passwordlength; i++) {

    let generatedLetterIndex = Math.floor(Math.random()*builtArray.length);

    password += builtArray[generatedLetterIndex]

    // password += "x";

  }
  
return password
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
