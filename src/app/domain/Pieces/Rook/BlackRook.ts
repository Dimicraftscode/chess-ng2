import { Rook } from './Rook';
import { Color } from '../../Piece'

export class BlackRook extends Rook{

    constructor(squareIndex: number){
        super(squareIndex);
        this.color = Color.black;
        this.icon = 'black-rook';
    }
}