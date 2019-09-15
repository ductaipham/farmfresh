'use strict';

window.onscroll = function () {
    scrollToTop();
};

// hàm scroll
function scrollToTop() {
    if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
        document.getElementById('scrollToTopBtn').style.opacity = '1';
    } else {
        document.getElementById('scrollToTopBtn').style.opacity = '0';
    }
}

document.getElementById('scrollToTopBtn').addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});