import { Component, OnInit, Input } from '@angular/core';
import { Square } from '../domain/Square';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() square: Square;
  constructor() {
    console.log(this.square);

   }

  ngOnInit() {
  }

}
