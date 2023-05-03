// Assignment code here
 
import java.util.Scanner;

class Main {
  public static void main (String[] args) {
    Scanner in = new Scanner(System.in);
    
    System.out.print("How many random passwords do you want generated?");
    int total = in.nextInt();
    System.out.print("How many characters long do you want your password to be?");
    int length = in.nextInt();
    
    String[] randomPasswords = new String[total];
    
    for(int i - 0; i < length; i++) {
      String randomPassword = "";
      for(int j = 0; j < length; j++){
    randomPassword += randomCharacter();
  }
randomsPasswords[i] = randomPassword;
    }
    
    printPasswords(randomPasswords);
    
    System.out.println(getPasswordStrength(length));
    
  }

public static String getPasswordStrength(int length) {
if(length < 5) {
  return "weak";
}else if(length < 10){
}else{
  return "strong";
}
}


public static void printPasswords(String[] arr) {
  for(int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
  }
}
public static char randomCharacter() {
  
  int rand = (int) (Math.random()*62);

  if (rand <= 9) {
   int ascii = rand += 48;
    return (char) (ascii);
    
  } else if (rand <= 35) {
    
    int ascii = rand + ;
    return (char) (ascii);
  } else {
    
    int ascii = rand + 61;
    return (char) (ascii);
  }
  
}

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



