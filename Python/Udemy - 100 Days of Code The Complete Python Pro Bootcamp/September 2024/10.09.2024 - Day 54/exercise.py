import time

# Decorator to calculate time taken by a function
def speed_calc_decorator(func):
    def wrapper():
        start_time = time.time()  # Record start time
        func()  # Run the decorated function
        end_time = time.time()  # Record end time
        total_time = end_time - start_time  # Calculate total time taken
        print(f"{func.__name__} took {total_time} seconds to run.")
    return wrapper

# Apply decorator to functions
@speed_calc_decorator
def fast_function():
    for i in range(1000000):
        i * i

@speed_calc_decorator
def slow_function():
    for i in range(100000):
        i * i

# Call the functions
fast_function()
slow_function()
