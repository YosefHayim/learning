text = 'mrttaqrhknsw ih puggrur'
# Define the text to be decrypted.

custom_key = 'happycoding'
# Define the custom key to be used for the Vigenère cipher.

def vigenere(message, key, direction=1):
    # Define a function named vigenere that takes three parameters: message, key, and direction (default is 1 for encryption).

    key_index = 0
    # Initialize a variable to keep track of the current index of the key.

    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    # Define a string containing all lowercase letters of the alphabet.

    final_message = ''
    # Initialize an empty string to store the final encrypted/decrypted message.

    for char in message.lower():
        # Loop through each character in the message, converting it to lowercase.

        if not char.isalpha():
            final_message += char
            # If the character is not a letter, append it directly to the final_message.
            # The isalpha() method checks if a character is a letter.
            # Example: 'a'.isalpha() returns True, '1'.isalpha() returns False.
        else:        
            key_char = key[key_index % len(key)]
            key_index += 1
            # Find the corresponding character in the key based on the current key_index.
            # Increment the key_index for the next character.

            offset = alphabet.index(key_char)
            # The index() method returns the position of a character in a string.
            # Example: 'abc'.index('b') returns 1.
            index = alphabet.find(char)
            # The find() method returns the position of a character in a string, similar to index().
            # Example: 'abc'.find('b') returns 1.

            new_index = (index + offset * direction) % len(alphabet)
            # Calculate the new position of the character based on the offset and direction.
            # For encryption, direction is 1; for decryption, direction is -1.

            final_message += alphabet[new_index]
            # Append the new character to the final_message.

    return final_message
    # Return the final encrypted/decrypted message.

def encrypt(message, key):
    return vigenere(message, key)
    # Define a function named encrypt that calls the vigenere function with the message and key for encryption.

def decrypt(message, key):
    return vigenere(message, key, -1)
    # Define a function named decrypt that calls the vigenere function with the message and key for decryption.

print(f'\nEncrypted text: {text}')
# Print the original encrypted text.

print(f'Key: {custom_key}')
# Print the custom key used for the Vigenère cipher.

decryption = decrypt(text, custom_key)
# Decrypt the text using the custom key by calling the decrypt function.

print(f'\nDecrypted text: {decryption}\n')
# Print the decrypted text.
