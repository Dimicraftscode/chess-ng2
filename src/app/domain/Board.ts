import { Square } from './Square';
import { Piece } from './Piece';
import { WhiteKing } from './pieces/king/whiteking';
import { BlackKing } from './pieces/king/blackking';

export class Board {
    squares: Square[];
    pieces: Piece[];

    constructor() {
        this.squares = new Array<Square>();
        this.pieces = new Array<Piece>();
        for (let i = 0; i < 64; i++) {
            this.squares.push(new Square(i));
        }
        this.SetUpNewGame();
        this.RenderPieces();
        this.AddLegalSquaresToPieces();
    }

    SetUpNewGame(){
        this.pieces.push(new BlackKing(4));
        this.pieces.push(new BlackKing(3));
        this.pieces.push(new WhiteKing(60));
    }

    RenderPieces(){
        this.squares.forEach(sq => {
            sq.piece = this.pieces.find(p => p.squareIndex == sq.index);
        });
    }

    AddLegalSquaresToPieces(){
        this.pieces.forEach(piece => {
            piece.addLegalMoves(this.squares);
        });
    }
}