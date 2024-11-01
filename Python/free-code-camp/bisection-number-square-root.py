# This function calculates the square root of a given number using the bisection method.
# The bisection method is used to approximate the square root by repeatedly narrowing the range within which the root lies.
# Parameters:
# - square_target: The number for which we want to find the square root.
# - tolerance: The acceptable error range for the result (default is 1e-7).
# - max_iterations: The maximum number of iterations to perform (default is 100).
# If the square root of a negative number is requested, the function raises a ValueError.
# The function handles cases where the target is 0 or 1 explicitly.
# For other positive numbers, it uses the bisection method to find the square root.

def square_root_bisection(square_target, tolerance=1e-7, max_iterations=100):
    if square_target < 0:
        # Raise an error if the number is negative
        raise ValueError('Square root of negative number is not defined in real numbers')
    
    if square_target == 1:
        # Directly return 1 if the target is 1
        root = 1
        print(f'The square root of {square_target} is 1')
    elif square_target == 0:
        # Directly return 0 if the target is 0
        root = 0
        print(f'The square root of {square_target} is 0')
    else:
        # Set initial low and high bounds for the bisection method
        low = 0
        high = max(1, square_target)
        root = None
        
        for _ in range(max_iterations):
            # Calculate the midpoint
            mid = (low + high) / 2
            # Calculate the square of the midpoint
            square_mid = mid**2

            if abs(square_mid - square_target) < tolerance:
                # If the square of the midpoint is close enough to the target, set root and break
                root = mid
                break
            elif square_mid < square_target:
                # If the square of the midpoint is less than the target, adjust the low bound
                low = mid
            else:
                # If the square of the midpoint is greater than the target, adjust the high bound
                high = mid

        if root is None:
            # If the root was not found within the iteration limit, print a failure message
            print(f"Failed to converge within {max_iterations} iterations.")
        else:
            # Print the approximate square root
            print(f'The square root of {square_target} is approximately {root}')
    
    return root

# Example: Using a different method, like finding the square root using the math library.
import math
root_example = math.sqrt(25)  # This directly uses the sqrt method from the math library.
print(f'The square root of 25 is {root_example}')  # Output will be: The square root of 25 is 5.0
