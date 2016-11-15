//Creating the Array for all the Champions in the game as of 11-15-16
var championarr = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu" ,"Anivia" ,"Annie" ,"Ashe" , "Aurelion Sol" , "Azir" ,
    "Bard" , "Blitzcrank" , "Brand", "Braum" , "Caitlyn" , "Cassiopeia" , "Chogath" ,"Corki" , "Darius", "Diana", "Dr Mundo" ,
    "Draven", "Ekko" , "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank" ,"Garen", "Gnar", 
    "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", 
    "Jinx", "Kalista", "Karma", "Karthus", "Kassadin" , "Katarina", "Kayle","Kennen", "Khazix", "Kindred", "Kled", "Kogmaw", "Leblanc", 
    "Lee Sin", "Leona" , "Lissandra", "Lucian" , "Lulu" , "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", 
    "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Pantheon", "Poppy", "Quinn" ,
    "Rammus", "RekSai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco" , "Shen", "Shyvana", "Singed" , "Sion", "Sivir", 
    "Skarner", "Sona", "Soraka" , "Swain", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana" , "Trundle", 
    "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Vegiar", "VelKoz", "Vi", "Viktor", "Vladimir" , "Volibear" , 
    "Warwick", "Wukong", "Xerath", "Xin Zhao", "Yasuo", "Yorick", "Zac" , "Zed", "Ziggs", "Zilean", "Zyra"];
// Creating variable for game related stuff
var wins = 0;
var losses = 0;
var wguess = [];
var randomWord1 = championarr[Math.floor(Math.random()*championarr.length)];
//Console Print area here so I can see whats going on
// console.log(championarr[3]) -> Works so it seems like the championarr works
console.log(randomWord1);
//recording keystrokes written
document.onkeyup = function(event){
    var key = event.key;
   

}
//referencing document and rewriting it
weoweo("Alistar")
function weoweo (){
var display =  document.querySelector("#dummy");
    display.innerHTML= ("wekowkfowekf");
}