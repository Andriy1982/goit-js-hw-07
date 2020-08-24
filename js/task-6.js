const inputRef =document.querySelector('#validation-input');


inputRef.addEventListener('focus', () => {
    inputRef.classList.remove('invalid', 'valid');
})
inputRef.addEventListener('blur', (event) => {
    let a = event.target.value.length;
    let b = +inputRef.getAttribute('data-length');
    if (a === b) {
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.add('invalid'); 
    }
})