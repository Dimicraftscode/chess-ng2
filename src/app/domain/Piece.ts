export class Piece{
    color: Color;
    icon: string;
    squareIndex: number;

    constructor(squareIndex: number){
        this.icon = 'paard';
        this.color = Color.white;
        this.squareIndex = squareIndex;
    }
}

enum Color{
    white,
    black
}