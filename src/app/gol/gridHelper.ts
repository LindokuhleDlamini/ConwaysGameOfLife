export class GridHelper{

    public GridCreator(rows: number, columns: number, gridElement:any, allCells:any[], clickedItems:any[]){
        var item= 0;
        var grid:any;

        if(gridElement == null){
            grid= document.getElementsByTagName('app-gol')[0].appendChild(document.createElement('table'));//document.createElement('table');
            grid.className = 'grid';
            grid.id = 'myGrid';
        } else{
            grid= document.getElementById('myGrid');
        }

        for(var row=0; row<rows;row++){
            var tr= grid.appendChild(document.createElement('tr'));
            for(var col=0; col<columns; col++){
                var cell= tr.appendChild(document.createElement('td'));
                cell.id=row+','+col;
                allCells.push(cell);
                cell.addEventListener('click', (function(element, row, cell, item){
                    return function(){
                        if(clickedItems.indexOf(element) < 0){
                            element.className= 'clicked';
                            clickedItems.push(element);
                        } else{
                            element.className='';
                            clickedItems.splice(clickedItems.indexOf(element));
                        }
                }})(cell, row, col, item))
            }
        }
        return grid;
    }
}