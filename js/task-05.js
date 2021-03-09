const input = document.querySelector('input#name-input');
const span = document.querySelector('span#name-output');

console.log(input);

input.addEventListener('input', onInputChange);


function onInputChange(event) {
    console.log('event.currentTarget.value');
    if (event.currentTarget.value.length >= 1) {
        return span.textContent = event.currentTarget.value;
    } return span.textContent = 'незнакомец';
    
    
}
