var randomLoc=Math.floor (Math.random()*5);
var location1=randomLoc;
var location2=location1+1;
var location3=location2+1;

var guess;
var hits=0;
var guesses=0;

var isSunk=false;

var hitsmass=[];

while (isSunk==false) {
    guess=prompt("Привет! Это мини-игра в морской бой. Представь, что тебе нужно потопить трёхпалубный корабль на семи клетках игрового поля. Твой выстрел (введи число из диапазона 0-6):");
    if (guess<0 || guess>6) {
        alert ("Пожалуйста, введи корректное число!");
    } else {
        guesses=guesses+1;

        if (guess==location1 || guess==location2 || guess==location3) {
            hits=hits+1;
                if (hits>1) {
                    index=hitsmass.indexOf(guess);
                        if (index>-1) {
                        hits=hits-1;
                        alert ("Ты уже стрелял в эту палубу");   
                        } else {
                        alert ("ПОПАЛ");
                        hitsmass.push (guess);
                        }
                    } else {
                    hitsmass.push (guess);
                    alert ("ПОПАЛ")
                }           
            if (hits==3) {
                isSunk=true;
                alert ("Поздравляю, корабль потоплен!");
            }    
        
        } else {
            alert ("МИМО") 
            }                                                  
    }
}
var stats = `Ты сделал (-а) ${guesses} выстрел (-а,-ов), эффективность твоих попаданий ${3 / guesses*100}%!`;
alert (stats);
