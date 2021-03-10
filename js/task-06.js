
const inputEl = document.querySelector('input#validation-input');
const numb = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', checkedInput);

function checkedInput(event) {
    
    function updateClass(addClass, remClass) {
        inputEl.classList.add = addClass;
        inputEl.classList.remove = remClass;
    }

    if (event.currentTarget.value.length === numb) {
        return updateClass(valid, invalid);
        // event.target.classList.remove('invalid');
        // event.target.classList.add('valid');

    // return true;
    } 
    return updateClass(('invalid'), ('valid'));
        // event.target.classList.remove('valid');
        // event.target.classList.add('invalid');

    // return false;
};



console.log(checkedInput);

