import pandas

# Challenge 1:
# data_list = []
# with open("weather_data.csv",mode="r") as data:
#     for i in data:
#         data_list.append(i.strip())
#
# print(data_list)

# Challenge 2:
# Python as a built-in CSV library
# import csv
#
# with open("weather_data.csv") as data_file:
#     # Assign the info in the csv to the data variable
#     data = csv.reader(data_file)
#     temperatures = []
#     # For each row in the data print the data, and we receive a list with indexes of each row separated by comma.
#     for i in data:
#         if i[1] != "temp":
#             temperatures.append(int(i[1]))
#     print(temperatures)

# pandas library has a method called read_csv which preform a nice conversion to excel view in the terminal.
# data = pandas.read_csv("weather_data.csv")
# This prints out only the column that has the string temp
# print(data["temp"])

# convert the data to a dictionary
# data_dict = data.to_dict()

#temp_list = data["temp"].to_list()
# Get the maximum int from the list of the temperatures
#print(data["temp"].max())

# do like a for loop without all the code
# Get data in row
#print(data[data.day == 'Monday'])

# Challenge 3: find the maximum int from the temp column.
#print(data.temp.max())

# Challenge 4: get ferritin
# monday = data[data.day == "Monday"]
# monday_temp = monday.temp[0]
# monday_temp_f = monday_temp * 9/5 + 32
# print(monday_temp_f)

# Create dataframe from scratch
# data_dict = {
#     "students": ["Amy","James","Angela"],
#     "scores": [76,56,65]
# }
# # Create the data to a data frame.
# data = pandas.DataFrame(data_dict)
# # Convert that data to csv file
# data.to_csv("data_example.csv")

# # Challenge 4: The Great Squirrel Census Data Analysis
# data = pandas.read_csv("2018_Central_Park_Squirrel_Census_-_Squirrel_Data_20240903.csv")
# data_color_gray = pandas.Series(data.PrimaryFurColor == 'Gray')
# data_color_red = pandas.Series(data.PrimaryFurColor == 'Cinnamon')
# data_color_black = pandas.Series(data.PrimaryFurColor == 'Black')
#
# # THE ORDER IS MATTER!
# data_dict = {
#     "Colors": ["Grey","Red","Black"],
#     "Count":[data_color_gray.sum(),data_color_red.sum(),data_color_black.sum()]
# }
# # Create the csv file with that data.
# data = pandas.DataFrame(data_dict)
# data.to_csv("squirrel_count.csv")

# Getting the x and y coordinates on the turtle screen
# def get_mouse_click_coor(x, y):
#     print(x, y)
#
# turtle.onscreenclick(get_mouse_click_coor)
# turtle.mainloop()
