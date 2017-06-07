import { Piece } from './Piece';

export class Square {
  name: string;
  piece: Piece;
  x: number;
  y: number;

  constructor(public index: number) {
    this.x = (index) % 8;;
    this.y = (8 - (Math.floor((index + 1) / 8)));
    this.name = this.getLineFromNumber(this.x) + (this.y);
  }

  getLineFromNumber(i: number) {
    var lines = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    return i < 8 ? lines[i] : null;
  }

  addPiece(piece: Piece) {
    this.piece = piece;
  }

  findByXAndY(position: Array<Square>, x: number, y: number): Square {
    return position.find(sq => sq.x == x && sq.y == y);
  }

  findByIndex(position: Array<Square>, i: number){
    return position.find(sq => sq.index == i);
  }
}

export class SquareVector {
  directions: Array<Direction>;
  constructor(public vectorDistance: SquareVectorDistance) {
    this.directions = new Array<Direction>();
  }

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

export class Direction {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export enum SquareVectorDistance {
  One,
  Max,
  OneOrTwo
}