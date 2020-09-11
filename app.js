let cells = document.querySelectorAll(".row > div");
let player1 = "X";
let player2 = "O";
let gameBoard = [["", "", ""], ["", "", ""], ["", "", ""]];
let winCombo = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]]
];
let winningMessageTextElement = document.querySelector('[data-winning-message-text]');
let currentTurn = 0;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", startGame);
}

function startGame() {
    if (event.target.textContent === "") {
        if (currentTurn % 2 == 0) {
            event.target.textContent = player1;
            checkBoard();
        } else {
            event.target.textContent = player2;
            checkBoard();
        }
        currentTurn++;
    }
}

let checkBoard = function checkBoard() {
    for (let i = 0; i < winCombo.length; i++) {
        let xWinCounter = 0;
        let oWinCounter = 0;
        for (let j = 0; j < winCombo[i].length; j++) {
            if (winCombo[i][j].textContent === player1) {
                xWinCounter++;
            } else if (winCombo[i][j].textContent === player2) {
                oWinCounter++;
            } else if (winCombo.textContent !== player1 && currentTurn == 9 || winCombo.textContent !== player2 && currentTurn == 9) {
                winningMessageTextElement.textContent = "It's a draw!";
                winningMessageTextElement.classList.add('show');
            } if (xWinCounter === 3) {
                winningMessageTextElement.textContent = "X is the winner!";
                winningMessageTextElement.classList.add('show');
            } else if (oWinCounter === 3) {
                winningMessageTextElement.textContent = "O is the winner!";
                winningMessageTextElement.classList.add('show');
            }
        }
    }
}

