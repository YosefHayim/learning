# TODO-1: Ask the user for input (name and bid)
# TODO-2: Store data in a dictionary {name: bid}
# TODO-3: Check if there are more bids to be added
# TODO-4: Find the highest bid and print the winner
from art import logo

# Step 1: Ask for username and bid amount
print(logo)

ask_user = input("What is your name?: ")
ask_user_bid = int(input("What is your bid?: "))

# Step 2: Create an empty dictionary to store names and bids
names_and_bids = {}
names_and_bids[ask_user] = ask_user_bid

print("\n" * 100)  # Clear the screen

# Step 3: Check if there are more bidders
more_bidders = input("Is there anyone else bidding? (y/n): ")

while more_bidders == "y":
    print(logo)

    ask_user = input("What is your name?: ")
    ask_user_bid = int(input("What is your bid?: "))
    names_and_bids[ask_user] = ask_user_bid
    more_bidders = input("Is there anyone else bidding? (y/n): ")
    print("\n" * 100)

# Step 4: Determine the highest bid
highest_bid = 0
highest_bidder = ""

for name, bid in names_and_bids.items():
    if bid > highest_bid:
        highest_bid = bid
        highest_bidder = name

print(f"The winner is {highest_bidder} with a bid of ${highest_bid}.")
