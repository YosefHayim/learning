from bs4 import BeautifulSoup

with open("website.html", mode="r") as file:
    data = file.read()

soup = BeautifulSoup(data,"html.parser")

# Gets the title text.
# print(soup.title.string)
#
# # Gets all the html data of the file.
# print(soup)

# Gets all the anchor tags that are 'a'
all_anchor_tags = soup.find_all(name='a')

for i in all_anchor_tags:
    pass
    #Get all the texts only
    #print(i.getText())

    # Get all the links only
    #print(i.get("href"))

# Finding for one class and one class definition
# heading = soup.find(name="h1",id="name")
# print(heading)

# section_heading = soup.find(name='h3',class_='heading')
# print(section_heading)

# Firstly find a pargraph then find the a of it to get the link.
company_yrl = soup.select_one(selector="p a")
print(company_yrl)