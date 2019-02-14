import { Component, OnInit, Input } from '@angular/core';
import { GridBuilder } from '../builders/grid-builder';
import { PatternBuilder } from '../builders/pattern-builder';

@Component({
  selector: 'app-game-of-life',
  templateUrl: './game-of-life.component.html',
  styleUrls: ['./game-of-life.component.css']
})

export class GameOfLifeComponent {
  public aliveDataCellElements: Array<HTMLTableDataCellElement>;
  public deadDataCellElements: Array<HTMLTableDataCellElement>;
  public inLoop: boolean;

  @Input() allDataCellElements: Array<HTMLTableDataCellElement>;
  @Input() gridMatrix: number;

  public gameOfLifeSimulator() {
    this.aliveDataCellElements = [];
    this.deadDataCellElements = [];
    this.inLoop = true;

    for(let y = 0; y <this.gridMatrix; y++) {
      for(let x = 0; x <this.gridMatrix; x++) {
        this.nextGenerationSimulator(y, x)
      }
    }

    this.aliveDataCellElements.map(x => x.className ='clicked');
    this.deadDataCellElements.map(x => x.className = '');

    setTimeout(() => {
      if (this.inLoop){
        this.gameOfLifeSimulator();
      } else {
        this.inLoop = true;
      }     
    }, 100);
  }

  public nextGenerationSimulator(row: number, col: number) {
    let liveNeighbourCells = 0;

    for(let y=-1; y<2; y++) {
      if(0 <= (row + y) && (row + y) < this.gridMatrix) {
        for(let x=-1; x<2; x++) {

          if(x == 0 && y == 0) {
            continue;
          } else if(0 <= (col + x) && (col + x)< Math.sqrt(this.allDataCellElements.length)) {
            if(document.getElementById((row + y) + "," + (col + x)).className === 'clicked') {
              liveNeighbourCells++;
            }
          }
        }
      }
    }
    this.gameOfLifeRules(liveNeighbourCells, (<HTMLTableDataCellElement> document.getElementById(row + ',' + col)));
  }

  public gameOfLifeRules(neighbourCells: number, cell: HTMLTableDataCellElement) {
    let cellStatus = cell.className;

    if((cellStatus === 'clicked') && (3 < neighbourCells || neighbourCells < 2)) {
      this.deadDataCellElements.push(cell);
    } else if((cellStatus !== 'clicked' && neighbourCells === 3) || (cellStatus === 'clicked' && 2 <= neighbourCells && neighbourCells < 4)) {
      this.aliveDataCellElements.push(cell);
    }
  }

  public Pause(){
    this.inLoop = false;
  }
}
