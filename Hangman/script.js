let word = prompt("Welcome to Hangman! Player 1, please enter a word for Player 2 to guess.");
    if (word.length>0) 
      word = word.toUpperCase();
//prompts player to input a word to be guessed by player two. The word will be uppercased once entered

let revealedLetters = new Array(word.length);
revealedLetters.fill("-");
drawWordProgress(revealedLetters.toString());
//allows for the dashes to appear above the text box so player two knows how many letters are in the correct word

const maxStrikes = 6; 
let strikes = 0;
let strikeLetters = new Array(maxStrikes);

function drawStrikeLetters() {
  let incorrect =  document.getElementById("incorrect");
 incorrect.innerHTML = strikeLetters.toString().replaceAll(',','');
  //will fill the incorrect letter above the text box and dashes(-)
}

function drawWordProgress(stringToDisplay) {
  document.getElementById("revealedText").innerHTML = stringToDisplay.replaceAll(',','');
  //will fill in the letter guessed correctly
}
document.getElementById("myForm").addEventListener("keypress", function(e){
  var key = e.charCode || e.keyCode || 0;     
    if (key == 13) {
       e.preventDefault();
      //will prevent user from using enter button, sorry i had to find the "var"     
      //portion through google. 
    }
  }
)

function drawGallows() {
  var myImage = document.getElementById("gallow");
  console.log("images/strike-" + strikes +".png");
  myImage.src = "images/strike-" + strikes +".png";
  //Will invoke the images to display for each limb on the gallow that corresponds to the guess attempt 
}

document.getElementById("guessbtn").addEventListener("click", processGuess);
// on click will preform the processGuess function writtten below

function processGuess(e) {
  let guessedRight = false;
  let textbox1 = document.getElementById("attempt");
  var guess = textbox1.value.toUpperCase();

  if(strikes< maxStrikes){
    for (var i=0; i<= word.length ; i++){
      if (word.substring(i,i+1) == guess){
        revealedLetters[i] = guess; 
        guessedRight = true;
      }  
    }    
    if (guessedRight) {
     drawWordProgress(revealedLetters.toString()); 
    }
    else{
      //drawhangman
      strikes++;
      strikeLetters[strikes] = guess;
      drawStrikeLetters();
      drawGallows();
      console.log(strikes);
      // if the guess is incorrect then it will draw a new limb on the gallows and the incorrect letter will be displayed on the screen
    }
  }
  else
 { 
    alert("Game Over!!!");
    textbox1.disabled =true;
    document.getElementById("guessbtn").disabled = true;
    //Game will end once the max amount of guesses are used and alert made that the game is over. Will also disable the guess button and text box
    }
 
   if(word.toUpperCase() == revealedLetters.toString().replaceAll(',','').toUpperCase()) {
     alert("You Win!!!");
     textbox1.disabled =true;
    document.getElementById("guessbtn").disabled = true;
     //Will alert "You Win!!!" once player two enters all of the letters for the correct word, then it will disable the text box and guess button
   }  
  
  textbox1.value = "";
  textbox1.focus();
  //Will bring cursor back to the text box after each guess and will leave the input blank prior to entering a new letter
 }