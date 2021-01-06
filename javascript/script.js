const form = document.getElementById('form');
const Username = document.getElementById('username');
const Email = document.getElementById('email');
const Password = document.getElementById('password');
const Password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
})
/*------------------checkInputs()----------------------*/
function checkInputs() {
    //trim to remove whitespaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    //Username
    if (usernameValue === "") {
        showError(username, "Username cannot be blank");
    }
    else {
        showSuccess(username);
    }

    //Email
    if (emailValue === "") {
        showError(email, "Email cannot be blank");
    }
    else if (!isValidEmail(emailValue)) {
        showError(email, "Not a valid email");

    }
    else {
        showSuccess(email);
    }

    //Password
    if (passwordValue === "") {
        showError(password, "Password cannot be blank");
    }
    else {
        showSuccess(password);
    }
    //password2
    if (password2Value === '') {
        showError(password2, 'Retype password cannot be blank');
    } else if (passwordValue !== password2Value) {
        showError(password2, 'password does not match');
    } else {
        showSuccess(password2);
    }
}


/*------------------showError()----------------------*/
function showError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

/*------------------showError()----------------------*/
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

/*--------------------isValidEmail()---------------*/
function isValidEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}