import java.util.Scanner;

public class Congruent {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);

        // First triangle final values for calculating the lengths.
        final double ab;
        final double bc;
        final double ca;

        // Second triangle final values for calculating the lengths.
        final double de;
        final double ef;
        final double fd;

        // Does the triangle sides we found match for each of the triangles sides.
        final boolean isFirstSideMatch;
        final boolean isSecSideMatch;
        final boolean isThirdSideMatch;

        System.out.println ("Please enter the coordinates of the 3 " +
                "vertices of the first triangle:");

        // First triangle input received
        System.out.println ("Enter the first vertex (2 real numbers)");
        double x11 = scan.nextDouble();
        double y11 = scan.nextDouble();

        System.out.println ("Enter the second vertex (2 real numbers)");
        double x12 = scan.nextDouble();
        double y12 = scan.nextDouble();

        System.out.println ("Enter the third vertex (2 real numbers)");
        double x13 = scan.nextDouble();
        double y13 = scan.nextDouble();

        // Second triangle input received.
        System.out.println ("Enter the first vertex (2 real numbers)");
        double x14 = scan.nextDouble();
        double y14= scan.nextDouble();

        System.out.println ("Enter the second vertex (2 real numbers)");
        double x15 = scan.nextDouble();
        double y15 = scan.nextDouble();

        System.out.println ("Enter the third vertex (2 real numbers)");
        double x16 = scan.nextDouble();
        double y16 = scan.nextDouble();

        // First triangle print
        System.out.println("The first triangle is "+"("+x11+","+y11+") "+"("+x12+","+y12+") "+"("+x13+","+y13+")"+".");
        ab = Math.sqrt(Math.pow((x11-x12),2) + Math.pow((y11-y12),2));
        bc = Math.sqrt(Math.pow((x12-x13),2) + Math.pow((y12-y13),2));
        ca = Math.sqrt(Math.pow((x11-x13),2) + Math.pow((y11-y13),2));
        //First triangle calculate the lengths.
        System.out.println("Its lengths are "+ab+" "+bc+" "+ca);

        // Second triangle print
        System.out.println("The second triangle is "+"("+x14+","+y14+") "+"("+x15+","+y15+") "+"("+x16+","+y16+")"+".");
        de = Math.sqrt(Math.pow((x14-x15),2) + Math.pow((y14-y15),2));
        ef = Math.sqrt(Math.pow((x15-x16),2) + Math.pow((y15-y16),2));
        fd = Math.sqrt(Math.pow((x14-x16),2) + Math.pow((y14-y16),2));
        //Second triangle calculate the lengths.
        System.out.println("Its lengths are "+de+" "+ef+" "+fd);

        // Comparing between each of the triangle sides we have against the second triangle sides,
        // If at least one triangle side match the other means it could be a matching triangles.
        isFirstSideMatch = ab == de || ab == ef || ab == fd;
        isSecSideMatch = bc == de || bc == ef || bc == fd;
        isThirdSideMatch = ca == de || ca == ef || ca == fd;

        // if the triangle is congruent.
        if (isFirstSideMatch && isSecSideMatch && isThirdSideMatch) {
        System.out.println("The triangles are congruent.");
        // else the triangle is not congruent.
        } else {
        System.out.println("The triangles are not congruent.");

        }
    }
}
