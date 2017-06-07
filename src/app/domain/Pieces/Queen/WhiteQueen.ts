import { Queen } from './Queen';
import { Color } from '../../Piece'

export class WhiteQueen extends Queen{
    constructor(squareIndex: number){
        super(squareIndex);
        this.color = Color.white;
        this.icon = 'white-queen';
    }
}