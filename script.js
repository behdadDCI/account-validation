const form = document.querySelector('#form');
const userName = document.querySelector('#userName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordRepeat = document.querySelector('#password-repeat');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkInput();
});

const checkInput = () => {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordRepeatValue = passwordRepeat.value.trim();

    if (userNameValue === '') {
        setError(userName, 'Insert your username');
    } else {
        setSuccess(userName);
    }

    if (emailValue === '') {
        setError(email, 'Insert your email');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Insert your password');
    } else {
        setSuccess(password);
    }

    if (passwordRepeatValue === '') {
        setError(passwordRepeat, 'Repeat your password');
    } else if (passwordValue !== passwordRepeatValue) {
        setError(passwordRepeat, 'Passwords do not match');
    } else {
        setSuccess(passwordRepeat);
    }
};

const setError = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    formControl.className = 'form-control error';
    small.innerText = message;
};

const setSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};
