const cells = document.querySelectorAll('.row > div')
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
            checkBoard()
        } else {
            event.target.textContent = player2
            checkBoard()
        }
        currentTurn++
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
            } if (winCombo[i][j].textContent === player2) {
                oWinCounter++
            }
            if (xWinCounter === 3) {
                stopGame()
                winningMessageTextElement.textContent = 'X is the winner!'
                winningMessageTextElement.classList.add('show')
            }
            else if (oWinCounter === 3) {
                stopGame()
                winningMessageTextElement.textContent = 'O is the winner!'
                winningMessageTextElement.classList.add('show')
            }
            if (currentTurn > 8) {
                if (oWinCounter ==! 3 || xWinCounter ==! 3) {
                    stopGame()
                    winningMessageTextElement.textContent = 'It\'s a draw!'
                    winningMessageTextElement.classList.add('show')
                }
            }
        }
    }
}