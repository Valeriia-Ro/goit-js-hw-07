const numberOfCategories = document.querySelectorAll('.item');
console.log(`В списке ${numberOfCategories.length} категории.`);
console.log(numberOfCategories);

const namesOfCategories = numberOfCategories.forEach(el => console.log('Категория:',el.querySelector('h2').textContent));

const elementsOfCategories = numberOfCategories.forEach(el => console.log('Количество элементов:',el.querySelectorAll('li').length));



