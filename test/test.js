const assert = require('assert');
const Board = require("../lib/board.js");
const Disc = require("../lib/disc.js");
const Game = require("../lib/game.js");

describe('Disc', function() {
  let disc6;
  let disc1;

  beforeEach(function () {
    disc6 = new Disc(6);
    disc1 = new Disc(1);
  });

  it('is instantiated with a size from 1 to 6', function() {
    assert(assertWithinRange(1, 6, disc6.size) === true);
    assert(assertWithinRange(1, 6, disc1.size) === true);
  });

});

describe('Board', function() {
  let newBoard;

  beforeEach(function() {
    newBoard = new Board();
  });

  describe('constructor()', function() {

    it('is instantiated with three stacks', function() {
      assert(newBoard.stacks[0] !== undefined);
      assert(newBoard.stacks[1] !== undefined);
      assert(newBoard.stacks[2] !== undefined);
      assert(newBoard.stacks[3] === undefined);
    });

    it('has a stack of increasing discs on stacks[0]', function() {
      const isDisc = (item) => {
        return item instanceof Disc;
      }

      assert(assertAll(newBoard.stacks[0], isDisc) === true);
      assert(newBoard.stacks[0][0].size === 6);
      assert(newBoard.stacks[0][1].size === 5);
      assert(newBoard.stacks[0][2].size === 4);
      assert(newBoard.stacks[0][3].size === 3);
      assert(newBoard.stacks[0][4].size === 2);
      assert(newBoard.stacks[0][5].size === 1);
    });

    it('has two empty stacks on stacks[1] and stacks[2]', function() {
      const isEmpty = (item) => {
        return item === undefined;
      }
      assert(assertAll(newBoard.stacks[1], isEmpty) === true);
      assert(assertAll(newBoard.stacks[2], isEmpty) === true);
    });

  });

  describe('isValidMove()', function() {

    it('allows a disc to be moved to an empty stack', function() {
      assert(newBoard.isValidMove(1, 2) === true);
      assert(newBoard.isValidMove(1, 3) === true);
    });

    it('does not allow a disc to move from and to the same stack', function() {
      assert(newBoard.isValidMove(1, 1) === false);
    });

    it('does not allow moving from an empty stack', function() {
      assert(newBoard.isValidMove(2, 3) === false);
    });

    it('does not allow moving to or from non existent stacks', function() {
      assert(newBoard.isValidMove(2, 4) === false);
      assert(newBoard.isValidMove(4, 1) === false);
    });

    it('does not allow a larger disc to be placed on a smaller disc', function() {
      newBoard.stacks[1][0] = new Disc(1);
      newBoard.stacks[0][5] = undefined;
      assert(newBoard.isValidMove(1, 2) === false);
    });

    it('allows a smaller disc to be placed on top of a larger disc', function() {
      newBoard.stacks[2][0] = new Disc(2);
      assert(newBoard.isValidMove(1, 3) === true);
    })

  });

  describe('move()', function() {

    it('moves the disc to the correct stack', function() {
      newBoard.move(1 , 2);
      assert(newBoard.stacks[1][0] instanceof Disc);
      assert(newBoard.stacks[1][0].size === 1);
      assert(newBoard.stacks[0][5] === undefined);
      assert(newBoard.stacks[0][4] instanceof Disc);
      assert(newBoard.stacks[0][4].size === 2);
    });

    it('returns false if the move is invalid', function() {
      assert(newBoard.move(2, 3) === false);
    });

  })




  describe('promptMove()' function(){

    it('should recieve a move from the player', function() {
      assert()

    })
  })

})


//HELPERS
function assertWithinRange(min, max, actual) {
  if(actual >= min && actual <= max) {
    return true;
  } else {
    return false;
  }
}

function assertAll(arr, test) {
  const allTrue = arr.every(function(item) {
    return test(item);
  });
  if(allTrue) {
    return true;
  } else {
    return false;
  }
}

describe('Game', function() {
  let game = new Game;

  it('is initialized with a new board', function() {
    assert(game.board instanceof Board);
  })

  // describe('run()', function() {
  //   it('should stop looping when the player has won', function() {
  //     assert.equal()
  //   })
  // })
})
