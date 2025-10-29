import java.util.Scanner;
public class Triangle
{
    // This main preforms the follow:
    // STEP 1: Requesting from the user for 3 integer inputs one after the other.
    // STEP 1.1: Two conditions are being checked in the main method.
    // STEP 1.2: If the three inputs are not equal to 0 or a negative number we proceed to the next check.
    // STEP 1.3: If The values of the two lengths provided from the user are
    // bigger than the third one we are comparing 3 times than we proceed to the calculation.
    // STEP 1.4: We return to the user a final print with the final results of triangle permieter and the triangle area.

     public static void main (String [] args)
    {
        final int trianglePerimeter;
        final double triangleArea;
        int calculationOfArea;

        Scanner scan = new Scanner (System.in);
        System.out.println ("This program calculates the area "
                + "and the perimeter of a given triangle. ");

        System.out.println ("Please enter the three lengths"
                + " of the triangle's sides");

        int a = scan.nextInt();
        int b = scan.nextInt();
        int c = scan.nextInt();

        // Cases where the input of user is not valid, and we need to return proper message.

        // CASE 1: If the inputs are equal to 0 or negative.
        if (a <= 0 || b <= 0 || c <= 0) {
            System.out.println("One of the length you provided is negative or equal to 0 and cannot be calculate the triangle perimeter and area, please try again.");

        // CASE 2: If the sum of two inputs is not bigger then the third input.
        } else if (!(a + b > c && a + c > b && b + c > a)) {
            System.out.println("The lengths of the triangle you provided are not a triangle, please try again. ");
        } else {
            // Calculating the triangle perimeter
            trianglePerimeter = a + b + c;
            double s = trianglePerimeter / 2.0;

            // Calculating the triangle area
            triangleArea = Math.sqrt(s * (s - a) * (s - b) * (s - c));

            // Printing to the user the final results based on the three inputs he provided.
            System.out.println("The Triangle area is: "+ triangleArea+"\nThe Triangle perimeter is: "+trianglePerimeter);
        }
    }
}