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

// Creating variable for game related stuff
var randomIndex = Math.floor(Math.random() * champions.length);
var display = document.querySelector("#letters");

var word = champions[randomIndex];
var textTyped = " ";
var wins = 0;
var losses = 0;
var chances = 5;

var lettersdiv = document.getElementById("letters");

console.log(lettersdiv)




// //seperate the word into seperate objects
var championstr = word.split("");
// //Console Print area here so I can see whats going on
// // console.log(championarr[3]) -> Works so it seems like the championarr works
// // console.log(randomIndex);
// // console.log(weoweo);
console.log(championstr);
//lets make blanks!

function blanks() {

  for (var i = 0; i < word.length; i++) {

    var letterSpan = document.createElement("span");
    console.log(letterSpan)
    if (word[i] === " ") {
      letterSpan.innerHTML = " ";
    } else {
      letterSpan.innerHTML = " _ ";
    }


    lettersdiv.appendChild(letterSpan);

    console.log(randomIndex);
  }

}
blanks();
  // //recording keystrokes written
  // document.onkeyup = function(event){
  //     var key = event.key;


//     if ((textTyped == championstr)){
//         console.log("you pressed the right key!")
//         wins ++;
//         document.querySelector("#wins").innerHTML = wins;
//         ranNum = Math.floor(Math.random()*champions.length);
//         // Add append option
//     } else{
//         textTyped = textTyped + key;
//         document.querySelector("#output").innerHTML = textTyped;
//     }



// }
//referencing document and rewriting it


// //display the word
// function displayrandomIndex(string){
//     var string = "<p>" + randomIndex + "</p>";
//     display.innerHTML = string;
// }