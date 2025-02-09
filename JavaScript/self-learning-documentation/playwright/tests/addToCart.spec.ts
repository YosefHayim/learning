import test, { expect } from "@playwright/test";

const url = `https://atid.store/`;

test("Adding item to cart and check quantity", async ({ page }) => {
  // Go to URL
  await page.goto(url);

  // Click on the shoe item
  const shoesItem = page.locator(
    `//*[@id="post-2888"]/div/div/section[3]/div/div/div/div[3]/div/div/div/ul/li[1]/div[1]/a`
  );
  await shoesItem.click();

  // Verify the product page
  await expect(page).toHaveURL("https://atid.store/product/atid-yellow-shoes/");

  // Click 'Add to Cart' multiple times
  const addToCartBtn = page.getByRole("button", { name: "Add to cart" });
  await addToCartBtn.click();

  // Locate the cart count
  const cartItemsNumber = page.locator(
    '//*[@id="ast-site-header-cart"]/div[1]/a/div/span'
  );

  // Expect the cart count to be greater than 1
  await expect(cartItemsNumber).toHaveText(/[1-9]+/); // Cart should have at least 2 items

  const cartIcon = page.locator('//*[@id="ast-site-header-cart"]/div[1]/a');
  await cartIcon.click();

  await expect(page).toHaveURL("https://atid.store/cart-2/");

  const subtotal = page.locator('td[data-title="Subtotal"] bdi').nth(0);

  await expect(subtotal).toHaveText(/120\.00/);
});
