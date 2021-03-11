
const inputEl = document.querySelector('input#validation-input');
const numb = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', checkedInput);

function checkedInput(event) {

    if (event.currentTarget.value.length === numb) {
        updateClass('valid', 'invalid');
        } else {
        updateClass('invalid', 'valid');
    }


    // if (event.currentTarget.value.length === numb) {
       
    //     event.target.classList.remove('invalid');
    //     event.target.classList.add('valid');

    // return true;
    // } 

    //     event.target.classList.remove('valid');
    //     event.target.classList.add('invalid');

    // return false;

};

function updateClass(addClass, remClass) {
    inputEl.classList.add = addClass;
    inputEl.classList.remove = remClass;
    }


console.log(checkedInput);

