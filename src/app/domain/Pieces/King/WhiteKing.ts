import { King } from './King';
import { Color } from '../../Piece'

export class WhiteKing extends King{
    constructor(squareIndex: number){
        super(squareIndex);
        this.color = Color.white;
        this.icon = 'white-king';
    }
}