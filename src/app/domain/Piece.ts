import { Square, SquareVector } from './square';

export class Piece{
    color: Color;
    icon: string;
    squareIndex: number;
    legalMoves: Square[];
    legalDirections: SquareVector;

    constructor(squareIndex: number){
        this.squareIndex = squareIndex;
        this.legalMoves = new Array<Square>();
    }

    showMe(){
        console.log(this.legalDirections.directions);
    }

    addLegalMoves(position: Array<Square>){
        let square = position.find(x => x.index == this.squareIndex);
        this.legalDirections.directions.forEach(direction => {
            let newSquareX = square.x + direction.x;
            let newSquareY = square.y + direction.y;

            var newSquare = position.find(sq => sq.x == newSquareX && sq.y == newSquareY);
            if (newSquare != null && (!newSquare.piece || newSquare.piece.color != this.color)){
                this.legalMoves.push(newSquare);
            }
        });
    }
}

export enum Color{
    white,
    black
}