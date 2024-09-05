from menu import Menu, MenuItem
from coffee_maker import CoffeeMaker
from money_machine import MoneyMachine

# Setting the objects to the modules.
menu = Menu()
coffee_procedure = CoffeeMaker()
money_machine = MoneyMachine()

def coffee_machine():
    machine_on = True
    while machine_on:
        print(f'We currently have in the menu following items: {menu.get_items()}')
        ask_user = input(f"What would you like to order from our menu?: ")
        # Handle special commands before finding the drink
        if ask_user == 'report':
            coffee_procedure.report()
            money_machine.report()
            continue  # Skip to the next iteration of the loop

        elif ask_user == 'off':
            print('Machine turned off...')
            machine_on = False
            continue  # Exit the loop
        # Find the drink if it's not a special command
        drink_name = menu.find_drink(ask_user)
        if drink_name:
            can_order = coffee_procedure.is_resource_sufficient(drink_name)
            if can_order:
                is_success = money_machine.make_payment(drink_name.cost)
                if is_success:
                    here_coffee = coffee_procedure.make_coffee(drink_name)
                    if here_coffee:
                        print("Here is your coffee!")
                else:
                    print("Sorry, not enough resources to make that drink.")

coffee_machine()
