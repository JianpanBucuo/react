import React, { Component, Fragment } from 'react'
import Square from './Square'
import './style.css'
class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }
    requireSquare (i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)} />
    }
    handleClick (i) {

        const squares = this.state.squares.slice()
        if (calculateWinner(squares)) {
            return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        })
    }

    render () {
        const winner = calculateWinner(this.state.squares)
        console.log(winner)
        let status;
        if (winner) {
            status = 'winner is' + winner
        } else {
            status = `Next Player ${this.state.xIsNext ? 'X' : 'O'}`
        }
        return (
            <Fragment>
                <header>
                    <h3>{status}</h3>
                </header>
                <section>
                    <div className="board-row">
                        {this.requireSquare(0)}{this.requireSquare(1)}{this.requireSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.requireSquare(3)}{this.requireSquare(4)}{this.requireSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.requireSquare(6)}{this.requireSquare(7)}{this.requireSquare(8)}
                    </div>
                </section>
            </Fragment  >
        )
    }

}

export default Board


function calculateWinner (squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}