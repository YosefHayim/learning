import pandas

# Load the CSV and create the dictionary
data = pandas.read_csv("nato_phonetic_alphabet.csv")
phonetic_dict = {row.letter: row.code for (index, row) in data.iterrows()}
print(phonetic_dict)

def generate_phonetic():
        try:
            # Get user input
            word = input("Enter a word: ").upper()
            # Generate the phonetic code list
            output_list = [phonetic_dict[letter] for letter in word]
        except KeyError:
            # Handle non-alphabetical characters
            print("Sorry, only letters in the alphabet please.")

            # Making a while loop without using the while method.
            generate_phonetic()
        else:
            # If no error, print the output and break the loop
            print(output_list)


generate_phonetic()