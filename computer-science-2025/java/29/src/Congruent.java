import java.util.Scanner;

public class Congruent {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);

        System.out.println ("Please enter the coordinates of the 3 " +
                "vertices of the first triangle:");

        // First triangle received input part
        System.out.println ("Enter the first vertex (2 real numbers)");
        double x11 = scan.nextDouble();
        double y11 = scan.nextDouble();

        System.out.println ("Enter the second vertex (2 real numbers)");
        double x12 = scan.nextDouble();
        double y12 = scan.nextDouble();

        System.out.println ("Enter the third vertex (2 real numbers)");
        double x13 = scan.nextDouble();
        double y13 = scan.nextDouble();

        System.out.println("The first triangle is "+"("+x11+","+y11+") "+"("+x12+","+y12+") "+"("+x13+","+y13+")");
        System.out.println("Its lengths are "+".");

        // Second triangle received input part
        System.out.println ("Enter the first vertex (2 real numbers)");
        double x14 = scan.nextDouble();
        double y14 = scan.nextDouble();

        System.out.println ("Enter the second vertex (2 real numbers)");
        double x15 = scan.nextDouble();
        double y15 = scan.nextDouble();

        System.out.println ("Enter the third vertex (2 real numbers)");
        double x16 = scan.nextDouble();
        double y16 = scan.nextDouble();

        System.out.println("The second triangle is "+"("+x14+","+y14+") "+"("+x15+","+y15+") "+"("+x16+","+y16+")");
        System.out.println("Its lengths are "+".");

        System.out.println("The triangles are congruent.");
    }
}
