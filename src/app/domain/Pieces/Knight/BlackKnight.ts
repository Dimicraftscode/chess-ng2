import { Knight } from './Knight';
import { Color } from '../../Piece'

export class BlackKnight extends Knight{

    constructor(squareIndex: number){
        super(squareIndex);
        this.color = Color.black;
        this.icon = 'black-knight';
    }
}