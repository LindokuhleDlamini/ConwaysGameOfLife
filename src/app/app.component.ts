import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public allDataCellElements: Array<HTMLTableDataCellElement>;
  public gridMatrix: number;

  public gridChanges(obj: any) {
    this.allDataCellElements = obj.allDataCellElements;
    this.gridMatrix = obj.gridMatrix;
  }
}
