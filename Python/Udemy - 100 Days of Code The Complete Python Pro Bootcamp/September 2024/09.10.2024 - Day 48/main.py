from requests import options
from selenium import webdriver
from selenium.webdriver.common.by import By

# Keep the Chrome browser open after the program finishes.
chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("detach",True)

# Must add the kwargs of it to the driver as it shows below.
driver = webdriver.Chrome(options=chrome_options)

# Gets to a specific url
# driver.get('https://www.amazon.com/Instant-Pot-Plus-60-Programmble/dp/B01NBKTPTS/?th=1')
# # search for a class with the name "a-price-whole" then gets that value.
# price_dollar = driver.find_element(By.CLASS_NAME, value="a-price-whole")
# # search for a class with the name a-price-fraction" then gets that value.
# price_cents = driver.find_element(By.CLASS_NAME,value="a-price-fraction")
# # Prints it with the context and not the html texts.
# print(f'The price is: {price_dollar.text}, {price_cents.text}')

#another example
# driver.get('https://www.python.org')
# search_bar = driver.find_element(By.NAME,value='q')
# print(search_bar.get_attribute("placeholder"))
# button = driver.find_element(By.ID,value="submit")
# Print the size of the button
# print(button.size)
# finds the link that located in the div that is named documentation-widget then gets the link from the 'a' tag.
# documentation_link = driver.find_element(By.CSS_SELECTOR, value=".documentation-widget a")
# print(documentation_link.text)
# how_to_xpath = driver.find_element(By.XPATH, value='//*[@id="site-map"]/div[2]/div/ul/li[3]/a')
# print(how_to_xpath.text)


# Close the driver.
# driver.close()

# quit the program
# driver.quit()

# Challenge from lesson 347
# driver.get('https://www.python.org')
# upcoming_events = driver.find_element(By.XPATH,value='//*[@id="content"]/div/section/div[2]/div[2]/div/ul')
#
# # Create a dictionary to store event titles and dates
# events_dict = {}
#
# # Get all the event list items inside the upcoming events section
# event_items = upcoming_events.find_elements(By.TAG_NAME, 'li')
#
#
# for event in event_items:
#     event_date = event.find_element(By.XPATH, './time').text
#     event_name = event.find_element(By.XPATH, './a').text
#     events_dict[event_name] = event_date

# Print the dictionary
# print(events_dict)

# Close the browser
# driver.quit()
