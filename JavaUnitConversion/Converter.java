package JavaUnitConversion;
import java.util.Scanner;

public class Converter {
  public static void main(String[] args) {
    // variables to convert
	  double cups;
    double miles;
    double pounds;
    // creating a scanner object
    Scanner input = new Scanner(System.in);
    // displaying menu selection
    menuSelection();
    // reading input from user
    int selectedMenu = Integer.parseInt(input.next());
    // looping with switch cases for each option
    while(selectedMenu < 5){      
      switch(selectedMenu){
        case 1:
          System.out.println("Enter cups");
          cups = Double.parseDouble(input.next());
          System.out.println(cups*48 + " teaspoons");
          break; 
        case 2:
          System.out.println("Enter miles");
          miles = Double.parseDouble(input.next());
          System.out.println(miles*1.60934 + " kilometers");
          break;
        case 3:
          System.out.println("Enter pounds");
          pounds = Double.parseDouble(input.next());
          System.out.println(pounds*16 + " ounces");
          break;
        case 4:
          System.out.println("Thanks for playing!");
          break;
      }
      // if option 4 is selected it will break the loop
      if (selectedMenu == 4) {
        // scanner is closed
        input.close();
        break;        
        }  
      // displays menu selection if the user didn't select               option 4 
      menuSelection();
      selectedMenu = Integer.parseInt(input.next());
    }
	}
  
  public static void menuSelection(){
    System.out.println("Please select an option:");
    System.out.println("1. Cups to Teaspoons");
    System.out.println("2. Miles to Kilometers");
    System.out.println("3. Pounds to Ounces");
    System.out.println("4. Quit");
  }

}