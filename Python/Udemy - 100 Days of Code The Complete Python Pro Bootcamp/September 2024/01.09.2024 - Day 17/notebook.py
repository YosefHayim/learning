# To create a class i use the word class and a variable assign to it
class User:
    # using the keyword pass is for placeholder.
    # pass
    def __init__(self,user_id,username):
        self.id = user_id
        self.username = username
        self.followers = 0
        self.following = 0

    def follow(self, user):
        user.followers += 1
        self.following += 1

user_1 = User("001","Josephino")
# print(user_1.id)

# Adding attribute to the class from outside the class.
user_2 = User("002","Junior Joseph")
# print(user_2.id)

#in python the way we create a constructor is by using the __init__
# Everytime I will run the attributes or adding them than the init will be activated as well, e.g. the example above.

# printing the follower without adding the two arguments from the class User() since it is not used for a certain reason, e.g. instagram
# print(user_1.followers)

# user 1 follows user 2
user_1.follow(user_2)

# Adding to user 1 follower
print(user_1.followers)

# Adding to user 1 , one following
print(user_1.following)

# Adding to user 2 , one follower
print(user_2.followers)

# Adding to user 2 , one following
print(user_2.following)