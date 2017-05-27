import { King } from './King';
import { Color } from '../../Piece'

export class BlackKing extends King{
    constructor(squareIndex: number){
        super(squareIndex);
        this.color = Color.black;
        this.icon = 'k';
    }
}