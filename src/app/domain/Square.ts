import { Piece } from './Piece';

export class Square{
  index: number;
  name: string;
  piece: Piece;

  constructor(i: number){
    this.index = i;
    this.name = this.getLineFromNumber((i) % 8) + (8 - (Math.floor((i+1)/8)));
  }

  getLineFromNumber(i: number){
    var lines = ['a','b','c','d','e','f','g','h']
    return i < 8 ? lines[i] : null;
  }
}