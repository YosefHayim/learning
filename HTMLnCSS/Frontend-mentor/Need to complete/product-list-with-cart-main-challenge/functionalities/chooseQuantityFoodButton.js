// chooseQuantityFoodButton.js

const chooseQuantityFoodButton = (button)  => {
  let count = 1;
  let add = 1;

  const svgIconIncrease = document.createElement('img');
  svgIconIncrease.src = `./assets/images/icon-increment-quantity.svg`;
  svgIconIncrease.classList.add('increase-button')
  svgIconIncrease.style.border = '0.5px solid white';
  svgIconIncrease.style.borderRadius = '50%';
  svgIconIncrease.style.padding = '3px';
  svgIconIncrease.style.flex = '0';

  button.addEventListener("click", () => {
    const foodDiv = button.closest('.food-container');
    if (foodDiv) {
      const foodImg = foodDiv.querySelector('.food-img');
      if (foodImg) {
        foodImg.style.border = '2px solid hsl(14, 86%, 42%)';
      }
    }

    const container = button.closest('.cart-img-n-button-container');
    if (container) {
      container.style.background = 'hsl(14, 86%, 42%)';
      container.style.display = 'flex';
      container.style.alignItems = 'center';
      container.style.justifyContent = 'space-between';

      const buttonText = button.closest('.add-to-cart-button');
      if (buttonText) {
        console.log(buttonText);
        buttonText.textContent = `${count}`;
        buttonText.style.color = 'white';
        buttonText.style.fontWeight = '100';
        buttonText.style.flex = '1';
        buttonText.style.textAlign = 'center';
      }

      const svgIconDecrease = container.querySelector('.add-to-cart-svg-icon');
      if (svgIconDecrease) {
        svgIconDecrease.src = `./assets/images/icon-decrement-quantity.svg`;
        svgIconDecrease.classList.add('decrease-button')

        svgIconDecrease.addEventListener('click', () => {
          if (count > 0) {
            buttonText.textContent = `${count -= add}`;
          } else {
            alert("You can't have negative quantity.");
          }
        });

        svgIconDecrease.style.height = '10px';
        svgIconDecrease.style.width = '10px';
        svgIconDecrease.style.border = '0.5px solid white';
        svgIconDecrease.style.borderRadius = '50%';
        svgIconDecrease.style.padding = '3px';
        svgIconDecrease.style.flex = '0';
      }

      if (!container.contains(svgIconIncrease)) {
        container.appendChild(svgIconIncrease);
      }

      svgIconIncrease.addEventListener('click', () => {
        buttonText.textContent = `${count += add}`;
      });
    }
  });
}

export {chooseQuantityFoodButton}
