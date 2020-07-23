const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

let user = 'X';

const table = document.querySelector('table');
const restart = document.querySelector('#restart');
const gameBody = document.querySelector('.game');

const cells = document.querySelectorAll('td');
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        cell.textContent = user;
        cell.style.color = 'white';
        let count = 0;
        if (one.innerText === 'X' || one.innerText === 'O') {
            count++;
        }
        if (two.innerText === 'X' || two.innerText === 'O') {
            count++;
        }
        if (three.innerText === 'X' || three.innerText === 'O') {
            count++;
        }
        if (four.innerText === 'X' || four.innerText === 'O') {
            count++;
        }
        if (five.innerText === 'X' || five.innerText === 'O') {
            count++;
        }
        if (six.innerText === 'X' || six.innerText === 'O') {
            count++;
        }
        if (seven.innerText === 'X' || seven.innerText === 'O') {
            count++;
        }
        if (eight.innerText === 'X' || eight.innerText === 'O') {
            count++;
        }
        if (nine.innerText === 'X' || nine.innerText === 'O') {
            count++;
        }
        swapTurn()
        let isWonX = false;
        let isWonO = false;
        if ((one.innerText === 'X' && two.innerText === 'X' && three.innerText === 'X') || (four.innerText === 'X' && five.innerText === 'X' && six.innerText === 'X') || (seven.innerText === 'X' && eight.innerText === 'X' && nine.innerText === 'X') || (one.innerText === 'X' && four.innerText === 'X' && seven.innerText === 'X') ||
            (two.innerText === 'X' && five.innerText === 'X' && eight.innerText === 'X') || (three.innerText === 'X' && six.innerText === 'X' && nine.innerText === 'X') || (one.innerText === 'X' && five.innerText === 'X' && nine.innerText === 'X') || (three.innerText === 'X' && five.innerText === 'X' && seven.innerText === 'X')) {
            isWonX = true;
            endGame('X', isWonX)
        } else if ((one.innerText === 'O' && two.innerText === 'O' && three.innerText === 'O') || (four.innerText === 'O' && five.innerText === 'O' && six.innerText === 'O') || (seven.innerText === 'O' && eight.innerText === 'O' && nine.innerText === 'O') || (one.innerText === 'O' && four.innerText === 'O' && seven.innerText === 'O') ||
            (two.innerText === 'O' && five.innerText === 'O' && eight.innerText === 'O') || (three.innerText === 'O' && six.innerText === 'O' && nine.innerText === 'O') || (one.innerText === 'O' && five.innerText === 'O' && nine.innerText === 'O') || (three.innerText === 'O' && five.innerText === 'O' && seven.innerText === 'O')) {
            isWonO = true;
            endGame('O', isWonO)
        } else if (count === 9) {
            endGame('draw', false);
        }

    }, { once: true })
})

restart.addEventListener('click', () => {
    window.location.reload(false);
})

function swapTurn() {
    if (user === 'X') {
        user = 'O'
    } else {
        user = 'X'
    }
}

function endGame(user, situation) {
    gameBody.style.display = 'none';
    restart.style.display = 'flex'
    document.querySelector('.restartBtn').style.cssText = 'color: white; display: flex; justify-content: center; align-items: center; margin-top: 20%'
    if (user === 'X' && situation === true) {
        document.querySelector('.winner').textContent = `X won`
        document.querySelector('.winner').style.cssText = 'color: white; display: block; text-align:center; margin-bottom: -10%; font-size: 45px; font-weight: 800; text-decoration: underline'
    } else if (user === 'O' && situation === true) {
        document.querySelector('.winner').textContent = `O won`
        document.querySelector('.winner').style.cssText = 'color: white; display: block; text-align:center; margin-bottom: -10%; font-size: 45px; font-weight: 800; text-decoration: underline'
    } else if (user === 'draw' && situation === false) {
        document.querySelector('.winner').textContent = `Nobody won`
        document.querySelector('.winner').style.cssText = 'color: white; display: block; text-align:center; margin-bottom: -10%; font-size: 45px; font-weight: 800; text-decoration: underline'
    }
}
