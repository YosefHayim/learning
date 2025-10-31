//כתבו תוכנית המבקשת מהמשתמש מספר תלת־ספרתי חיובי. אם המספר הוא תלת־ספרתי
//חיובי, התוכנית תדפיס את סכום ספרותיו, אחרת – התוכנית תדפיס הודעת שגיאה.

import java.util.Scanner;

public class ExerciseSix {
    public static void main(String[] args) {

        // Final variables since they are not going to be change and are always the same.
        final int NUMBER_LENGTH = 3;
        final int MINIMUM_NUMBER = 100;
        final int MAXIMUM_NUMBER = 999;
        final int HUNDRED = 100;
        final int TEN = 10;
        final int SUM;

        Scanner scan = new Scanner(System.in);

        System.out.println("Please provide a multi digit positive number: ");
        int userInput = scan.nextInt();

        String userInputConvertedToString = String.valueOf(userInput);

        // Converting the user input into string to check the length if it is okay or not.
        if (userInputConvertedToString.length() == NUMBER_LENGTH && userInput >= MINIMUM_NUMBER && userInput <= MAXIMUM_NUMBER) {
            SUM = (userInput / HUNDRED) + ((userInput / TEN) % TEN) + (userInput % TEN);
            System.out.println(SUM);
        } else {
            System.out.println("The number provide is not multi number, please provide a multi positive number");
        }
    }
}
