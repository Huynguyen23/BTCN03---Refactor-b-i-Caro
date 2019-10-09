import React from 'react';
import Square from './Square';
import '../Game.css';

class Board extends React.Component {

    renderSquare(i) {
        const {winList, squares, onClick}= this.props;
        // eslint-disable-next-line no-console
        console.log(`winList${winList}`);
        const winColors = winList.includes(i) ? "win" : "square";
        // eslint-disable-next-line no-console
        console.log(winColors);
        return (
            <Square winColor ={winColors}
                    value={squares[i]}
                onClick={()=> onClick(i)}/>
        )
    }

    render(){
        const table = [];
        for (let i = 0; i < 20; i+=1) {
            const tmp = [];
            for (let j = 0; j < 20; j+=1) {
                tmp.push(this.renderSquare(i * 20 + j));
            }

            table.push(
                <div key={i} className="board-row">
                    {tmp}
                </div>
            );
        }
        return (
            <div className="board">
                <div className="container">
                    {table}
                </div>
            </div>
        );
    }
}
export default Board;