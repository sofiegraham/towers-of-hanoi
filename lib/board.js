const Disc = require("./disc.js");

class Board {
  constructor() {
    this.stacks = [];
    this.stacks[0] = [
      new Disc(6),
      new Disc(5),
      new Disc(4),
      new Disc(3),
      new Disc(2),
      new Disc(1)
    ];
    this.stacks[1] = Array(6).fill(undefined);
    this.stacks[2] = Array(6).fill(undefined);
  }

  promptMove(callback) {
    /*
    print the board
    ask for move (1, 3)
    make the move

    callback(start, end);
    */
    print();

  }

  isValidMove(start, end) {
    /*
    finds the top item on the start stack
    //checks if it is a discs
    //if YES

    finds the top item on the endstack
    if it is empty retun TRUE
    if it is a disc
    ///is the disc on the end stack larger than the disc from the startstack?
    if YES return TRUE
    else return false
    */
    if(start > 1 || start > 3 || end < 1 || end > 3) return false;

    const startStack = this.stacks[start - 1];
    const endStack = this.stacks[end - 1];

    const startIdx = this.getTopOfStackIndex(startStack)
    const endIdx = this.getTopOfStackIndex(endStack)

    if(startStack[startIdx] instanceof Disc) {
      if(endStack[endIdx] instanceof Disc) {
        return startStack[startIdx].size < endStack[endIdx].size;
      } else {
        return true;
      }
    } else {
      return false;
    }

  }

  getTopOfStackIndex(stack) {
    return stack.reduce(function(acc, el, idx) {
      return el instanceof Disc ? idx : acc;
    },0);
  };

  move(start, end) {
    if(this.isValidMove(start, end)) {
      /*
      replace top of end stack with the start disc
      remove start disc from stack
      return true
      */
      const startStack = this.stacks[start - 1];
      const endStack = this.stacks[end - 1];

      const startIdx = this.getTopOfStackIndex(startStack);
      const endIdx = this.getTopOfStackIndex(endStack);

      const movingDisc = startStack[startIdx]

      if(endStack[endIdx] instanceof Disc) {
        endStack[endIdx + 1] = movingDisc;
      } else {
        endStack[endIdx] = movingDisc;
      }
      startStack[startIdx] = undefined;
      return true;
    }
    return false;
  }



  print() {
    /*
    prints the board to the terminal
    */
    const printable = this.stacks.map(function(arr) {
      return arr.map(function(el) {
        return el === undefined ? "______" : el;
      }).join(" ");
    }).join("\n");

    console.log(printable);
  }

}

module.exports = Board;
