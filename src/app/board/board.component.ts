import { Component, OnInit } from '@angular/core';
import { Square } from '../domain/Square';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  title = 'this is my awesome chess board';
  items = [];
  constructor() { 
    for (let i = 0; i < 64; i++){
      this.items.push(new Square(i));
    }
  }

  ngOnInit() {
    
  }
}


