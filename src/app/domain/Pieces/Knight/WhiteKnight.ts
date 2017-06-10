import { Knight } from './Knight';
import { Color } from '../../Piece'

export class WhiteKnight extends Knight{
    constructor(squareIndex: number){
        super(squareIndex);
        this.color = Color.white;
        this.icon = 'white-knight';
    }
}