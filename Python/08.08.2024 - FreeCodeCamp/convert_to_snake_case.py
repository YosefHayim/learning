def convert_to_snake_case(pascal_or_camel_cased_string):
    # Define a function named convert_to_snake_case that takes one parameter: pascal_or_camel_cased_string.

    snake_cased_char_list = [
        '_' + char.lower() if char.isupper()
        else char
        for char in pascal_or_camel_cased_string
    ]
    # Create a list comprehension to build the snake_cased_char_list:
    # Iterate over each character (char) in the input string (pascal_or_camel_cased_string).
    # If the character is uppercase (char.isupper()), add an underscore ('_') before the lowercase version of the character (char.lower()).
    # The isupper() method checks if a character is uppercase.
    # Example: 'A'.isupper() returns True, 'a'.isupper() returns False.
    # The lower() method converts a character to lowercase.
    # Example: 'A'.lower() returns 'a'.
    # If the character is not uppercase, just add the character as it is.

    return ''.join(snake_cased_char_list).strip('_')
    # Join the list of characters (snake_cased_char_list) into a single string using the join method.
    # The join() method concatenates the elements of a list into a single string.
    # Example: ''.join(['a', 'b', 'c']) returns 'abc'.
    # Remove any leading underscores using the strip('_') method.
    # The strip() method removes specified leading and trailing characters from a string.
    # Example: '_abc_'.strip('_') returns 'abc'.
    # Return the final snake_cased string.

def main():
    # Define a main function to execute the conversion.

    print(convert_to_snake_case('aLongAndComplexString'))
    # Call the convert_to_snake_case function with the input string 'aLongAndComplexString'.
    # Print the result to the console.

# Call the main function to run the code.
main()
