import { Square, SquareVector, SquareVectorDistance, Direction } from './Square';

export class Piece {
    color: Color;
    icon: string;
    squareIndex: number;
    legalMoves: Square[];
    legalDirections: SquareVector;

    constructor(squareIndex: number) {
        this.squareIndex = squareIndex;
        this.legalMoves = new Array<Square>();
    }

    showMe() {
        console.log(this.legalMoves);
    }

    addLegalMoves(position: Array<Square>) {
        let square = position.find(x => x.index == this.squareIndex);
        this.legalDirections.directions.forEach(direction => {
            switch (this.legalDirections.vectorDistance) {
                case SquareVectorDistance.One:
                    this.addLegalMovesOneSquare(position, square, direction);
                    break;
                case SquareVectorDistance.Max:
                    this.addLegalMovesMaxSquares(position, square, direction);
                    break
                    case SquareVectorDistance.Pawn:
                    this.addLegalMovesPawn(position, square, direction);
                    break;
                default:
                // get other exception
                    throw new DOMException();
            }


        });
    }

    addLegalMovesPawn(position: Array<Square>, square: Square, direction: Direction){
        var newSquare = this.findSquareByDirection(position, square, direction);
        if (newSquare != null && (!newSquare.piece)) {
            this.legalMoves.push(newSquare);

            if ((square.y == 2 && square.piece.color == Color.white)||
                (square.y == 7 && square.piece.color == Color.black)){
                var extraSquare = this.findSquareByDirection(position, newSquare, direction);
                if (extraSquare != null && (!extraSquare.piece)){
                    this.legalMoves.push(extraSquare);
                }
            }
        }

        let captureDirectionLeft = new Direction(-1, direction.y);
        let captureLeft = this.findSquareByDirection(position, square, captureDirectionLeft);
        if (captureLeft != null && captureLeft.piece && captureLeft.piece.color != square.piece.color){
            this.legalMoves.push(captureLeft);
        }

        let captureDirectionRight = new Direction(1, direction.y);
        let captureRight = this.findSquareByDirection(position, square, captureDirectionRight);
        if (captureRight != null && captureRight.piece && captureRight.piece.color != square.piece.color){
            this.legalMoves.push(captureRight);
        }
    }

    addLegalMovesOneSquare(position: Array<Square>, square: Square, direction: Direction) {
        var newSquare = this.findSquareByDirection(position, square, direction);
        if (newSquare != null && (!newSquare.piece || newSquare.piece.color != this.color)) {
            this.legalMoves.push(newSquare);
        }
    }

    addLegalMovesMaxSquares(position: Array<Square>, square: Square, direction: Direction) {
        let run: boolean = true;
        let compareSquare: Square = Object.assign({}, square);
        while (run) {
            var newSquare = this.findSquareByDirection(position, compareSquare, direction);
            if (newSquare != null && (!newSquare.piece || newSquare.piece.color != this.color)) {
                this.legalMoves.push(newSquare);                
            }

            //in if?
            compareSquare = newSquare;

            //if newSquare is off the board or has piece, stop looping
            if (newSquare == null || newSquare.piece) {
                run = false;
            }
        }
    }

    findSquareByDirection(position: Array<Square>, square: Square, direction: Direction): Square {
        let newSquareX = square.x + direction.x;
        let newSquareY = square.y + direction.y;

        return position.find(sq => sq.x == newSquareX && sq.y == newSquareY);
    }
}

export enum Color {
    white,
    black
}