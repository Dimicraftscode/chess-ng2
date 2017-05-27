import { Piece } from '../../Piece';
import { SquareVector } from '../../Square';

export class King extends Piece{
    constructor(squareIndex: number){
        super(squareIndex);
        this.legalDirections = [
            new SquareVector(-1,-1),
            new SquareVector(-1,0),
            new SquareVector(-1,1),
            new SquareVector(0,-1),
            new SquareVector(0,1),
            new SquareVector(1, -1),
            new SquareVector(1, 0),
            new SquareVector(1,1)
        ];
    }
}