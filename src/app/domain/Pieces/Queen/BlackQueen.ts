import { Queen } from './Queen';
import { Color } from '../../Piece'

export class BlackQueen extends Queen{
    constructor(squareIndex: number){
        super(squareIndex);
        this.color = Color.black;
        this.icon = 'black-queen';
    }
}