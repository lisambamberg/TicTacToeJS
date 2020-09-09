let cells = document.querySelectorAll(".row > div");
let currentPlayer = "X";

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}

function cellClicked() {
    event.target.textContent = currentPlayer;
    if (currentPlayer == "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
}

