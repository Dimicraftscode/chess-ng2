import { Piece } from '../../Piece';
import { SquareVector, SquareVectorDistance } from '../../Square';

export class King extends Piece{

    constructor(squareIndex: number){
        super(squareIndex);
        this.legalDirections = new SquareVector(SquareVectorDistance.One);
        this.legalDirections.addLinesAndRows();
        this.legalDirections.addDiagonals();
}