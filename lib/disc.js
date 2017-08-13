class Disc {
  constructor(size) {
    this.size = size
  }

  toString() {
    return `( ${'*'.repeat(this.size)} )`;
  }
}

module.exports = Disc;
