import { Component, OnInit } from '@angular/core';
import { GridHelper } from './gridHelper';
import { ShapeCreator } from './ShapeCreator';

@Component({
  selector: 'app-gol',
  templateUrl: './gol.component.html',
  styleUrls: ['./gol.component.css']
})
export class GOLComponent implements OnInit {

  public clickedItems: any[] = [];
  public allCells:any[] = [];
  public gridHelper= new GridHelper();
  public shapeCreator= new ShapeCreator();
  public gridElement= document.getElementById('myGrid');
  public inLoop=true;
  public gridmatrix=20;


  constructor() { }

  ngOnInit() {
    document.getElementsByTagName('app-gol')[0].appendChild(this.gridHelper.GridCreator(this.gridmatrix,this.gridmatrix,this.gridElement,this.allCells,this.clickedItems));
  }

  public handleClick(){
    if((<HTMLInputElement>document.getElementById('grid')).value==''){
      this.gridmatrix=20;
    } else{
      this.gridmatrix= parseInt((<HTMLInputElement>document.getElementById('grid')).value)
    }
    document.getElementById('myGrid').outerHTML='';
    this.allCells=[];
    this.clickedItems=[];
    this.gridHelper.GridCreator(this.gridmatrix,this.gridmatrix,this.gridElement,this.allCells, this.clickedItems);
    (<HTMLInputElement>document.getElementById('grid')).value='';
  }

  public MakeShape(shape:string){
    this.shapeCreator.CreateShape(shape);
  }

  public NextGeneration(){
    var click: any[] = [];
    var unclick: any[] =[];

    var rows= Math.sqrt(this.allCells.length);

    for(var y=0;y<rows;y++){
      for(var x=0; x<rows;x++){
        this.AliveNeighbours(y, x, click, unclick)
      }
    }
    click.map(x => x.className='clicked');
    unclick.map(x => x.className='');
    setTimeout(() => {
      if(this.inLoop){
        this.NextGeneration();
      } else{
        this.inLoop=true;
      }     
    }, 100);
  }

  public AliveNeighbours(row:number, col:number, clickItem:any[], unclickItem:any[]){
    var liveNeighbourCells=0;
    var cellPosition=row+','+col;
    var cell=document.getElementById(cellPosition);
    var NewCellPosition='';

    for(var y=-1;y<2;y++){
      if(0 <=(row+y) && (row+y)< Math.sqrt(this.allCells.length)){
        for(var x=-1; x<2;x++){
          NewCellPosition=(row+y)+","+(col+x)
          var NewCell= document.getElementById(NewCellPosition);

          if((col+x)== col && (row+y)==row){
            continue
          }else if(0 <= (col+x) && (col+x)< Math.sqrt(this.allCells.length)){
            if(NewCell.className === 'clicked'){
              liveNeighbourCells++;
            }
          }
        }
      }
    }
    this.LifeRules(liveNeighbourCells, cell, clickItem, unclickItem);
  }

  public LifeRules(neighbourCells:number, cell:any, click:any[], unclick:any[]){
    if((cell.className==='clicked') && (3 < neighbourCells || neighbourCells< 2)){
      unclick.push(cell);
    } else if((cell.className !=='clicked' && neighbourCells ===3) || (cell.className==='clicked' && 2 <= neighbourCells && neighbourCells < 4)){
      click.push(cell);
    }
  }

  public Pause(){
    this.inLoop=false;
  }

}
