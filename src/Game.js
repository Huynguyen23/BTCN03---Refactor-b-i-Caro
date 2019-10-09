import React from 'react';
import './Game.css';
import Board from './components/Board';
import Reverse from './components/Reverse';

let winList = [];

function checkWin(squares, x, y, chieu) {
    const x1 = x;
    const y1 = y;
    switch (chieu) {
        // "u"
        case 1:
            if (x1 > 0 && squares[(x1 - 1) * 20 + y1] === squares[x1 * 20 + y1]) {
                return checkWin(squares, x1 - 1, y1, 1) + 1;
            }
            break;
        // "d"
        case 2:
            if (x1 > 0 && x1 < 19 && squares[(x1 + 1) * 20 + y1] === squares[x1 * 20 + y1]) {
                return checkWin(squares, x1 + 1, y1, 2) + 1;
            }
            break;
        // "l"
        case 3:
            if (y1 > 0 && squares[x1 * 20 + (y1 - 1)] === squares[x1 * 20 + y1]) {
                return checkWin(squares, x1, y1 - 1, 3) + 1;
            }
            break;
        // "r"
        case 4:
            if (y1 > 0 && y1 < 19 && squares[x1 * 20 + (y1 + 1)] === squares[x1 * 20 + y1]) {
                return checkWin(squares, x1, y1 + 1, 4) + 1;
            }
            break;
        // "lu"
        case 5:
            if (y1 > 0 && x1 > 0 && squares[(x1 - 1) * 20 + (y1 - 1)] === squares[x1 * 20 + y1]) {
                return checkWin(squares, x1 - 1, y1 - 1, 5) + 1;
            }
            break;
        // "ld"
        case 6:
            if (x1 < 19 && y1 > 0 && squares[(x1 + 1) * 20 + (y1 - 1)] === squares[x1 * 20 + y1]) {
                return checkWin(squares, x1 + 1, y1 - 1, 6) + 1;
            }
            break;
        // "ru"
        case 7:
            if (x1 > 0 && y1 < 19 && squares[(x1 - 1) * 20 + (y1 + 1)] === squares[x1 * 20 + y1]) {
                return checkWin(squares, x1 - 1, y1 + 1, 7) + 1;
            }
            break;
        // "rd"
        case 8:
            if (x1 < 19 && y1 < 19 && squares[(x1 + 1) * 20 + (y1 + 1)] === squares[x1 * 20 + y1]) {
                return checkWin(squares, x1 + 1, y1 + 1, 8) + 1;
            }
            break;
        default:
            break;
    }
    return 0;
} 

