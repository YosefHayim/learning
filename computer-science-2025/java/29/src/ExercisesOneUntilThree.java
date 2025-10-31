import java.util.Scanner;

//כתבו תוכנית המקבלת מהמשתמש מספר ממשי חיובי ומדפיסה למסך את המספר השלם
//המעוגל שלו )השלם הקרוב לו(. אין להשתמש בפעולות של המחלקה Math, אלא רק בפעולות
//        חשבון והמרות )casting). לדוגמה, אם המשתמש הקליד 10.5 התוכנית תדפיס ,11 ואם
//המשתמש הקליד 10.2 התוכנית תדפיס .10
//        .2 שכללו את התוכנית כך שתוכל להתמודד גם עם מספרים שליליים. לדוגמה, אם הוקלד ,-4.7
//התוכנית תדפיס .-5
//        .3 שכללו את התוכנית כך שתדפיס את המספר המעוגל לעשיריות, כלומר ספרה אחת אחרי
//הנקודה. רמז – הכפלה ב ־10 לפני העיגול, ולאחריו חלוקה ב־.10

public class ExercisesOneUntilThree {
    public static void main(String[] args) {

        final double TEN = 10.0;
        final double HALF_NUM = 0.5;
        final double ONE = 1.0;

        Scanner scan = new Scanner(System.in);
        System.out.println("Please provie a number: ");

        double userInput = scan.nextDouble() * TEN / TEN;
        double roundUserInput = (int) userInput;

        // If user input is above 0 (positive number) and the reminder of it is more than or equal to 0.5 we round up
        if (userInput > 0 && userInput % roundUserInput >= HALF_NUM) {
            System.out.println(roundUserInput + ONE);

        } else if (userInput > 0 && userInput % roundUserInput < HALF_NUM) {
            System.out.println(roundUserInput);

            // If user input is below 0 (negative number) and the reminder of it is more than or equal to -0.5 we round down
        } else if (userInput < 0 && userInput % roundUserInput <= -HALF_NUM) {
            System.out.println(roundUserInput - ONE);

            // In case none of the conditions met.
        } else {
            System.out.println(roundUserInput);
        }

    }
}
