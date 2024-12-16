from main import MENU,resources

def prompt_user():
    """Ask the user what he wants espresso/latte/cappuccino either report for the developer or shut the machine off."""
    what_would_you_like = input("What would you like? espresso/latte/cappuccino: ")

    while what_would_you_like != 'espresso' and what_would_you_like != 'latte' and what_would_you_like != 'cappuccino' and what_would_you_like != 'off' and what_would_you_like != 'report':
        print('\nInvalid input. please try again. ')
        what_would_you_like = input("What would you like? espresso/latte/cappuccino: ")

    if what_would_you_like == 'espresso':
        return what_would_you_like

    elif what_would_you_like == 'latte':
        return what_would_you_like
    elif what_would_you_like == 'cappuccino':
        return what_would_you_like

    elif what_would_you_like == 'report':
        print(f'The current materials left are: {resources}')
        return what_would_you_like

    elif what_would_you_like == 'off':
        return what_would_you_like

def check_resources_is_sufficent(hot_drink_type):
    """Checking if the hot drink is available to order"""
    if hot_drink_type == None:
        return

    else:
        espresso_milk = MENU["espresso"]["ingredients"]["milk"] = 0
        product_name = MENU[f"{hot_drink_type}"]
        required_water_amount = MENU[f"{hot_drink_type}"]["ingredients"]["water"]
        required_milk_amount = MENU[f"{hot_drink_type}"]["ingredients"]["milk"]
        required_coffee_amount = MENU[f"{hot_drink_type}"]["ingredients"]["coffee"]
        product_cost = MENU[f"{hot_drink_type}"]["cost"]

        resource_water = resources["water"]
        resource_milk = resources["milk"]
        resource_coffee = resources["coffee"]

        if resource_water < required_water_amount:

            return print("Sorry there is not enough water.")

        elif resource_milk < required_milk_amount:

            return print("Sorry there is not enough milk.")

        elif resource_coffee < required_coffee_amount:

            return print("Sorry there is not enough coffee.")

        else:
            return product_cost

def insert_coins_by_user(drink_price,drink_name):
    """Ask for the user to pay and check if he paid enough or exactly else we cant process the order"""

    print("Please insert coins.")

    is_quarters = int(input("How many quarters you have?: "))
    is_dimes = int(input("How many dimes you have?: "))
    is_pennies = int(input("How many pennies you have?: "))

    while is_quarters < 0 or is_dimes < 0 or is_pennies < 0:
        print("Invalid quarters / dimes / pennies, cannot be 0, please type again. ")
        is_quarters = int(input("How many quarters you have?: "))
        is_dimes = int(input("How many dimes you have?: "))
        is_pennies = int(input("How many pennies you have?: "))

    if is_quarters >= 0 or is_dimes >= 0 or is_pennies >= 0:

        total_customer_payment = (is_quarters * 0.25) + (is_dimes * 0.10) + (is_pennies * 0.01)
        print(f"The total payment is: {total_customer_payment}$ ")

        if total_customer_payment > drink_price:
            print(f"You paid: ${total_customer_payment}, Here is: ${total_customer_payment - drink_price} dollars in change. ")
            print(f'Here is your {drink_name}. Enjoy!')
            return drink_name,drink_price

        elif total_customer_payment == drink_price:
            print(f"You paid: ${total_customer_payment}, processing order...")
            print(f'Here is your {drink_name}. Enjoy!')
            return drink_name,drink_price
        else:
            print(f"Your payment of: ${total_customer_payment}$ for the {drink_name} is not enough to order. ")
            return

def update_resources(product_name,earned):

    resource_water = MENU[f"{product_name}"]["ingredients"]["water"]
    resource_milk = MENU[f"{product_name}"]["ingredients"]["milk"]
    resource_coffee = MENU[f"{product_name}"]["ingredients"]["coffee"]

    resources["water"] -= resource_water
    resources["milk"] -= resource_milk
    resources["coffee"] -= resource_coffee
    resources["Money"] += earned

    print(f'Current resources are: {resources}')

def machine_coffee_logic():
    resource_money = resources["Money"] = 0
    machine_on = True

    while machine_on:
        what_to_drink = prompt_user()
        if what_to_drink == 'off':
            print('Shutting down the coffee machine... ')
            machine_on = False

        elif what_to_drink == 'report':
            print(f'Resources: {resources}')
        else:
            # If there is a possibility to order a hot drink then I assign each of the return values by the orders of it.
            product_menu_price = check_resources_is_sufficent(what_to_drink)
            if type(product_menu_price) != float:
                machine_on = False
                return
            drink_name, drink_price = insert_coins_by_user(drink_name=what_to_drink,drink_price=product_menu_price)
            update_resources(product_name=drink_name,earned=drink_price)

machine_coffee_logic()
