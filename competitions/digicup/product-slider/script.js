// Elements
const nextBtn = document.querySelector(".js-next-btn");
const productCard = document.querySelector(".js-product-card");
const previousBtn = document.querySelector(".js-previous-btn");
const productCardLink = document.querySelector(".js-product-link");
const productCardImage = document.querySelector(".js-product-card-image");
const productCardTitle = document.querySelector(".js-product-card-title");
const productCardPrice = document.querySelector(".js-product-card-price");
const productCardDiscountOldPrice = document.querySelector(
  ".js-product-card-discount-old-price"
);
const productCardDiscountContainer = document.querySelector(
  ".js-product-card-discount-container"
);
const productCardDiscountPercentage = document.querySelector(
  ".js-product-card-discount-percentage"
);

const PRODUCTS = window.productsListData || [];

let timeout;

function showProduct(product) {
  if (!product) return;
  console.log("showProduct", product);

  productCardTitle.innerHTML = product.title;
  productCardLink.setAttribute("href", product.url);
  productCardImage.setAttribute("src", product.image);
  productCard.setAttribute("data-product-id", product.id);
  productCardPrice.innerHTML = window.formatPrice(product.price.selling_price);
  if (product.price.discount_percent > 0) {
    productCardDiscountContainer.classList.remove("hidden");
    productCardDiscountOldPrice.innerHTML = window.formatPrice(
      product.price.main_price
    );
    productCardDiscountPercentage.innerHTML = `${window.formatPrice(
      product.price.discount_percent
    )}٪`;
  } else {
    productCardDiscountContainer.classList.add("hidden");
  }
  init();
}

function init() {
  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(() => {
    let randomIndex = Math.floor(Math.random() * PRODUCTS.length);
    showProduct(PRODUCTS[randomIndex]);
  }, 4000);
}

let currentIndex = PRODUCTS.length - 1;

function nextProduct() {
  currentIndex = (currentIndex + 1) % PRODUCTS.length;
  showProduct(PRODUCTS[currentIndex]);
}

function previousProduct() {
  currentIndex = (currentIndex - 1 + PRODUCTS.length) % PRODUCTS.length;
  showProduct(PRODUCTS[currentIndex]);
}

// Start
showProduct(PRODUCTS[currentIndex]);
// Navigation
nextBtn.addEventListener("click", () => nextProduct());
previousBtn.addEventListener("click", () => previousProduct());

function syncHelloWorld() {
  return "Hello World";
}

function asyncHelloWorld() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 1000);
  });
}

console.log(await asyncHelloWorld());
console.log(syncHelloWorld());
