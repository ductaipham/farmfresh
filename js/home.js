'use strict';

const categoriesListElement = document.querySelectorAll('.categories__list>li');

console.log(categoriesListElement);

if (categoriesListElement) {
    for (const categories of categoriesListElement) {
        if (categories) {
            categories.addEventListener('click', (e) => {
                e.preventDefault();
                const categoriesItem = e.target;
                categoriesItem.classList.add('active');
            })
            console.log(categories);
        }
    }
}