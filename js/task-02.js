const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const ingredientsElList = ingredients.map( el => {
    const elName = document.createElement('li');

    elName.textContent = `${el}`;

    return elName;

});

const ingredientsEl = document.querySelector('#ingredients');

ingredientsEl.append(...ingredientsElList);