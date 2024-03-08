/** START Action variables */
const newGame = document.getElementById('newGame');
const rollDice = document.querySelector('.roll-dice');
const hold = document.querySelector('.hold');
/** END Action variables */

/** START display variables */
let dice = document.querySelector('img');
let globalScore1 = document.getElementById('globalScore1');
let globalScore2 = document.getElementById('globalScore2');
let roundScore1 = document.getElementById('roundScore1');
let roundScore2 = document.getElementById('roundScore2');
/** END display variables */

/** START alternatively "active" variables */
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
/** END alternatively "active" variables */

/** START storage and other needed variables */
let randomNumber = 0;
const diceFaces = [
    'assets/images/one.jpg', 'assets/images/two.jpg','assets/images/three.jpg',
    'assets/images/four.jpg','assets/images/five.jpg', 'assets/images/six.jpg'
    ];
/** END storage and other needed variables */


/** START event listeners*/
rollDice.addEventListener('click', function() {
    randomNumber = generateRandomInt();
    diceFaces.forEach(function (face, index) {
        if(randomNumber == index){
            dice.src = face;
        }
    });
    return randomNumber;
});
console.log(randomNumber);
/** END event listeners*/


/** START DOM modification */

/** END DOM modification */

/** Random number generator */
function generateRandomInt(min = 0, max = 6) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
