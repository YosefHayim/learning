def add_expense(expenses, amount, category):
    # Define a function named add_expense that takes three parameters: expenses (a list), amount, and category.

    expenses.append({'amount': amount, 'category': category})
    # Append a new expense dictionary to the expenses list with keys 'amount' and 'category'.

def print_expenses(expenses):
    # Define a function named print_expenses that takes one parameter: expenses (a list).

    for expense in expenses:
        print(f'Amount: {expense["amount"]}, Category: {expense["category"]}')
    # Loop through each expense in the expenses list and print its amount and category.

def total_expenses(expenses):
    # Define a function named total_expenses that takes one parameter: expenses (a list).

    return sum(map(lambda expense: expense['amount'], expenses))
    # Calculate and return the total amount of all expenses using the sum function and map to extract amounts.
    # The map() function applies a given function to each item of an iterable (e.g., list) and returns a map object.
    # Example: map(lambda x: x * 2, [1, 2, 3]) returns [2, 4, 6].
    # The lambda keyword creates an anonymous function (a function without a name).
    # Example: lambda x: x * 2 creates a function that multiplies its input by 2.
    # In this case, lambda expense: expense['amount'] creates a function that extracts the 'amount' from each expense.

def filter_expenses_by_category(expenses, category):
    # Define a function named filter_expenses_by_category that takes two parameters: expenses (a list) and category.

    return filter(lambda expense: expense['category'] == category, expenses)
    # Return a filtered list of expenses that match the given category using the filter function.
    # The filter() function constructs an iterator from elements of an iterable for which a function returns true.
    # Example: filter(lambda x: x > 0, [-1, 0, 1, 2]) returns [1, 2].
    # In this case, lambda expense: expense['category'] == category creates a function that checks if an expense's category matches the given category.

def main():
    # Define the main function to run the expense tracker.

    expenses = []
    # Initialize an empty list to store expenses.

    while True:
        # Start an infinite loop to keep the program running until the user decides to exit.

        print('\nExpense Tracker')
        print('1. Add an expense')
        print('2. List all expenses')
        print('3. Show total expenses')
        print('4. Filter expenses by category')
        print('5. Exit')
        # Print the menu options for the user.

        choice = input('Enter your choice: ')
        # Prompt the user to enter their choice and store it in the variable choice.

        if choice == '1':
            amount = float(input('Enter amount: '))
            category = input('Enter category: ')
            add_expense(expenses, amount, category)
            # If the user chooses '1', prompt for the amount and category, then add the expense to the list.

        elif choice == '2':
            print('\nAll Expenses:')
            print_expenses(expenses)
            # If the user chooses '2', print all the expenses.

        elif choice == '3':
            print('\nTotal Expenses: ', total_expenses(expenses))
            # If the user chooses '3', print the total amount of all expenses.

        elif choice == '4':
            category = input('Enter category to filter: ')
            print(f'\nExpenses for {category}:')
            expenses_from_category = filter_expenses_by_category(expenses, category)
            print_expenses(expenses_from_category)
            # If the user chooses '4', prompt for the category, filter expenses by this category, and print them.

        elif choice == '5':
            print('Exiting the program.')
            break
            # If the user chooses '5', print a message and exit the loop, ending the program.

main()
# Call the main function to run the expense tracker program.
