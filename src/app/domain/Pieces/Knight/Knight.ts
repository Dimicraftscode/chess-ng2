import { Piece } from '../../Piece';
import { SquareVector, SquareVectorDistance } from '../../Square';

export class Knight extends Piece{

    constructor(squareIndex: number){
        super(squareIndex);

        this.legalDirections = new SquareVector(SquareVectorDistance.One);
        this.legalDirections.addKnight();
    }
}