let cells = document.querySelectorAll(".row > div");
let player1 = "X";
let player2 = "O";
let gameBoard = [["", "", ""], ["", "", ""], ["", "", ""]];

let currentTurn = 0;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}

function cellClicked() {
    if (event.target.textContent === "") {
        if (currentTurn % 2 == 0) {
            event.target.textContent = player1;
        } else {
            event.target.textContent = player2;
        }
        currentTurn++;
    }
}
