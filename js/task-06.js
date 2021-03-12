
const inputEl = document.querySelector('input#validation-input');
const numb = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', checkedInput);

function checkedInput(event) {


    if (event.currentTarget.value.length === numb) {
       
        // event.target.classList.remove('invalid');
        // event.target.classList.add('valid');
        updateClass('valid', 'invalid');
    // return true;
    } 
        updateClass('invalid', 'valid');
        // event.target.classList.remove('valid');
        // event.target.classList.add('invalid');

    // return false;

};


inputEl.addEventListener('focus', () => {
    inputEl.classList.remove('valid', 'invalid');
});

function updateClass(addClass, remClass) {
    inputEl.classList.remove(remClass);
    inputEl.classList.add(addClass);
    
}


console.log(checkedInput);

