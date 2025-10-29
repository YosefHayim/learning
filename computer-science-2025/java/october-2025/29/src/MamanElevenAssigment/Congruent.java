package MamanElevenAssigment;

import java.util.Scanner;

public class Congruent {

    public static void main (String[] args) {

        int firstX,firstY,secondX,secondY,thirdX,thirdY;
        int fourthX,fourthY,fifthX,fifthY,sixthX,sixthY;

        Scanner scan = new Scanner(System.in);
        System.out.println("Please provide the first triangle coordinates: ");
        firstX = scan.nextInt();
        firstY = scan.nextInt();

        secondX = scan.nextInt();
        secondY = scan.nextInt();

        thirdX = scan.nextInt();
        thirdY = scan.nextInt();

        System.out.println("Please provide the second triangle coordinates: ");
        fourthX = scan.nextInt();
        fourthY = scan.nextInt();

        fifthX = scan.nextInt();
        fifthY = scan.nextInt();

        sixthX = scan.nextInt();
        sixthY = scan.nextInt();

        // Returning to the user the final result of the two triangles
        System.out.println("The first triangle is "+"("+(firstX)+","+(firstY)+") "+
                "("+(secondX)+","+(secondY)+") "+
                "("+(thirdX)+","+(thirdY)+").");
        System.out.println("The second triangle "+"("+(fourthX)+","+(fourthY)+") "+
                "("+(fifthX)+","+(fifthY)+") "+
                "("+(sixthX)+","+(sixthY)+").");

        // Calculate lengths of the first triangle
        double a1 = Math.sqrt(Math.pow(secondX - firstX, 2) + Math.pow(secondY - firstY, 2));
        double b1 = Math.sqrt(Math.pow(thirdX - secondX, 2) + Math.pow(thirdY - secondY, 2));
        double c1 = Math.sqrt(Math.pow(firstX - thirdX, 2) + Math.pow(firstY - thirdY, 2));
        System.out.println("Its lengths are " + a1 + ", " + b1 + ", " + c1+".");

        // Calculate lengths of the second triangle
        double a2 = Math.sqrt(Math.pow(fifthX - fourthX, 2) + Math.pow(fifthY - fourthY, 2));
        double b2 = Math.sqrt(Math.pow(sixthX - fifthX, 2) + Math.pow(sixthY - fifthY, 2));
        double c2 = Math.sqrt(Math.pow(fourthX - sixthX, 2) + Math.pow(fourthY - sixthY, 2));
        System.out.println("Its lengths are " + a2 + ", " + b2 + ", " + c2+".");

        // Check if triangles are congruent (side-side-side)
        boolean congruent = (a1 == a2 || a1 == b2 || a1 == c2) &&
                (b1 == a2 || b1 == b2 || b1 == c2) &&
                (c1 == a2 || c1 == b2 || c1 == c2);

        if(congruent) {
            System.out.println("\nThe triangles are congruent.");
        } else {
            System.out.println("\nThe triangles are not congruent.");
        }
    }
}
