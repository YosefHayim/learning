import java.util.Scanner;

public class ExerciseSeven {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("Please provide the hour in format of HH: ");
        int userHourInput = scan.nextInt();

        System.out.print("Please provide the minutes in format of MM: ");
        int userMinuteInput = scan.nextInt();

        System.out.print("the display should be in format of 24 or 12?: ");
        int formatDisplay = scan.nextInt();

        // TODO: fix the bug currently for the values of hh = 10, mm = 15, 12h i am getting -2:15 PM
        if (formatDisplay == 12 && userHourInput >= 0 && userMinuteInput >= 0) {
            boolean isAMorPM = userHourInput >= 12;
            System.out.println(userHourInput - 12 + ":" + userMinuteInput + " " + (isAMorPM ? "PM" : "AM"));

        //TODO: If it is in 24h format than make sure we display properly for values that are less than 10 in hh or mm example 09:05 and not 9:5
        } else if (formatDisplay == 24 && userHourInput >= 0 && userMinuteInput >= 0) {
            System.out.println(userHourInput + ":" + userMinuteInput);

        } else {
            System.out.print("Input is not valid please provide again in HH:MM format.");
        }

    }
}
