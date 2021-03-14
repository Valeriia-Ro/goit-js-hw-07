
const inputEl = document.querySelector('input#validation-input');
const numb = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', checkedInput);


function checkedInput(event) {
if (event.currentTarget.value.length === numb) {
updateClass("valid", "invalid");
} else {
updateClass("invalid", "valid");
}
}

function updateClass(addClass, remClass) {
inputEl.classList.remove(remClass);
inputEl.classList.add(addClass);
}


inputEl.addEventListener('focus', () => {
    inputEl.classList.remove('valid', 'invalid');
});




