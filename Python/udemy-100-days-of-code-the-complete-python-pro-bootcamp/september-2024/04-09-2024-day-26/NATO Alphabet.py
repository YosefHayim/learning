with open("NATO_phonetic_alphabet.csv", mode="r") as file:
    data = [i.strip() for i in file]  # Read and strip each line

# Now split each line into key-value pairs
data = [line.split(",") for line in data]  # Split by comma

data = data[1:]

# Create the dictionary from the split data
data_dict = {k: v for k, v in data}  # Unpack each line into k, v


user_ask = input("Choose a word to get phonetic code words: ").upper()
phonetic_code_words = [data_dict[letter] for letter in user_ask if letter in data_dict]
print(phonetic_code_words)


# Looping through dictionaries:
# for (key, value) in student_dict.items():
#     #Access key and value
#     pass

# student_data_frame = pandas.DataFrame(student_dict)
#
# Loop through rows of a data frame
# for (index, row) in student_data_frame.iterrows():
#     #Access index and row
#     #Access row.student or row.score
#     pass

# Keyword Method with iterrows()
# {new_key:new_value for (index, row) in df.iterrows()}