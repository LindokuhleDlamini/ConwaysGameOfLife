export class GridBuilder {
    public selectedDataCellElements: Array<HTMLTableDataCellElement> = []

    public build(gridMetrix: number, allDataCellElements: Array<HTMLTableDataCellElement>) {
        let tableRowElement: HTMLTableRowElement;
        let tableDataElement: HTMLTableDataCellElement;
        let gridElement = (<HTMLElement>document.getElementById('myGrid'));

        if (gridElement == null) {
            gridElement = document.getElementById('gameOfLife').appendChild(document.createElement('table'));
            gridElement.className = 'grid';
            gridElement.id = 'myGrid';

        } else {
            gridElement.outerHTML = '';
        }

        for(let row = 0; row < gridMetrix; row++) {
            tableRowElement = gridElement.appendChild(document.createElement('tr'));

            for(let column = 0; column < gridMetrix; column++) {
                let tableDataElement = tableRowElement.appendChild(document.createElement('td'));
                tableDataElement.id = row + ',' + column;
                allDataCellElements.push(tableDataElement);

                tableDataElement.addEventListener('click', () => {
                    this.setCellClassName(tableDataElement)
                });
            }
        }
    }

    private setCellClassName(tableDataElement: HTMLTableDataCellElement) {
        let dataElementIndex = this.selectedDataCellElements.indexOf(tableDataElement);

        if (dataElementIndex < 0){
            tableDataElement.className = 'clicked';
            this.selectedDataCellElements.push(tableDataElement);
        } else {
            tableDataElement.className = '';
            this.selectedDataCellElements.splice(dataElementIndex);
        }
    }
}