import { Component, OnInit } from '@angular/core';
import { Square } from '../domain/Square';
import { Board } from '../domain/Board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  title = 'this is my awesome chess board';
  board: Board;
  constructor() { 
    this.board = new Board();
  }
}


