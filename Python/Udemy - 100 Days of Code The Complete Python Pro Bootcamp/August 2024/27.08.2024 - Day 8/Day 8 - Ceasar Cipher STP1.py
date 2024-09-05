alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

#direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n").lower()
#text = input("Type your message:\n").lower()
#shift = int(input("Type the shift number:\n"))


# TODO-1: Create a function called 'encrypt()' that takes 'original_text' and 'shift_amount' as 2 inputs.
def encrypt(orignial_text,shift_amount):
# TODO-2: Inside the 'encrypt()' function, shift each letter of the 'original_text' forwards in the alphabet
#  by the shift amount and print the encrypted text.
    # Global Storage of the text from outside the loop
    encrypted_text = ""
    # itreate each letter in orignial text
    for letter in orignial_text.lower():

        # getting the index number of the letter from each iteration
        alphabet_index_number = alphabet.index(letter)

        # getting the new index number plus the shift of the list e.g. if its regular a, then now a position + shift_amount.
        alphabet_letter = alphabet[(alphabet_index_number + shift_amount) % 26]

        # Adding each letter to the global storage of the strings.
        encrypted_text += alphabet_letter

    # Printing the final result without all the loops.
    print(encrypted_text)

# TODO-4: What happens if you try to shift z forwards by 9? Can you fix the code?
# Fixed

# TODO-3: Call the 'encrypt()' function and pass in the user inputs. You should be able to test the code and encrypt a
#  message.
encrypt(orignial_text="z",shift_amount=2)
