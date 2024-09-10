import time
from selenium import webdriver
from selenium.webdriver.common.by import By



# Set up the driver (ensure your webdriver is properly configured)
driver = webdriver.Chrome()

driver.get('https://orteil.dashnet.org/experiments/cookie/')

# Set up the browser driver
driver = webdriver.Chrome()

# Count the number of clicks
clicks_count = 0

# Example variable to control the game loop
game_on = True

# Timer: Record the start time
start_time = time.time()

while game_on:
    # Calculate elapsed time
    elapsed_time = time.time() - start_time
    print(f"Elapsed time: {int(elapsed_time)} seconds")

    # Click the cookie
    click_cookie = driver.find_element(By.ID, value="cookie")
    click_cookie.click()
    clicks_count += 1

    # Get the current money of cookies
    current_cookies_money = int(driver.find_element(By.ID, value="money").text)
    print(f'Current money: {current_cookies_money}')

    # Find all upgrade elements
    buy_time_machine = driver.find_element(By.ID, value="buyTime machine")
    timemachine_class = buy_time_machine.get_attribute("class")

    buy_portal = driver.find_element(By.ID, value="buyPortal")
    portal_class = buy_portal.get_attribute("class")

    buy_alchemy = driver.find_element(By.ID, value="buyAlchemy lab")
    alchemy_class = buy_alchemy.get_attribute("class")

    buy_ship = driver.find_element(By.ID, value="buyShipment")
    ship_class = buy_ship.get_attribute("class")

    buy_mine = driver.find_element(By.ID, value="buyMine")
    mine_class = buy_mine.get_attribute("class")

    buy_factory = driver.find_element(By.ID, value="buyFactory")
    factory_class = buy_factory.get_attribute("class")

    buy_grandma = driver.find_element(By.ID, value="buyGrandma")
    grandma_class = buy_grandma.get_attribute("class")

    buy_cursor = driver.find_element(By.ID, value="buyCursor")
    cursor_class = buy_cursor.get_attribute("class")

    # Stop the loop after 5 minutes (300 seconds)
    if elapsed_time > 300:
        print("5 minutes have passed. Stopping the loop.")
        game_on = False

    # Prioritize clicks from the most expensive to the least expensive upgrade
    if "grayed" not in timemachine_class:
        buy_time_machine.click()
        time.sleep(0.5)  # Pause longer after a bigger upgrade to allow for processing
        print("Clicked on Time Machine upgrade!")
    elif "grayed" not in portal_class:
        buy_portal.click()
        time.sleep(0.4)
        print("Clicked on Portal upgrade!")
    elif "grayed" not in alchemy_class:
        buy_alchemy.click()
        time.sleep(0.4)
        print("Clicked on Alchemy Lab upgrade!")
    elif "grayed" not in ship_class:
        buy_ship.click()
        time.sleep(0.3)
        print("Clicked on Shipment upgrade!")
    elif "grayed" not in mine_class:
        buy_mine.click()
        time.sleep(0.3)
        print("Clicked on Mine upgrade!")
    elif "grayed" not in factory_class:
        buy_factory.click()
        time.sleep(0.3)
        print("Clicked on Factory upgrade!")
    elif "grayed" not in grandma_class:
        buy_grandma.click()
        time.sleep(0.2)
        print("Clicked on Grandma upgrade!")
    elif "grayed" not in cursor_class:
        buy_cursor.click()
        time.sleep(0.2)
        print("Clicked on Cursor upgrade!")