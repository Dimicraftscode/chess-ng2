import { Piece } from './Piece';

export class Square {
  index: number;
  name: string;
  piece: Piece;

  constructor(i: number) {
    this.index = i;
    this.name = this.getLineFromNumber((i) % 8) + (8 - (Math.floor((i + 1) / 8)));
  }

  getLineFromNumber(i: number) {
    var lines = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    return i < 8 ? lines[i] : null;
  }

  addPiece(piece: Piece) {
    this.piece = piece;
  }

  
}

export class SquareVector {
  directions: Array<Direction>;
  constructor(private vectorDistance: SquareVectorDistance) { }

  getNewSquare(square: Square) {
    return Square;
  }

  addDiagonals() {
    this.directions.push(new Direction(-1, -1));
    this.directions.push(new Direction(-1, 1));
    this.directions.push(new Direction(1, -1));
    this.directions.push(new Direction(1, 1));
  }

  addLinesAndRows() {
    this.directions.push(new Direction(-1, 0));
    this.directions.push(new Direction(0, -1));
    this.directions.push(new Direction(0, 1));
    this.directions.push(new Direction(1, 0));
  }

  addWhitePawn() {
    this.directions.push(new Direction(-1, 0));
  }

  addBlackPawn() {
    this.directions.push(new Direction(1, 0));
  }

  addKnight() {
    this.directions.push(new Direction(-2, -1));
    this.directions.push(new Direction(-2, 1));
    this.directions.push(new Direction(-1, -2));
    this.directions.push(new Direction(-1, 2));
    this.directions.push(new Direction(1, -2));
    this.directions.push(new Direction(1, 2));
    this.directions.push(new Direction(2, -1));
    this.directions.push(new Direction(2, 1));
  }
}

class Direction {
  constructor(private x: number, private y: number) {

  }
}

export enum SquareVectorDistance {
  One,
  Max,
  OneOrTwo
}