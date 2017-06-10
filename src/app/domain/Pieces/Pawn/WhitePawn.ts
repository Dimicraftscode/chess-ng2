import { Color, Piece } from '../../Piece';
import { SquareVector, SquareVectorDistance } from '../../Square';

export class WhitePawn extends Piece{

    constructor(squareIndex: number){
        super(squareIndex);

        this.color = Color.white;
        this.icon = 'white-pawn';

        this.legalDirections = new SquareVector(SquareVectorDistance.Pawn);
        this.legalDirections.addWhitePawn();
    }
}