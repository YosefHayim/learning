import { chooseQuantityFoodButton } from './chooseQuantityFoodButton.js';

// Increase or decrease quantity
const addToCartBtns = document.querySelectorAll('.add-to-cart-button');
addToCartBtns.forEach((button) => chooseQuantityFoodButton(button));


const increaseBtns = document.querySelectorAll('.increase-button');
increaseBtns.forEach((Btn) => {
  Btn.addEventListener('click', (ev) => {
    ev.preventDefault();
    

    const containerDiv = Btn.closest('.cart-img-n-button-container');
    const quantityValue = containerDiv.querySelector('.add-to-cart-button');
    
    console.log(quantityValue.textContent); 
  });
});
