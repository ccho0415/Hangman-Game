//Creating the Array for all the Champions in the game as of 11-15-16
var champions = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Aurelion Sol", "Azir",
  "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Cassiopeia", "Chogath", "Corki", "Darius", "Diana", "Dr Mundo",
  "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar",
  "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin",
  "Jinx", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kennen", "Khazix", "Kindred", "Kled", "Kogmaw", "Leblanc",
  "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune",
  "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Pantheon", "Poppy", "Quinn",
  "Rammus", "RekSai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir",
  "Skarner", "Sona", "Soraka", "Swain", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle",
  "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Vegiar", "VelKoz", "Vi", "Viktor", "Vladimir", "Volibear",
  "Warwick", "Wukong", "Xerath", "Xin Zhao", "Yasuo", "Yorick", "Zac", "Zed", "Ziggs", "Zilean", "Zyra"
];
var input = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Creating variable for game related stuff
var randomIndex = Math.floor(Math.random() * champions.length);
var word = champions[randomIndex];
// var textTyped = " ";
var wins = 0;
var losses = 0;
var chances = 5;
var guesses = [];

var lettersdiv = document.getElementById("letters");


console.log(lettersdiv)




// //seperate the word into seperate objects
var championstr = word.split("");
// //Console Print area here so I can see whats going on
// // console.log(championarr[3]) -> Works so it seems like the championarr works
// // console.log(randomIndex);
// // console.log(weoweo);
console.log(championstr);
//This is how you call a specific letter!
console.log(championstr[0]);
//lets make blanks!

function blanks() {

  for (var i = 0; i < word.length; i++) {

    var letterSpan = document.createElement("span");
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
blanks();
  // //recording keystrokes written
  document.onkeyup = function(event){
      var key = event.key;
      if (key == input[0]){
        guesses.push(key);
        console.log("you pressed the right kind of key!");
      } else{
        console.log("what are you doing to me!");
      }

        
       
        // Add append option
    } 

    //   if (key == championstr) {
    //     console.log("you pressed the right key!");
    //     }else{
    //     console.log("nope");
    // }

    //   } 


//referencing document and rewriting it


// //display the word
// function displayrandomIndex(string){
//     var string = "<p>" + randomIndex + "</p>";
//     display.innerHTML = string;
// }