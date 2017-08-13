const assert = require('assert');
const Board = require("../lib/board.js");
const Disc = require("../lib/disc.js");
const Game = require("../bin/game.js");

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
  let board = new Board();

  const isEmpty = (item) => {
    return item === undefined;
  }

  const isDisc = (item) => {
    return item instanceof Disc;
  }

  it('is instantiated with three stacks', function() {
    assert(board.stack1 !== undefined);
    assert(board.stack2 !== undefined);
    assert(board.stack3 !== undefined);
    assert(board.stack4 === undefined);
  });

  it('has a stack of increasing discs on stack1', function() {
    assert(assertAll(board.stack1, isDisc) === true);
    assert(board.stack1[0].size === 6);
    assert(board.stack1[1].size === 5);
    assert(board.stack1[2].size === 4);
    assert(board.stack1[3].size === 3);
    assert(board.stack1[4].size === 2);
    assert(board.stack1[5].size === 1);
  });

  it('has two empty stacks on stack2 and stack3', function() {
    assert(assertAll(board.stack2, isEmpty) === true);
    assert(assertAll(board.stack3, isEmpty) === true);
  })


  // describe('promptMove()' function(){
  //
  //   it('should recieve a move from the player', function() {
  //     assert()
  //
  //   })
  // })
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
