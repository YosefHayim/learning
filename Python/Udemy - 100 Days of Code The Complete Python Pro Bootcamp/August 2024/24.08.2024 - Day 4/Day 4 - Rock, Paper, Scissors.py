import random

list_rock_paper_scissors_game = ['''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''
,
'''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''
,
'''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
''']

ask_user = int(input("What do you choose? Type 0 for rock, 1 for Paper, 2 for Scissors. "))
computer_choice = random.randint(1, len(list_rock_paper_scissors_game) - 1)

if list_rock_paper_scissors_game[ask_user] == computer_choice:
    print("You Choose:")
    print(list_rock_paper_scissors_game[ask_user])
    print("Computer Chose:")
    print(list_rock_paper_scissors_game[computer_choice])
    print("It's a tie.")

elif ask_user == 0 and computer_choice == 1:
    print("You Choose:")
    print(list_rock_paper_scissors_game[ask_user])
    print("Computer Chose:")
    print(list_rock_paper_scissors_game[computer_choice])
    print("You lose.")

elif ask_user == 0 and computer_choice == 2:
    print("You Choose:")
    print(list_rock_paper_scissors_game[ask_user])
    print("Computer Chose:")
    print(list_rock_paper_scissors_game[computer_choice])
    print("You Win!")

elif ask_user == 1 and computer_choice == 0:
    print("You Choose:")
    print(list_rock_paper_scissors_game[ask_user])
    print("Computer Chose:")
    print(list_rock_paper_scissors_game[computer_choice])
    print("You Win!")

elif ask_user == 1 and computer_choice == 2:
    print("You Choose:")
    print(list_rock_paper_scissors_game[ask_user])
    print("Computer Chose:")
    print(list_rock_paper_scissors_game[computer_choice])
    print("You lose.")

elif ask_user == 2 and computer_choice == 1:
    print("You Choose:")
    print(list_rock_paper_scissors_game[ask_user])
    print("Computer Chose:")
    print(list_rock_paper_scissors_game[computer_choice])
    print("You Win!")

elif ask_user == 2 and computer_choice == 0:
    print("You Choose:")
    print(list_rock_paper_scissors_game[ask_user])
    print("Computer Chose:")
    print(list_rock_paper_scissors_game[computer_choice])
    print("You lose")