"use strict";
const productItem = document.querySelectorAll(".product-item");
for (let i = 0; i < productItem.length; i++) {
  productItem[i].addEventListener("click", () => {
    window.location.href = "product-detail.html";
    // console.log("a");
  });
}
