let cells = document.querySelectorAll(".row > div");
let player1 = "X";
let player2 = "O";

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}

function cellClicked() {
    event.target.textContent = "X";
}

function playerTurn() {
    
}

function winCombo() {

}
function resetBoard() {

}