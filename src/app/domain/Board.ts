import { Square } from './Square';
import { Piece } from './Piece';
import { WhiteKing, BlackKing, WhiteQueen, BlackQueen, BlackBishop, WhiteBishop, WhiteKnight, BlackKnight, WhiteRook, BlackRook, WhitePawn, BlackPawn } from './pieces/PieceApi';

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
        this.pieces.push(new BlackBishop(2));
        this.pieces.push(new BlackBishop(5));
        this.pieces.push(new BlackKing(4));
        this.pieces.push(new BlackQueen(3));
        this.pieces.push(new BlackKnight(1));
        this.pieces.push(new BlackKnight(6));
        this.pieces.push(new BlackRook(0));
        this.pieces.push(new BlackRook(7));
        this.pieces.push(new BlackPawn(8));
        this.pieces.push(new BlackPawn(9));
        this.pieces.push(new BlackPawn(10));
        this.pieces.push(new BlackPawn(11));
        this.pieces.push(new BlackPawn(12));
        this.pieces.push(new BlackPawn(13));
        this.pieces.push(new BlackPawn(14));
        this.pieces.push(new BlackPawn(15));
        this.pieces.push(new WhiteKing(60));
        this.pieces.push(new WhiteQueen(59));
        this.pieces.push(new WhiteBishop(58));
        this.pieces.push(new WhiteBishop(61));
        this.pieces.push(new WhiteKnight(57));
        this.pieces.push(new WhiteKnight(62));
        this.pieces.push(new WhiteRook(56));
        this.pieces.push(new WhiteRook(63));
        this.pieces.push(new WhitePawn(55));
        this.pieces.push(new WhitePawn(54));
        this.pieces.push(new WhitePawn(53));
        this.pieces.push(new WhitePawn(52));
        this.pieces.push(new WhitePawn(51));
        this.pieces.push(new WhitePawn(50));
        this.pieces.push(new WhitePawn(49));
        this.pieces.push(new WhitePawn(48));
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