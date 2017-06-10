import { Color, Piece } from '../../Piece';
import { SquareVector, SquareVectorDistance } from '../../Square';

export class BlackPawn extends Piece{

    constructor(squareIndex: number){
        super(squareIndex);

        this.color = Color.black;
        this.icon = 'black-pawn';

        this.legalDirections = new SquareVector(SquareVectorDistance.Pawn);
        this.legalDirections.addBlackPawn();
    }
}