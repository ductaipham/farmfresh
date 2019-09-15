'use strict';

const categoriesListElement = document.querySelectorAll('#categoriesList>li');
console.log(categoriesListElement);

if (categoriesListElement) {
    for (const categories of categoriesListElement) {
        categories.addEventListener('click', (e) => {
            e.preventDefault();
            for (let i = 0; i < categoriesListElement.length; i++) {
                if (categoriesListElement[i].classList.contains('active')) {
                    categoriesListElement[i].classList.remove('active');

                }
            }
            categories.classList.add('active');
        });
    }
}