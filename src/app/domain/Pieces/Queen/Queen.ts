import { Piece } from '../../Piece';
import { SquareVector, SquareVectorDistance } from '../../Square';

export class Queen extends Piece{

    constructor(squareIndex: number){
        super(squareIndex);

        this.legalDirections = new SquareVector(SquareVectorDistance.Max);
        this.legalDirections.addLinesAndRows();
        this.legalDirections.addDiagonals();
    }
}