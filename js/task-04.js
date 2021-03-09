const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueNumber = document.querySelector('#value');

let counterValue = 0;

incrementBtn.addEventListener('click',  () => {
    counterValue ++ ;
    valueNumber.textContent = counterValue;
    console.log('+');
});


decrementBtn.addEventListener('click',  () => {
    counterValue -=1; 
    valueNumber.textContent = counterValue;
    console.log('-');
});

