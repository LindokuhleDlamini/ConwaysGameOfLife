import { Component, OnInit } from '@angular/core';
import { GridBuilder } from '../builders/grid-builder';
import { PatternBuilder } from '../builders/pattern-builder';

@Component({
  selector: 'app-gol',
  templateUrl: './game-of-life.component.html',
  styleUrls: ['./game-of-life.component.css']
})

export class GameOfLifeComponent implements OnInit {

  public allDataCellElements: Array<HTMLTableDataCellElement> = [];
  public aliveDataCellElements: Array<HTMLTableDataCellElement> = [];
  public deadDataCellElement: Array<HTMLTableDataCellElement> = [];
  public gridBuilder: GridBuilder;
  public gridElement: HTMLElement;
  public gridMatrix:number;
  public inLoop: boolean;
  public patternBuilder: PatternBuilder;
  public selectedDataCellElements: Array<HTMLTableDataCellElement> = [];

  ngOnInit() {
    this.gridBuilder = new GridBuilder();
    this.patternBuilder = new PatternBuilder();
    this.inLoop = false;
    this.gridMatrix = 20;
    this.gridElement = document.getElementById('myGrid');

    document.getElementsByTagName('app-gol')[0].appendChild(
      this.gridBuilder.build(this.gridMatrix,
        this.gridElement,
        this.allDataCellElements,
        this.selectedDataCellElements));
  }

  public setGridMetrix() {
    let inputElement = (<HTMLInputElement>document.getElementById('grid'))
    let inputValue = inputElement.value
    this.gridElement.outerHTML = '';
    this.allDataCellElements = [];
    this.selectedDataCellElements = [];
    this.gridMatrix = inputValue != '' ? parseInt(inputValue): 20;

    this.gridBuilder.build(this.gridMatrix,
      this.gridElement,
      this.allDataCellElements,
      this.selectedDataCellElements);

    (<HTMLInputElement>this.gridElement).value = '';
  }

  public patternCreator(pattern: string){
    this.patternBuilder.build(pattern);
  }

  public gameOfLifeSimulator() {
    this.aliveDataCellElements = [];
    this.deadDataCellElement = [];
    this.inLoop = true;

    for(let y = 0; y <this.gridMatrix; y++) {
      for(let x = 0; x <this.gridMatrix; x++) {
        this.nextGenerationSimulator(y, x)
      }
    }

    this.aliveDataCellElements.map(x => x.className ='clicked');
    this.deadDataCellElement.map(x => x.className = '');

    setTimeout(() => {
      if (this.inLoop){
        this.gameOfLifeSimulator();
      } else{
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

    if((cellStatus === 'clicked') && (3 < neighbourCells || neighbourCells< 2)) {
      this.deadDataCellElement.push(cell);
    } else if((cellStatus !== 'clicked' && neighbourCells === 3) || (cellStatus === 'clicked' && 2 <= neighbourCells && neighbourCells < 4)){
      this.aliveDataCellElements.push(cell);
    }
  }

  public Pause(){
    this.inLoop = false;
  }
}
