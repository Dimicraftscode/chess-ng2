import { Rook } from './Rook';
import { Color } from '../../Piece'

export class WhiteRook extends Rook{
    constructor(squareIndex: number){
        super(squareIndex);
        this.color = Color.white;
        this.icon = 'white-rook';
    }
}