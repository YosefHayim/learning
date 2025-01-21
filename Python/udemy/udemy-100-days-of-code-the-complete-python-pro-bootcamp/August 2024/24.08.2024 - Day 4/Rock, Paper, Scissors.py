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



game_on = True
while game_on :
    ask_user = int(input("What do you choose? Type 0 for rock, 1 for Paper, 2 for Scissors or 3 to exit the game."))
    computer_choice = random.randint(1, len(list_rock_paper_scissors_game) - 1)

    if ask_user == 0 and computer_choice == 2 or ask_user == 1 and computer_choice == 0 or ask_user == 2 and computer_choice == 1:
        print(f'Computer choose: {list_rock_paper_scissors_game[computer_choice]}')
        print(f'User choose: {list_rock_paper_scissors_game[ask_user]}')
        print('User won')
    elif ask_user == computer_choice:
        print(f'Computer choose: {list_rock_paper_scissors_game[computer_choice]}')
        print(f'User choose: {list_rock_paper_scissors_game[ask_user]}')
        print("It's a tie.")

    elif ask_user == 3:
        game_on = False
        print('Quitting game.')

    else:
        print(f'Computer choose: {list_rock_paper_scissors_game[computer_choice]}')
        print(f'User choose: {list_rock_paper_scissors_game[ask_user]}')
        print('Computer won')
