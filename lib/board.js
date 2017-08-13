const Disc = require("./disc.js");

class Board {
  constructor() {
    this.stack1 = [
      new Disc(6),
      new Disc(5),
      new Disc(4),
      new Disc(3),
      new Disc(2),
      new Disc(1)
    ];
    this.stack2 = Array(6);
    this.stack3 = Array(6);
  }

  promptMove() {
    /*
    print the board
    ask for move (1, 3)
    make the move

    callback(start, end);
    */

  }

  printBoard() {
    /*
    prints the board to the terminal
    */
  }

}

module.exports = Board;
