const input = document.querySelector('input#name-input');
const span = document.querySelector('span#name-output');

console.log(input);

input.addEventListener('input', onInputChange);


function onInputChange(event) {
    console.log('event.currentTarget.value');
    span.textContent = event.currentTarget.value;
}
