def verify_card_number(card_number):
    # Define a function named verify_card_number that takes one parameter: card_number.

    sum_of_odd_digits = 0
    # Initialize a variable to store the sum of the odd-positioned digits.

    card_number_reversed = card_number[::-1]
    # Reverse the card number string using slicing.
    # Example: '1234'[::-1] returns '4321'.

    odd_digits = card_number_reversed[::2]
    # Extract every second digit starting from the first (index 0) from the reversed card number.
    # Example: '4321'[::2] returns '42'.

    for digit in odd_digits:
        sum_of_odd_digits += int(digit)
        # Loop through each digit in the odd_digits list, convert it to an integer, and add it to sum_of_odd_digits.

    sum_of_even_digits = 0
    # Initialize a variable to store the sum of the even-positioned digits.

    even_digits = card_number_reversed[1::2]
    # Extract every second digit starting from the second (index 1) from the reversed card number.
    # Example: '4321'[1::2] returns '31'.

    for digit in even_digits:
        number = int(digit) * 2
        # Double the digit (convert it to an integer first).

        if number >= 10:
            number = (number // 10) + (number % 10)
        # If the doubled number is 10 or greater, add the digits of the number together.
        # Example: 14 becomes (1 + 4) = 5.

        sum_of_even_digits += number
        # Add the (possibly modified) doubled digit to sum_of_even_digits.

    total = sum_of_odd_digits + sum_of_even_digits
    # Calculate the total sum of the odd and even positioned digits.

    return total % 10 == 0
    # Return True if the total sum is divisible by 10 (i.e., the card number is valid).

def main():
    # Define the main function to execute the card number verification.

    card_number = '4111-1111-4555-1142'
    # Define a card number string with dashes.

    card_translation = str.maketrans({'-': '', ' ': ''})
    # Create a translation table to remove dashes and spaces from the card number.
    # The str.maketrans() method creates a mapping table for translation.
    # Example: str.maketrans({'-': '', ' ': ''}) creates a table to remove '-' and ' '.

    translated_card_number = card_number.translate(card_translation)
    # Translate the card number using the translation table to remove dashes and spaces.
    # The translate() method uses the mapping table to replace specified characters.
    # Example: '4111-1111-4555-1142'.translate(card_translation) returns '4111111145551142'.

    if verify_card_number(translated_card_number):
        print('VALID!')
        # Check if the card number is valid by calling verify_card_number with the translated card number.
        # Print 'VALID!' if the card number is valid.
    else:
        print('INVALID!')
        # Print 'INVALID!' if the card number is not valid.

main()
# Call the main function to run the code.
