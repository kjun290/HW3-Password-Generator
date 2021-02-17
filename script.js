// Assignment Code
var generateBtn = document.querySelector("#generate");




function generatePassword(
  passwordLength, 
  includeSpecial,
  includeLowercase,
  includeUppercase,
  includeNumber,
  ) {  
  
    let CharacterOptions = [];

    let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
    let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  
    if (includeSpecial) {
      CharacterOptions = CharacterOptions.concat(special)
    }

    if (includeLowercase) {
      CharacterOptions = CharacterOptions.concat(lowercase)
    }
  
    if (includeUppercase) {
      CharacterOptions = CharacterOptions.concat(uppercase)
    }
    
    if (includeNumber) {
      CharacterOptions = CharacterOptions.concat(number)
    }

  let result = ""
 
  console.log (CharacterOptions)
  
  for (i=0; i<passwordLength; i++) {
    let randomIndex = Math.floor(Math.random()*CharacterOptions.length)
    result += CharacterOptions[randomIndex]
    result += ""
  }


  return result
}

// Write password to the #password input


function writePassword() {
    let wasAnythingSelected = false;
    let passwordLength = window.prompt("Enter Length:");
    let includeSpecial = confirm("Include Special Character?");
    let includeLowercase = confirm("Include lowercase letters?");
    let includeUppercase = confirm("Include UPPERCASE LETTERS?");
    let includeNumber = confirm("Include Number?");




  var password = generatePassword(
    passwordLength,
    includeSpecial,
    includeUppercase,
    includeLowercase,
    includeNumber,
    );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
