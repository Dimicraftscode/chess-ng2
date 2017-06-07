import { Bishop } from './Bishop';
import { Color } from '../../Piece'

export class WhiteBishop extends Bishop{
    constructor(squareIndex: number){
        super(squareIndex);
        this.color = Color.white;
        this.icon = 'white-bishop';
    }
}