const readline = require("readline");
const Disc = require("./disc.js");
const Board = require("./board.js");


let reader;

class Game {
  constructor() {
    this.board = new Board;
  }

  play() {
    reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });

    this.run(function () {
      reader.close();
      reader = null;
    });
  }

  run(gameEndCallBack) {
    if(this.board.isWon()) {
      this.board.print();
      console.log("You won!");
      gameEndCallBack()
    } else {
      this.promptMove(this.run.bind(this, gameEndCallBack));
    }
  }

  promptMove(callback) {
    this.board.print();
    const gameNow = this;

    reader.question('Select a stack to pick from', (answer1) => {
      const start = Number(answer1[0]) || 0;
      const end = Number(answer1[1]) || 0;

      if(!this.board.isValidMove(start, end)) {
        this.promptMove(callback);
        return;
      }

      this.board.move(start, end);
      callback();
    });

  };

}

module.exports = Game;
