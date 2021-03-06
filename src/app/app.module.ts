import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { PieceComponent } from './piece/piece.component';

@NgModule({
  declarations: [
    BoardComponent,
    SquareComponent,
    PieceComponent,
    PieceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [BoardComponent]
})
export class AppModule { }
