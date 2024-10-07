import { chooseQuantityFoodButton } from './chooseQuantityFoodButton.js';

const addToCartBtns = document.querySelectorAll('.add-to-cart-button');
addToCartBtns.forEach((button) => chooseQuantityFoodButton(button));
