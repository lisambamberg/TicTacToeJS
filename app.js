const cells = document.querySelectorAll('.row > div')
let gameOver = false
const player1 = 'X'
const player2 = 'O'
const winCombo = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]]
]
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let currentTurn = 0

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', startGame)
}

function startGame() {
    if (event.target.textContent === '') {
        if (currentTurn % 2 == 0) {
            event.target.textContent = player1
            currentTurn++
            checkBoard()
        } else {
            event.target.textContent = player2
            currentTurn++
            checkBoard()
        }
    }
}

function stopGame() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', startGame)
        document.body.addEventListener('click', function () {
            location.reload()
        }, true)
    }
}

const checkBoard = function checkBoard() {
    for (let i = 0; i < winCombo.length; i++) {
        let xWinCounter = 0
        let oWinCounter = 0
        for (let j = 0; j < winCombo[i].length; j++) {
            if (winCombo[i][j].textContent === player1) {
                xWinCounter++
            }
            else if (winCombo[i][j].textContent === player2) {
                oWinCounter++
            }
        }
        if (xWinCounter == 3) {
            gameOver = true
            stopGame()
            winningMessageTextElement.textContent = 'X is the winner! Click to play again!'
            winningMessageTextElement.classList.add('show')
        } else if (oWinCounter == 3) {
            gameOver = true
            stopGame()
            winningMessageTextElement.textContent = 'O is the winner! Click to play again!'
            winningMessageTextElement.classList.add('show');
        }
    }
    if (currentTurn == 9 && !gameOver) {
        stopGame()
        winningMessageTextElement.textContent = 'It\'s a draw! Click to play again!'
        winningMessageTextElement.classList.add('show')
    }
}