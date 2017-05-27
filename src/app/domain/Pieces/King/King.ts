import { Piece } from '../../Piece';
import { SquareVector, SquareVectorDistance } from '../../Square';

export class King extends Piece{
    distance: SquareVectorDistance = SquareVectorDistance.One

    constructor(squareIndex: number){
        super(squareIndex);
        this.legalDirections = [
            new SquareVector(-1,-1, this.distance),
            new SquareVector(-1,0, this.distance),
            new SquareVector(-1,1, this.distance),
            new SquareVector(0,-1, this.distance),
            new SquareVector(0,1, this.distance),
            new SquareVector(1, -1, this.distance),
            new SquareVector(1, 0, this.distance),
            new SquareVector(1,1, this.distance)
        ];
    }
}