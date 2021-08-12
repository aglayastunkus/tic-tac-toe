class TicTacToe {
    constructor() {
        this.field = [[null, null, null],
                      [null, null, null],
                      [null, null, null]];
        this.currentSymbol = 'x';
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] !== null) return;
        this.field[rowIndex][columnIndex] = this.currentSymbol;
        this.currentSymbol === 'x' ? this.currentSymbol = 'o' : this.currentSymbol = 'x'
    }

    isFinished() {
        return !!(this.isDraw() || this.getWinner())
    }

    getWinner() {

        if ((this.field[0][0]) && (this.field[0][0] === this.field[1][1]) && (this.field[0][0] === this.field[2][2]) ||
            (this.field[0][0]) && (this.field[0][0] === this.field[0][1]) && (this.field[0][0] === this.field[0][2]) ||
            (this.field[0][0]) && (this.field[0][0] === this.field[1][0]) && (this.field[0][0] === this.field[2][0])) {
            this.winner = this.field[0][0];
        }
        if ((this.field[0][2]) && (this.field[0][2] === this.field[1][1]) && (this.field[0][2] === this.field[2][0]) ||
            (this.field[0][2]) && (this.field[0][2] === this.field[1][2]) && (this.field[0][2] === this.field[2][2])) {
            this.winner = this.field[0][2];
        }
        if ((this.field[1][0]) && (this.field[1][0] === this.field[1][1]) && (this.field[1][0] === this.field[1][2])) {
            this.winner = this.field[1][0];
        }
        if ((this.field[2][0]) && (this.field[2][0] === this.field[2][1]) && (this.field[2][0] === this.field[2][2])) {
            this.winner = this.field[2][0];
        }
        if ((this.field[0][1]) && (this.field[0][1] === this.field[1][1]) && (this.field[0][1] === this.field[2][1])) {
            this.winner = this.field[0][1];
        }
        return this.winner;
    }

    noMoreTurns() {
        return !this.field.some(item => item.some(item => item === null))
    }

    isDraw() {
        return !!(this.noMoreTurns() && !this.getWinner());
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex]
    }
}

let game = new TicTacToe();
console.log(game.getCurrentPlayerSymbol());
game.nextTurn(0, 1);
console.log(game.getCurrentPlayerSymbol());
game.nextTurn(1, 2);
console.log(game.getCurrentPlayerSymbol());

module.exports = TicTacToe;
