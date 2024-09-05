#TODO: Create a letter using starting_letter.txt 
#for each name in invited_names.txt
#Replace the [name] placeholder with the actual name.
#Save the letters in the folder "ReadyToSend".
    
#Hint1: This method will help you: https://www.w3schools.com/python/ref_file_readlines.asp
    #Hint2: This method will also help you: https://www.w3schools.com/python/ref_string_replace.asp
        #Hint3: THis method will help you: https://www.w3schools.com/python/ref_string_strip.asp

names = []

with open("C:/Users/User/PycharmProjects/pythonProject1/Udemy - 100 Days of Code The Complete Python Pro Bootcamp/September 2024/03.09.2024 - Day 24/Mail Merge Project Start/Input/Names/invited_names.txt", mode="r") as file:
    for i in file:
        names.append(i.strip())  # Add the stripped line to the list

for i in names:
    with open(f"C:/Users/User/PycharmProjects/pythonProject1/Udemy - 100 Days of Code The Complete Python Pro Bootcamp/September 2024/03.09.2024 - Day 24/Mail Merge Project Start/Output/{i}_invitation.txt", mode="w") as file:
        file.write(f"Dear {i},\n\nYou are invited to my birthday this Saturday.\n\nHope you can make it!\n\nAngela")
print('done')
