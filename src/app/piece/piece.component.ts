import { Component, Input } from '@angular/core';
import { Piece } from '../domain/Piece' 

@Component({
  selector: 'piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent {
  @Input() piece: Piece;
}
