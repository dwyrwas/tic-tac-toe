/*let xTurn = true;
let oTurn = false;

function handleCellClick(e){
    const box = e.target;
    placeMark(box);
}

function placeMark(box) {
    box.textContent = "X";

}

class Game {
    constructor(){
        this.playerTurn = "X";
        this.board = [[],[],[]];
    }

    changeSquare(targetValue, playerTurn){
        if (!targetValue && this.playerTurn === "O"){
            targetValue = "O";
            playerTurn = "X";
        } if (!targetValue && this.playerTurn === "X") {
            targetValue = "X";
            playerTurn = "O";
        } else {
            alert("Please select another box.");
        }
    }
}

const boxes = document.querySelectorAll('div.box');
boxes.forEach(element => {
    element.addEventListener('click', handleCellClick(e))
    })
}); 
*/

let gameActive = true;
let currentPlayer = "X";
let gameState = ['','','','','','','','',''];
const winningMessage = () => `Player ${currentPlayer} has won!`;

function handleCellPlayed(){

}

function handlePlayerChange(){

}

function handleResultValidtion(){

}

function handleCellClick(){

}


