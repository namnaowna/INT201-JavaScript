//65130500028 Thamonwan Simcharoen
function isPasswordValid(password) {
  if (password === null || password === undefined || password === "") {
    return false
  }

  if (password.length < 8) {
    return false
  }

  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false
  }

  // Check for at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false
  }

  // Check for at least one digit
  if (!/\d/.test(password)) {
    return false
  }

  // Check for at least one special character
  if (!/[!@#$%^&*]/.test(password)) {
    return false
  }

  // If all checks pass, the password is valid
  return true
}

// console.log(isPasswordValid('123567896'))
module.exports = isPasswordValid

// (           # Start of group
//   (?=.*\d)      #   must contains one digit from 0-9
//   (?=.*[a-z])       #   must contains one lowercase characters
//   (?=.*[\W])        #   must contains at least one special character
//               .     #     match anything with previous condition checking
//                 {8,20}  #        length at least 8 characters and maximum of 20
// )           # End of group

// sample friend
// if(password === undefined || password === null || password === "" || password.length < 8){
//   return false
// }
// if(password.match(/[a-z]/g)?.length >= 1 && password.match(/[A-Z]/g)?.length >= 1 && password.match(/[@#$%^&*!]/g)?.length >= 1 && password.match(/[0-9]/g)?.length >= 1){
//   return true
// }
// return false
