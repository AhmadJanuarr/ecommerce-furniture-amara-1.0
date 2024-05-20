// Data produk

const PRODUCTS = [
  {
    imgSrc: "assets/img/f1.jpg",
    title: "comfortable chair",
    price: "$80.99",
  },
  {
    imgSrc: "assets/img/f2.jpg",
    title: "stylish sofa",
    price: "$120.99",
  },
  {
    imgSrc: "assets/img/f3.jpg",
    title: "stylish sofa",
    price: "$120.99",
  },
  {
    imgSrc: "assets/img/f4.jpg",
    title: "stylish sofa",
    price: "$120.99",
  },
  {
    imgSrc: "assets/img/f5.jpg",
    title: "stylish sofa",
    price: "$120.99",
  },
  {
    imgSrc: "assets/img/f6.jpg",
    title: "stylish sofa",
    price: "$120.99",
  },
  {
    imgSrc: "assets/img/f7.jpg",
    title: "stylish sofa",
    price: "$120.99",
  },
  {
    imgSrc: "assets/img/f8.jpg",
    title: "stylish sofa",
    price: "$120.99",
  },
  {
    imgSrc: "assets/img/f9.jpg",
    title: "stylish sofa",
    price: "$120.99",
  },
  {
    imgSrc: "assets/img/f10.jpg",
    title: "stylish sofa",
    price: "$120.99",
  },
  {
    imgSrc: "assets/img/f11.jpg",
    title: "stylish sofa",
    price: "$120.99",
  },
  {
    imgSrc: "assets/img/f12.jpg",
    title: "stylish sofa",
    price: "$120.99",
  },
];

let mainListDiv = document.getElementById("mainListDiv");
let mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
  "use strict";

  mainListDiv.classList.toggle("show_list");
  mediaButton.classList.toggle("active");
};
function generateCards() {
  const card = document.getElementById("cardContainer");
  const allProduct = document.getElementById("allProduct");

  // Mengacak array PRODUCTS untuk cardContainer
  const shuffledProductsForCard = [...PRODUCTS].sort(() => 0.5 - Math.random());
  // Mengacak array PRODUCTS untuk allProduct
  const shuffledProductsForAllProduct = [...PRODUCTS].sort(
    () => 0.5 - Math.random()
  );

  // Menambahkan produk ke cardContainer
  shuffledProductsForCard.slice(0, 3).forEach((product) => {
    const productHTML = `
    <div class="card">
      <img src="${product.imgSrc}" alt="" loading="lazy" />
      <div class="card-color">
        <div class="circle-wrapper">
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
        </div>
        <div class="icon">
          <i class="bx bx-cart bx-sm bx-tada-hover"></i>
        </div>
      </div>
      <div class="card-title">${product.title}</div>
      <div class="card-price">${product.price}</div>
    </div>
    `;
    card.innerHTML += productHTML;
  });

  // Menambahkan produk ke allProduct
  shuffledProductsForAllProduct.slice(0, 9).forEach((product) => {
    const productHTML = `
    <div class="products-card">
      <img src="${product.imgSrc}" alt="" loading="lazy"/>
      <div class="card-color">
        <div class="circle-wrapper">
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
        </div>
        <div class="icon">
          <i class="bx bx-cart bx-sm bx-tada-hover"></i>
        </div>
      </div>
      <div class="card-title">${product.title}</div>
      <div class="card-price">${product.price}</div>
    </div>
    `;
    allProduct.innerHTML += productHTML;
  });
}
document.addEventListener("DOMContentLoaded", generateCards);
