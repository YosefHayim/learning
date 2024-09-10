from requests import options
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


# Maintain the browser open until I close the running.
chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("detach",True)

driver = webdriver.Chrome(options=chrome_options)

# Another challenge
# driver.get('https://en.wikipedia.org/wiki/Main_Page')
#
# num_articles = driver.find_element(By.XPATH, '//*[@id="articlecount"]/a[1]')
# print(num_articles.text)

# Another challenge #2
driver.get('http://secure-retreat-92358.herokuapp.com/')
f_name = driver.find_element(By.XPATH,'/html/body/form/input[1]')
f_name.send_keys('Josephino')

l_name = driver.find_element(By.XPATH,'/html/body/form/input[2]')
l_name.send_keys('Sabagosinos')

email = driver.find_element(By.XPATH,'/html/body/form/input[3]')
email.send_keys('example@gmail.com')

sign_up_button = driver.find_element(By.XPATH,'/html/body/form/button')
sign_up_button.send_keys(Keys.ENTER)
