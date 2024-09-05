import random
from art import logo


def blackjack():
    print(logo)
    cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
    user_cards = []
    dealer_cards = []

    # Shuffle to give the user cards
    random.shuffle(cards)
    user_cards += cards[:2]

    # Count the current value of the user cards
    score_user = sum(user_cards)
    print(f"Your cards: {user_cards}, current score: {score_user}")

    # Shuffle to give the computer cards
    random.shuffle(cards)
    dealer_cards += cards[:2]

    score_dealer = 0
    for i in dealer_cards:
        score_dealer += i

    # Print only 1 card to expose to the player.
    print(f"Computer's first card: [{dealer_cards[0]}]")

    print("\n")

    for index, card in enumerate(user_cards):
        if card == 11 and sum(user_cards) > 21:
            user_cards[index] = 1

    for index, card in enumerate(dealer_cards):
        if card == 11 and sum(dealer_cards) > 21:
            dealer_cards[index] = 1

    another_card = input("Would you like to have another card? 'y' or 'n': ")

    if score_user == 21 and score_dealer != 21:
        print(f"Your final hand {user_cards}, current score: {score_user}")
        print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
        print("You win :) ")
        return

    elif score_dealer == 21 and score_user == 21:
        print(f"Your final hand {user_cards}, current score: {score_user}")
        print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
        print("DRAW -_- ")
        return

    # If I don't want to have another card
    if another_card == 'n':
        score_user = sum(user_cards)
        score_dealer = sum(dealer_cards)
        while score_dealer <= 16:
            random_card_point = random.randint(0, len(cards) - 1)
            extra_card = cards[random_card_point]
            score_dealer += cards[random_card_point]
            dealer_cards.append(extra_card)
            if score_dealer > 17:
                break

        # SCENARIOS FOR CALCULATING WHO WON THE BLACKJACK GAME

        # User has less score than dealer and dealer has less than 21 he won
        if score_user < score_dealer and score_dealer < 21:
            print(f"Your final hand {user_cards}, current score: {score_user}")
            print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
            print("You lose :( ")
            return

            # User has more than 21 he loses automatically
        elif score_user > 21:
            print(f"Your final hand {user_cards}, current score: {score_user}")
            print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
            print("You went over. You lose :( ")
            return

            # Dealer has more than 21 he loses automatically
        elif score_dealer > 21:
            print(f"Your final hand {user_cards}, current score: {score_user}")
            print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
            print("You win :) ")
            return

            # User has exact 21 and has higher than the score dealer
        elif score_user == 21 and score_user > score_dealer:
            print(f"Your final hand {user_cards}, current score: {score_user}")
            print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
            print("You win :) ")
            return

        elif score_dealer == 21 and score_user < score_dealer:
            print(f"Your final hand {user_cards}, current score: {score_user}")
            print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
            print("You lose :( ")
            return

            # User has more score than dealer and below 21 he won's
        elif score_user > score_dealer and score_user < 21:
            print(f"Your final hand {user_cards}, current score: {score_user}")
            print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
            print("You win :) ")
            return

            # DRAW
        elif score_user == score_dealer:
            print(f"Your final hand {user_cards}, current score: {score_user}")
            print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
            print("DRAW -_- ")
            return

    # IF I WANT ANOTHER CARD
    while another_card == 'y':
        random_card_point = random.randint(0, len(cards) - 1)
        extra_card = cards[random_card_point]
        score_user += cards[random_card_point]
        user_cards.append(extra_card)
        score_user = sum(user_cards)
        score_dealer = sum(dealer_cards)
        print(f"Your cards: {user_cards}, current score: {score_user}")

        if score_user < score_dealer and score_dealer < 21:
            print(f"Your final hand {user_cards}, current score: {score_user}")
            print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
            print("You lose :( ")
            return

            # User has more than 21 he loses automatically
        elif score_user > 21:
            print(f"Your final hand {user_cards}, current score: {score_user}")
            print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
            print("You went over. You lose :( ")
            return

            # Dealer has more than 21 he loses automatically
        elif score_dealer > 21:
            print(f"Your final hand {user_cards}, current score: {score_user}")
            print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
            print("You win :) ")
            return

            # User has exact 21 and has higher than the score dealer
        elif score_user == 21 and score_user > score_dealer:
            print(f"Your final hand {user_cards}, current score: {score_user}")
            print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
            print("You win :) ")
            return

        elif score_dealer == 21 and score_user < score_dealer:
            print(f"Your final hand {user_cards}, current score: {score_user}")
            print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
            print("You lose :( ")
            return

            # User has more score than dealer and below 21 he won's
        elif score_user > score_dealer and score_user < 21:
            print(f"Your final hand {user_cards}, current score: {score_user}")
            print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
            print("You win :) ")
            return

            # DRAW
        elif score_user == score_dealer:
            print(f"Your final hand {user_cards}, current score: {score_user}")
            print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
            print("DRAW -_- ")
            return


        another_card = input("Would you like to have another card? 'y' or 'n': ")
        if another_card == 'n':
            if score_user < score_dealer and score_dealer < 21:
                print(f"Your final hand {user_cards}, current score: {score_user}")
                print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
                print("You lose :( ")
                return

                # User has more than 21 he loses automatically
            elif score_user > 21:
                print(f"Your final hand {user_cards}, current score: {score_user}")
                print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
                print("You went over. You lose :( ")
                return

                # Dealer has more than 21 he loses automatically
            elif score_dealer > 21:
                print(f"Your final hand {user_cards}, current score: {score_user}")
                print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
                print("You win :) ")
                return

                # User has exact 21 and has higher than the score dealer
            elif score_user == 21 and score_user > score_dealer:
                print(f"Your final hand {user_cards}, current score: {score_user}")
                print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
                print("You win :) ")
                return

            elif score_dealer == 21 and score_user < score_dealer:
                print(f"Your final hand {user_cards}, current score: {score_user}")
                print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
                print("You lose :( ")
                return

                # User has more score than dealer and below 21 he won's
            elif score_user > score_dealer and score_user < 21:
                print(f"Your final hand {user_cards}, current score: {score_user}")
                print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
                print("You win :) ")
                return

                # DRAW
            elif score_user == score_dealer:
                print(f"Your final hand {user_cards}, current score: {score_user}")
                print(f"Computer's final hand: {dealer_cards}, current score: {score_dealer}")
                print("DRAW -_- ")
                return


keep_play = True
while keep_play:
    is_game_on = input("Would you like to play a game of Blackjack? 'y' or 'n'? ")
    if is_game_on == 'y':
        blackjack()
    else:
        keep_play = False
