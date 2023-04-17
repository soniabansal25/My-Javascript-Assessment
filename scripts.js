const uname = document.getElementById("name");
const pwd = document.getElementById("pwd");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pwd2 = document.getElementById("pwd2");
const form = document.getElementById("form");
const error = document.getElementById("error");

// For Validations
form.addEventListener('submit', (e) => {
    let messages = []
    // For Password
    if(pwd.value.length < 8) {
        messages.push("Password must be longer than 8 characters!")
    }
    if(pwd.value.length > 16) {
        messages.push("Password cannot be longer than 16 characters!")
    }
    if(pwd.value === "password" || pwd.value === "Password") {
        messages.push("Your Password cannot be 'password'!")
    }
    // For Username
    if(uname.value.length <= 5) {
        messages.push("Username cannot be less than 5 characters!")
    }
    if(uname.value.length >= 21) {
        messages.push("Username cannot be longer than 20 characters!")
    }

    // For Password Confirmation
    if(pwd.value != pwd2.value) {
        messages.push("Passwords do not match!")
    }

    // For Email
    function ValidateEmail(email) 
    {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
    return (true);
    }
    messages.push("You have entered an invalid email address!")
    return (false);
    }
ValidateEmail(email);

    // For Phone Number 

    function ValidatePhone(phone)
    {
      var phoneRegEx = /^\d{10}$/;
      if(phone.value.match(phoneRegEx))
      {
          return true;
      }
      else
      {
         messages.push("Please enter a valid phone number!");
         return false;
      }
      }    
      ValidatePhone(phone);
            
    //To check if there is an error

    if (messages.length > 0) {
    e.preventDefault()
    error.innerText = messages.join(' , ');
    }
})