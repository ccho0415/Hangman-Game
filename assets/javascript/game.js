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
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// the champion number
var randomIndex = Math.floor(Math.random() * champions.length);
// the champion name
var word = champions[randomIndex];
//seperate the word into an array
var championstr = word.split("");
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
// don't want repeated letters
var guesses = [];

//
var lettersMatched = [];
//win condition
var numLettersMatch = 0;
//Creating spans
var letterSpan = document.createElement("span");
//Calling certain parts of HTML
var resultprint = document.querySelector("#results")
var lettersdiv = document.getElementById("letters");
var outputdiv = document.getElementById("output");
var bltstring = [];


//lets make blanks!
function blanks() {

  for (var i = 0; i < word.length; i++) {

    var letterSpan = document.createElement("span");
//add classes to each newly created span
    letterSpan.className = "blt";
    console.log(letterSpan)
    if (word[i] ===" ") {
      letterSpan.innerHTML = "-";
    } else {
      letterSpan.innerHTML = " _ ";
 
    }
    lettersdiv.appendChild(letterSpan);
  }
}
//putting letter values to the spans
function matchthis(){
  for (var i = 0; i <word.length; i++){
    var bltgrab = document.getElementsByClassName("blt").value=championstr[i];
    console.log(bltgrab)
  }

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
matchthis();
displayResults();
// keystrokes!
document.onkeyup = function(event){
  var key = String.fromCharCode(event.keyCode);
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
//Letter Checker Part 1
    if (-1 !== alphabet.indexOf(key)){
      console.log("you pressed the right kind of key!");
      guesses.push(key);
//Letter Checker Part 2
        if (-1 !== championstr.indexOf(key)
  // this is not working as intended 
          // || (-1 < guesses.indexOf(key))
          ){
          cguesses.push(key);
          numLettersMatch++;
          console.log(numLettersMatch);
// fill in correct blank (blt 0 - ???)
          // outputs.push(key);
          // outputdiv.innerHTML = outputs;
          displayResults();
          console.log("yay");
          var bltdiv = document.getElementsByClassName("blt");
            bltdiv.innerHTML = key;
// okay when word is completely filled win count has to go up by one! this is kinda buggy
          if (numLettersMatch === championstr.length){
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
console.log(championstr);
//This is how you call a specific letter!
console.log(championstr[0]);