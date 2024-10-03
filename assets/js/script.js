'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);

function addToWishlist(button) {
    const productId = button.getAttribute('data-product-id');
    const productName = button.getAttribute('data-product-name');
    const productPrice = button.getAttribute('data-product-price');
    const productImage = button.getAttribute('data-product-image');

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (!wishlist.some(item => item.id === productId)) {
        wishlist.push({ id: productId, name: productName, price: productPrice, image: productImage });
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        console.log('Item added to wishlist:', { id: productId, name: productName, image: productImage });
        alert('Item added to wishlist!');
    } else {
        console.log('Item already in wishlist:', { id: productId, name: productName });
        alert('Item is already in your wishlist!');
    }

    updateWishlistCount();
}

function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistCount = document.querySelector('.wishlist-count');
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

// Call this function when the page loads to update the initial count
document.addEventListener('DOMContentLoaded', updateWishlistCount);