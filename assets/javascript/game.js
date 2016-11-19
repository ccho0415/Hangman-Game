//Creating the Array for all the Champions in the game as of 11-15-16
// this website is awesome: http://string-functions.com/case.aspx
var champions = ["AATROX", "AHRI", "AKALI", "ALISTAR", "AMUMU", "ANIVIA", "ANNIE", "ASHE", "AURELION SOL", "AZIR",
  "BARD", "BLITZCRANK", "BRAND", "BRAUM", "CAITLYN", "CASSIOPEIA", "CHOGATH", "CORKI", "DARIUS", "DIANA", "DR MUNDO",
  "DRAVEN", "EKKO", "ELISE", "EVELYNN", "EZREAL", "FIDDLESTICKS", "FIORA", "FIZZ", "GALIO", "GANGPLANK", "GAREN", "GNAR",
  "GRAGAS", "GRAVES", "HECARIM", "HEIMERDINGER", "ILLAOI", "IRELIA", "IVERN", "JANNA", "JARVAN IV", "JAX", "JAYCE", "JHIN",
  "JINX", "KALISTA", "KARMA", "KARTHUS", "KASSADIN", "KATARINA", "KAYLE", "KENNEN", "KHAZIX", "KINDRED", "KLED", "KOGMAW", "LEBLANC",
  "LEE SIN", "LEONA", "LISSANDRA", "LUCIAN", "LULU", "LUX", "MALPHITE", "MALZAHAR", "MAOKAI", "MASTER YI", "MISS FORTUNE",
  "MORDEKAISER", "MORGANA", "NAMI", "NASUS", "NAUTILUS", "NIDALEE", "NOCTURNE", "NUNU", "OLAF", "ORIANNA", "PANTHEON", "POPPY", "QUINN",
  "RAMMUS", "REKSAI", "RENEKTON", "RENGAR", "RIVEN", "RUMBLE", "RYZE", "SEJUANI", "SHACO", "SHEN", "SHYVANA", "SINGED", "SION", "SIVIR",
  "SKARNER", "SONA", "SORAKA", "SWAIN", "SYNDRA", "TAHM KENCH", "TALIYAH", "TALON", "TARIC", "TEEMO", "THRESH", "TRISTANA", "TRUNDLE",
  "TRYNDAMERE", "TWISTED FATE", "TWITCH", "UDYR", "URGOT", "VARUS", "VAYNE", "VEGIAR", "VELKOZ", "VI", "VIKTOR", "VLADIMIR", "VOLIBEAR",
  "WARWICK", "WUKONG", "XERATH", "XIN ZHAO", "YASUO", "YORICK", "ZAC", "ZED", "ZIGGS", "ZILEAN", "ZYRA"
];
//This is going to be part of the letter checker Part one
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
               "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// the champion number
var randomIndex = Math.floor(Math.random() * champions.length);
// the champion name
var word = champions[randomIndex];
//seperate the word into an array
var currentWord = word.split("");
//storing messages as objects
var resultmsg ={
  wins: "Wins:",
  losses: "Losses:",
  chances: "Chances:",
  wguesses: "Wrong Guesses:",
  cguesses: "Correct Guesses:"
}
//adding values to certain variables
var wins = 0;
var losses = 0;
var chances = 5;
var wguesses = [];
var cguesses = [];
var displayedWord = "";
// don't want repeated letters
var guesses = [];

//
var lettersMatched = cguesses.length;
//win condition
var numLettersMatch = 0;
//Creating spans

//Calling certain parts of HTML
var resultprint = document.querySelector("#results")
var lettersdiv = document.getElementById("letters");
var outputdiv = document.getElementById("output");
// added 1 span to the document and calling it here
var letterSpan = document.querySelector(".word-container");
// var bltstring = [];


