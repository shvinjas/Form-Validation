const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    checkInput();
});

function checkInput() {
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const cpasswordvalue = cpassword.value.trim();

    if (usernamevalue === "") {
        setError(username, "Username cannot be Blank");
    } else if (!/^[a-zA-Z0-9@]+$/.test(usernamevalue)) {
        setError(username, "Username has an invalid symbol");
    } else {
        setSuccess(username);
    }



const emailDomainsToExclude = /(gmail|yahoo|hotmail)\.com$/i;


    if (emailvalue === "") {
        setError(email, "Email cannot be Blank");
    } else if (!isEmail(emailvalue)) {
        setError(email, "Not a valid Email");
    }
    else if (emailDomainsToExclude.test(emailvalue)) {
        setError(email, "Provide your organization E-mail");
    } 
    else {
        setSuccess(email);
    }

    function isEmail(email) {
        return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|in|jobs|museum)\b/.test(email);
    }

    if (passwordvalue === "") {
        setError(password, "password cannot be Blank");
    } else {
        setSuccess(password);
    }

    if (cpasswordvalue === "") {
        setError(cpassword, "password cannot be Blank");
    } else if (cpasswordvalue !== passwordvalue) {
        setError(cpassword, "password doesnot Match");
    } else {
        setSuccess(cpassword);
    }

    function setError(input, message) {
        const formcontrol = input.parentElement;
        const small = formcontrol.querySelector("small");
        formcontrol.className = "form-control error";
        small.innerText = message;
    }

    function setSuccess(input, message) {
        const formcontrol = input.parentElement;
        const small = formcontrol.querySelector("small");
        formcontrol.className = "form-control success";
        small.innerText = message;
    }


}
