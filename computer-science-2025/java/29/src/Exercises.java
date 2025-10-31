import java.util.Scanner;

public class Exercises {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        // Questions 1 + 2 + 3
        System.out.println("Please provie positive number: ");
        double userInput = scan.nextDouble() * 10.0 / 10.0;
        double roundUserInput = (int)userInput;

        // If user input is above 0 (positive number) and the reminder of it is more than or equal to 0.5 we round up
        if (userInput > 0 && userInput % roundUserInput >= 0.5) {
            System.out.println(roundUserInput + 1.0);

        } else if (userInput > 0 && userInput % roundUserInput < 0.5) {
            System.out.println(roundUserInput);

            // If user input is below 0 (negative number) and the reminder of it is more than or equal to -0.5 we round down
        } else if (userInput < 0 && userInput % roundUserInput <= -0.5) {
            System.out.println(roundUserInput - 1);

        } else {
            System.out.println(roundUserInput);
        }
    }
}
