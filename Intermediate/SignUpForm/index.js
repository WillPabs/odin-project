const doesPasswordMatch = () => {
    const pass = document.querySelector('#password input');
    const confirmPass = document.querySelector('#confirmPassword input');
    
    let result = true;
    if (pass.value !== confirmPass.value) {
        result = false;
    }
    return result;
};


const createAccButton = document.querySelector('#createAccount');
createAccButton.addEventListener('click', () => {
    if(!doesPasswordMatch()) {
        let row2 = document.querySelector('#row2Content');
        let errorMsg = document.createElement('p');
        errorMsg.textContent = '* Passwords do not match'
        errorMsg.style.color = 'red';
        errorMsg.style.fontSize = '12px';
        errorMsg.style.margin = '0';
        row2.appendChild(errorMsg);
    }
}) 