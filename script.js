// selectors
const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const phone = document.querySelector("#phone")
const email = document.querySelector("#email")
const pass = document.querySelector("#password")
const passConf = document.querySelector("#conf-password")

//error msg
const firstNameError =document.querySelector("#first-name-error")
const lastNameError =document.querySelector("#last-name-error")
const phoneError =document.querySelector("#phone-error")
const emailError =document.querySelector("#email-error")
const passError =document.querySelector("#password-error")
const passConfError =document.querySelector("#conf-password-error")


firstName.addEventListener("input",()=>{
    if(firstName.value ==="")
        firstNameError.textContent = "Please type in your first name.";
    else
        firstNameError.textContent = "";
});

lastName.addEventListener("input",()=>{
    if(lastName.value ==="")
        lastNameError.textContent = "Please type in your last name."
    else
        lastNameError.textContent="";
});

email.addEventListener("input",()=>{
    if(email.validity.typeMismatch)
        emailError.textContent="Please enter valid Email."
    else
        emailError.textContent="";
});

phone.addEventListener("input",()=>{
    if(phone.validity.patternMismatch)
        phoneError.textContent="Please enter 10 digit phone number."
    else
        phoneError.textContent="";
    });
pass.addEventListener("input",()=>{
    if(pass.value.length<=5)
        passError.textContent="Password must be atleast 6 characters."
    else
        passError.textContent="";
});

passConf.addEventListener("input",()=>{
    if(passConf.value != pass.value)
        passConfError.textContent="Passwords do not match."
    else
        passConfError.textContent="";
});

