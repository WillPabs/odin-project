const checkError = (element) => {
    let errorElement = document.querySelector(`#${element.id}-error`);
    if (errorElement === null) {
        errorElement = document.createElement('span');
        element.parentNode.appendChild(errorElement);
    }
    errorElement.id = `${element.id}-error`;
    errorElement.classList.add('error-message');

    const checkPasswordsMatch = () => {
        const pass = document.querySelector('#password').value;
        const confirm = document.querySelector('#confirm-password').value;
        if (pass !== confirm) {
            return false;
        };
        return true;
    };

    const showError = () => {
        if(element.validity.valueMissing) {
            errorElement.textContent = `Please enter ${element.type}`;
        } else if (element.validity.typeMismatch) {
            errorElement.textContent = `Entered value must be ${element.type}`;
        } else if (element.validity.tooShort) {
            errorElement.textContent = `Entered value must be at least ${element.minLength} characters`;
        } else if (element.id === 'confirm-password') {
            if (!checkPasswordsMatch()) {
                errorElement.textContent = 'Password does not match!';
            } else {
                errorElement.textContent = '';
            }
        };
    };

    if (element.validity.valid && element.id !== 'confirm-password') {
        errorElement.textContent = '';
    } else {
        showError();
    };

};

const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip-code');
const pass = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-password');

const fields = [email, country, zip, pass, confirmPass];

fields.forEach(field => {
    field.addEventListener('input', () => {
        checkError(field);
    });
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    fields.forEach(field => {
        checkError(field);
    });
});