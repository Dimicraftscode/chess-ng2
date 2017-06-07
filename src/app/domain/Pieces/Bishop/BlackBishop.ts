import { Bishop } from './Bishop';
import { Color } from '../../Piece'

export class BlackBishop extends Bishop{
    constructor(squareIndex: number){
        super(squareIndex);
        this.color = Color.black;
        this.icon = 'black-bishop';
    }
}