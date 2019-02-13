export class GridBuilder {

    public build(metrix: number, gridElement: HTMLElement, allDataCellElements: Array<HTMLTableDataCellElement>, selectedDataCellElements: Array<HTMLTableDataCellElement>) {
        let grid: HTMLElement;
        let tableRowElement: HTMLTableRowElement;
        let tableDataElement: HTMLTableDataCellElement;

        if (gridElement == null) {
            grid = document.getElementsByTagName('app-gol')[0].appendChild(document.createElement('table'));
            grid.className = 'grid';
            grid.id = 'myGrid';

        } else {
            grid = gridElement;
        }

        for(let row = 0; row < metrix; row++) {
            tableRowElement = grid.appendChild(document.createElement('tr'));

            for(let column = 0; column < metrix; column++) {
                let tableDataElement = tableRowElement.appendChild(document.createElement('td'));
                tableDataElement.id = row + ',' + column;
                allDataCellElements.push(tableDataElement);

                tableDataElement.addEventListener('click', () => {
                    this.setCellClassName(tableDataElement, selectedDataCellElements)
                });
            }
        }
        return grid;
    }

    private setCellClassName(tableDataElement: HTMLTableDataCellElement, selectedDataCellElements: Array<HTMLTableDataCellElement>) {
        if (selectedDataCellElements.indexOf(tableDataElement) < 0){
            tableDataElement.className = 'clicked';
            selectedDataCellElements.push(tableDataElement);
        } else {
            tableDataElement.className = '';
            selectedDataCellElements.splice(selectedDataCellElements.indexOf(tableDataElement));
        }
    }
}