//lets make blanks!
function blanks() {
  for (var i = 0; i < currentWord.length; i++) {
    console.log(letterSpan)
// if there are spaces in the word leave a space!
    if (currentWord[i] ===" ") {
      displayedWord += " ";
    } else {
      displayedWord += " _ ";
 
    }
    letterSpan.innerHTML = displayedWord;
    lettersdiv.appendChild(letterSpan);
  }
  displayedWord = "";
}

function displayResults(){
  var results = "<p>"+ resultmsg.wins + wins + "</p>" ;
  results += "<p>"+ resultmsg.losses+ losses + "</p>";
  results += "<p>"+ resultmsg.chances + chances + "</p>";
  results += "<p>"+ resultmsg.cguesses + cguesses + "</p>";
  results += "<p>"+ resultmsg.wguesses + wguesses + "</p>";

  resultprint.innerHTML = results;
}
blanks();
displayResults();
// on keystroke!
document.onkeyup = function(event){
  var key = event.key;
// check if key is within alphabet
  if (-1 !== alphabet.indexOf(key)){
  guesses.push(key.toUpperCase());
  displayedWord = "";
// check if key is within word
  if (currentWord.indexOf(event.key.toUpperCase()) !== -1) {
    cguesses.push(event.key.toUpperCase());
    numLettersMatch++;
    displayResults();
// if key is not within word
  }else{
     wguesses.push(event.key.toUpperCase());
     displayResults();
  }
// pushing correct key to blanks
  for (var i = 0; i < currentWord.length; i++) {
    if (cguesses.indexOf(currentWord[i]) !== -1) {
      displayedWord += currentWord[i];
    } else if (currentWord[i] === " ") {
      displayedWord += " ";
    } else {
      displayedWord += "_";
    }   
  }
      letterSpan.innerHTML = displayedWord;
// if key isnt in alphabet break message!
  }else{
      alert("what are you doing to me!");
      }
 
    return;

//Scrapping underneath portion ( not using it)
//proper types of keystrokes since indexof() prints out 1 if its in just got to make sure that we compare it to -1
// key === alphabet.indexOf(key)
// ex: "a" === alphabet.indexOf("a")
// "a" === 0
// so if you just plug in a
// indexOf("a") checks for the position in the array
// so it will return a number
// but key is a letter
// so they will never be equal
// you should be comparing to -1
// this part is inserted into the working code in line 89
    if (-1 !== alphabet.indexOf(key)){
      console.log("you pressed the right kind of key!");
      guesses.push(key.toUpperCase());
// this part is insert into the working code line 93
        if (-1 !== currentWord.indexOf(event.key.toUpperCase())
  // this is not working as intended 
          // || (-1 < guesses.indexOf(key))
          ){
          cguesses.push(key);
          numLettersMatch++;
          console.log(numLettersMatch);
// fill in correct blank (blt 0 - ???)
          displayResults();
          console.log("yay");
// this part is replaced in the working code line 104 (let's not make things into 
// seperate spans... that just breaks things)
          for (var i = 0; i <currentWord; i++) {
            var bltdiv = document.getElementsByClassName("blt");
            bltdiv.innerHTML = cguesses[i];
            } 
// okay when word is completely filled win count has to go up by one! this is kinda buggy
          if (numLettersMatch === currentWord.length){
            console.log("you win!")
            wins++;
            displayResults();
            }else{
            losses++;
            console.log("keep trying.")
            displayResults();
            }


          }else{
            displayResults();
            console.log("nay");
            wguesses.push(key);
          }
    }else{
      console.log("what are you doing to me!");
      }
  }
// //Console Print area here so I can see whats going on
console.log(lettersdiv)
console.log(currentWord);
//This is how you call a specific letter!
console.log(currentWord[0]);
//
//putting letter values to the spans
// function matchthis(){
//   for (var i = 0; i <word.length; i++){
//     var bltgrab = document.getElementsByClassName("blt").value=currentWord[i];
//     console.log(bltgrab)
//   }

//     }