function calculateWinner(squares, i) {
    let x;
    let y;
    if (i !== -1) {
        x = Math.floor(i / 20);
        y = i % 20;
        winList = [];
        const list = [squares[i], null];

        if (checkWin(squares, x, y, 1) === 4 && (list.includes(squares[(x - 5) * 20 + y]) || list.includes(squares[(x + 1) * 20 + y]))) {
            winList.push(i, i - 20, i - 40, i - 60, i - 80);
            return squares[i];
        }
        if (checkWin(squares, x, y, 2) === 4 && (list.includes(squares[(x + 5) * 20 + y]) || list.includes(squares[(x - 1) * 20 + y]))) {
            winList.push(i, i + 20, i + 40, i + 60, i + 80);
            return squares[i];
        }
        if (checkWin(squares, x, y, 3) === 4 && (list.includes(squares[x * 20 + (y - 5)]) || list.includes(squares[x * 20 + (y + 1)]))) {
            winList.push(i, i - 1, i - 2, i - 3, i - 4);
            return squares[i];
        }
        if (checkWin(squares, x, y, 4) === 4 && (list.includes(squares[x * 20 + (y + 5)]) || list.includes(squares[x * 20 + (y - 1)]))) {
            winList.push(i, i + 1, i + 2, i + 3, i + 4);
            return squares[i];
        }
        if (checkWin(squares, x, y, 5) === 4 && (list.includes(squares[(x - 5) * 20 + (y - 5)]) || list.includes(squares[(x + 1) * 20 + (y + 1)]))) {
            winList.push(i, i - 21, i - 42, i - 63, i - 84);
            return squares[i];
        }
        if (checkWin(squares, x, y, 6) === 4 && (list.includes(squares[(x + 5) * 20 + (y - 5)]) || list.includes(squares[(x - 1) * 20 + (y + 1)]))) {
            winList.push(i, i + 19, i + 38, i + 57, i + 76);
            return squares[i];
        }
        if (checkWin(squares, x, y, 7) === 4 && (list.includes(squares[(x - 5) * 20 + (y + 5)]) || list.includes(squares[(x + 1) * 20 + (y - 1)]))) {
            winList.push(i, i - 19, i - 38, i - 57, i - 76);
            return squares[i];
        }
        if (checkWin(squares, x, y, 8) === 4 && (list.includes(squares[(x + 5) * 20 + (y + 5)]) || list.includes(squares[(x - 1) * 20 + (y - 1)]))) {
            winList.push(i, i + 21, i + 42, i + 63, i + 84);
            return squares[i];
        }
        if (checkWin(squares, x, y, 1) + checkWin(squares, x, y, 2) === 4 && (list.includes(squares[(x - checkWin(squares, x, y, 1) - 1) * 20 + y]) || list.includes(squares[(x + checkWin(squares, x, y, 2) + 1) * 20 + y]))) {
            let tmp1 = checkWin(squares, x, y, 1);
            let tmp2 = checkWin(squares, x, y, 2);
            let tmp3 = i;
            let tmp4 = i;
            winList.push(i);
            while (tmp1 > 0 && tmp2 > 0) {
                if (tmp1 > 0) {
                    winList.push(tmp3 - 20);
                    tmp3 -= 20;
                    tmp1-=1;
                }
                if (tmp2 > 0) {
                    winList.push(tmp4 + 20);
                    tmp4 += 20;
                    tmp2-=1;
                }
            }
            return squares[i];

        }
        if (checkWin(squares, x, y, 3) + checkWin(squares, x, y, 4) === 4 && (list.includes(squares[x * 20 + (y - checkWin(squares, x, y, 3) - 1)]) || list.includes(squares[x * 20 + (y + checkWin(squares, x, y, 4) + 1)]))) {
            let tmp1 = checkWin(squares, x, y, 3);
            let tmp2 = checkWin(squares, x, y, 4);
            let tmp3 = i;
            let tmp4 = i;
            winList.push(i);
            while (tmp1 > 0 || tmp2 > 0) {
                if (tmp1 > 0) {
                    winList.push(tmp3 - 1);
                    tmp3 -= 1;
                    tmp1-=1;
                }
                if (tmp2 > 0) {
                    winList.push(tmp4 + 1);
                    tmp4 += 1;
                    tmp2-=1;
                }
            }
            return squares[i];
        }
        if (checkWin(squares, x, y, 5) + checkWin(squares, x, y, 8) === 4 && (list.includes(squares[(x - checkWin(squares, x, y, 5) - 1) * 20 + (y - checkWin(squares, x, y, 5) - 1)]) || list.includes(squares[(x + checkWin(squares, x, y, 8) + 1) * 20 + (y + checkWin(squares, x, y, 8) + 1)]))) {
            let tmp1 = checkWin(squares, x, y, 5);
            let tmp2 = checkWin(squares, x, y, 8);
            let tmp3 = i;
            let tmp4 = i;
            winList.push(i);
            while (tmp1 > 0 && tmp2 > 0) {
                if (tmp1 > 0) {
                    winList.push(tmp3 - 21);
                    tmp3 -= 21;
                    tmp1-=1;
                }
                if (tmp2 > 0) {
                    winList.push(tmp4 + 21);
                    tmp4 += 21;
                    tmp2-=1;
                }
            }
            return squares[i];
        }
        if (checkWin(squares, x, y, 6) + checkWin(squares, x, y, 7) === 4 && (list.includes(squares[(x + checkWin(squares, x, y, 6) + 1) * 20 + (y - checkWin(squares, x, y, 6) - 1)]) || list.includes(squares[(x - checkWin(squares, x, y, 7) - 1) * 20 + (y + checkWin(squares, x, y, 7) + 1)]))) {
            let tmp1 = checkWin(squares, x, y, 6);
            let tmp2 = checkWin(squares, x, y, 7);
            let tmp3 = i;
            let tmp4 = i;
            winList.push(i);
            while (tmp1 > 0 && tmp2 > 0) {
                if (tmp1 > 0) {
                    winList.push(tmp3 + 19);
                    tmp3 += 19;
                    tmp1-=1;
                }
                if (tmp2 > 0) {
                    winList.push(tmp4 - 19);
                    tmp4 -= 19;
                    tmp2-=1;
                }
            }
            return squares[i];
        }
    }
    return null;
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{ value: Array(2).fill(null) }],
            stepNumber: 0,
            i: -1,
            reversed: false,
            xIsNext: true,
            won: false,
        };
    }

    onClickReverseParent() {
        const {history} = this.state;
        const {reversed} = this.state;
        const histories = history.slice(1, history.length);
        histories.reverse();
        const value = [null,null];
       
        // eslint-disable-next-line object-shorthand
        histories.unshift({value : value});
        this.setState({
            history: histories,
            reversed: !reversed,
        })
    }

    handleClick(i){
        const {stepNumber,history,won,xIsNext} = this.state;
        const histories = history.slice(0, stepNumber + 1);
        const squares = Array(400).fill(null);
        const {reversed} = this.state;
        let tmp = 0;
   
    if (reversed) {
        tmp = 1;
    }
    for (let idn = tmp; idn <= stepNumber; idn+=1) {
        // eslint-disable-next-line prefer-destructuring
        squares[history[idn].value[0]] = history[idn].value[1];
    }

    if (won || squares[i]) {
        return;
    }
    squares[i] = xIsNext ? 'X' : 'O';

    const value = [];
    value.push(i, squares[i]);
    if (reversed) {
        // eslint-disable-next-line object-shorthand
        histories.splice(1,0,{value:value});
        this.setState({
            history: histories,
            stepNumber: history.length,
            xIsNext: !xIsNext,
            i,
        });
    } else {
        this.setState({
            history: histories.concat([{
                // eslint-disable-next-line object-shorthand
                value: value,
            }]),
            stepNumber: histories.length,
            xIsNext: !xIsNext,
            i,
        });
    }
}

    jumpTo(step) {
        winList = [];
        this.setState({
            stepNumber: step,
            won: false,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const { history, reversed, stepNumber, xIsNext } = this.state;

        const squares = Array(400).fill(null);
        let moves = [];
        const { i } = this.state;

        if (reversed) {
            for (let idn = (history.length-stepNumber); idn < history.length; idn+=1) {
            
                if(history[idn].value[0]!==null){
                    // eslint-disable-next-line prefer-destructuring
                    squares[history[idn].value[0]] = history[idn].value[1];
                }
    
            }
            moves = history.map((step, move) => {
                const backgroundBtn = (move === (history.length - stepNumber) && stepNumber !== 0) ?
                    "btn-chosen" :
                    "btn-play";
                const desc = move ?
                `Go to move ${ history.length - move  } (${  Math.floor(step.value[0] / 20)  }:${  step.value[0] % 20  })` :
                    'Go to game start';
                return (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key = {move}>
                        <button type='button' className={backgroundBtn} onClick={() => this.jumpTo(history.length - move)}>{desc}</button>
                    </li>
                )
            });
        }
        else {
            for (let idn = 0; idn <= stepNumber; idn+=1) {
            
                if(history[idn].value[0]!==null){
                    // eslint-disable-next-line prefer-destructuring
                    squares[history[idn].value[0]] = history[idn].value[1];
                }
    
            }
            moves = history.map((step, move1) => {
                const backgroundBtn = (move1 === stepNumber && stepNumber !== 0) ?
                    "btn-chosen" :
                    "btn-play";
                const desc = move1 ?
                     `Go to move ${  move1  } (${  Math.floor(step.value[0] / 20)  }:${  step.value[0] % 20  })` :
                    'Go to game start';
                return (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={move1}>
                        <button type='button' className={backgroundBtn} onClick={() => this.jumpTo(move1)}>{desc}</button>
                    </li>
                )
            });
        }

        const winner = calculateWinner(squares, i);
        let status;
        if (winner) {
            status = `Winner:${  winner}`;
            this.state.won = true;
        } else {
            status = `Next player:${  xIsNext ? 'X' : 'O'}`;
        }
        return (
            <div className="game">
                <div className="game-board">
                    <div className="header">CARO GAME</div>
                    <div >
                        <div className="status">{status}</div>
                        <div className="nobr">
                            <button type='button' className="re-play" onClick = {
                                () => this.setState({
                                    history: [{ value: Array(2).fill(null) }],
                                    stepNumber: 0,
                                    reversed: false,
                                    i: -1,
                                    xIsNext: true,
                                    won: false,
                                })
                            }>CHƠI LẠI</button>
                        </div>
                    </div>
                    <Board
                        winList = {winList}
                        squares = {squares}
                        // eslint-disable-next-line no-shadow
                        onClick ={(i)=>this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <span className="state">STATES:</span>
                    <Reverse className= "revese" onClick={() => this.onClickReverseParent()} />

                    <ol className="idbtn-play">{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;