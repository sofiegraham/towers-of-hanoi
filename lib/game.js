const Disc = require("./disc.js");
const Board = require("./board.js");

class Game {
  constructor() {
    this.board = new Board;
  }




  run() {
    this.board.print()
    /*
    until a stack has been completed
    asks player which stack to take from
    asks player where to put it
    places new stack

    */
  }


}

module.exports = Game;
