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
// Creating variable for game related stuff
var randomIndex = Math.floor(Math.random() * champions.length);
var word = champions[randomIndex];
// //seperate the word into seperate objects
var championstr = word.split("");
var wins = 0;
var losses = 0;
var chances = 5;
var guesses = [];
var outputs = [];
var holder = [];
var lettersdiv = document.getElementById("letters");
var outputdiv = document.getElementById("output");
var letterSpan = document.createElement("span");
var resultprint = document.querySelector("#results")

//lets make blanks!
function blanks() {

  for (var i = 0; i < word.length; i++) {

    var letterSpan = document.createElement("span");
//add classes to each newly created span
    letterSpan.className = "blt" + i;
    console.log(letterSpan)
    if (word[i] ===" ") {
      letterSpan.innerHTML = "-";
    } else {
      letterSpan.innerHTML = " _ ";
 
    }
    lettersdiv.appendChild(letterSpan);
    console.log(randomIndex);
  }
}
//putting inner HTML values to the spans
function matchthis(){
  for (var i = 0; i <word.length; i++){
    var bltgrab = document.getElementsByClassName("blt"+i);
    console.log(bltgrab);
    bltgrab.innerHTML=championstr[i]
  }

    }

function displayResults(w,l,inp){
  var results = "<p>" + wins + "</p>";
  results += "<p>"+ losses + "</p>";
  results += "<p>"+ guesses + "</p>";
  resultprint.innerHTML = results;
}

blanks();
matchthis();
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
//Letter Checker Part 2
        if (-1 !== championstr.indexOf(key)){
          console.log(holder);
          holder.push(key);
          console.log(holder);
          outputdiv.innerHTML = holder;
// fill in correct blank (blt 0 - ???)
          // outputs.push(key);
          // outputdiv.innerHTML = outputs;
          displayResults();
          console.log("yay");
// okay when word is completely filled win count has to go up by one!
          }else{
            displayResults();
            console.log("nay"); }
    }else{
      console.log("what are you doing to me!");
      }
  }



// function wordcomplete(){
//   if (outputs == championstr[]){
//             console.log("wwwwwwww");
//             wins++
//             displayResults();
//           }else{
//           outputs = outputs + key;
//           outputdiv.innerHTML = outputs;
//           }
// }

// //Console Print area here so I can see whats going on
console.log(lettersdiv)
console.log(championstr);
//This is how you call a specific letter!
console.log(championstr[0]);