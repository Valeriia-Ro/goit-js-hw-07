
const inputEl = document.querySelector('input');
const numb = Number(inputEl.getAttribute('data-length'));
// console.log(numb);
// console.log(inputEl);

inputEl.addEventListener('focus', () => {
    inputEl.addEventListener('blur', checkedInput);

});


function checkedInput(event) {
    
    // console.log(event.currentTarget.value.length);

    if (event.currentTarget.value.length === numb) {
        event.target.classList.remove('invalid');
        event.target.classList.add('valid');

        // inputEl.style.borderColor = ' #4caf50'; 
        // console.log('boo');
    return true;
    } 
        event.target.classList.remove('valid');
        event.target.classList.add('invalid');

        // inputEl.style.borderColor ='#f44336';
        // console.log('ko');
    return false;
};

    
