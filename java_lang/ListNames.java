import java.util.ArrayList;

public class ListNames {
    public static void main(String[] args) {
        // Create an ArrayList to store names
        ArrayList<String> names = new ArrayList<>();

        // Add names to the list
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");
        names.add("Diana");

        // Print the names in the list
        System.out.println("List of names:");
        for (String name : names) {
            System.out.println(name);
        }
    }
}
