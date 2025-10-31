import java.util.Scanner;

//כתבו תוכנית המקבלת מהמשתמש מספר בין 1 ל ־,365 המסמל יום מתחילת השנה, ומדפיסה
//באיזה שבוע אנחנו מתחילת השנה ובאיזה יום אנחנו, בה נחה שהשנה התחילה ביום 1 )ראשון(
//        ובשבוע הראשון – .1 אם המספר גדול מ־365 או קטן מ־ 1 תודפס הודעת שגיאה. לדוגמה עבור
//                המספר 37 יודפס שבוע ,6 ויום 2 )שני( כי ביום ה ־35 הסתיימו 5 שבועות ,ולכן אנחנו בשבוע
//ה־6 ובתוכו עברו 2 ימים. כמו כן עבור המספר 35 יודפס שבוע 5 ויום 7 )שבת(.
//                                                                              .5 שכללו את התוכנית כך שהיום יודפס במילה ולא במספר. בדוגמה הקודמת יודפס שבוע 6 ויום
//                                                                              Monday. השתמשו ב־switch.

public class ExerciseFourUntilFive {
    public static void main(String[] args) {
        final int currentWeek;
        final int currentDay;
        final int YEAR_DURATION = 365;
        final int WEEK_DURATION = 7;

        Scanner scan = new Scanner(System.in);

        System.out.println("Please provie a number between 1-365");
        int userInput = scan.nextInt();

        // We first check the value is not negative or equal to 0, and it is not above 365 ays.
        if (userInput <= 0 || userInput > YEAR_DURATION) {
            System.out.println("The number you provide is not between 1-365.");
        } else {
            // Getting the current week by dividing the user input
            currentWeek = ((userInput - 1) / WEEK_DURATION) + 1;

            // Getting the current day from the reminder of the user input.
            currentDay = userInput % WEEK_DURATION;

            // Handling all the 7 days options for the user and responding properly.
            switch (currentDay) {
                case 1:
                    System.out.println("Week " + currentWeek + " and the day is Sunday");
                    break;
                case 2:
                    System.out.println("Week " + currentWeek + " and the day is Monday");
                    break;
                case 3:
                    System.out.println("Week " + currentWeek + " and the day is Tuesday");
                    break;
                case 4:
                    System.out.println("Week " + currentWeek + " and the day is Wednesday");
                    break;
                case 5:
                    System.out.println("Week " + currentWeek + " and the day is Thursday");
                    break;
                case 6:
                    System.out.println("Week " + currentWeek + " and the day is Friday");
                    break;
                case 0:
                    System.out.println("Week " + currentWeek + " and the day is Saturday");
                    break;
            }
        }

    }
}
