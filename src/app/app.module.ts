import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';
import { GridMatrixComponent } from './grid-matrix/grid-matrix.component';
import { PatternDropdownComponent } from './pattern-dropdown/pattern-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    GameOfLifeComponent,
    PatternDropdownComponent,
    GridMatrixComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
