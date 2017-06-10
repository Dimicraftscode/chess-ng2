import { Piece } from '../../Piece';
import { SquareVector, SquareVectorDistance } from '../../Square';

export class Rook extends Piece{

    constructor(squareIndex: number){
        super(squareIndex);

        this.legalDirections = new SquareVector(SquareVectorDistance.Max);
        this.legalDirections.addLinesAndRows();
    }
}