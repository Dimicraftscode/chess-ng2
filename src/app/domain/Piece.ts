import { Square, SquareVector } from './square';

export class Piece{
    color: Color;
    icon: string;
    squareIndex: number;
    legalMoves: Square[];
    legalDirections: SquareVector[];

    constructor(squareIndex: number){
        this.squareIndex = squareIndex;
    }
}

export enum Color{
    white,
    black
}