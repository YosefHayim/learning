import test, { expect } from "@playwright/test";
import fs from "fs";
import path from "path";

// Generate log file name with timestamp
const testName = "Adding_item_to_cart";
const timestamp = new Date().toISOString().replace(/[:.]/g, "-"); // Format for filename
const logFile = path.join(__dirname, `${testName}_${timestamp}.log`);

// Function to log actions
function logAction(action: string) {
  const logEntry = `[${new Date().toLocaleTimeString()}] ${action}\n`;
  fs.appendFileSync(logFile, logEntry);
}

const url = `https://atid.store/`;

test(testName, async ({ page }) => {
  logAction("Test started: Adding item to cart");

  // Go to URL
  await page.goto(url);
  logAction("Navigated to: " + url);

  // Click on the shoe item
  const shoesItem = page.locator(
    `//*[@id="post-2888"]/div/div/section[3]/div/div/div/div[3]/div/div/div/ul/li[1]/div[1]/a`
  );

  await shoesItem.click();
  logAction("Clicked on shoe item");

  // Verify the product page
  await expect(page).toHaveURL("https://atid.store/product/atid-yellow-shoes/");
  logAction("Verified product page URL");

  // Click 'Add to Cart' multiple times
  const addToCartBtn = page.getByRole("button", { name: "Add to cart" });

  await addToCartBtn.click();
  logAction("Clicked 'Add to Cart' button");

  // Locate the cart count
  const cartItemsNumber = page.locator(
    '//*[@id="ast-site-header-cart"]/div[1]/a/div/span'
  );

  await expect(cartItemsNumber).toHaveText(/[1-9]+/);
  logAction("Verified cart has items");

  // Click on cart icon
  const cartIcon = page.locator('//*[@id="ast-site-header-cart"]/div[1]/a');

  await cartIcon.click();

  logAction("Clicked on cart icon");

  await expect(page).toHaveURL("https://atid.store/cart-2/");
  logAction("Verified cart page URL");

  // Verify subtotal
  const subtotal = page.locator('td[data-title="Subtotal"] bdi').nth(0);

  await expect(subtotal).toHaveText(/120\.00/);
  logAction("Verified subtotal is 120.00");

  logAction("Test completed successfully");
});
