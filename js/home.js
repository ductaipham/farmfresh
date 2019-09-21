'use strict';

// Silder image
let indexImage = 0;

const carousel = () => {
    const imagesElement = document.querySelectorAll('.bannerImage');
    for (let i = 0; i < imagesElement.length; i++) {
        imagesElement[i].style.display = 'none';
    }
    indexImage++;
    if (indexImage > imagesElement.length) {
        indexImage = 1;
    }
    imagesElement[indexImage - 1].style.display = 'block';
    // Change image every 3.5 seconds
    setTimeout(carousel, 3500);
};
carousel();

// Category click
const categoriesListElement = document.querySelectorAll('#categoriesList>li');
console.log(categoriesListElement);

if (categoriesListElement) {
    for (const categories of categoriesListElement) {
        categories.addEventListener('click', e => {
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

// See more btn
const seeMoreBtnElement = document.getElementById('seeMoreBtn');
const productListElement = document.getElementById('productList');
const seeMoreElement = document.querySelector('.see__more__btn');
const hideMoreElement = document.querySelector('.hide__more__btn');
const hideMoreBtnElement = document.getElementById('hideMoreBtn');
if (seeMoreBtnElement && productListElement && seeMoreElement) {
    seeMoreBtnElement.addEventListener('click', e => {
        productListElement.classList.remove('product__list__none');
        seeMoreElement.classList.toggle('see__more__btn__none');
        hideMoreElement.classList.remove('hide__more__btn__none');
    });

    hideMoreBtnElement.addEventListener('click', e => {
        productListElement.classList.toggle('product__list__none');
        seeMoreElement.classList.remove('see__more__btn__none');
        hideMoreElement.classList.toggle('hide__more__btn__none');
    });
}