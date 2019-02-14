import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';
import { GridMatrix } from './grid-matrix/grid-matrix.component';
import { PatternDropdown } from './pattern-dropdown/pattern-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    GameOfLifeComponent,
    PatternDropdown, 
    GridMatrix
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
