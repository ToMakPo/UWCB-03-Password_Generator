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

// Generate a new password
function generatePassword() {
  // All of the charactor options.
  const pwc_lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const pwc_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const pwc_numeric = '0123456789'
  const pwc_special = '~!@#$%^&*()-_=+[]{}|;:,.<>?'

  // Get the length of the password. 
  var error_msg = ""
  var msg = "How long should the password be?"
  while (true) {
    var pw_length_responce = prompt((error_msg ? error_msg + "\n" : "") + msg)
    var pw_length = parseInt(pw_length_responce)

    // Make sure the value given is a number and is 
    // between or equal to 8 and 128.
    if (pw_length == NaN) {
      error_msg = "That wasn't a number, dumb ass. So I'll ask you again."
    } else if (pw_length_responce == "") {
      error_msg = "Um? Did you forget to type something in? I'm not seeing any answer."
    } else if (pw_length < 0) {
      error_msg = "You arn't very smart, are you? That would be a negative number. Stop fucking aroung."
    } else if (pw_length < 8) {
      error_msg = "Oh. I guess you want want to making it easy for the bad guy. Your password needs to be at least 8 charaters long."
    } else if (pw_length > 128) {
      error_msg = "Fuck man! There is no way you are going to remember that. Let's try to keep is no more than 128 characters."
    } else {
      // console.info(`User selected to have a password that is ${pw_length} characters long.`)
      break
    }
  }

  // Get the charactor types for the password.
  error_msg = ""
  msg = "What types of charaters would you like to include in your password?\n" +
      "Add any or all of the following options:\n" +
      "L = lowercase\n" +
      "U = uppercase\n" +
      "N = numeric\n" +
      "S = special characters\n"
  while (true) {
    var pw_charaters = prompt((error_msg ? error_msg + "\n" : "") + msg)

    var list = []
    var pw_lowercase = false
    var pw_uppercase = false
    var pw_numeric = false
    var pw_special = false
    var pw_options = ""
    
    // Confirm the user passed in correct options.
    for (const char of pw_charaters) {
      switch (char.toUpperCase()) {
        case 'L': if (!pw_lowercase) {
          pw_lowercase = true
          pw_options += pwc_lowercase
          list.push('lowercase')
        }; break
        case 'U': if (!pw_uppercase) {
          pw_lowercase = true
          pw_options += pwc_uppercase
          list.push('uppercase')
        }; break
        case 'N': if (!pw_numeric) {
          pw_lowercase = true
          pw_options += pwc_numeric
          list.push('numeric')
        }; break
        case 'S': if (!pw_special) {
          pw_lowercase = true
          pw_options += pwc_special
          list.push('special')
        }; break
      }
    }

    if (pw_options != "") {
      let print = ""
      switch (list.length) {
        case 1: print = list[0]; break
        case 2: print = `${list[0]} and ${list[1]}`; break
        case 3: print = `${list[0]}, ${list[1]}, and ${list[2]}`; break
        case 4: print = `${list[0]}, ${list[1]}, ${list[2]}, and ${list[3]}`; break
      }

      // console.info(`The user decided to make the password contain ${print} characters.`)
      break
    } else if (pw_charaters == "") {
      error_msg = "Dude! You didn't even type anything. Do you know how to follow simple instructions?"
    } else {
      error_msg = "What is wrong with you? That wasn't one of the options."
    }
  }

  // Using the information passed in, create the actual password.
  var output = ""
  let len = pw_options.length
  for (let i = 0; i < pw_length; i++) {
    let r = Math.floor(Math.random() * len)
    let c = pw_options[r]
    output += c
  }
  

  return output
}