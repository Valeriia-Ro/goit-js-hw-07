
const inputEl = document.querySelector('input#validation-input');
const numb = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', checkedInput);

function checkedInput(event) {
    
    

    if (event.currentTarget.value.length === numb) {
        event.target.classList.add('valid').remove('invalid');
        // event.target.classList.remove('invalid');
        // event.target.classList.add('valid');

    return true;
    } 
        event.target.classList.add('invalid').remove('valid');
        // event.target.classList.remove('valid');
        // event.target.classList.add('invalid');

    return false;
};


