import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GridBuilder } from '../builders/grid-builder';

@Component({
    selector: 'app-grid-matrix',
    templateUrl: './grid-matrix.component.html',
    styleUrls: ['./grid-matrix.component.css']
  })

export class GridMatrix implements OnInit {
  public allDataCellElements: Array<HTMLTableDataCellElement>;
  public gridBuilder: GridBuilder;
  public gridMatrix: number;

  @Output() 
  public gridChanges: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
      this.allDataCellElements = [];
      this.gridBuilder = new GridBuilder();
      this.gridMatrix = 20;

      this.setGridMatrix();
  }

  public setGridMatrix() {
    let inputElement = (<HTMLInputElement>document.getElementById('grid'));
    let inputValue = inputElement.value;
    this.gridMatrix = inputValue != '' ? parseInt(inputValue): 20;

    this.gridBuilder.build(this.gridMatrix, this.allDataCellElements);
    this.gridChanges.emit({gridMatrix: this.gridMatrix, allDataCellElements: this.allDataCellElements});
  }
}