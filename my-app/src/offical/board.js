import React, {Component} from 'react'
import Square from './square'
class Board extends Component {
    renderSquare(i) {
        return  <Square value={i}></Square>
    }
    render() {
        const status = 'New Player'
        return (
            <section>
            <div>{status}</div>
            <div className='border-row'>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className='border-row'>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className='border-row'>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            </section>
        )
    }
}
export default Board